# 验证码按钮 DdCodeButton

> 获取验证码场景的倒计时按钮（内部渲染 dd-button）：点击 → 请求发码 → `ref.start()` 进入倒计时防重；endTime + Date.now() 差值计时避免 setInterval 漂移；keepRunning 模式下开始时落盘结束时间戳（uni storage），H5 刷新/各端离开再进入未到期自动续跑。

## 介绍

DdCodeButton 用于短信验证码等"点击后需冷却一段时间"的按钮。组件管理三态文本（初始 / 倒计时中 `X` 占位秒数 / 结束）与可点状态：倒计时期间按钮禁用并显示剩余秒数，结束后自动恢复。`keepRunning` 开启后，倒计时的结束时间戳在 `start()` 时写入本地存储，页面刷新或组件重建时若未到期则自动续跑剩余时间（多按钮场景用 `uniqueKey` 区分）。选型：验证码冷却选本组件，通用倒计时展示（`HH:mm:ss`、毫秒、活动结束时间）选 `dd-count-down`。

## 代码演示

### 基础用法

`@click` 里发验证码，成功后调 `ref.start()` 开始倒计时。

:::demo
<DemoBlock>

```vue
<template>
  <dd-code-button ref="codeRef" @click="sendCode" />
</template>

<script setup>
import { ref } from 'vue'
const codeRef = ref()
async function sendCode() {
  await apiSendSms()
  codeRef.value.start()
}
</script>
```

</DemoBlock>
:::

### 自定义文本与时长

`changeText` 中 `X`/`x` 为剩余秒数占位符；`time` 为秒数。

:::demo
<DemoBlock>

```vue
<template>
  <dd-code-button ref="codeRef" :time="120" change-text="X s 后重发" end-text="重新发送" />
</template>
```

</DemoBlock>
:::

### 按钮形态透传

`type` / `size` / `customClass` / `customStyle` 透传给内部 dd-button。

:::demo
<DemoBlock>

```vue
<template>
  <dd-code-button ref="codeRef" type="text" size="md" />
</template>
```

</DemoBlock>
:::

### 跨页续跑

`keepRunning` 开启时，刷新页面/重新进入后倒计时未结束会自动续跑；`uniqueKey` 区分多个验证码按钮。

:::demo
<DemoBlock>

```vue
<template>
  <dd-code-button ref="codeRef" keep-running unique-key="login" />
</template>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| time | 倒计时秒数 | `number \| string` | `60` |
| startText | 初始文本 | `string` | `'获取验证码'` |
| changeText | 倒计时文本，`X`/`x` 为剩余秒数占位符 | `string` | `'X秒重新获取'` |
| endText | 倒计时结束文本 | `string` | `'重新获取'` |
| keepRunning | H5 刷新/各端离开再进入时是否继续倒计时 | `boolean` | `false` |
| uniqueKey | 多个组件间续跑记录的区分 key | `string` | `'dd-code-button'` |
| type | 按钮类型，透传 dd-button | `string` | `'primary'` |
| size | 按钮尺寸，透传 dd-button | `string` | `'sm'` |
| customClass | 自定义类名，合并到根元素 | `string` | `''` |
| customStyle | 自定义样式，合并到根元素 | `Record<string, string>` | `{}` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 可点击状态下点击时触发（在此发起发码请求） | - |
| start | 倒计时开始时触发 | - |
| change | 倒计时变化时触发 | `seconds: number`（剩余秒数） |
| finish | 倒计时结束时触发 | - |

### Methods

通过 `defineExpose` 暴露，可通过 ref 调用：

| 方法 | 说明 |
|------|------|
| start | 开始倒计时（发码成功后调用） |
| reset | 重置倒计时并恢复可点击 |
| canGetCode | 当前是否可点击 |

## 设计规范

::: tip 最佳实践
- 在 `@click` 中调用发码接口，成功后再调 `start()`——倒计时应从验证码发出算起，而非点击瞬间。
- 同一页面多个验证码入口（登录/换绑）各自设置 `uniqueKey`，避免续跑记录互相覆盖。
- 发码接口防重应由后端兜底（sourceKey 幂等），前端倒计时只是体验层防重。
:::

::: warning 注意事项
- keepRunning 的续跑记录在倒计时自然结束或 `reset()` 时清除；到期后重新进入页面不会触发续跑。
- 倒计时为 1s 粒度且基于本地时钟差值，挂后台回来后下一次 tick 自动对齐，无需手动校正。
:::
