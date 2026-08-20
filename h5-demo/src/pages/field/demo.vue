<template>
  <dd-top-navbar title="表单项" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">基础表单 Basic Form</text>
      <view class="demo-col">
        <dd-field v-model="name" label="预订人" required placeholder="请输入姓名" clearable />
        <dd-field v-model="phone" label="手机号" type="number" required error error-message="请输入正确的手机号" placeholder="11位手机号" />
        <dd-field v-model="remark" label="备注" type="textarea" placeholder="请输入备注" :maxlength="50" show-word-limit />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">输入类型 Type</text>
      <view class="demo-col">
        <dd-field v-model="t1" label="文本" type="text" placeholder="普通文本" />
        <dd-field v-model="t2" label="密码" type="password" placeholder="输入密码" />
        <dd-field v-model="t3" label="数字" type="number" placeholder="输入数字" />
        <dd-field v-model="t4" label="小数" type="digit" placeholder="输入小数金额" />
        <dd-field v-model="t5" label="多行文本" type="textarea" placeholder="多行文本内容" autosize />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">必填 Required</text>
      <view class="demo-col">
        <dd-field v-model="r1" label="姓名" required placeholder="请输入姓名" />
        <dd-field v-model="r2" label="邮箱" required placeholder="请输入邮箱" error error-message="邮箱格式错误" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">错误状态 Error</text>
      <view class="demo-col">
        <dd-field v-model="e1" label="用户名" error error-message="用户名已被占用" placeholder="请输入用户名" />
        <dd-field v-model="e2" label="密码" :error="e2.length < 6" error-message="密码长度至少 6 位" placeholder="请输入密码" />
        <dd-field v-model="e3" label="验证码" error placeholder="错误状态" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">清除 Clearable</text>
      <view class="demo-col">
        <dd-field v-model="c1" label="昵称" clearable placeholder="可清除内容" />
        <dd-field v-model="c2" label="邮箱" clearable placeholder="点击 × 清除" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">字数限制 Word Limit</text>
      <view class="demo-col">
        <dd-field v-model="w1" label="简介" :maxlength="20" show-word-limit placeholder="最多 20 字" />
        <dd-field v-model="w2" label="签名" type="textarea" :maxlength="100" show-word-limit placeholder="最多 100 字" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">对齐与边框 Alignment & Border</text>
      <view class="demo-col">
        <dd-field model-value="左对齐内容" label="左对齐" input-align="left" />
        <dd-field model-value="居中内容" label="居中" input-align="center" />
        <dd-field model-value="右对齐内容" label="右对齐" input-align="right" />
        <dd-field model-value="无边框" label="无边框" borderless />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">禁用 Disabled</text>
      <view class="demo-col">
        <dd-field model-value="禁用内容" label="禁用字段" disabled />
        <dd-field model-value="禁用且无边框" label="禁用" disabled borderless />
        <dd-field model-value="禁用且必填" label="禁用" required disabled />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">实时绑定 Binding</text>
      <text class="demo-note">name = {{ name }}</text>
      <text class="demo-note">phone = {{ phone }}</text>
      <text class="demo-note">w1 = {{ w1 }} / 20</text>
    </view>

  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdField } from '@didaoktv/didaoui-uniapp'


const name = ref('张先生')
const phone = ref('13800138')
const remark = ref('')
const t1 = ref('文本内容')
const t2 = ref('')
const t3 = ref('')
const t4 = ref('')
const t5 = ref('')
const r1 = ref('')
const r2 = ref('test')
const e1 = ref('admin')
const e2 = ref('12345')
const e3 = ref('1234')
const c1 = ref('测试昵称')
const c2 = ref('')
const w1 = ref('你好')
const w2 = ref('')
</script>

<style scoped>
.demo-page { }
</style>
