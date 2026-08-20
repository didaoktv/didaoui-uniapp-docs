# 空状态 DdEmptyState

> Emoji 文本图标（120rpx，无 SVG——小程序兼容）配 float 浮动动画，type 驱动的标题/按钮文案默认值（titleMap/buttonTextMap），金色渐变胶囊 CTA（圆角 var(--radius-full)），所有插槽可覆盖。

## 介绍

DdEmptyState 用于列表为空、搜索无结果、加载失败、网络异常等场景的占位提示。通过 `type` 选择四种语义状态，组件内置对应的默认标题与按钮文案，也可通过 props 或插槽完全覆盖。图标使用 emoji 文本而非 SVG，保证小程序兼容性；提供 image/title/description/button/bottom 五个插槽供自定义。

## 代码演示

### 基础用法

`type="no-data"` 为默认类型，适用于空列表、空收藏等场景。

:::demo
<DemoBlock>

```vue
<template>
  <dd-empty-state type="no-data" description="还没有收藏的歌曲" @action="onAction" />
</template>

<script setup>
function onAction() {
  console.log('去添加')
}
</script>
```

</DemoBlock>
:::

### 状态类型

`no-result` / `error` / `network` 分别对应搜索无结果、加载失败、网络异常，组件会给出对应的默认标题与按钮文案。

:::demo
<DemoBlock>

```vue
<template>
  <dd-empty-state type="network" @action="onRetry" />
</template>

<script setup>
function onRetry() {
  console.log('重试')
}
</script>
```

</DemoBlock>
:::

### 自定义内容

通过 `title` / `description` / `buttonText` props 覆盖默认文案，或用插槽完全自定义各区域。

:::demo
<DemoBlock>

```vue
<template>
  <dd-empty-state
    type="no-result"
    icon="🔍"
    title="没有找到歌曲"
    description="换个关键词试试"
    button-text="重新搜索"
  />
</template>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| type | 空状态类型 | `'no-data' \| 'no-result' \| 'error' \| 'network'` | `'no-data'` |
| icon | 图标 emoji 文本 | `string` | `'🎤'` |
| title | 标题文案（为空时取 type 对应默认值） | `string` | `''` |
| description | 描述文案 | `string` | `''` |
| buttonText | 按钮文案（为空时取 type 对应默认值） | `string` | `''` |
| showButton | 是否显示按钮 | `boolean` | `true` |

type 对应默认文案：

| type | 标题 | 按钮 |
|------|------|------|
| no-data | 暂无数据 | 去添加 |
| no-result | 未找到相关结果 | 换个关键词 |
| error | 加载失败 | 重新加载 |
| network | 网络连接异常 | 检查网络 |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| action | 点击按钮时触发 | 无 |

### Slots

| 名称 | 说明 |
|------|------|
| image | 自定义图标区域（覆盖默认 emoji） |
| title | 自定义标题 |
| description | 自定义描述 |
| button | 自定义按钮区域 |
| bottom | 底部附加内容 |

## 设计规范

::: tip 最佳实践
- 空列表/收藏用 no-data，搜索零结果用 no-result，服务失败用 error，断网用 network。
- 通过 title/description/buttonText props 或插槽覆盖默认文案。
- 不需要 CTA 时设置 `showButton=false`。
:::

::: warning 注意事项
- 不要只显示图标不配文字。
- 不要期待 SVG 插画——为小程序兼容使用 emoji 文本。
- 不要在同一屏幕堆叠多个空状态。
- 描述文案不超过 3 行（max-width 560rpx）。
:::
