<template>
  <dd-top-navbar title="日期选择" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">日期选择 Date</text>
      <view class="dp-btn" @click="open('date', '选择日期')">选择日期</view>
      <text class="demo-note">已选：{{ val || '尚未选择' }}</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">时间选择 Time</text>
      <view class="dp-btn" @click="open('time', '选择时间')">选择时间</view>
      <text class="demo-note">已选：{{ val || '尚未选择' }}</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">日期时间 DateTime</text>
      <view class="dp-btn" @click="open('datetime', '选择日期时间')">选择日期时间</view>
      <text class="demo-note">已选：{{ val || '尚未选择' }}</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">标题 Title</text>
      <view class="dp-btn" @click="open('date', '预订日期')">选择预订日期</view>
      <text class="demo-note">已选：{{ val || '尚未选择' }}</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">实时预览 Live Preview</text>
      <text class="demo-note">类型：{{ type }}</text>
      <text class="demo-note">标题：{{ pickerTitle }}</text>
      <text class="demo-note">值：{{ val || '（未选择）' }}</text>
    </view>

    <dd-date-picker
      v-model:show="show"
      :type="type"
      :title="pickerTitle"
      @confirm="(v) => val = v"
    />
    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdDatePicker } from '@didaoktv/didaoui-uniapp'


const show = ref(false)
const type = ref('datetime')
const val = ref('')
const pickerTitle = ref('选择预订时间')
function open(t, title){
  type.value = t
  pickerTitle.value = title
  show.value = true
}
</script>

<style scoped>
.demo-page { }
.dp-btn{padding:16rpx 28rpx;background:#2A2A2A;border-radius:12rpx;color:#FFC107;font-size:26rpx;display:inline-block;}
</style>
