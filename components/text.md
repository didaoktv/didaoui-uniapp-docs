# 文本 DdText

> 文本组件集成了项目中常用的文本能力：主题色、价格、手机号/姓名脱敏、日期格式化、超链接、前后图标、行数省略、装饰线等，几乎覆盖特殊文本的全部场景。

## 介绍

DdText 通过 `mode` 切换文本处理模式：`price` 自动加 ￥ 前缀并保留两位小数；`phone` / `name` 配合 `format="encrypt"` 可做星号脱敏；`date` 支持 `format` 自定义日期模板；`link` 模式内部渲染 `dd-link` 并带下划线。`type` 提供主题色（primary 金 / success / warning / error / info / main / content / tips），不传时取主题正文色。

## 代码演示

### 基础用法

`text` 为显示内容，`size` / `bold` / `type` 控制样式。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;flex-direction:column;gap:16rpx">
    <dd-text text="帝王金主题色文本" type="primary" />
    <dd-text text="普通正文文本" />
    <dd-text text="加粗文本" bold />
    <dd-text text="删除线文本" decoration="line-through" />
  </view>
</template>
```

</DemoBlock>
:::

### 模式：价格 / 手机号 / 姓名 / 日期

`format="encrypt"` 对手机号、姓名脱敏；`mode="date"` 时 `format` 为日期模板。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;flex-direction:column;gap:16rpx">
    <dd-text :text="128" mode="price" type="error" />
    <dd-text text="13812345678" mode="phone" format="encrypt" />
    <dd-text text="欧阳靖" mode="name" format="encrypt" />
    <dd-text :text="Date.now()" mode="date" format="yyyy-mm-dd hh:MM" />
  </view>
</template>
```

</DemoBlock>
:::

### 超链接 / 拨打电话 / 图标 / 行数省略

`mode="link"` 渲染超链接；`mode="phone"` + `call` 点击拨号；`lines` 超出省略。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;flex-direction:column;gap:16rpx">
    <dd-text text="点击访问官网" mode="link" href="https://m.didaoktv.com" />
    <dd-text text="13812345678" mode="phone" call />
    <dd-text text="房台说明" prefixIcon="home" suffixIcon="arrow-right" />
    <dd-text text="超出两行的文本将会被截断省略，超出两行的文本将会被截断省略，超出两行的文本将会被截断省略" :lines="2" />
  </view>
</template>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| type | 主题颜色，可选值 `primary` / `warning` / `success` / `info` / `error` / `main` / `content` / `tips` / `light` | `string` | `''` |
| show | 是否显示 | `boolean` | `true` |
| text | 显示的值 | `string \| number` | `''` |
| prefixIcon | 前置图标名 | `string` | `''` |
| suffixIcon | 后置图标名 | `string` | `''` |
| mode | 文本处理模式：`text` 普通文本 / `price` 价格 / `phone` 手机号 / `name` 姓名 / `date` 日期 / `link` 超链接 | `string` | `''` |
| href | `mode=link` 时配置的跳转链接 | `string` | `''` |
| format | 格式化规则：函数或字符串（`encrypt` 脱敏、日期模板） | `string \| Function` | `''` |
| call | `mode=phone` 时点击文本是否拨打电话 | `boolean` | `false` |
| openType | 小程序 button 的 open-type（仅小程序端以 button 渲染） | `string` | `''` |
| bold | 是否粗体 | `boolean` | `false` |
| block | 是否块状（非 nvue 生效） | `boolean` | `false` |
| lines | 文本显示行数，超出显示省略号 | `string \| number` | `''` |
| color | 文本颜色，不传时取主题正文色 | `string` | `''` |
| size | 字体大小（px） | `string \| number` | `15` |
| iconStyle | 图标样式 | `object \| string` | `{ fontSize: '15px' }` |
| decoration | 文字装饰，可选值 `none` / `underline` / `line-through` | `string` | `'none'` |
| margin | 外边距，对象、字符串、数值形式均可 | `object \| string \| number` | `0` |
| lineHeight | 文本行高，支持带单位值或无单位倍数（如 `1.2`） | `string \| number` | `''` |
| align | 文本对齐方式，可选值 `left` / `center` / `right` | `string` | `'left'` |
| wordWrap | 文字换行，可选值 `break-word` / `normal` / `anywhere` | `string` | `'normal'` |
| flex1 | 是否占满剩余空间 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击文本时触发（`mode=phone` 且 `call` 时先拨打电话） | `event` |

## 设计规范

::: tip 最佳实践
- 价格用 `mode="price"` + `type="error"`，自动加 ￥ 与两位小数，避免手拼字符串。
- 隐私场景（账单、工单）手机号/姓名用 `format="encrypt"` 脱敏展示。
- 与 `dd-cell` 搭配时用 `flex1` 让文本占满剩余空间、`suffixIcon` 做右侧箭头。
:::

::: warning 注意事项
- `mode="price"` 时 `text` 必须为金额格式（纯数字），否则控制台报错。
- `mode="link"` 需同时传 `href`（完整 URL）；`mode="date"` 时 `text` 需为合法日期或时间戳。
- `mode` 与 `dd-link` 的行为差异：小程序端链接是复制到剪贴板，不是跳转。
:::
