<template>
  <dd-top-navbar title="侧边栏子项" />
  <view class="demo-page">

    <!-- 子项属性 -->
    <view class="demo-section">
      <text class="demo-title">title / dot / badge / disabled</text>
      <view class="demo-wrap">
        <dd-sidebar v-model="active">
          <dd-sidebar-item title="洋酒" dot />
          <dd-sidebar-item title="小食拼盘（超长文案省略号）" :badge="6" />
          <dd-sidebar-item title="已售罄" disabled />
          <dd-sidebar-item title="常规分类" />
        </dd-sidebar>
        <view class="demo-panel">当前索引：{{ active }}</view>
      </view>
      <text class="demo-note">按书写顺序注册索引（0 基），禁用项点击不切换也不触发 click</text>
    </view>

    <!-- title 插槽 -->
    <view class="demo-section">
      <text class="demo-title">title 插槽自定义</text>
      <view class="demo-wrap">
        <dd-sidebar v-model="slotActive">
          <dd-sidebar-item title="洋酒" />
          <dd-sidebar-item title="软饮">
            <template #title>
              <text class="demo-slot-text">软饮专区</text>
            </template>
          </dd-sidebar-item>
        </dd-sidebar>
        <view class="demo-panel">当前索引：{{ slotActive }}</view>
      </view>
    </view>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const active = ref(0)
const slotActive = ref(1)
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
.demo-slot-text {
  color: var(--dd-primary);
}
</style>
