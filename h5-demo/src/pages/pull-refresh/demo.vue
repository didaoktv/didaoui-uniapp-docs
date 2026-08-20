<template>
  <dd-top-navbar title="下拉刷新" />
  <view class="demo-page">

    <dd-swipeable-tab
      v-model="activeTab"
      :options="['基础', '自定义文字', '头部高度', '下拉+触底']"
      mode="fixed"
      class="demo-tabs"
    />

    <view v-show="activeTab === 0" class="demo-section">
      <text class="demo-title">基础下拉刷新</text>
      <text class="demo-note">下拉列表释放即可刷新，支持成功提示</text>
      <view style="height:640rpx">
        <dd-pull-refresh v-model="loading" success-text="刷新成功" @refresh="onRefresh" style="height:100%">
          <view v-for="i in list" :key="i" class="pr-item">列表项 {{ i }}</view>
        </dd-pull-refresh>
      </view>
    </view>

    <view v-show="activeTab === 1" class="demo-section">
      <text class="demo-title">自定义文字</text>
      <text class="demo-note">Pulling / Loosing / Loading 各状态文字可配置</text>
      <view style="height:480rpx">
        <dd-pull-refresh
          v-model="loading2"
          pulling-text="下拉即可刷新..."
          loosing-text="释放即可刷新..."
          loading-text="加载中..."
          success-text="刷新成功"
          @refresh="onRefresh2"
          style="height:100%"
        >
          <view v-for="i in list2" :key="i" class="pr-item">列表项 {{ i }}</view>
        </dd-pull-refresh>
      </view>
    </view>

    <view v-show="activeTab === 2" class="demo-section">
      <text class="demo-title">HeadHeight 自定义</text>
      <text class="demo-note">头部高度 140rpx（默认 100rpx）</text>
      <view style="height:400rpx">
        <dd-pull-refresh v-model="loading3" :head-height="140" @refresh="onRefresh3" style="height:100%">
          <view v-for="i in list3" :key="i" class="pr-item">列表项 {{ i }}</view>
        </dd-pull-refresh>
      </view>
    </view>

    <view v-show="activeTab === 3" class="demo-section">
      <text class="demo-title">下拉刷新 + 触底加载</text>
      <text class="demo-note">同一 scroll-view 内下拉重置、触底追加，到底显 nomore</text>
      <view style="height:640rpx">
        <dd-pull-refresh
          v-model="loading4"
          success-text="刷新成功"
          @refresh="onRefresh4"
          @loadmore="onLoadMore4"
          style="height:100%"
        >
          <view v-for="i in list4" :key="i" class="pr-item">条目 {{ i }}</view>
          <dd-loadmore :status="status4" />
        </dd-pull-refresh>
      </view>
    </view>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdPullRefresh, DdSwipeableTab, DdLoadmore } from '@didaoktv/didaoui-uniapp'


const activeTab = ref(0)

const loading = ref(false)
const list = ref([1, 2, 3, 4, 5])
function onRefresh() {
  loading.value = true
  setTimeout(() => {
    list.value.unshift(Math.floor(Math.random() * 1000))
    loading.value = false
  }, 1500)
}

const loading2 = ref(false)
const list2 = ref([1, 2, 3])
function onRefresh2() {
  loading2.value = true
  setTimeout(() => {
    list2.value.unshift(Date.now())
    loading2.value = false
  }, 1500)
}

const loading3 = ref(false)
const list3 = ref([1, 2, 3, 4])
function onRefresh3() {
  loading3.value = true
  setTimeout(() => {
    list3.value.unshift(Math.floor(Math.random() * 1000))
    loading3.value = false
  }, 1500)
}

// --- tab4 下拉+触底组合 ---
const loading4 = ref(false)
const list4 = ref<number[]>(Array.from({ length: 8 }, (_, i) => i + 1))
const status4 = ref<'loadmore' | 'loading' | 'nomore'>('loadmore')
function onRefresh4() {
  loading4.value = true
  setTimeout(() => {
    list4.value = Array.from({ length: 8 }, (_, i) => i + 1)
    status4.value = 'loadmore'
    loading4.value = false
  }, 1500)
}
function onLoadMore4() {
  if (status4.value !== 'loadmore') return
  status4.value = 'loading'
  setTimeout(() => {
    if (list4.value.length >= 24) {
      status4.value = 'nomore'
      return
    }
    const start = list4.value.length
    list4.value = list4.value.concat(Array.from({ length: 8 }, (_, i) => start + i + 1))
    status4.value = 'loadmore'
  }, 1500)
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
.pr-item {
  padding: 32rpx;
  background: #171717;
  color: #F5F5F5;
  margin-bottom: 16rpx;
}
</style>
