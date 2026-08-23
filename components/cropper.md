# 图片裁剪 DdCropper

> 图片裁剪组件：点击插槽区域选图后进入全屏裁剪界面，支持拖拽移动、双指缩放旋转、固定裁剪框尺寸，确认后导出指定尺寸的 PNG。

## 介绍

DdCropper 用于头像上传前的裁剪等场景。未打开时显示默认插槽（点击触发 `uni.chooseImage`）；选图后进入全屏三 canvas 裁剪界面（图像层 / 操作层 / 预览层），提供"重选 / 关闭 / 旋转 / 预览 / 确认"操作条。`areaWidth` / `areaHeight` 固定裁剪框尺寸（如 1:1 头像），`exportWidth` / `exportHeight` 控制导出图片尺寸，`quality` 为导出质量（0-1）。

## 代码演示

### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <view>
    <dd-cropper
      area-width="300rpx"
      area-height="300rpx"
      export-width="260rpx"
      export-height="260rpx"
      @confirm="onConfirm"
    >
      <dd-button type="primary">选择图片并裁剪</dd-button>
    </dd-cropper>
  </view>
</template>

<script setup lang="ts">
function onConfirm({ path }: any) {
  console.log('裁剪结果图片', path)
  // 上传 path ...
}
</script>
```

</DemoBlock>
:::

### 禁用缩放旋转 + 自定义质量

`can-scale` / `can-rotate` 关闭手势；`quality` 控制导出压缩质量。

:::demo
<DemoBlock>

```vue
<template>
  <dd-cropper
    :can-scale="false"
    :can-rotate="false"
    :quality="0.8"
    area-width="400rpx"
    area-height="300rpx"
    export-width="400rpx"
    export-height="300rpx"
    fill-color="#ffffff"
    @confirm="onConfirm"
    @cancel="onCancel"
  >
    <dd-cell title="上传房相" value="点击选图" isLink />
  </dd-cropper>
</template>

<script setup lang="ts">
function onConfirm({ path }: any) {
  uni.previewImage({ urls: [path] })
}
function onCancel() {
  console.log('用户取消裁剪')
}
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| minScale | 最小缩放倍数 | `number` | `0.3` |
| maxScale | 最大缩放倍数 | `number` | `4` |
| canScale | 是否允许双指缩放 | `boolean` | `true` |
| canRotate | 是否允许旋转（inner 模式下不可用） | `boolean` | `true` |
| lockWidth | 锁定宽度 | `string` | `''` |
| lockHeight | 锁定高度 | `string` | `''` |
| stretch | 拉伸模式 | `string` | `''` |
| lock | 锁定模式 | `string` | `''` |
| noTab | 无 tabbar 场景（页面无底部 tabbar 时保持默认 true） | `boolean` | `true` |
| inner | 内部模式（隐藏旋转按钮、按钮加宽） | `boolean` | `false` |
| quality | 导出图片质量（0-1） | `string \| number` | `0.9` |
| index | 实例标识，confirm 事件回传 | `string \| number` | `''` |
| canChangeSize | 是否允许拖拽调整裁剪框大小 | `boolean` | `false` |
| areaWidth | 裁剪区域宽度 | `string` | `'300rpx'` |
| areaHeight | 裁剪区域高度 | `string` | `'300rpx'` |
| exportWidth | 导出图片宽度 | `string` | `'260rpx'` |
| exportHeight | 导出图片高度 | `string` | `'260rpx'` |
| fillColor | 画布填充色（导出透明 PNG 的背景，默认透明） | `string` | `'transparent'` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| confirm | 裁剪确认时触发 | `{ avatar, path, index, data }`，path 为导出图片临时路径 |
| cancel | 用户取消（关闭/取消选择）时触发 | — |
| avtinit | 裁剪界面初始化完成时触发 | — |

### Slots

| 插槽名 | 说明 |
|--------|------|
| default | 未打开裁剪时的显示内容，点击触发选图 |

## 设计规范

::: tip 最佳实践
- 头像裁剪固定 1:1（area 与 export 同宽高），导出 260rpx 起步保证清晰度。
- 房相等横图用 4:3 裁剪框，`fill-color="#ffffff"` 避免透明通道在部分端显示异常。
- confirm 拿到 path 后直接走上传流程，避免 base64 中转。
:::

::: warning 注意事项
- 裁剪界面为全屏覆盖层，确认/关闭后自动隐藏；请勿在弹层内再嵌套本组件。
- H5 端导出尺寸以裁剪框实际像素为准；小程序端受 canvas 实现差异影响，请以真机效果为准。
- `quality` 传字符串数字亦可（内部 parseInt），仅对 jpg/png 压缩有效。
:::
