# 级联选择器 DdCascader

> 级联选择器：底部弹层 + 多级联动，选中上一级才展开下一级，支持单列/双列展示、垂直步骤头部、v-model 回显与自动关闭。

## 介绍

DdCascader 适用于省市区、房间楼栋-楼层-房号等多级数据选取。`data` 为树形结构（字段名可通过 `valueKey` / `labelKey` / `childrenKey` 定制）；顶部默认分段标签展示各级已选项，文字过长可切 `headerDirection="column"` 垂直步骤。`optionsCols` 支持单列（逐级切换）与双列（左列当前级、右列子级）两种布局。选中最后一级时触发 `change`；点确认触发 `confirm` 并同步 `modelValue`。

## 代码演示

### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <view>
    <dd-button type="primary" @click="show = true">选择门店包房</dd-button>
    <dd-cascader
      v-model:show="show"
      v-model="selected"
      :data="options"
      @confirm="onConfirm"
    />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const show = ref(false)
const selected = ref<number[]>([])
const options = [
  {
    value: 1,
    label: '帝到 KTV（旗舰店）',
    children: [
      { value: 11, label: '3F 豪华区', children: [{ value: 111, label: 'V01 帝王厅' }, { value: 112, label: 'V02 皇后厅' }] },
      { value: 12, label: '2F 标准区', children: [{ value: 121, label: 'A05' }, { value: 122, label: 'A06' }] },
    ],
  },
]
function onConfirm(values: number[]) {
  console.log('选中', values)
}
</script>
```

</DemoBlock>
:::

### 双列布局 / 自动关闭 / 垂直头部

`optionsCols=1` 单列逐级切换；`autoClose` 选中最后一级自动确认关闭；长文本层级用 `column` 头部。

:::demo
<DemoBlock>

```vue
<template>
  <dd-cascader
    v-model:show="show"
    :data="options"
    :options-cols="1"
    :auto-close="true"
    header-direction="column"
    @change="onChange"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const show = ref(true)
const options = [
  { value: 1, label: '门店', children: [{ value: 11, label: '楼层', children: [{ value: 111, label: '房号' }] }] },
]
function onChange(values: number[]) {
  console.log('change', values)
}
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| show | 是否弹出（支持 `v-model:show`） | `boolean` | `false` |
| data | 级联数据（树形结构） | `CascaderOption[]` | `[]` |
| modelValue | 默认/选中的值（各级 value 数组，支持 `v-model`） | `Array<string \| number>` | `[]` |
| valueKey | 指定选项的值为选项对象的哪个属性 | `string` | `'value'` |
| labelKey | 指定选项标签为选项对象的哪个属性 | `string` | `'label'` |
| childrenKey | 指定选项的子选项为选项对象的哪个属性 | `string` | `'children'` |
| maskCloseAble | 是否允许通过点击遮罩关闭 | `boolean` | `true` |
| zIndex | 弹出的 z-index 值，0 时取内部默认 2000 | `string \| number` | `0` |
| autoClose | 选中最后一级时是否自动关闭并触发 confirm | `boolean` | `false` |
| headerDirection | 已选层级展示方向，`row` 横向标签 / `column` 垂直步骤（适合长文本） | `'row' \| 'column'` | `'row'` |
| optionsCols | 选项区域列数，支持 1 列和 2 列 | `number` | `2` |
| closeable | 是否显示右上角关闭图标 | `boolean` | `true` |

> `CascaderOption = { value?: string | number; label?: string; children?: CascaderOption[] }`

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 确认时更新绑定值 | `values: Array<string \| number>` |
| update:show | 弹出状态变化 | `val: boolean` |
| change | 选中最后一级时触发 | `values: Array<string \| number>` |
| confirm | 点击确认按钮（或 autoClose 触发） | `values: Array<string \| number>` |
| cancel | 点击取消 / 遮罩 / 关闭图标时触发 | — |

## 设计规范

::: tip 最佳实践
- 省市区、门店-楼层-房号等 2~3 级数据用默认双列；层级名过长用 `header-direction="column"`。
- 快速录入场景开 `autoClose`，选中叶子节点即确认返回。
- 回显：`v-model` 传各级 value 数组，组件自动定位到对应层级。
:::

::: warning 注意事项
- `modelValue` 中的 value 必须能在对应层级中找到，找不到的层级之后会被截断。
- 修改上级选项会清空其下级已选值。
- `optionsCols` 仅支持 1 和 2。
:::
