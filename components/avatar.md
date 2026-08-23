# 头像 DdAvatar

> 头像组件：图片 / 文字 / 图标三种展示形态，圆形与方形，随机背景色，图片加载失败自动回退内置默认头像。

## 介绍

DdAvatar 用于个人中心、评论列表等头像展示场景。优先级为：插槽 > `mpAvatar`（小程序原生头像）> `text` 文字 > `icon` 图标 > `src` 图片。展示文字/图标时以 `bgColor` 为背景、`color` 为前景色；`randomBgColor` 开启后从内置 20 色数组随机取背景色，可用 `colorIndex`（0-19）固定取某一色。图片加载失败时自动回退 `defaultUrl`（组件内置默认头像）。

> v1.2.0 起 API 调整：`size` 为数值（默认 40），新增 `text` / `icon` / `bgColor` / `color` / `fontSize` / `mpAvatar` / `randomBgColor` / `colorIndex` 等属性。

## 代码演示

### 基础用法

`src` 提供图片地址，加载失败自动回退默认头像。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;gap:16rpx;align-items:center">
    <dd-avatar src="/static/user1.png" />
    <dd-avatar src="/static/user1.png" shape="square" />
    <dd-avatar text="张" />
  </view>
</template>
```

</DemoBlock>
:::

### 文字 / 图标 / 随机背景色

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;gap:16rpx;align-items:center">
    <dd-avatar text="李" bgColor="#F5A623" />
    <dd-avatar icon="account" />
    <dd-avatar text="王" :random-bg-color="true" />
    <dd-avatar text="赵" :size="64" :fontSize="24" />
  </view>
</template>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| src | 头像图片路径（不能为相对路径），加载失败显示默认头像 | `string` | `''` |
| shape | 头像形状，`circle` 圆形 / `square` 方形 | `string` | `'circle'` |
| size | 头像尺寸（数值，单位 px） | `string \| number` | `40` |
| mode | 图片裁剪类型，与 uni image 的 mode 一致 | `string` | `'scaleToFill'` |
| text | 用文字替代图片，优先级高于 src | `string` | `''` |
| bgColor | 背景颜色，一般显示文字时用 | `string` | `'#c0c4cc'` |
| color | 文字颜色 | `string` | `'#ffffff'` |
| fontSize | 文字大小 | `string \| number` | `18` |
| icon | 显示的图标名 | `string` | `''` |
| mpAvatar | 显示小程序头像，只对微信 / QQ / 百度小程序有效 | `boolean` | `false` |
| randomBgColor | 是否使用随机背景色（文字 / 图标模式下生效） | `boolean` | `false` |
| defaultUrl | 加载失败的默认头像（组件有内置默认图片） | `string` | `''` |
| colorIndex | 配合 randomBgColor，从内置 20 色数组中按索引（0-19）取色 | `string \| number` | `''` |
| name | 组件标识符，点击事件回传 | `string` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击头像时触发 | `name: string` |

### Slots

| 插槽名 | 说明 |
|--------|------|
| default | 完全自定义头像内容，优先级最高 |

## 设计规范

::: tip 最佳实践
- 列表场景用默认 `size=40`；个人资料页头部放大到 64+ 并配合 `fontSize`。
- 无头像用户用 `text` 传昵称首字，配合 `randomBgColor` 让列表更生动。
- 房台/分类占位使用 `square` 形状。
:::

::: warning 注意事项
- `src` 不能为相对路径；APP-NVUE 端不支持的特性请以真机为准。
- 同一列表内无特殊原因不要混用形状。
- 群组头像请使用 `dd-avatar-group`。
:::

## 头像组 DdAvatarGroup

> 头像组组件，头像堆叠展示：最多展示 maxCount 个、按 gap 比例相互遮挡、超出部分显示 +N，用于房间成员、评论列表等场景。

DdAvatarGroup `urls` 支持字符串数组或对象数组（配合 `keyName` 取地址），内部逐个渲染 `dd-avatar` 并按 `gap`（0-1，遮挡比例）负 margin 堆叠。超出 `maxCount` 时最后一格显示剩余数量（或 `extraValue` 指定值），点击该格触发 `showMore` 事件。

### 代码演示

#### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <dd-avatar-group :urls="urls" />
</template>

<script setup lang="ts">
const urls = [
  'https://img.didaoktv.com/user/1.jpg',
  'https://img.didaoktv.com/user/2.jpg',
  'https://img.didaoktv.com/user/3.jpg',
  'https://img.didaoktv.com/user/4.jpg',
  'https://img.didaoktv.com/user/5.jpg',
  'https://img.didaoktv.com/user/6.jpg',
]
</script>
```

</DemoBlock>
:::

#### 自定义遮挡与更多数值

`gap` 控制遮挡比例（0.4 代表遮挡 40%），`extraValue` 直接指定 +N 显示值。

:::demo
<DemoBlock>

```vue
<template>
  <dd-avatar-group
    :urls="urls"
    :size="35"
    :gap="0.4"
    :maxCount="4"
    :extraValue="12"
    @showMore="onMore"
  />
</template>

<script setup lang="ts">
const urls = [
  'https://img.didaoktv.com/user/1.jpg',
  'https://img.didaoktv.com/user/2.jpg',
  'https://img.didaoktv.com/user/3.jpg',
  'https://img.didaoktv.com/user/4.jpg',
]
function onMore() {
  uni.navigateTo({ url: '/pages/members/index' })
}
</script>
```

</DemoBlock>
:::

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| urls | 头像图片组，`Array<String>` 或 `Array<Object>` | `array` | `[]` |
| maxCount | 最多展示的头像数量 | `string \| number` | `5` |
| shape | 头像形状，`circle` / `square` | `string` | `'circle'` |
| mode | 图片裁剪模式 | `string` | `'scaleToFill'` |
| showMore | 超出 maxCount 时是否显示"+N"提示 | `boolean` | `true` |
| size | 头像大小 | `string \| number` | `40` |
| keyName | 指定从数组的对象元素中读取哪个属性作为图片地址 | `string` | `''` |
| gap | 头像之间的遮挡比例（0.4 代表遮挡 40%，取值 0-1） | `string \| number` | `0.5` |
| extraValue | 需额外显示的值（优先于自动计算的剩余数量） | `number \| string` | `0` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| showMore | 点击"+N"更多提示时触发 | — |

### 设计规范

::: tip 最佳实践
- 房间成员 / 包场好友列表用 `gap=0.4` 紧凑堆叠，点击 +N 跳转完整成员页。
- 头像数量多时配 `maxCount=5`，配合 `extraValue` 显示真实总数。
:::

::: warning 注意事项
- `gap` 取值 0-1，超出范围不生效（有校验）。
- `urls` 传对象数组时需配置 `keyName`（或对象含 `url` 字段）。
- 头像尺寸过小（< 30）时 +N 文字可能溢出，请同步调小头像或保持默认尺寸。
:::
