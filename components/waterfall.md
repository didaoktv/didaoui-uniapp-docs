# 瀑布流 DdWaterfall

> 不等高多列布局，渲染后实测项高，按数据顺序逐项塞进**当前最矮列**；适合图片列表、商品流、歌单墙、房态看板。

## 介绍

DdWaterfall **按最矮列填充**：按数据顺序逐项找累计高度最小的列塞入。每列独立堆叠，所以不会像普通两列网格那样出现整行等高留白，末尾那张也会自然跟在较矮的列下面。

落位顺序仍是数据顺序，但列内参差（高卡片会把它所在列后面的项往下推），因此视觉读序是「左右成对大致对齐、逐行向下」；要严格按行对齐请用普通 grid。首屏先按奇偶预排渲染，量到高度后再重排一次（小程序 setData 后布局异步，故等待约 200ms）。

组件只读消费 `v-model` 数据，不修改数组；项内容通过默认插槽自绘，作用域参数为 `{ item, index }`（`index` 是原数组下标，可作 key 与点击定位）。

## 代码演示

### 基础用法

默认 2 列、间距 16rpx，项高由插槽内容自由决定。

:::demo
<DemoBlock>

```vue
<template>
  <dd-waterfall :model-value="items">
    <template #default="{ item, index }">
      <view class="wf-card">
        <view class="wf-thumb" :style="`height:${item.height}rpx; background:${item.color};`" />
        <text class="wf-title">{{ item.title }}</text>
      </view>
    </template>
  </dd-waterfall>
</template>

<script setup>
const items = [
  { title: '热歌榜', height: 160, color: 'linear-gradient(135deg,#FFC107,#D4891A)' },
  { title: '新歌速递', height: 260, color: 'linear-gradient(135deg,#42A5F5,#1565C0)' },
  { title: '包房推荐', height: 200, color: 'linear-gradient(135deg,#8E24AA,#4A148C)' },
  { title: '生日派对', height: 320, color: 'linear-gradient(135deg,#26A69A,#00695C)' },
  { title: '限定套餐', height: 180, color: 'linear-gradient(135deg,#EF5350,#B71C1C)' },
  { title: '会员权益', height: 240, color: 'linear-gradient(135deg,#66BB6A,#2E7D32)' },
]
</script>
```

</DemoBlock>
:::

### 列数与间距

`columns` 控制列数（最小 1），`gap` 同时作用于列间距与项间距，单位为 rpx。

:::demo
<DemoBlock>

```vue
<template>
  <dd-waterfall :model-value="items" :columns="3" :gap="24">
    <template #default="{ item }">
      <view class="wf-card">
        <view class="wf-thumb" :style="`height:${item.height}rpx; background:${item.color};`" />
      </view>
    </template>
  </dd-waterfall>
</template>

<script setup>
const items = [
  { height: 160, color: 'linear-gradient(135deg,#FFC107,#D4891A)' },
  { height: 220, color: 'linear-gradient(135deg,#42A5F5,#1565C0)' },
  { height: 180, color: 'linear-gradient(135deg,#8E24AA,#4A148C)' },
  { height: 300, color: 'linear-gradient(135deg,#26A69A,#00695C)' },
]
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue | 数据数组，组件只读消费 | `Record<string, any>[]` | `[]` |
| columns | 列数（小于 1 时按 1 处理） | `number` | `2` |
| gap | 列间距与项间距（rpx） | `number` | `16` |
| customStyle | 根节点自定义样式 | `string` | `''` |
| customClass | 根节点自定义类名 | `string` | `''` |

### Slots

| 名称 | 说明 | 参数 |
|------|------|------|
| default | 项内容（宽度撑满一列，高度自适应） | `{ item, index }` |

## 设计规范

::: tip 最佳实践
- 图片流、商品流用 2 列；文字为主、项高差异小的列表用 3-4 列。
- 项内容自带圆角与底色（如 `dd-card` 或自绘卡片），瀑布流本身不绘制背景。
- 需要按编号/名称找项的列表（房态看板、目录页）直接用瀑布流即可：读序始终等于数据顺序。
- 长列表（> 200 项）考虑分页追加。
:::

::: warning 注意事项
- 视觉顺序由数据顺序决定：想换排列（按名称/按余时）只改传入的数组，组件不做二次排序或均衡。
- 组件不测量节点高度，因此图片等异步内容撑高时列内会自行顶开，不需要手动重排。
- 项高度差异越大，各列长度差越明显（顺序优先于均衡，这是刻意取舍）。
:::
