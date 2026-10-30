# 折叠容器 DdFold

> 固定最大高度的折叠容器：内容自然高度超过 `maxHeight` 时裁切，底部叠一层渐变把内容渐隐到页面底色，并给出「展开 / 收起」入口；未超高则不折叠、不显示入口。

## 介绍

DdFold 解决「明细列表过长但又不想整块展开」的场景：包厢操作日志、订单详情、工单记录等。折叠高度按 `maxHeight`（rpx）固定，是否折叠由组件自己量内容的自然高度决定——不按条数估算，长备注、多行文本也能正确折叠。

展开态是受控的（`v-model:expanded`），组件自身不持有状态，由页面按条目保存展开集合即可（列表页每条独立展开互不影响）。

## 代码演示

### 基础用法

`v-model:expanded` 控制展开态。内容不超过 `maxHeight` 时完全不折叠，也不会出现渐变与入口。

:::demo
<DemoBlock>

```vue
<template>
  <view style="background:#0a0a0a;padding:16rpx">
    <dd-fold v-model:expanded="open" :max-height="320">
      <view class="fold-card">
        <dd-list-cell v-for="i in 8" :key="i" size="xs" :title="`键值行 ${i}`" value="值" />
      </view>
    </dd-fold>
  </view>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>
```

</DemoBlock>
:::

### 自定义高度与文案

`max-height`（rpx）决定折叠高度，`fade-height` 决定渐变高度，`expand-text` / `collapse-text` 换成业务措辞。

:::demo
<DemoBlock>

```vue
<template>
  <view style="background:#0a0a0a;padding:16rpx">
    <dd-fold
      v-model:expanded="open2"
      :max-height="200"
      :fade-height="64"
      expand-text="查看全部明细"
      collapse-text="收起明细"
    >
      <view class="fold-card">
        <dd-list-cell v-for="i in 8" :key="i" size="xs" :title="`键值行 ${i}`" value="值" />
      </view>
    </dd-fold>
  </view>
</template>

<script setup>
import { ref } from 'vue'
const open2 = ref(false)
</script>
```

</DemoBlock>
:::

### 底色不一致时传入渐变终色

`fade-color` 默认取 `--dd-bg-section`；容器所在区域底色不同（如页面纯黑、弹层更亮）时传对应色，渐变才能自然衔接。

:::demo
<DemoBlock>

```vue
<template>
  <view style="background:#222;padding:16rpx">
    <dd-fold v-model:expanded="open3" fade-color="#222">
      <view class="fold-card">
        <dd-list-cell v-for="i in 8" :key="i" size="xs" :title="`键值行 ${i}`" value="值" />
      </view>
    </dd-fold>
  </view>
</template>

<script setup>
import { ref } from 'vue'
const open3 = ref(false)
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| expanded | 展开态（`v-model:expanded` 受控） | `boolean` | `false` |
| maxHeight | 折叠高度（rpx），内容自然高度超过它才折叠 | `number` | `320` |
| fadeHeight | 底部渐变高度（rpx） | `number` | `96` |
| fadeColor | 渐变终色，默认 `--dd-bg-section` | `string` | `''` |
| expandText | 展开文案 | `string` | `'展开详情'` |
| collapseText | 收起文案 | `string` | `'收起'` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:expanded | 展开态变化（`v-model:expanded`） | `value: boolean` |
| toggle | 点「展开 / 收起」时触发 | `value: boolean`（切换后的状态） |

### Methods

| 方法名 | 说明 |
| --- | --- |
| measure | 重新测量内容高度。插槽内容异步变化（触底加载、图片就绪等）后调用 |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 需要折叠的内容 |
