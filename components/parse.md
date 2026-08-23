# 富文本解析 DdParse

> 富文本解析组件，内嵌 mp-html v2.5.1 内核：渲染 HTML 字符串，支持图片懒加载/预览、视频、表格滚动、长按复制、锚点等能力。

## 介绍

DdParse 基于 [mp-html](https://github.com/jin-yufeng/mp-html) 移植（组件名 `dd-parse`）。传入 `content` HTML 字符串即可渲染，适合协议正文、活动说明、CMS 富文本等场景。`domain` 用于拼接相对链接；`tagStyle` 可为指定标签设置默认样式；事件覆盖图片点击（`imgtap`）、链接点击（`linktap`）、媒体加载出错（`error`）等。APP-NVUE 端通过内嵌 web-view 渲染。

## 代码演示

### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <dd-parse :content="html" />
</template>

<script setup lang="ts">
const html = `
  <div>
    <h3>会员权益说明</h3>
    <p>尊享 <strong>帝王金</strong> 会员专属折扣，详见
      <a href="https://m.didaoktv.com/vip">权益列表</a>。</p>
    <img src="https://img.didaoktv.com/vip/banner.jpg" />
  </div>
`
</script>
```

</DemoBlock>
:::

### 懒加载 + 标签默认样式 + 长按复制

`lazyLoad` 开启图片懒加载；`tagStyle` 统一覆盖标签样式；`selectable` 开启长按复制。

:::demo
<DemoBlock>

```vue
<template>
  <dd-parse
    :content="html"
    :lazy-load="true"
    :selectable="true"
    :tag-style="{ p: 'color:#909399;font-size:14px', img: 'border-radius:8px' }"
    @linktap="onLinkTap"
  />
</template>

<script setup lang="ts">
const html = `<p>长按本段文字可复制；图片懒加载按需请求。</p><img src="https://img.didaoktv.com/vip/banner.jpg" />`
function onLinkTap(node: any) {
  console.log('点击链接', node?.attr?.href)
}
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| containerStyle | 容器样式 | `string` | `''` |
| content | 用于渲染的 HTML 字符串 | `string` | `''` |
| copyLink | 是否允许外部链接被点击时自动复制 | `boolean` | `true` |
| domain | 主域名，用于拼接相对链接 | `string` | `''` |
| errorImg | 图片出错时的占位图链接 | `string` | `''` |
| lazyLoad | 是否开启图片懒加载 | `boolean` | `false` |
| loadingImg | 图片加载过程中的占位图链接 | `string` | `''` |
| pauseVideo | 是否在播放一个视频时自动暂停其他视频 | `boolean` | `true` |
| previewImg | 是否允许图片被点击时自动预览 | `boolean` | `true` |
| scrollTable | 是否给每个表格添加滚动层使其能单独横向滚动 | `boolean` | `false` |
| selectable | 是否开启长按复制 | `boolean` | `false` |
| setTitle | 是否将 title 标签的内容设置到页面标题 | `boolean` | `true` |
| showImgMenu | 是否允许图片被长按时显示菜单 | `boolean` | `true` |
| tagStyle | 标签的默认样式 | `object` | `{}` |
| useAnchor | 是否使用锚点链接 | `boolean \| number` | `null` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| load | DOM 结构加载完毕时触发 | `event` |
| ready | 所有图片加载完毕时触发 | `event` |
| imgtap | 图片被点击时触发 | `event` |
| linktap | 链接被点击时触发 | `event` |
| play | 音视频播放时触发 | `event` |
| error | 媒体加载出错时触发 | `event` |

## 设计规范

::: tip 最佳实践
- 协议/帮助类长文用 `selectable` 方便用户复制关键条款。
- 富文本里的图片统一圆角：`tag-style="{ img: 'border-radius:8px' }"`。
- 服务端只返回相对路径时传 `domain` 补全。
:::

::: warning 注意事项
- `content` 变化会重新解析渲染，高频更新场景请避免整段替换。
- 外链图片在小程序端需配置 downloadFile 合法域名。
- APP-NVUE 端通过 web-view 渲染，样式与 H5 可能有细微差异。
:::
