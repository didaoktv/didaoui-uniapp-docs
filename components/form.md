# 表单 DdForm

> 轻量校验调度器：规则分散在各 dd-field 上，dd-form 只做注册、触发与聚合（vant runRules 思想，自研无依赖）。

## 介绍

DdForm 是表单容器组件，包裹若干 `dd-field` 组成完整表单。子字段通过 provide/inject 自动注册，校验规则以 `rules` 挂在各 field 上，form 负责：统一触发时机（`validate-trigger`）、并行/逐项校验（`validate-first`）、统一标签布局下发（`label-position` / `label-width`）、提交校验（`submit()`，失败可 `scroll-to-error` 滚动到首个错误）。支持同步正则、自定义 validator 与异步 Promise 校验。

## 代码演示

### 基础用法

field 设 `name` 与 `rules`，`required="auto"` 让星号随规则中的 required 显隐。默认 onBlur 失焦触发校验。

:::demo
<DemoBlock>

```vue
<template>
  <dd-form ref="formRef" label-width="160rpx" @submit="onSubmit" @failed="onFailed">
    <dd-field
      v-model="form.name"
      name="name"
      label="姓名"
      placeholder="请输入姓名"
      required="auto"
      clearable
      :rules="nameRules"
    />
    <dd-field
      v-model="form.phone"
      name="phone"
      label="手机号"
      type="number"
      placeholder="请输入手机号"
      required="auto"
      :rules="phoneRules"
    />
    <dd-button type="primary" size="md" @click="formRef?.submit()">提交校验</dd-button>
  </dd-form>
</template>

<script setup>
import { reactive, ref } from 'vue'
const form = reactive({ name: '', phone: '' })
const formRef = ref()
const nameRules = [
  { required: true, message: '请输入姓名' },
  { validator: (v) => v.trim().length >= 2 || '姓名至少 2 个字符' },
]
const phoneRules = [
  { required: true, message: '请输入手机号' },
  { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确' },
]
function onSubmit(values) { console.log('通过', values) }
function onFailed(errors) { console.log('失败', errors) }
</script>
```

</DemoBlock>
:::

### 触发时机 validateTrigger

form 级 `validate-trigger="onChange"` 下发全部子字段，每个字符输入后立即校验；单条规则可用 `rule.trigger` 覆盖。

:::demo
<DemoBlock>

```vue
<template>
  <dd-form validate-trigger="onChange" label-width="160rpx">
    <dd-field
      v-model="email"
      name="email"
      label="邮箱"
      placeholder="输入即校验 onChange"
      :rules="emailRules"
    />
  </dd-form>
</template>

<script setup>
import { ref } from 'vue'
const email = ref('')
const emailRules = [
  { required: true, message: '请输入邮箱' },
  { pattern: /^[\w.-]+@[\w-]+(\.[\w-]+)+$/, message: '邮箱格式不正确' },
]
</script>
```

</DemoBlock>
:::

### 异步校验

validator 返回 Promise，适合查重等接口校验；返回字符串可直接作为错误消息（vant 语义）。

:::demo
<DemoBlock>

```vue
<template>
  <dd-form label-width="160rpx">
    <dd-field
      v-model="username"
      name="username"
      label="用户名"
      placeholder="试试 admin（已占用）"
      clearable
      :rules="usernameRules"
    />
  </dd-form>
</template>

<script setup>
import { ref } from 'vue'
const username = ref('')
async function checkUsername(val) {
  if (!val) return true
  await new Promise((r) => setTimeout(r, 600))
  return val === 'admin' ? '用户名已被占用' : true
}
const usernameRules = [
  { required: true, message: '请输入用户名' },
  { validator: checkUsername, message: '用户名不可用' },
]
</script>
```

</DemoBlock>
:::

### validateFirst 与 scrollToError

默认并行校验全部字段、错误一次性标红；`validate-first` 逐项校验遇错即停，`scroll-to-error` 提交失败时滚动到首个错误字段。

:::demo
<DemoBlock>

```vue
<template>
  <dd-form
    ref="formRef"
    label-width="180rpx"
    validate-first
    scroll-to-error
    @submit="onSubmit"
  >
    <dd-field v-model="city" name="city" label="城市" placeholder="必填" required="auto" :rules="requiredRule" />
    <dd-field v-model="address" name="address" label="详细地址" placeholder="必填" required="auto" :rules="requiredRule" />
    <dd-field v-model="zip" name="zip" label="邮编" type="number" placeholder="必填" required="auto" :rules="zipRules" />
    <dd-button type="primary" size="md" block @click="formRef?.submit()">提交（失败滚动到首个错误）</dd-button>
  </dd-form>
</template>

<script setup>
import { ref } from 'vue'
const formRef = ref()
const city = ref('')
const address = ref('')
const zip = ref('')
const requiredRule = [{ required: true, message: '该项为必填' }]
const zipRules = [
  { required: true, message: '请输入邮编' },
  { pattern: /^\d{6}$/, message: '邮编为 6 位数字' },
]
function onSubmit(values) { console.log('通过', values) }
</script>
```

</DemoBlock>
:::

### 顶部标签 labelPosition

