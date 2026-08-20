<template>
  <dd-top-navbar title="触底加载" />
  <view class="demo-page">

    <dd-swipeable-tab
      v-model="activeTab"
      :options="['基础触底', '三态切换', '下拉+触底']"
      mode="fixed"
      class="demo-tabs"
    />

    <!-- tab1: 基础触底 -->
    <view v-show="activeTab === 0" class="demo-section">
      <text class="demo-title">基础触底加载</text>
      <text class="demo-note">滚到底部自动追加，第 3 页后显示「没有更多了」</text>
      <view style="height:640rpx">
        <dd-pull-refresh
          v-model="refreshing"
          @refresh="onRefresh"
          @loadmore="onLoadMore"
          style="height:100%"
        >
          <view v-for="i in list" :key="i" class="lm-item">条目 {{ i }}</view>
          <dd-loadmore :status="status" />
        </dd-pull-refresh>
      </view>
    </view>

    <!-- tab2: 三态切换 -->
    <view v-show="activeTab === 1" class="demo-section">
      <text class="demo-title">三态切换</text>
      <text class="demo-note">点按钮切换 status，isDot 切换 nomore 圆点样式</text>
      <view class="state-preview">
        <dd-loadmore :status="status" :is-dot="isDot" @loadmore="onTap" />
      </view>
      <view class="btn-row">
        <dd-button size="sm" @click="status = 'loadmore'">loadmore</dd-button>
        <dd-button size="sm" @click="status = 'loading'">loading</dd-button>
        <dd-button size="sm" @click="status = 'nomore'">nomore</dd-button>
        <dd-button size="sm" @click="isDot = !isDot">isDot: {{ isDot }}</dd-button>
      </view>
    </view>

    <!-- tab3: 下拉+触底组合 -->
    <view v-show="activeTab === 2" class="demo-section">
      <text class="demo-title">下拉刷新 + 触底加载</text>
      <text class="demo-note">同一 scroll-view 内下拉刷新重置、触底追加</text>
      <view style="height:640rpx">
        <dd-pull-refresh
          v-model="refreshing2"
          success-text="刷新成功"
          @refresh="onRefresh2"
          @loadmore="onLoadMore2"
          style="height:100%"
        >
          <view v-for="i in list2" :key="i" class="lm-item">条目 {{ i }}</view>
          <dd-loadmore :status="status2" />
        </dd-pull-refresh>
      </view>
    </view>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdLoadmore, DdPullRefresh, DdSwipeableTab, DdButton } from '@didaoktv/didaoui-uniapp'

const activeTab = ref(0)

// --- tab1 基础触底 ---
const refreshing = ref(false)
const list = ref<number[]>(Array.from({ length: 10 }, (_, i) => i + 1))
const status = ref<'loadmore' | 'loading' | 'nomore'>('loadmore')

function onRefresh() {
  refreshing.value = true
  setTimeout(() => {
    list.value = Array.from({ length: 10 }, (_, i) => i + 1)
    status.value = 'loadmore'
    refreshing.value = false
  }, 1000)
}

function onLoadMore() {
  if (status.value !== 'loadmore') return
  status.value = 'loading'
  setTimeout(() => {
    if (list.value.length >= 30) {
      status.value = 'nomore'
      return
    }
    const start = list.value.length
    list.value = list.value.concat(Array.from({ length: 10 }, (_, i) => start + i + 1))
    status.value = 'loadmore'
  }, 1000)
}

// --- tab2 三态切换 ---
const isDot = ref(false)
function onTap() {
  status.value = 'loading'
  setTimeout(() => { status.value = 'nomore' }, 1000)
}

// --- tab3 下拉+触底组合 ---
const refreshing2 = ref(false)
const list2 = ref<number[]>(Array.from({ length: 10 }, (_, i) => i + 1))
const status2 = ref<'loadmore' | 'loading' | 'nomore'>('loadmore')

function onRefresh2() {
  refreshing2.value = true
  setTimeout(() => {
    list2.value = Array.from({ length: 10 }, (_, i) => i + 1)
    status2.value = 'loadmore'
    refreshing2.value = false
  }, 1000)
}

function onLoadMore2() {
  if (status2.value !== 'loadmore') return
  status2.value = 'loading'
  setTimeout(() => {
    if (list2.value.length >= 30) {
      status2.value = 'nomore'
      return
    }
    const start = list2.value.length
    list2.value = list2.value.concat(Array.from({ length: 10 }, (_, i) => start + i + 1))
    status2.value = 'loadmore'
  }, 1000)
}
</script>

<style scoped>
.demo-page { }
.demo-tabs {
  position: sticky;
  top: 88rpx;
  z-index: 10;
  background: #0a0a0a;
}
.demo-section {
  padding: 24rpx 32rpx;
}
.demo-title {
  display: block;
  font-size: 30rpx;
  font-weight: 700;
  color: #F5F5F5;
  margin-bottom: 8rpx;
}
.demo-note {
  display: block;
  font-size: 24rpx;
  color: #9E9E9E;
  margin-bottom: 24rpx;
}
.lm-item {
  padding: 32rpx;
  background: #171717;
  color: #F5F5F5;
  margin-bottom: 16rpx;
}
.state-preview {
  background: #171717;
  border-radius: 12rpx;
  margin-bottom: 24rpx;
}
.btn-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16rpx;
}
</style>
