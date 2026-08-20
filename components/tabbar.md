# 标签栏 DdTabbar

> 固定底部导航栏配 provide/inject 子项管理，可选 placeholder 防止内容遮挡，安全区感知的 content-box 尺寸。

## 介绍

DdTabbar 是底部固定标签栏容器，需配合 `dd-tabbar-item` 子组件使用。容器通过 provide/inject 向子项注入激活状态、激活/未激活颜色、注册函数与点击回调，子项自动注册并响应激活变化。`fixed` 默认固定底部，`placeholder` 渲染同尺寸占位防止内容被遮挡，`safeAreaInsetBottom` 适配 iPhone X+ 安全区。`activeColor` / `inactiveColor` 可自定义品牌色。

## 代码演示

### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <dd-tabbar v-model="active" :fixed="false">
    <dd-tabbar-item icon="🏠" label="首页" />
    <dd-tabbar-item icon="📊" label="排行" />
    <dd-tabbar-item icon="🎤" label="包房" />
    <dd-tabbar-item icon="👤" label="我的" />
  </dd-tabbar>
</template>

<script setup>
import { ref } from 'vue'
const active = ref(0)
</script>
```

</DemoBlock>
:::

### 带徽标与红点

子项 `badge` 显示数字徽标，`dot` 显示红点。

:::demo
<DemoBlock>

```vue
<template>
  <dd-tabbar v-model="active" :fixed="false">
    <dd-tabbar-item icon="🏠" label="首页" />
    <dd-tabbar-item icon="💬" label="消息" :badge="9" />
    <dd-tabbar-item icon="🔔" label="动态" dot />
    <dd-tabbar-item icon="👤" label="我的" />
  </dd-tabbar>
</template>

<script setup>
import { ref } from 'vue'
const active = ref(0)
</script>
```

</DemoBlock>
:::

### 自定义颜色与 name 标识

`active-color` / `inactive-color` 自定义颜色；子项 `name` 提供稳定标识。

:::demo
<DemoBlock>

```vue
<template>
  <dd-tabbar v-model="active" :fixed="false" active-color="#F5A623" inactive-color="#9E9E9E">
    <dd-tabbar-item icon="🎵" label="点歌" name="song" />
    <dd-tabbar-item icon="📋" label="已点" name="list" />
    <dd-tabbar-item icon="🔍" label="搜索" name="search" />
  </dd-tabbar>
</template>

<script setup>
import { ref } from 'vue'
const active = ref('song')
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue (v-model) | 当前激活项标识（name 或索引） | `string \| number` | `0` |
| fixed | 是否固定底部 | `boolean` | `true` |
| border | 是否显示顶部细线 | `boolean` | `true` |
| placeholder | fixed 时是否渲染占位元素 | `boolean` | `true` |
| safeAreaInsetBottom | 是否适配底部安全区 | `boolean` | `true` |
| activeColor | 激活态颜色 | `string` | `'#F5A623'` |
| inactiveColor | 未激活态颜色 | `string` | `'#9E9E9E'` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 激活项变化时触发 | `val: string \| number` |
| change | 激活项变化时触发 | `val: string \| number` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 标签栏内容（放置 dd-tabbar-item 子组件） |

## 设计规范

::: tip 最佳实践
- 用于 3-5 个顶层目的地的主导航。
- fixed 时启用 placeholder 防止内容遮挡。
- iPhone X+ 设备启用 safeAreaInsetBottom。
- 自定义 activeColor 突出品牌金。
:::

::: warning 注意事项
- 标签不要超过 5 个——移动端会拥挤。
- fixed=false 时需自行调整页面布局。
- 不要遗漏 modelValue 的更新以维持导航状态。
:::
