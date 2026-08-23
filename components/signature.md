# 签名板 DdSignature

> 签名板组件：canvas 手写签名，内置工具栏（撤销 / 清空 / 笔画粗细 / 8 色画笔 / 导出），导出 PNG 图片路径。

## 介绍

DdSignature 用于电子协议签署、服务确认单等场景。触摸绘制实时描线，路径入栈支持逐步撤销；工具栏可调笔画粗细（1-20）与 8 种预设颜色；画布保持白底（导出图片需要）。点击工具栏对勾图标或通过 `ref` 触发导出，`confirm` 事件返回 PNG 临时文件路径；`ref` 亦暴露 `clear` / `undo` 供自定义按钮调用。

## 代码演示

### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <dd-signature
    :width="320"
    :height="200"
    @confirm="onConfirm"
    @clear="onClear"
  />
</template>

<script setup lang="ts">
function onConfirm(path: string) {
  console.log('签名图片', path)
  // 上传 path ...
}
function onClear() {
  console.log('画布已清空')
}
</script>
```

</DemoBlock>
:::

### 自定义样式 + ref 控制

关闭内置工具栏，用自定义按钮调 `clear` / `undo`，导出仍走工具栏或 `confirm`。

:::demo
<DemoBlock>

```vue
<template>
  <view>
    <dd-signature
      ref="signRef"
      :width="320"
      :height="180"
      color="#000000"
      :thickness="4"
      bg-color="#ffffff"
      :show-toolbar="false"
      @confirm="onConfirm"
    />
    <view style="display:flex;gap:16rpx;margin-top:16rpx">
      <dd-button type="secondary" size="sm" @click="signRef?.clear()">清空</dd-button>
      <dd-button type="secondary" size="sm" @click="signRef?.undo()">撤销</dd-button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const signRef = ref()
function onConfirm(path: string) {
  uni.previewImage({ urls: [path] })
}
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| width | 画布宽度（px） | `string \| number` | `300` |
| height | 画布高度（px） | `string \| number` | `200` |
| bgColor | 画布背景色（导出图片背景，建议保持白色） | `string` | `'#ffffff'` |
| color | 默认笔画颜色 | `string` | `'#000000'` |
| thickness | 默认笔画粗细 | `string \| number` | `3` |
| showToolbar | 是否显示内置工具栏 | `boolean` | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| confirm | 导出签名图片成功时触发 | `path: string`（PNG 临时文件路径） |
| clear | 画布清空时触发 | — |
| error | 导出失败时触发 | `error` |

### Methods

通过 `ref` 调用：

| 方法名 | 说明 |
|--------|------|
| clear | 清空画布并触发 `clear` 事件 |
| undo | 撤销上一笔 |

## 设计规范

::: tip 最佳实践
- 签名场景保持白底黑字（默认值），保证打印与归档可读。
- 画布宽度按容器实际宽度传值（px），避免签名比例失真。
- 导出的 path 直接上传，勿转 base64 增大包体。
:::

::: warning 注意事项
- 画布为空（未绘制）时点击导出不会触发 `confirm`，仅控制台警告。
- `bg-color` 建议保持白色，透明背景在部分查看器中显示为黑色。
- 触摸坐标取自事件 touch 对象，嵌套滚动容器内使用时需阻止滚动穿透（画布已 `disable-scroll`）。
:::
