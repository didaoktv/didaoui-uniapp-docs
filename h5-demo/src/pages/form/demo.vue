<template>
  <dd-top-navbar title="表单" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">基础表单 Basic</text>
      <dd-form ref="basicForm" label-width="160rpx" @submit="onSubmit" @failed="onFailed">
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
        <dd-field
          v-model="form.remark"
          name="remark"
          label="备注"
          type="textarea"
          placeholder="选填，50 字以内"
          :maxlength="50"
          show-word-limit
          autosize
        />
        <view class="demo-actions">
          <dd-button type="primary" size="md" @click="basicForm?.submit()">提交校验</dd-button>
          <dd-button type="secondary" size="md" @click="basicForm?.resetValidation()">清除错误</dd-button>
        </view>
      </dd-form>
      <text class="demo-note">默认 onBlur 失焦触发；required="auto" 随规则显隐星号</text>
      <text class="demo-note">事件回显：{{ lastEvent || '（未触发）' }}</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">触发时机 validateTrigger</text>
      <dd-form validate-trigger="onChange" label-width="160rpx" @submit="onSubmit" @failed="onFailed">
        <dd-field
          v-model="form.email"
          name="email"
          label="邮箱"
          placeholder="输入即校验 onChange"
          :rules="emailRules"
        />
      </dd-form>
      <text class="demo-note">form 设 validate-trigger="onChange"，每个字符输入后立即校验</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">异步校验 Async Validator</text>
      <dd-form label-width="160rpx">
        <dd-field
          v-model="form.username"
          name="username"
          label="用户名"
          placeholder="试试 admin（已占用）"
          clearable
          :rules="usernameRules"
        />
      </dd-form>
      <text class="demo-note">失焦后发起模拟查重，600ms 返回；validator 可返回字符串作为错误消息</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">validateFirst 与 scrollToError</text>
      <view class="demo-switch-row">
        <text class="demo-label">逐项校验（遇错即停）</text>
        <dd-switch v-model="firstMode" />
      </view>
      <dd-form
        ref="longForm"
        label-width="180rpx"
        :validate-first="firstMode"
        scroll-to-error
        @submit="onSubmit"
        @failed="onFailed"
      >
        <dd-field v-model="form.city" name="city" label="城市" placeholder="必填" required="auto" :rules="requiredRule" />
        <dd-field v-model="form.address" name="address" label="详细地址" placeholder="必填" required="auto" :rules="requiredRule" />
        <dd-field v-model="form.zip" name="zip" label="邮编" type="number" placeholder="必填" required="auto" :rules="zipRules" />
        <dd-field v-model="form.contact" name="contact" label="紧急联系人" placeholder="必填" required="auto" :rules="requiredRule" />
        <dd-field v-model="form.contactPhone" name="contactPhone" label="联系电话" type="number" placeholder="必填" required="auto" :rules="phoneRules" />
        <view class="demo-actions">
          <dd-button type="primary" size="md" block @click="longForm?.submit()">提交（校验失败滚动到首个错误）</dd-button>
        </view>
      </dd-form>
      <text class="demo-note">关闭开关：并行校验，全部错误一次性标红</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">顶部标签 labelPosition top</text>
      <dd-form label-position="top">
        <dd-field v-model="form.title" name="title" label="活动标题" placeholder="标签在上方" required="auto" :rules="requiredRule" />
        <dd-field v-model="form.desc" name="desc" label="活动描述" type="textarea" placeholder="多行文本" autosize :maxlength="100" show-word-limit />
      </dd-form>
    </view>

    <view class="demo-section">
      <text class="demo-title">自定义控件插槽校验</text>
      <dd-form ref="customForm" label-width="180rpx" @submit="onSubmit" @failed="onFailed">
        <dd-field v-model="form.agree" name="agree" label="阅读并同意协议" required="auto" :rules="agreeRules">
          <dd-switch :model-value="form.agree === 1" @update:model-value="form.agree = $event ? 1 : 0" />
        </dd-field>
        <dd-field v-model="form.roomType" name="roomType" label="包厢类型" required="auto" :rules="requiredRule">
          <dd-radio-group v-model="form.roomType">
            <dd-radio value="standard" size="sm" label="标准包厢" />
            <dd-radio value="vip" size="sm" label="VIP包厢" />
          </dd-radio-group>
        </dd-field>
        <dd-field v-model="form.extras" name="extras" label="增值服务（限选2项）" required="auto" :rules="extrasRules">
          <dd-checkbox-group v-model="form.extras" :max="2">
            <dd-checkbox value="fruit" size="sm" label="果盘" />
            <dd-checkbox value="decor" size="sm" label="布置" />
            <dd-checkbox value="photo" size="sm" label="跟拍" />
          </dd-checkbox-group>
        </dd-field>
        <view class="demo-actions">
          <dd-button type="primary" size="md" @click="onValidateCustom">手动 validate()</dd-button>
        </view>
      </dd-form>
      <text class="demo-note">default 插槽内嵌 switch / radio-group / checkbox-group，值经 field 的 modelValue 参与校验</text>
    </view>

  </view>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  phone: '',
  remark: '',
  email: '',
  username: '',
  city: '',
  address: '',
  zip: '',
  contact: '',
  contactPhone: '',
  title: '',
  desc: '',
  agree: 0,
  roomType: '',
  extras: [] as string[],
})

const basicForm = ref()
const longForm = ref()
const customForm = ref()
const firstMode = ref(false)
const lastEvent = ref('')

const nameRules = [
  { required: true, message: '请输入姓名' },
  { validator: (v: string) => v.trim().length >= 2 || '姓名至少 2 个字符' },
]
const phoneRules = [
  { required: true, message: '请输入手机号' },
  { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确' },
]
const emailRules = [
  { required: true, message: '请输入邮箱' },
  { pattern: /^[\w.-]+@[\w-]+(\.[\w-]+)+$/, message: '邮箱格式不正确' },
]
const usernameRules = [
  { required: true, message: '请输入用户名' },
  { validator: checkUsername, message: '用户名不可用' },
]
const requiredRule = [{ required: true, message: '该项为必填' }]
const zipRules = [
  { required: true, message: '请输入邮编' },
  { pattern: /^\d{6}$/, message: '邮编为 6 位数字' },
]
const agreeRules = [{ validator: (v: number) => v === 1 || '请先同意协议' }]
const extrasRules = [{ validator: (v: string[]) => v.length > 0 || '至少选择一项增值服务' }]

/** 模拟异步查重：admin 已占用 */
async function checkUsername(val: string): Promise<boolean | string> {
  if (!val) return true
  await new Promise((r) => setTimeout(r, 600))
  return val === 'admin' ? '用户名已被占用' : true
}

function onSubmit(values: Record<string, any>) {
  lastEvent.value = `submit → ${JSON.stringify(values)}`
}

function onFailed(errors: { name: string; message: string }[]) {
  lastEvent.value = `failed → ${errors.map((e) => `${e.name}: ${e.message}`).join('；')}`
}

async function onValidateCustom() {
  try {
    await customForm.value?.validate()
    uni.showToast({ title: '校验通过', icon: 'none' })
  } catch {
    // 错误已回显在各 field 上
  }
}
</script>

<style scoped>
.demo-page { }

.demo-actions {
  display: flex;
  gap: 20rpx;
  padding: 24rpx 32rpx;
}

.demo-switch-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16rpx 32rpx;
}
</style>
