<template>
  <dd-top-navbar title="轻提示" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">Type — 文字 / 成功 / 失败 / 警告</text>
      <view class="demo-row">
        <view class="t-btn" @click="showToast({message:'这是一条提示',type:'text'})">文字</view>
        <view class="t-btn t-btn--success" @click="showToast({message:'操作成功',type:'success'})">成功</view>
        <view class="t-btn t-btn--danger" @click="showToast({message:'操作失败',type:'error'})">失败</view>
        <view class="t-btn t-btn--warning" @click="showToast({message:'注意',type:'warning'})">警告</view>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">Position — Top / Center / Bottom</text>
      <view class="demo-row">
        <view class="t-btn" @click="showToast({message:'顶部提示',type:'text',position:'top'})">顶部</view>
        <view class="t-btn" @click="showToast({message:'居中提示',type:'text',position:'center'})">居中</view>
        <view class="t-btn" @click="showToast({message:'底部提示',type:'text',position:'bottom'})">底部</view>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">Loading — 手动关闭</text>
      <view class="demo-row">
        <view class="t-btn t-btn--primary" @click="showLoading('加载中...')">显示加载</view>
        <view class="t-btn" @click="hideToast()">关闭加载</view>
      </view>
      <text class="demo-note">Loading 类型不会自动关闭，需手动调用 hideToast()</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">Duration — 自定义时长</text>
      <view class="demo-row">
        <view class="t-btn" @click="showToast({message:'1 秒后消失',duration:1000})">1 秒</view>
        <view class="t-btn" @click="showToast({message:'3 秒后消失',duration:3000})">3 秒</view>
        <view class="t-btn" @click="showToast({message:'无图标',type:'text',icon:false})">无图标</view>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">快捷方法</text>
      <view class="demo-row">
        <view class="t-btn t-btn--success" @click="showSuccess('保存成功')">showSuccess</view>
        <view class="t-btn t-btn--danger" @click="showError('网络错误')">showError</view>
      </view>
    </view>

    <dd-toast />

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { DdToast } from '@didaoktv/didaoui-uniapp'
import { showToast, showSuccess, showError, showLoading, hideToast } from '@didaoktv/didaoui-uniapp/components/dd-toast/dd-toast.vue'

</script>

<style scoped>
.demo-page {  }
.t-btn {
  padding: 16rpx 28rpx;
  background: #2A2A2A;
  border-radius: 12rpx;
  color: #FFC107;
  font-size: 26rpx;
}
.t-btn--primary { background: linear-gradient(135deg, #F5A623, #D4891A); color: #0A0A0A; }
.t-btn--success { background: linear-gradient(135deg, #4CAF50, #388E3C); color: #FFF; }
.t-btn--danger { background: linear-gradient(135deg, #E53935, #C62828); color: #FFF; }
.t-btn--warning { background: linear-gradient(135deg, #FF9800, #F57C00); color: #FFF; }
</style>