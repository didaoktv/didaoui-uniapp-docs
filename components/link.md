# 超链接 DdLink

> 超链接组件，按平台自动选择打开方式：H5 新窗口打开、APP 用内置浏览器打开、小程序复制到剪贴板并提示。

## 介绍

DdLink 文本通过 `text` 属性传入（而非插槽，nvue 下无法修改插槽文字颜色）。点击行为按平台区分：APP 端通过 `plus.runtime.openURL` 打开，H5 端 `window.open`，小程序端 `uni.setClipboardData` 复制链接并弹出 `mpTips` 提示。

## 代码演示

### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <dd-link text="帝到KTV 官网" href="https://m.didaoktv.com" />
</template>
```

</DemoBlock>
:::

### 下划线与自定义颜色

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;flex-direction:column;gap:16rpx">
    <dd-link text="用户协议" href="https://m.didaoktv.com/agreement" underLine />
    <dd-link text="隐私政策" href="https://m.didaoktv.com/privacy" color="#F5A623" :fontSize="16" />
  </view>
</template>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| color | 文字颜色 | `string` | 主题主色 |
| fontSize | 字体大小（px） | `string \| number` | `15` |
| underLine | 是否显示下划线 | `boolean` | `false` |
| href | 要跳转的链接，需带上 http(s) | `string` | `''` |
| mpTips | 小程序中复制到粘贴板后的提示语 | `string` | `'链接已复制，请在浏览器打开'` |
| lineColor | 下划线颜色，默认同 `color` | `string` | `''` |
| text | 超链接文字 | `string` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击链接时触发（在平台打开行为之后） | — |

## 设计规范

::: tip 最佳实践
- 站外链接（协议、帮助中心、活动页）用 `dd-link`；站内页面跳转请用 `uni.navigateTo`。
- 协议类链接加 `underLine` 强化可点击预期。
:::

::: warning 注意事项
- `href` 必须是带 http(s) 的完整 URL，相对路径在小程序端无意义（只会复制）。
- 小程序端无法直接打开外部网页，默认复制到剪贴板并提示用户去浏览器打开。
:::
