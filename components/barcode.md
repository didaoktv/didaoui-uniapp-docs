# 条形码 DdBarcode

> 条形码组件，纯 JS 本地编码绘制（无三方依赖）：支持 CODE128 / CODE39 / EAN13 / EAN8 / UPC 等主流格式，canvas 直接渲染或导出为图片，文字位置/边距/配色可配。

## 介绍

DdBarcode 与 `dd-qrcode` 同为 canvas 码类组件，内置于库内的编码器（CODE128-B 含校验位、CODE39、EAN13/EAN8/EAN5/EAN2、UPC-A/UPC-E）完成条码生成，全程不发起网络请求。默认 `format="auto"` 按 CODE128 处理任意 ASCII 内容。`useCanvas=true` 直接在画布渲染（适合展示）；`useCanvas=false` 通过离屏 canvas 导出 tempFilePath 图片（适合打印、分享场景）。`displayValue` 在条码上下方显示可读文字。

## 代码演示

### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <dd-barcode value="DDKTV-20260822-001" />
</template>
```

</DemoBlock>
:::

### 指定格式与样式

EAN13 需 13 位合法校验位数字；可自定义尺寸、配色与文字位置。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;flex-direction:column;gap:24rpx;align-items:center">
    <dd-barcode value="6901234567892" format="EAN13" :width="240" :height="90" />
    <dd-barcode
      value="DDVIP-0088"
      format="CODE39"
      :width="260"
      :height="70"
      text-position="top"
      text-align="left"
      :font-size="12"
      @rendered="onRendered"
    />
  </view>
</template>

<script setup lang="ts">
function onRendered(res: any) {
  console.log('条码渲染完成', res)
}
</script>
```

</DemoBlock>
:::

### 导出为图片

`useCanvas=false` 时组件渲染为 image，`rendered` 事件回传临时文件路径。

:::demo
<DemoBlock>

```vue
<template>
  <dd-barcode value="ROOM-V01" :use-canvas="false" @rendered="onRendered" />
</template>

<script setup lang="ts">
function onRendered(res: any) {
  // res = { type: 'image', value, path }
  console.log('条码图片路径', res.path)
}
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value | 条码内容（必填） | `string \| number` | — |
| format | 条码格式，`auto`（按 CODE128）/ `CODE128` / `CODE39` / `EAN13` / `EAN8` / `EAN5` / `EAN2` / `UPC` / `UPCA` / `UPCE` 等 | `string` | `'auto'` |
| width | 条码宽度 | `number` | `200` |
| height | 条码高度 | `number` | `80` |
| displayValue | 是否显示条码下方文字 | `boolean` | `true` |
| text | 覆盖显示的文字内容 | `string` | `value` |
| fontOptions | 字体选项（如 `'bold'`） | `string` | `''` |
| font | 文字字体 | `string` | `'monospace'` |
| textAlign | 文字对齐，`left` / `center` / `right` | `string` | `'center'` |
| textPosition | 文字位置，`top` / `bottom` | `string` | `'bottom'` |
| textMargin | 文字与条码的间距 | `number` | `2` |
| fontSize | 文字大小 | `number` | `14` |
| background | 背景色 | `string` | `'#ffffff'` |
| lineColor | 条码颜色 | `string` | `'#000000'` |
| margin | 四周留白（px） | `number` | `10` |
| marginTop | 上边距（缺省取 margin） | `number` | — |
| marginBottom | 下边距（缺省取 margin） | `number` | — |
| marginLeft | 左边距（缺省取 margin） | `number` | — |
| marginRight | 右边距（缺省取 margin） | `number` | — |
| useCanvas | true 时 canvas 直接渲染；false 时导出为图片展示 | `boolean` | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| rendered | 渲染/导出完成 | canvas 模式 `{ type: 'canvas', id }`；图片模式 `{ type: 'image', value, path }` |
| error | 编码或绘制失败（如 EAN13 校验位不合法） | `error` |

## 设计规范

::: tip 最佳实践
- 会员卡号、订单号等任意内容用默认 `auto`（CODE128）；商品条码用 EAN13/UPC。
- 保持黑白默认配色确保扫码枪可读（与二维码同属刻意例外，不随主题换色）。
- 需要打印或长按保存时用 `use-canvas=false` 拿图片路径。
:::

::: warning 注意事项
- EAN13/EAN8/UPC 等数字格式对位数和校验位有严格要求，内容不合法会触发 `error` 并显示错误占位。
- validator 允许传入更多格式名（MSI、codabar 等），但当前编码器实际覆盖 auto/CODE128/CODE39/EAN13/EAN8/EAN5/EAN2/UPC/UPCA/UPCE，其余格式名会回落 CODE128。
- 条码内容越长模块越密，扫描设备读不出时请加宽 `width`。
:::
