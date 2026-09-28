<template>
  <dd-top-navbar title="输入框" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">基础类型 Type</text>
      <dd-cell-group>
        <dd-field v-model="text" label="文本" placeholder="请输入文本" />
        <dd-field v-model="pwd" type="password" label="密码" placeholder="请输入密码" />
        <dd-field v-model="num" type="number" label="人数" placeholder="请输入数字" />
        <dd-field v-model="remark" type="textarea" label="备注" placeholder="选填" rows="3" />
      </dd-cell-group>
    </view>

    <view class="demo-section">
      <text class="demo-title">标签布局 Label Layout</text>
      <text class="demo-label">labelWidth 160rpx + labelAlign right</text>
      <dd-cell-group>
        <dd-field v-model="w1" label="宽标签" label-width="160rpx" label-align="right" placeholder="标签右对齐" />
      </dd-cell-group>
      <text class="demo-label" style="margin-top:16rpx">labelPosition top</text>
      <dd-cell-group>
        <dd-field v-model="w2" label="活动说明" label-position="top" placeholder="标签在上方" />
      </dd-cell-group>
    </view>

    <view class="demo-section">
      <text class="demo-title">必填 Required（auto 模式）</text>
      <dd-cell-group>
        <dd-field v-model="r1" label="姓名" required="auto" :rules="[{ required: true, message: '请输入姓名' }]" />
      </dd-cell-group>
      <text class="demo-note">required="auto"：rules 含 required 规则时自动显示星号</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">清空按钮 clearable 与 clearTrigger</text>
      <dd-cell-group>
        <dd-field v-model="c1" label="聚焦显示" clearable placeholder="聚焦后显示清空按钮" />
        <dd-field v-model="c2" label="恒显" clearable clear-trigger="always" placeholder="一直显示清空按钮" />
      </dd-cell-group>
    </view>

    <view class="demo-section">
      <text class="demo-title">格式化 formatter（手机号 3-4-4）</text>
      <dd-cell-group>
        <dd-field v-model="phone" label="手机号" type="number" :maxlength="13" :formatter="phoneFormat" placeholder="输入自动分隔" />
      </dd-cell-group>
      <text class="demo-note">{{ phone }}</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">字数统计 showWordLimit</text>
      <dd-cell-group>
        <dd-field v-model="limit" type="textarea" label="留言" :maxlength="30" show-word-limit placeholder="最多 30 字" />
      </dd-cell-group>
    </view>

    <view class="demo-section">
      <text class="demo-title">图标与插槽 Slots</text>
      <dd-cell-group>
        <dd-field v-model="s1" label="会员名" left-icon="user" placeholder="左侧图标" />
        <dd-field v-model="s2" label="验证码" placeholder="右侧按钮插槽">
          <template #button>
            <dd-button size="sm" type="primary" plain>发送验证码</dd-button>
          </template>
        </dd-field>
        <dd-field v-model="s3" label="自定义输入区" placeholder="">
          <dd-switch v-model="s3on" />
        </dd-field>
        <dd-field v-model="s4" label="扩展行" placeholder="底部 extra 插槽">
          <template #extra>
            <text class="demo-note">extra 插槽内容：勾选即同意《会员协议》</text>
          </template>
        </dd-field>
      </dd-cell-group>
    </view>

    <view class="demo-section">
      <text class="demo-title">isLink / clickable / readonly / disabled</text>
      <dd-cell-group>
        <dd-field v-model="l1" label="选择器" placeholder="点击选择房型" readonly is-link @click="tip('打开选择器')" />
        <dd-field v-model="l2" label="不可编辑" placeholder="readonly 状态" readonly />
        <dd-field v-model="l3" label="已禁用" placeholder="disabled 状态" disabled />
      </dd-cell-group>
      <text class="demo-note">readonly 可聚焦展示但拦输入且无禁用样式；disabled 半透明</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">错误态 error / errorMessage</text>
      <dd-cell-group>
        <dd-field v-model="e1" label="静态错误" error error-message="手机号格式不正确" />
        <dd-field v-model="e2" label="后缀图标" placeholder="right-icon 插槽">
          <template #right-icon>
            <dd-icon name="warn" style="color: #E53935" />
          </template>
        </dd-field>
      </dd-cell-group>
    </view>

    <view class="demo-section">
      <text class="demo-title">尺寸与能力补充</text>
      <dd-cell-group>
        <dd-field v-model="a1" label="尺寸 large" size="large" placeholder="行高 112rpx" />
        <dd-field v-model="a2" label="自定义清空图标" clearable clear-icon="close" placeholder="输入后聚焦看图标" />
        <dd-field v-model="a3" label="错误居中" error error-message="errorMessageAlign=center 居中提示" error-message-align="center" />
        <dd-field v-model="a4" label="错误插槽" placeholder="error-message 插槽自定义">
          <template #error-message>
            <text style="color: #F5A623">⚠ 插槽自定义错误提示</text>
          </template>
        </dd-field>
        <dd-field v-model="a5" label="autosize 对象" type="textarea" :autosize="{ minHeight: 80, maxHeight: 240 }" placeholder="rpx 高度区间 80-240" />
        <dd-field v-model="a6" label="confirmType" confirm-type="search" placeholder="键盘右下角为「搜索」" />
      </dd-cell-group>
      <view class="demo-actions">
        <dd-button size="sm" type="primary" @click="focusRef?.focus?.()">手动 focus()</dd-button>
        <dd-button size="sm" type="secondary" @click="focusRef?.blur?.()">手动 blur()</dd-button>
      </view>
      <dd-cell-group style="margin-top: 16rpx">
        <dd-field ref="focusRef" v-model="a7" label="方法聚焦" placeholder="点上方按钮聚焦/失焦" />
      </dd-cell-group>
    </view>

  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const text = ref('')
const pwd = ref('')
const num = ref('')
const remark = ref('')
const w1 = ref('')
const w2 = ref('')
const r1 = ref('')
const c1 = ref('')
const c2 = ref('有内容时恒显')
const phone = ref('')
const limit = ref('')
const s1 = ref('')
const s2 = ref('')
const s3 = ref('')
const s3on = ref(false)
const s4 = ref('')
const l1 = ref('')
const l2 = ref('只读内容')
const l3 = ref('')
const e1 = ref('123')
const e2 = ref('')
const a1 = ref('')
const a2 = ref('')
const a3 = ref('')
const a4 = ref('')
const a5 = ref('')
const a6 = ref('')
const a7 = ref('')
const focusRef = ref()

function phoneFormat(v: string): string {
  const digits = v.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 3) return digits
  if (digits.length <= 7) return `${digits.slice(0, 3)} ${digits.slice(3)}`
  return `${digits.slice(0, 3)} ${digits.slice(3, 7)} ${digits.slice(7)}`
}

function tip(msg: string) {
  uni.showToast({ title: msg, icon: 'none' })
}
</script>

<style scoped>
.demo-page { }

.demo-actions {
  display: flex;
  gap: 20rpx;
  padding: 24rpx 0 0;
}
</style>
