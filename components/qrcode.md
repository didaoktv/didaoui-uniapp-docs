# 二维码 DdQrcode

> 二维码组件，基于原生 canvas 绘制（纯 JS 生成矩阵，无三方依赖），支持内容、尺寸、前景/背景色、logo 与纠错级别，供收款码、会员码、连房贴码、邀请函与开票码等场景复用。

## 介绍

DdQrcode 使用 `uni.createCanvasContext` 在 H5 / 微信 / 抖音小程序绘制二维码。矩阵由库内 `libs/utils` 中的 QR 编码器（移植自 Project Nayuki，含 Reed-Solomon 纠错与 8 掩码择优）本地生成，不发起网络请求，适合离线/收款场景。默认前景 `#0A0A0A`、背景 `#ffffff` 保证可扫描性。

## 代码演示

### 基础收款码

:::demo
<DemoBlock>

```vue
<template>
  <dd-qrcode value="KTV-01|收款¥128" :size="220" @ready="onReady" />
</template>

<script setup lang="ts">
function onReady(ok: boolean) {
  console.log('二维码渲染完成:', ok)
}
</script>
```

</DemoBlock>
:::

### 会员码 + 品牌 logo + 高纠错

:::demo
<DemoBlock>

```vue
<template>
  <dd-qrcode
    value="https://m.didaoktv.com/member/1288"
    :size="200"
    ecc="H"
    logo="/static/logo.png"
  />
</template>
```

</DemoBlock>
:::

> 完整可交互演示：运行 `npm run dev:h5`（端口 5274）后访问二维码页（基础收款码 / 尺寸颜色 / 纠错级别）。

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value | 二维码内容（文本/URL/会员码等） | `string` | `''` |
| size | 边长（rpx） | `number` | `200` |
| color | 前景色（二维码模块颜色） | `string` | `#0A0A0A` |
| bgColor | 背景色 | `string` | `#ffffff` |
| logo | logo 图片路径（中心） | `string` | `''` |
| padding | 静区（四周空白模块数） | `number` | `4` |
| ecc | 纠错级别 | `'L' \| 'M' \| 'Q' \| 'H'` | `'M'` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| ready | 绘制完成 | `boolean` |

## 设计规范

::: tip 最佳实践
- 收款码/会员码建议保持黑白默认色，确保任意扫码枪可读。
- 需要加 logo/品牌时用 `ecc="Q"` 或 `"H"` 提升容错，避免 logo 遮挡后失效。
- 二维码尺寸用 `size`（rpx），页面按实际展示宽度取值，静区用默认 `padding=4`。
:::

::: warning 注意事项
- 前景/背景色是保证可扫描性的刻意例外，不随设计系统 token 换色；自定义颜色需谨慎，避免低对比度。
- 小程序端 `drawImage` 远程图片路径可能抛错，logo 请使用本地路径或先 `uni.getImageInfo` 下载。
- 内容过长会自动升级到更大版本（矩阵变大），注意宁小勿大保证清晰。
:::