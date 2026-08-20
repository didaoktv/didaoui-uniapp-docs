# 房台卡片 DdRoomCard

> 房态卡片，grid 视图通过顶部色条、list 视图通过状态圆点表达状态；三种状态（使用中/空闲/已预订）对应金色/蓝色/中性色，vip 类型叠加金色渐变标签。

## 介绍

DdRoomCard 是 KTV 房态管理专用卡片，支持 grid（方形网格）与 list（横向行）两种视图。状态通过颜色映射：使用中=金色、已预订=蓝色、空闲=中性灰。房间类型支持 vip（金色渐变标签/头像）、standard、theme，点击触发事件便于打开操作面板。

## 代码演示

### 网格视图

`view="grid"` 为方形卡片，顶部色条与状态点联动表达房态，适合房态总览。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:grid;grid-template-columns:repeat(3,1fr);gap:16rpx">
    <dd-room-card room-no="A01" status="idle" :capacity="6" />
    <dd-room-card room-no="A02" status="occupied" :capacity="8" />
    <dd-room-card room-no="A03" status="reserved" :capacity="6" />
  </view>
</template>
```

</DemoBlock>
:::

### VIP 房间

`type="vip"` 在 grid 视图右上角叠加 VIP 金色标签。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:grid;grid-template-columns:repeat(3,1fr);gap:16rpx">
    <dd-room-card room-no="V66" status="idle" type="vip" :capacity="12" />
    <dd-room-card room-no="V88" status="occupied" type="vip" :capacity="15" />
  </view>
</template>
```

</DemoBlock>
:::

### 列表视图

`view="list"` 为横向行，左侧圆形头像 + 中部房名/状态 + 右侧时间，适合带时间的房态明细。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;flex-direction:column;gap:16rpx">
    <dd-room-card view="list" room-no="A01" room-name="豪华大包" status="occupied" :capacity="8" time="19:00-21:00" />
    <dd-room-card view="list" room-no="A02" room-name="主题中包" status="reserved" :capacity="6" time="21:30-23:30" type="theme" />
  </view>
</template>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| view | 视图模式 | `'grid' \| 'list'` | `'grid'` |
| status | 房态 | `'occupied' \| 'idle' \| 'reserved'` | `'idle'` |
| type | 房间类型 | `'vip' \| 'standard' \| 'theme'` | `'standard'` |
| roomNo | 房间号 | `string` | `''` |
| roomName | 房间名称（list 视图优先显示） | `string` | `''` |
| capacity | 容纳人数 | `number \| string` | `''` |
| time | 使用/预订时间（list 视图右侧） | `string` | `''` |
| hoverable | 是否启用按压反馈 | `boolean` | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击卡片时触发 | `{ roomNo: string, status: string }` |

### Slots

无插槽 —— 内容由 props 驱动渲染。

## 设计规范

::: tip 最佳实践
- 移动端房态总览使用 3 列 grid 视图。
- 带时间明细的房态使用 list 视图。
- 通过顶部色条（grid）与状态点（list）表达状态，点击触发操作面板。
- VIP 房间设置 `type="vip"` 以显示金色标签/头像。
:::

::: warning 注意事项
- 单张卡片的状态指示不要超过 3 种。
- 同一视图内不要混用 grid 与 list。
- 不要省略房间号。
:::
