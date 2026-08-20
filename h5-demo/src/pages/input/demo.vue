<template>
  <dd-top-navbar title="输入框" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">输入类型 Type</text>
      <view class="demo-col">
        <dd-input v-model="text1" placeholder="请输入预订人姓名" />
        <dd-input v-model="pwd" type="password" show-password clearable placeholder="请输入密码" />
        <dd-input v-model="search" type="search" placeholder="搜索歌曲、歌手" />
        <dd-input v-model="num" type="number" placeholder="请输入手机号" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">清除 Clearable</text>
      <view class="demo-col">
        <dd-input v-model="clear1" clearable placeholder="可清除输入" />
        <dd-input v-model="clear2" clearable placeholder="点击 × 清除" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">密码可见 ShowPassword</text>
      <view class="demo-col">
        <dd-input v-model="pwd1" type="password" show-password placeholder="密码默认隐藏" />
        <dd-input v-model="pwd2" type="password" show-password :model-value="'secret123'" placeholder="点击眼睛图标切换可见" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">最大长度 Maxlength</text>
      <view class="demo-col">
        <dd-input v-model="limited1" :maxlength="5" placeholder="最多 5 个字符" />
        <dd-input v-model="limited2" :maxlength="11" placeholder="手机号 11 位" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">状态 States</text>
      <view class="demo-col">
        <dd-input model-value="禁用内容" disabled placeholder="disabled" />
        <dd-input model-value="13800" error placeholder="error 错误状态" />
        <dd-input model-value="" error error-message="请输入有效手机号" placeholder="带错误提示" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">实时绑定 Realtime</text>
      <text class="demo-note">text1 = {{ text1 }}</text>
      <text class="demo-note">search = {{ search }}</text>
      <text class="demo-note">num = {{ num }}</text>
      <text class="demo-note">clear1 = {{ clear1 }}</text>
      <text class="demo-note">limited1 = {{ limited1 }} / 5</text>
    </view>

    <dd-toast />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdInput, DdToast } from '@didaoktv/didaoui-uniapp'


const text1 = ref('张先生')
const pwd = ref('123456')
const search = ref('')
const num = ref('')
const clear1 = ref('可清除')
const clear2 = ref('')
const pwd1 = ref('')
const pwd2 = ref('secret123')
const limited1 = ref('')
const limited2 = ref('')
</script>

<style scoped>
.demo-page { }
</style>
