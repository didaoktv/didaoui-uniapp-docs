# 遮罩层 DdOverlay

> 引用计数式滚动锁定（模块级计数器）正确处理堆叠 overlay 的解锁；visibility 过渡延迟，使 opacity 先淡出再隐藏。

## 介绍

DdOverlay 是全屏遮罩层，作为弹出类组件的基础底色层，也可单独用于自定义弹层。通过 `v-model` 控制显隐，内置滚动锁定（H5 设置 body overflow，小程序用 catch touchmove 防滚动穿透）。采用模块级引用计数器，多个 overlay 嵌套堆叠时能正确解锁，避免提前解锁导致背景可滚动。点击遮罩默认关闭并触发 update。

## 代码演示

### 基础用法

`v-model` 控制显隐，default 插槽放置遮罩上方的内容。

:::demo
<DemoBlock>

```vue
<template>
  <dd-button type="primary" @click="show = true">显示遮罩</dd-button>
  <dd-overlay v-model="show">
    <view style="padding:48rpx;color:#fff">遮罩内容</view>
  </dd-overlay>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
</script>
```

</DemoBlock>
:::

### 阻止点击关闭

`closeOnClickOverlay=false` 时点击遮罩不关闭，适合强制操作的底色层；内部内容用 `@click.stop` 阻止冒泡。

:::demo
<DemoBlock>

```vue
<template>
  <dd-button type="primary" @click="show = true">强制遮罩</dd-button>
  <dd-overlay v-model="show" :close-on-click-overlay="false">
    <view
      style="background:#fff;padding:48rpx;border-radius:24rpx;width:560rpx"
      @click.stop
    >
      <text>必须完成操作才能关闭</text>
      <dd-button type="primary" block @click="show = false" style="margin-top:24rpx">知道了</dd-button>
    </view>
  </dd-overlay>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue | 是否显示（支持 v-model） | `boolean` | `false` |
| lockScroll | 是否锁定背景滚动（引用计数，支持堆叠） | `boolean` | `true` |
| zIndex | 层级 | `number` | `2000` |
| duration | 过渡时长（秒） | `number` | `0.3` |
| closeOnClickOverlay | 点击遮罩是否关闭 | `boolean` | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 显隐变化时触发 | `val: boolean` |
| click | 点击遮罩时触发 | 无 |

### Slots

| 名称 | 说明 |
|------|------|
| default | 遮罩上方的内容 |

## 设计规范

::: tip 最佳实践
- 作为自定义 popover/menu 的基础底色层。
- 可堆叠多个 overlay——锁计数器会正确处理嵌套解锁。
- 内部内容用 `@click.stop` 阻止冒泡，避免误触关闭。
:::

::: warning 注意事项
- 遮罩点击会自动关闭（触发 update:modelValue=false），内部内容需 `@click.stop` 阻止。
- 不要期待 backdrop-filter 模糊（仅纯 rgba 遮罩）。
:::
