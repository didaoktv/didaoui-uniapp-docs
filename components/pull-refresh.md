# 下拉刷新 DdPullRefresh

> 基于 scroll-view 的下拉刷新，0.5 阻尼系数，状态文案循环（pulling/loosing/loading/success），可选成功反馈，head 高度 rpx 转 px 用于触摸计算。

## 介绍

DdPullRefresh 用于列表的下拉刷新交互。内部包裹 `scroll-view`，当滚动到顶部继续下拉时露出 head 区域，显示状态文案与 spinner。下拉过程有 0.5 阻尼并封顶 1.5 倍 headHeight，松手后达到阈值即触发 refresh 事件并进入 loading 态。通过 `v-model` 控制 loading 状态，数据加载完成后置为 false 即可收起；若设置了 `successText`，收起前会短暂显示成功文案。

## 代码演示

### 基础用法

`v-model` 绑定 loading 状态，`@refresh` 监听刷新事件，加载完成后置 modelValue 为 false。

:::demo
<DemoBlock>

```vue
<template>
  <dd-pull-refresh v-model="loading" @refresh="onRefresh">
    <view style="height:600rpx">
      <dd-cell v-for="i in list" :key="i" :title="`条目 ${i}`" />
    </view>
  </dd-pull-refresh>
</template>

<script setup>
import { ref } from 'vue'
const loading = ref(false)
const list = ref(5)
function onRefresh() {
  setTimeout(() => {
    list.value += 3
    loading.value = false
  }, 1500)
}
</script>
```

</DemoBlock>
:::

### 成功反馈

设置 `successText` 后，loading 结束会短暂显示成功文案再收起。

:::demo
<DemoBlock>

```vue
<template>
  <dd-pull-refresh
    v-model="loading"
    success-text="刷新成功"
    :success-duration="800"
    @refresh="onRefresh"
  >
    <view style="height:600rpx">
      <dd-cell title="下拉试试刷新" />
    </view>
  </dd-pull-refresh>
</template>

<script setup>
import { ref } from 'vue'
const loading = ref(false)
function onRefresh() {
  setTimeout(() => { loading.value = false }, 1500)
}
</script>
```

</DemoBlock>
:::

### 配合触底加载

`@loadmore` 在内部 scroll-view 触底时触发，配合 [DdLoadmore](./loadmore.md) 指示器即可在同一个 scroll-view 内同时实现下拉刷新与触底加载。

:::demo
<DemoBlock>

```vue
<template>
  <view style="height:640rpx">
    <dd-pull-refresh
      v-model="refreshing"
      success-text="刷新成功"
      @refresh="onRefresh"
      @loadmore="onLoadMore"
      style="height:100%"
    >
      <view v-for="i in list" :key="i" class="item">条目 {{ i }}</view>
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

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue | 是否处于 loading 态（支持 v-model） | `boolean` | `false` |
| headHeight | head 区域高度（rpx） | `number` | `100` |
| pullingText | 下拉中文案 | `string` | `'下拉即可刷新...'` |
| loosingText | 释放可刷新文案 | `string` | `'释放即可刷新...'` |
| loadingText | 加载中文案 | `string` | `'加载中...'` |
| successText | 成功文案（为空则不显示成功态） | `string` | `''` |
| successDuration | 成功态展示时长（ms） | `number` | `500` |
| damping | 下拉阻尼系数 | `number` | `0.5` |
| lowerThreshold | 触底阈值（rpx），距底部小于该值触发 loadmore | `number` | `100` |

状态说明：

| status | 触发条件 | 文案 |
|--------|----------|------|
| pulling | 下拉距离 < headHeight | pullingText |
| loosing | 下拉距离 ≥ headHeight | loosingText |
| loading | 松手触发刷新 / modelValue=true | loadingText |
| success | modelValue 置 false 且有 successText | successText |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | loading 状态变化时触发 | `val: boolean` |
| refresh | 触发刷新时触发 | 无 |
| loadmore | 内部 scroll-view 滚动触底时触发 | 无 |

### Slots

| 名称 | 说明 |
|------|------|
| default | 可滚动列表内容 |

## 设计规范

::: tip 最佳实践
- 作为可滚动列表内容的包装容器。
- 设置 successText 提供刷新成功反馈。
- 容器需有明确高度（使用 height:100%）。
- pullingText/loosingText/loadingText 保持简短。
:::

::: warning 注意事项
- 嵌套在其他滚动容器内时需测试嵌套滚动表现。
- headHeight 不宜过小（< 80rpx），否则 spinner+text 可能被裁切。
- 数据加载完成后记得将 modelValue 置为 false。
:::
