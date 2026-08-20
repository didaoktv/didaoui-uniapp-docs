# 小程序导航栏 DdMiniProgramNavbar

> 小程序导航栏，状态栏高度动态获取（uni.getWindowInfo），内容行 88rpx，右侧 87px 胶囊占位（#ifdef MP-WEIXIN 用真实胶囊 rect 对齐），毛玻璃背景（#ifdef H5 backdrop-filter），transparent 通过条件编译关闭模糊，3 种变体 + 透明切换。

::: danger 平台限制
本组件为**小程序专属组件**，依据微信小程序自定义导航栏规范设计。状态栏高度与右侧胶囊占位通过 `uni.getWindowInfo()` / `uni.getMenuButtonBoundingClientRect()`（#ifdef MP-WEIXIN）动态获取，H5 端降级为固定值（状态栏 20px、胶囊 87px）。
:::

## 介绍

DdMiniProgramNavbar 是小程序自定义导航栏，由状态栏占位 + 内容行 + 右侧胶囊占位三部分组成。提供 default（居中标题）、search（搜索框）、custom（自定义插槽）三种变体，以及 `transparent` 透明模式（沉浸式页面）。内容行高度 88rpx，右侧预留 87px 给微信胶囊按钮；在 MP-WEIXIN 下会读取真实胶囊 rect 精确对齐。返回箭头用 CSS border 绘制，无 SVG 依赖。

## 代码演示

### 基础用法（default）

`variant="default"` 居中显示标题，左侧返回按钮，适合详情/列表页。

:::demo
<DemoBlock>

```vue
<template>
  <dd-mini-program-navbar
    title="包房详情"
    @back="onBack"
  />
</template>

<script setup>
function onBack() { uni.navigateBack() }
</script>
```

</DemoBlock>
:::

### 搜索导航

`variant="search"` 用搜索框替代标题，配合 `v-model:searchValue` 与 `search` 事件。

:::demo
<DemoBlock>

```vue
<template>
  <dd-mini-program-navbar
    variant="search"
    v-model:search-value="keyword"
    search-placeholder="搜索歌曲、歌手"
    @search="onSearch"
  />
</template>

<script setup>
import { ref } from 'vue'
const keyword = ref('')
function onSearch(val) { console.log('搜索', val) }
</script>
```

</DemoBlock>
:::

### 自定义内容与透明模式

`variant="custom"` 用 default 插槽自定义内容，`below` 插槽在内容行下方扩展；`transparent` 用于沉浸式页面。

:::demo
<DemoBlock>

```vue
<template>
  <dd-mini-program-navbar variant="custom" :show-back="false" transparent>
    <view style="display:flex;align-items:center;justify-content:center;width:100%;gap:16rpx">
      <text style="color:#fff;font-size:32rpx;font-weight:600">首页</text>
    </view>
  </dd-mini-program-navbar>
</template>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| variant | 变体：default 标题 / search 搜索 / custom 自定义 | `'default' \| 'search' \| 'custom'` | `'default'` |
| transparent | 是否透明（沉浸式，关闭毛玻璃与模糊） | `boolean` | `false` |
| showBack | 是否显示返回按钮（search 变体不显示） | `boolean` | `true` |
| title | 标题（default 变体） | `string` | `''` |
| backText | 返回按钮附加文案 | `string` | `''` |
| searchValue | 搜索值（search 变体，支持 v-model:searchValue） | `string` | `''` |
| searchPlaceholder | 搜索占位文案 | `string` | `'搜索'` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| back | 点击返回按钮时触发 | 无 |
| update:searchValue | 搜索值变化时触发 | `val: string` |
| search | 确认搜索时触发 | `val: string` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义内容（custom 变体，内容行中部） |
| below | 内容行下方扩展区域（custom 变体） |

## 设计规范

::: tip 最佳实践
- 详情/列表页用 default 配居中标题。
- 沉浸式页面用 transparent（#ifdef H5 关闭 blur）。
- 搜索/发现页用 search。
- 首页用 custom 配 default 插槽。
- 右侧始终预留 87px 给微信胶囊。
- 返回箭头用 CSS border，保证小程序兼容。
:::

::: warning 注意事项
- 不要修改右侧 87px 胶囊占位宽度。
- 不要在胶囊区域放置交互内容。
- 不要期待非 H5 平台有 backdrop-filter（条件编译，小程序无模糊）。
- 不要在同一导航栏混用 title 与 search。
:::
