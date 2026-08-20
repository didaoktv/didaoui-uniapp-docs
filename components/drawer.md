# 侧边抽屉 DdDrawer

> 全高度侧边抽屉（左/右）默认配金色渐变 VIP 头像区，v-model boolean 驱动，0.3s 滑动 + 蒙层淡入，触发 open/close/opened/closed 生命周期。

## 介绍

DdDrawer 是从屏幕左/右边缘滑入的全高度抽屉，常用于主导航菜单与筛选面板。默认头部为金色渐变 VIP 区（头像 + 昵称 + VIP 徽标 + 等级），可通过 `#header` 槽自定义。内容区可滚动。`v-model` boolean 控制开关，触发 open/close 立即事件与 opened/closed（300ms 动画结束后）事件。`maskClosable` 控制点击蒙层是否关闭。

## 代码演示

### 基础用法（左侧 VIP 头）

:::demo
<DemoBlock>

```vue
<template>
  <view>
    <dd-button type="primary" @click="open = true">打开抽屉</dd-button>
    <dd-drawer
      v-model="open"
      username="张先生"
      vip-level="黄金会员"
      @closed="onClosed"
    >
      <view style="padding:32rpx;color:#fff">菜单内容</view>
    </dd-drawer>
  </view>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
function onClosed() { console.log('已关闭') }
</script>
```

</DemoBlock>
:::

### 右侧筛选

`position="right"` 从右侧滑入；`#header` 槽自定义头部。

:::demo
<DemoBlock>

```vue
<template>
  <view>
    <dd-button type="primary" @click="open = true">筛选</dd-button>
    <dd-drawer v-model="open" position="right" width="80%">
      <template #header>
        <view style="padding:32rpx;color:#fff;font-weight:600">筛选条件</view>
      </template>
      <view style="padding:32rpx;color:#fff">曲风 / 语言 / 年代 / 难度</view>
    </dd-drawer>
  </view>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>
```

</DemoBlock>
:::

### 禁用蒙层关闭

`mask-closable=false` 时点击蒙层不关闭，需主动控制 v-model。

:::demo
<DemoBlock>

```vue
<template>
  <view>
    <dd-button type="primary" @click="open = true">打开</dd-button>
    <dd-drawer v-model="open" :mask-closable="false" username="用户">
      <view style="padding:32rpx;color:#fff">
        请完成操作后点击下方按钮关闭
        <dd-button type="danger" @click="open = false">关闭</dd-button>
      </view>
    </dd-drawer>
  </view>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue (v-model) | 是否展开 | `boolean` | `false` |
| position | 滑出方向 | `'left' \| 'right'` | `'left'` |
| width | 抽屉宽度 | `string` | `'80%'` |
| maskClosable | 点击蒙层是否关闭 | `boolean` | `true` |
| avatar | 头像图片地址（默认 VIP 头部） | `string` | `''` |
| username | 用户名（默认 VIP 头部） | `string` | `''` |
| vipLevel | 会员等级文字（默认 VIP 头部） | `string` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 展开状态变化时触发 | `val: boolean` |
| open | 开始展开时触发 | — |
| close | 开始关闭时触发 | — |
| opened | 展开动画结束时触发（300ms 后） | — |
| closed | 关闭动画结束时触发（300ms 后） | — |

### Slots

| 名称 | 说明 |
|------|------|
| default | 抽屉主体内容（可滚动） |
| header | 自定义头部内容（覆盖默认 VIP 头部） |

## 设计规范

::: tip 最佳实践
- 左侧抽屉用于主导航菜单。
- 右侧抽屉用于筛选与次要操作。
- 默认 maskClosable=true，点击蒙层关闭。
- 需要时通过 #header 槽覆盖默认 VIP 头部。
- 滑动与淡入动画使用 0.3s ease。
- 通过 v-model boolean 驱动开关。
:::

::: warning 注意事项
- 抽屉宽度不要超过屏幕宽度的 80%。
- 不要在同一屏幕同时使用左右抽屉。
- 不要省略蒙层——会失去层次感。
:::
