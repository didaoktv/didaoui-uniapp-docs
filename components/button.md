# 按钮 DdButton

> 7-type 系统（primary/secondary/ghost/text/success/warning/danger）搭配 3 种尺寸；primary/secondary 默认圆角 var(--radius-md)，text 为零圆角自适应高度，round 可切换为胶囊圆角；disabled 使用 opacity 0.5。

## 介绍

DdButton 是迪道 KTV 体系中的核心操作触发器，覆盖预订包房、表单提交、工具栏动作、状态确认等场景。通过 `type` 区分七种语义（主操作、次操作、幽灵、文字、成功/警告/危险），配合 `size` 三档尺寸与 `round` 胶囊形态可组合出绝大多数 CTA 需求。loading 状态会替换图标为旋转指示并阻止点击，disabled 通过半透明降低视觉权重。

## 代码演示

### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;gap:12rpx;flex-wrap:wrap">
    <dd-button type="primary">主要</dd-button>
    <dd-button type="secondary">次要</dd-button>
    <dd-button type="ghost">幽灵</dd-button>
    <dd-button type="text">文字</dd-button>
  </view>
</template>
```

</DemoBlock>
:::

### 状态色与尺寸

success / warning / danger 用于状态匹配的动作；sm / md / lg 对应内容密度。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;gap:12rpx;flex-wrap:wrap;align-items:center">
    <dd-button type="success">成功</dd-button>
    <dd-button type="warning">警告</dd-button>
    <dd-button type="danger">危险</dd-button>
    <dd-button size="sm" type="primary">小</dd-button>
    <dd-button size="lg" type="primary">大</dd-button>
  </view>
</template>
```

</DemoBlock>
:::

### 圆角、状态与图标

`round` 切换胶囊圆角；`loading` 显示旋转指示；`icon` + `iconPosition` 控制图标位置。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;gap:12rpx;flex-wrap:wrap;align-items:center">
    <dd-button type="danger" round size="lg">删除订单</dd-button>
    <dd-button type="primary" loading>加载中</dd-button>
    <dd-button type="primary" disabled>禁用</dd-button>
    <dd-button type="primary" icon="＋">添加歌曲</dd-button>
    <dd-button type="secondary" icon="›" icon-position="right">下一步</dd-button>
  </view>
</template>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| type | 按钮类型 | `'primary' \| 'secondary' \| 'ghost' \| 'text' \| 'success' \| 'warning' \| 'danger'` | `'primary'` |
| size | 按钮尺寸 | `'sm' \| 'md' \| 'lg'` | `'md'` |
| round | 是否胶囊圆角 | `boolean` | `false` |
| iconPosition | 图标位置 | `'left' \| 'right'` | `'left'` |
| icon | 图标字符（文本字形） | `string` | `''` |
| loading | 是否加载中（替换图标为旋转指示并阻止点击） | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击按钮时触发（disabled / loading 状态不触发） | `event: Event` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 按钮文字内容 |
| icon | 自定义图标内容（优先于 icon prop） |

## 设计规范

::: tip 最佳实践
- 每屏只用一个 primary 作为主 CTA。
- ghost / text 用于工具栏和取消动作。
- success / warning / danger 用于状态匹配的动作。
- 需要胶囊形态时设置 round。
- 按内容密度匹配尺寸（sm caption / md body / lg lead）。
:::

::: warning 注意事项
- 不要将多个 primary 按钮并排堆叠。
- 不要用 text 类型承担主操作——它缺乏操作可见性。
- 同一操作组内不要混用多种状态色。
:::
