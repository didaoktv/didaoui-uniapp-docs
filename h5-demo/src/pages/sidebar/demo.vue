<template>
  <dd-top-navbar title="侧边栏导航" />
  <view class="demo-page">

    <!-- 基础用法 -->
    <view class="demo-section">
      <text class="demo-title">基础用法</text>
      <view class="demo-wrap">
        <dd-sidebar v-model="basicActive">
          <dd-sidebar-item v-for="item in basicList" :key="item" :title="item" />
        </dd-sidebar>
        <view class="demo-panel">当前：{{ basicList[basicActive] }}</view>
      </view>
      <text class="demo-note">v-model 绑定索引，选中项白底高亮 + 左侧金色条</text>
    </view>

    <!-- 徽标 / 红点 / 禁用 -->
    <view class="demo-section">
      <text class="demo-title">徽标 / 红点 / 禁用</text>
      <view class="demo-wrap">
        <dd-sidebar v-model="stateActive">
          <dd-sidebar-item title="新品上架" dot />
          <dd-sidebar-item title="本周热卖" :badge="6" />
          <dd-sidebar-item title="已售罄" disabled />
          <dd-sidebar-item title="常规分类" />
        </dd-sidebar>
        <view class="demo-panel">当前索引：{{ stateActive }}（禁用项点击无效）</view>
      </view>
    </view>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const basicActive = ref(0)
const basicList = ['洋酒', '小食', '软饮', '套餐']

const stateActive = ref(0)
</script>

<style scoped>
.demo-page { padding: 24rpx 0; }
.demo-wrap {
  display: flex;
  border-radius: 16rpx;
  overflow: hidden;
}
.demo-panel {
  flex: 1;
  padding: 32rpx;
  background: var(--dd-bg-card);
}
</style>
