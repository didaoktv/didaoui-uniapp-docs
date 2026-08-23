# Markdown 渲染 DdMarkdown

> Markdown 渲染组件：内置 marked 解析器把 Markdown 转为 HTML，再交给 `dd-parse` 渲染，支持标题/表格/代码块（可带行号）/引用/图片等，明暗双主题。

## 介绍

DdMarkdown 将 Markdown 字符串解析为 HTML 后交给 [DdParse](./parse.md) 渲染，多端表现一致。`showLineNumber` 为代码块添加行号；`theme` 支持 `light` / `dark` 两套排版；图片点击预览、链接点击等行为与 `dd-parse` 一致并透传相关事件。

## 代码演示

### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <dd-markdown :content="md" />
</template>

<script setup lang="ts">
const md = `
# 房间使用须知

1. 禁止携带外部酒水
2. 会员可享 **包厢费 8 折**

> 温馨提示：高峰时段请提前 30 分钟到店。
`
</script>
```

</DemoBlock>
:::

### 代码块行号 + 暗色主题

:::demo
<DemoBlock>

```vue
<template>
  <dd-markdown :content="md" theme="dark" :show-line-number="true" />
</template>

<script setup lang="ts">
const md = `
\`\`\`js
const room = { no: 'V01', price: 128 }
console.log(room.no)
\`\`\`
`
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| content | Markdown 内容 | `string` | `''` |
| previewImg | 是否启用图片点击预览 | `boolean` | `true` |
| copyLink | 是否允许外部链接被点击时自动复制 | `boolean` | `true` |
| domain | 主域名，用于处理相对链接 | `string` | `''` |
| showLineNumber | 是否显示代码块行号 | `boolean` | `false` |
| theme | 主题样式，`light` / `dark` | `string` | `'light'` |

### Events

事件由内部 `dd-parse` 透传：

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
- 帮助中心、更新公告等由 Markdown 维护的内容直接渲染，省去 HTML 拼接。
- 暗色 APP 内使用 `theme="dark"` 保证代码块可读性。
:::

::: warning 注意事项
- Markdown 中的 HTML 片段会原样进入解析管线，来源不可信时请先做过滤。
- 代码块行号按非空行计数，空行不占行号。
:::
