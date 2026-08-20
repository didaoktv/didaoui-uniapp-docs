# 触底加载 DdLoadmore

> 纯三态指示器（loadmore / loading / nomore），不监听滚动。滚动检测交给宿主原语——`dd-pull-refresh` 的 `@loadmore` 事件、页面级 `onReachBottom` 生命周期，或 `scroll-view @scrolltolower`。契合 uniapp 跨端模型（H5 / App / 小程序三端一致）。

## 介绍

DdLoadmore 只负责底部加载状态展示，单一职责。配合 [DdPullRefresh](./pull-refresh.md) 的 `@loadmore` 事件可在同一个 `scroll-view` 内同时实现下拉刷新与触底加载；也可独立放在页面底部配合 `onReachBottom` 使用。`status` 控制三态切换：`loadmore`（可点击手动触发加载，用于数据不足一屏的场景）/ `loading`（显示帝王金旋转 spinner）/ `nomore`（显示文案或圆点）。

## 代码演示

### 基础用法

配合 `dd-pull-refresh` 的 `@loadmore` 事件，滚到底部自动追加数据，加载完切到 `nomore`。

:::demo
<DemoBlock>

```vue
<template>
  <view style="height:640rpx">
    <dd-pull-refresh v-model="refreshing" @refresh="onRefresh" @loadmore="onLoadMore" style="height:100%">
      <view v-for="i in list" :key="i" class="lm-item">条目 {{ i }}</view>
      <dd-loadmore :status="status" />
    </dd-pull-refresh>
  </view>
</template>

<script setup>
import { ref } from 'vue'
const refreshing = ref(false)
const list = ref(10)
const status = ref('loadmore')
function onRefresh() {
  setTimeout(() => {
    list.value = 10
    status.value = 'loadmore'
    refreshing.value = false
  }, 1000)
}
function onLoadMore() {
  if (status.value !== 'loadmore') return
  status.value = 'loading'
  setTimeout(() => {
    if (list.value >= 30) {
      status.value = 'nomore'
      return
    }
    list.value += 10
    status.value = 'loadmore'
  }, 1000)
}
</script>
```

</DemoBlock>
:::

### 三态切换

通过 `status` 切换三态，`isDot` 让 nomore 显示为圆点。

:::demo
<DemoBlock>

```vue
<template>
  <dd-loadmore :status="status" :is-dot="isDot" @loadmore="onTap" />
  <view class="btn-row">
    <dd-button size="sm" @click="status = 'loadmore'">loadmore</dd-button>
    <dd-button size="sm" @click="status = 'loading'">loading</dd-button>
    <dd-button size="sm" @click="status = 'nomore'">nomore</dd-button>
    <dd-button size="sm" @click="isDot = !isDot">isDot: {{ isDot }}</dd-button>
  </view>
</template>

<script setup>
import { ref } from 'vue'
const status = ref('loadmore')
const isDot = ref(false)
function onTap() {
  status.value = 'loading'
  setTimeout(() => { status.value = 'nomore' }, 1000)
}
</script>
```

</DemoBlock>
:::

### 自定义文案与颜色

:::demo
<DemoBlock>

```vue
<template>
  <dd-loadmore
    status="nomore"
    nomore-text="到底啦～"
    color="#F5A623"
    font-size="28"
  />
</template>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| status | 组件状态 | `'loadmore' \| 'loading' \| 'nomore'` | `'loadmore'` |
| loadmoreText | loadmore 态文案 | `string` | `'加载更多'` |
| loadingText | loading 态文案 | `string` | `'正在加载...'` |
| nomoreText | nomore 态文案 | `string` | `'没有更多了'` |
| icon | loading 时是否显示 spinner | `boolean` | `true` |
| iconSize | spinner 尺寸（rpx） | `number` | `32` |
| fontSize | 文字字号（rpx） | `number` | `24` |
| color | 文字色 | `string` | `#9E9E9E`（$dd-text-tertiary） |
| iconColor | spinner 高亮色（帝王金） | `string` | `#F5A623`（$dd-primary-500） |
| bgColor | 背景色 | `string` | `'transparent'` |
| isDot | nomore 时显示圆点而非文案 | `boolean` | `false` |
| marginTop | 上外边距（rpx） | `number` | `16` |
| marginBottom | 下外边距（rpx） | `number` | `16` |
| height | 容器高度（rpx，'auto' 自适应） | `number \| string` | `'auto'` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| loadmore | 仅当 `status === 'loadmore'` 时点击组件触发 | 无 |

### Slots

| 名称 | 说明 |
|------|------|
| default | 整体替换组件内容 |
| loading | 自定义 loading 态内容 |
| nomore | 自定义 nomore 态内容 |

## 设计规范

::: tip 最佳实践
- 配合 `dd-pull-refresh` 的 `@loadmore` 事件，把 `<dd-loadmore>` 放在 slot 末尾即可实现触底加载。
- `onLoadMore` 内务必先判断 `status !== 'loadmore'` 直接 return，避免重复触发。
- 数据全部加载完置 `status='nomore'`；下拉刷新重置列表时同步把 `status` 切回 `'loadmore'`。
- 数据不足一屏无法触底时，`loadmore` 态可被点击手动触发加载。
:::

::: warning 注意事项
- 本组件不监听滚动，滚动检测需由 `dd-pull-refresh @loadmore` / 页面 `onReachBottom` / `scroll-view @scrolltolower` 提供。
- 页面级 `onReachBottom` 仅在整页滚动（无 scroll-view）时生效；局部滚动需用 `dd-pull-refresh` 或自己的 `scroll-view`。
- `isDot` 仅对 `nomore` 态生效。
:::
