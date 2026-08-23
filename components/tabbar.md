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

## 标签栏项 DdTabbarItem

> 标签项配 inject 驱动的激活状态、继承颜色模式以适配主题，支持 dot 与 badge 指示器，name prop 或自动索引作为标识。

DdTabbarItem 是 DdTabbar 的子组件，必须放在 `dd-tabbar` 内使用。通过 inject 获取父级上下文，自动注册并响应激活状态。激活时颜色继承自父级 `activeColor`，未激活继承 `inactiveColor`。`badge` 显示红色数字徽标，`dot` 显示小红点（badge 优先）。`name` 提供稳定标识，未设置时回退到注册索引。`#icon` 槽支持自定义图标。

### 代码演示

#### 自定义图标槽

`#icon` 槽作用域参数含 `active`，可按激活态渲染不同图标。

:::demo
<DemoBlock>

```vue
<template>
  <dd-tabbar v-model="active" :fixed="false">
    <dd-tabbar-item label="首页">
      <template #icon="{ active }">
        <text :style="{ color: active ? '#F5A623' : '#9E9E9E' }">{{ active ? '🏠' : '🕳' }}</text>
      </template>
    </dd-tabbar-item>
  </dd-tabbar>
</template>

<script setup>
import { ref } from 'vue'
const active = ref(0)
</script>
```

</DemoBlock>
:::

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| name | 标签标识（未设置时回退到注册索引） | `string \| number` | `''` |
| icon | 图标字符（文本字形） | `string` | `''` |
| label | 标签文字 | `string` | `''` |
| dot | 是否显示红点 | `boolean` | `false` |
| badge | 徽标文字或数字（优先于 dot） | `string \| number` | `''` |

### Slots

| 名称 | 说明 | 作用域参数 |
|------|------|-----------|
| default | 自定义标签内容（优先于 label prop） | — |
| icon | 自定义图标内容（优先于 icon prop） | `{ active: boolean }` |

### 设计规范

::: tip 最佳实践
- 必须作为 dd-tabbar 的子组件使用。
- 设置 name 以在重渲染时保持稳定标识。
- 未读消息数使用 badge。
- 无数字的提醒使用 dot。
- 自定义图标组件使用 icon 槽。
:::

::: warning 注意事项
- 不要脱离 dd-tabbar 使用——inject 返回 null 后项将失效。
- 不要同时设置 dot 与 badge——badge 优先。
- 标签文字不要超过 6 字——小屏可能截断。
:::