`label-position="top"` 下发全部子字段，标签移到控件上方，适合移动端窄屏长标签。

:::demo
<DemoBlock>

```vue
<template>
  <dd-form label-position="top">
    <dd-field v-model="title" name="title" label="活动标题" placeholder="标签在上方" required="auto" :rules="requiredRule" />
    <dd-field v-model="desc" name="desc" label="活动描述" type="textarea" placeholder="多行文本" autosize :maxlength="100" show-word-limit />
  </dd-form>
</template>

<script setup>
import { ref } from 'vue'
const title = ref('')
const desc = ref('')
const requiredRule = [{ required: true, message: '该项为必填' }]
</script>
```

</DemoBlock>
:::

### 自定义控件插槽校验

field 默认插槽内嵌 switch / radio-group / checkbox-group 等任意控件，值经 field 的 modelValue 参与统一校验。

:::demo
<DemoBlock>

```vue
<template>
  <dd-form ref="formRef" label-width="180rpx" @submit="onSubmit">
    <dd-field v-model="agree" name="agree" label="阅读并同意协议" required="auto" :rules="agreeRules">
      <dd-switch :model-value="agree === 1" @update:model-value="agree = $event ? 1 : 0" />
    </dd-field>
    <dd-field v-model="extras" name="extras" label="增值服务（限选2项）" required="auto" :rules="extrasRules">
      <dd-checkbox-group v-model="extras" :max="2">
        <dd-checkbox value="fruit" size="sm" label="果盘" />
        <dd-checkbox value="decor" size="sm" label="布置" />
        <dd-checkbox value="photo" size="sm" label="跟拍" />
      </dd-checkbox-group>
    </dd-field>
    <dd-button type="primary" size="md" @click="onValidate">手动 validate()</dd-button>
  </dd-form>
</template>

<script setup>
import { ref } from 'vue'
const formRef = ref()
const agree = ref(0)
const extras = ref([])
const agreeRules = [{ validator: (v) => v === 1 || '请先同意协议' }]
const extrasRules = [{ validator: (v) => v.length > 0 || '至少选择一项增值服务' }]
function onSubmit(values) { console.log('通过', values) }
async function onValidate() {
  try {
    await formRef.value?.validate()
    uni.showToast({ title: '校验通过', icon: 'none' })
  } catch {
    // 错误已回显在各 field 上
  }
}
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| validateTrigger | 子字段默认校验触发时机 | `'onBlur' \| 'onChange' \| 'onSubmit'` | `'onBlur'` |
| validateFirst | 逐项校验，遇错即停（默认并行全量） | `boolean` | `false` |
| labelPosition | 下发子 field 的标签位置 | `'left' \| 'top'` | `'left'` |
| labelWidth | 下发子 field 的标签宽度（如 `'160rpx'`，空 = 子自身默认） | `string` | `''` |
| disabled | 下发禁用全部子 field | `boolean` | `false` |
| scrollToError | submit 校验失败时滚动到第一个错误字段 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| submit | 校验全部通过时触发 | `values: Record<string, any>` |
| failed | 校验失败时触发 | `errors: { name: string; message: string }[]` |

### Methods

通过 ref 调用。

| 方法名 | 说明 | 参数 | 返回值 |
|--------|------|------|--------|
| validate | 校验（不传 = 全部；传 name 或数组 = 指定字段），失败抛错数组 | `name?: string \| string[]` | `Promise<Record<string, any>>` |
| validateField | 校验单个字段，失败抛错数组 | `name: string` | `Promise<void>` |
| resetValidation | 清除校验错误（不传 = 全部） | `name?: string \| string[]` | — |
| submit | 校验全部后按结果派发 submit / failed 事件 | — | `Promise<void>` |
| getValues | 收集全部字段当前值 | — | `Record<string, any>` |

### 校验规则 DdFieldRule

规则数组挂在各 dd-field 的 `rules` 上，按序执行、首个失败短路。

| 字段 | 说明 | 类型 |
|------|------|------|
| required | 必填（空值报错；空值 = `''` / `null` / `undefined` / 空数组） | `boolean` |
| message | 错误消息；缺省时按规则类型兜底（不能为空 / 格式不正确 / 校验不通过） | `string` |
| pattern | 正则校验（仅对非空值测试） | `RegExp` |
| validator | 自定义校验：`true` = 通过，`false` = 用 message 报错，返回 `string` = 直接作为错误消息；支持 Promise | `(value: any) => boolean \| string \| Promise<boolean \| string>` |
| trigger | 本条规则的触发时机；缺省 = 任意触发都执行 | `'onBlur' \| 'onChange' \| 'onSubmit'` |

## 设计规范

::: tip 最佳实践
- 规则分散在各 field 上、form 只做调度：增删字段无需改 form 配置。
- 提交按钮放在 form 内并调 `formRef.submit()`，而不是各自监听点击再手动 validate。
- 接口查重类校验用异步 validator 并返回字符串消息，错误直接回显在字段上。
:::

::: warning 注意事项
- field 必须设置唯一的 `name`，否则不注册进 form、不参与校验与取值。
- validate 失败是 throw 错误数组，调用方需 catch（submit 事件路径已内部处理）。
:::
