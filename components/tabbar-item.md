# 标签栏项 DdTabbarItem

> 标签项配 inject 驱动的激活状态、继承颜色模式以适配主题，支持 dot 与 badge 指示器，name prop 或自动索引作为标识。

## 介绍

DdTabbarItem 是 DdTabbar 的子组件，必须放在 `dd-tabbar` 内使用。通过 inject 获取父级上下文，自动注册并响应激活状态。激活时颜色继承自父级 `activeColor`，未激活继承 `inactiveColor`。`badge` 显示红色数字徽标，`dot` 显示小红点（badge 优先）。`name` 提供稳定标识，未设置时回退到注册索引。`#icon` 槽支持自定义图标。

## 代码演示

### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <dd-tabbar v-model="active" :fixed="false">
    <dd-tabbar-item icon="🏠" label="首页" />
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

### 徽标与红点

`badge` 显示数字徽标；`dot` 显示小红点（无数字）。

:::demo
<DemoBlock>

```vue
<template>
  <dd-tabbar v-model="active" :fixed="false">
    <dd-tabbar-item icon="💬" label="消息" :badge="9" />
    <dd-tabbar-item icon="🔔" label="动态" dot />
  </dd-tabbar>
</template>

<script setup>
import { ref } from 'vue'
const active = ref(0)
</script>
```

</DemoBlock>
:::

### 自定义图标槽

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

## API

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

## 设计规范

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
