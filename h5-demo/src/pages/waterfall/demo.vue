<template>
  <dd-top-navbar title="瀑布流" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">基础用法 Basic</text>
      <text class="demo-label">2 列 · 最矮列填充</text>
      <dd-waterfall :model-value="items">
        <template #default="{ item, index }">
          <view class="wf-card">
            <view class="wf-thumb" :style="`height:${item.height}rpx; background:${item.color};`">
              <text class="wf-index">{{ index + 1 }}</text>
            </view>
            <view class="wf-body">
              <text class="wf-title">{{ item.title }}</text>
              <text class="wf-desc">{{ item.desc }}</text>
            </view>
          </view>
        </template>
      </dd-waterfall>
    </view>

    <view class="demo-section">
      <text class="demo-title">列数与间距 Columns / Gap</text>
      <text class="demo-label">3 列 · gap 24rpx</text>
      <dd-waterfall :model-value="items" :columns="3" :gap="24">
        <template #default="{ item }">
          <view class="wf-card">
            <view class="wf-thumb" :style="`height:${item.height}rpx; background:${item.color};`" />
            <view class="wf-body">
              <text class="wf-title">{{ item.title }}</text>
            </view>
          </view>
        </template>
      </dd-waterfall>
    </view>

    <view class="demo-section">
      <text class="demo-title">最矮列填充 Balance</text>
      <text class="demo-label">按数据顺序逐项塞进最矮列，末尾那张跟在较矮列下面（1,2,3…）</text>
      <dd-waterfall :model-value="items" :columns="2" :gap="16">
        <template #default="{ item, index }">
          <view class="wf-card">
            <view class="wf-thumb" :style="`height:${item.height}rpx; background:${item.color};`">
              <text class="wf-index">{{ index + 1 }}</text>
            </view>
            <view class="wf-body">
              <text class="wf-title">{{ item.title }}</text>
            </view>
          </view>
        </template>
      </dd-waterfall>
    </view>

    <dd-toast />
    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdToast, DdWaterfall } from '@didaoktv/didaoui-uniapp'

interface WfItem {
  title: string
  desc: string
  height: number
  color: string
}

const colors = [
  'linear-gradient(135deg,#FFC107,#D4891A)',
  'linear-gradient(135deg,#42A5F5,#1565C0)',
  'linear-gradient(135deg,#8E24AA,#4A148C)',
  'linear-gradient(135deg,#26A69A,#00695C)',
  'linear-gradient(135deg,#EF5350,#B71C1C)',
  'linear-gradient(135deg,#66BB6A,#2E7D32)',
]

const titles = ['热歌榜', '新歌速递', '包房推荐', '生日派对', '限定套餐', '会员权益', '夜场活动', '人气歌手']

const items = ref<WfItem[]>(
  titles.map((title, i) => ({
    title,
    desc: 'KTV 场景示例内容，用于演示不等高瀑布流排布。',
    // 高度按 120~340rpx 打散，制造明显的高低差
    height: 120 + ((i * 97) % 220),
    color: colors[i % colors.length],
  })),
)

</script>

<style scoped>
.demo-page { }

.wf-card {
  overflow: hidden;
  border-radius: 16rpx;
  background: #171717;
}

.wf-thumb {
  position: relative;
  width: 100%;
}

.wf-index {
  position: absolute;
  top: 8rpx;
  right: 12rpx;
  font-size: 22rpx;
  color: rgba(10, 10, 10, 0.6);
}

.wf-body {
  padding: 16rpx;
}

.wf-title {
  display: block;
  font-size: 28rpx;
  font-weight: 600;
  color: #f5f5f5;
}

.wf-desc {
  display: block;
  margin-top: 8rpx;
  font-size: 22rpx;
  line-height: 1.5;
  color: #757575;
}
</style>
