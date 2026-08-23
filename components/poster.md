# 海报生成 DdPoster

> 海报生成组件：传入一份 JSON 配置（容器样式 + 元素列表），在离屏 canvas 上绘制文本/图片/二维码/矩形并导出图片，用于邀请函、分享海报等场景。

## 介绍

DdPoster 采用 JSON 驱动绘制：`json.css` 定义海报尺寸与背景（支持纯色与 linear-gradient / radial-gradient 渐变），`json.views` 为元素数组，每个元素由 `type`（`text` / `image` / `qrcode` / `view`）+ `css`（left/top/width/height 等，支持 rpx 自动换算 px）描述。二维码元素由内部 `dd-qrcode` 离屏生成后绘制。通过 `ref` 调用 `exportImage()` 得到 `{ width, height, path, blob }`，直接交给 `uni.saveImageToPhotosAlbum` 保存或展示分享。

## 代码演示

### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <view>
    <dd-button type="primary" @click="makePoster">生成邀请海报</dd-button>
    <dd-poster ref="posterRef" :json="posterJson" />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const posterRef = ref()

const posterJson = {
  css: {
    width: '600rpx',
    height: '900rpx',
    background: 'linear-gradient(180deg, #1a1a1a, #0A0A0A)',
  },
  views: [
    { type: 'text', text: '帝到KTV 开业盛典', css: { top: '60rpx', left: '60rpx', color: '#F5A623', fontSize: '40rpx', fontWeight: 'bold' } },
    { type: 'image', src: 'https://img.didaoktv.com/party/cover.jpg', css: { top: '160rpx', left: '60rpx', width: '480rpx', height: '360rpx', radius: '16rpx' } },
    { type: 'qrcode', src: 'https://m.didaoktv.com/invite/1288', css: { top: '640rpx', left: '210rpx', width: '180rpx', height: '180rpx' } },
  ],
}

async function makePoster() {
  const res = await posterRef.value.exportImage()
  uni.previewImage({ urls: [res.path] })
}
</script>
```

</DemoBlock>
:::

### 文本换行与圆角矩形

`lineClamp` 限制行数自动换行；`view` 类型绘制圆角色块做装饰。

:::demo
<DemoBlock>

```vue
<template>
  <dd-poster ref="posterRef" :json="json" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const posterRef = ref()
const json = {
  css: { width: '600rpx', height: '400rpx', background: '#171717' },
  views: [
    { type: 'view', css: { top: '40rpx', left: '40rpx', width: '520rpx', height: '120rpx', background: 'linear-gradient(90deg, #F5A623, #FFD700)', radius: '60rpx' } },
    { type: 'text', text: '长文本自动换行并在两行后截断省略，适合活动简介文案展示场景。', css: { top: '200rpx', left: '40rpx', width: '520rpx', color: '#ffffff', fontSize: '28rpx', lineClamp: 2 } },
  ],
}
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| json | 海报配置：`css` 容器样式（width / height / background），`views` 元素列表 | `object` | `{}` |

### json.views 元素

| type | 说明 | 关键字段 |
|------|------|----------|
| `text` | 文本 | `text`、`css`: color / fontSize / fontWeight / left / top / width / lineClamp |
| `image` | 图片（支持圆角裁剪） | `src`、`css`: left / top / width / height / radius |
| `qrcode` | 二维码（内部 dd-qrcode 生成） | `src`（二维码内容）、`css`: left / top / width / height |
| `view` | 矩形色块（支持渐变与圆角） | `css`: background / radius / left / top / width / height |

> 所有 `css` 尺寸支持 rpx（按 750 设计稿自动换算 px）与 px。

### Methods

通过 `ref` 调用：

| 方法名 | 说明 | 返回 |
|--------|------|------|
| exportImage | 按 json 配置绘制并导出海报 | `Promise<{ width, height, path, blob }>` |

## 设计规范

::: tip 最佳实践
- 设计稿按 750rpx 宽出图，`json.css` 尺寸与元素坐标直接抄设计稿标注。
- 推广海报固定"主图 + 标题 + 二维码"三段式，二维码不小于 180rpx 保证可扫。
- 导出后先 `uni.previewImage` 让用户确认再引导保存相册。
:::

::: warning 注意事项
- `exportImage` 有 20 秒超时保护，图片资源过多/过大时会超时报错。
- 小程序端绘制网络图片需先配置 downloadFile 合法域名。
- 组件不渲染可见画布，页面上不占位；同一页面多个海报请串行导出。
:::
