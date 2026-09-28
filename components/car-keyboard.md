# 车牌键盘 DdCarKeyboard

> 车牌输入组件：格子展示 + 键盘一体，v-model 双向绑定，支持 focus / blur 事件，0 位省份简称、末位新能源绿牌位。

## 介绍

DdCarKeyboard 用于车牌号输入，格子与键盘一体：点击任意格子弹出键盘。0 位为省份简称，其余位字母数字按位锁键，第 8 位为新能源绿牌位。通过 `modelValue` 双向绑定车牌值。

## 代码演示

### 基础车牌输入

:::demo
<DemoBlock>

```vue
<template>
  <view>
    <dd-car-keyboard v-model="carVal" />
    <view>车牌号：{{ carVal || '尚未输入' }}</view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
const carVal = ref('')
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue (v-model) | 车牌号 | `string` | `''` |
| customClass | 自定义样式类 | `string` | `''` |
| customStyle | 自定义内联样式 | `object` | `{}` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 车牌值变化时触发 | `val: string` |
| focus | 键盘弹出时触发 | `-` |
| blur | 键盘收起时触发 | `-` |

## 设计规范

::: tip 最佳实践
- 用于停车场、预约登记等车牌采集场景。
- 提交前校验省份简称位与字符集。
:::

::: warning 注意事项
- 键盘弹出为弹层形态，页面滚动由组件内部处理。
- 车牌值为纯字母数字组合，勿混入空格。
:::
