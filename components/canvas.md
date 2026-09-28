# 画布 DdCanvas

> 多端 Canvas 封装：2d 上下文 + 常用绘图方法 + 尺寸/单位控制，支持 H5 / 小程序 / App / App-NVUE（webview），ready 事件后即可绘制。

## 介绍

DdCanvas 统一封装 uni 多端 Canvas 的差异：H5 与小程序使用 2d 上下文，App-NVUE 走 webview 桥接。通过 `ready` 事件拿到画布实例后，即可调用 `setFillStyle` / `setFontSize` / `fillRect` / `fillText` / `arc` / `draw` 等方法绘制，并支持 `exportImage` 导出图片。

## 代码演示

### 基础绘制

:::demo
<DemoBlock>

```vue
<template>
  <dd-canvas ref="canvasRef" :width="320" :height="160" bgColor="#0A0A0A" @ready="onReady" />
</template>

<script setup>
import { ref } from 'vue'
const canvasRef = ref(null)

function onReady() {
  const c = canvasRef.value
  c.setFillStyle('#F5A623')
  c.fillRect(0, 0, 320, 160)
  c.setFillStyle('#0A0A0A')
  c.setFontSize(24)
  c.fillText('帝到KTV · 欢唱之夜', 24, 48)
  c.draw()
}
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| canvasId | 画布 id | `string` | 随机生成 |
| width | 画布宽度 | `string \| number` | `300` |
| height | 画布高度 | `string \| number` | `300` |
| unit | 尺寸单位 | `'px' \| 'rpx'` | `'px'` |
| useRootHeightAndWidth | 是否撑满根容器宽高 | `boolean` | `false` |
| bgColor | 背景色 | `string` | `'#ffffff'` |
| disableScroll | 是否禁止页面随触摸滚动 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| ready | 画布初始化完成 | `{ width, height }` |
| touchstart / touchmove / touchend | 画布触摸事件 | `event` |

### 方法

| 方法 | 说明 |
|------|------|
| getCanvasContext() | 获取原生绘图上下文 |
| setFillStyle / setStrokeStyle / setFontSize | 设置填充色/描边色/字号 |
| fillRect / fillText / arc / beginPath / fill / draw | 绘图原语 |
| clearCanvas() | 清空并重绘背景 |
| exportImage(fileType, quality) | 导出图片路径 |

## 设计规范

::: tip 最佳实践
- 绘制逻辑统一封装为函数，在 ready 回调中调用。
- 导出图片前先 draw 提交绘制队列。
:::

::: warning 注意事项
- App-NVUE 走 webview 桥接，勿依赖原生 canvas 2d API。
- width/height 变化会触发画布刷新，重绘逻辑需幂等。
:::
