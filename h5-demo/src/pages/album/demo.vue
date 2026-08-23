<template>
  <dd-top-navbar title="相册" />
  <view class="demo-page">

    <!-- 单图 -->
    <view class="demo-section">
      <text class="demo-title">单图 singleSize / singleMode</text>
      <dd-album :urls="[one]" :singleSize="220" />
      <text class="demo-note">urls 只有一张时按单图展示，singleSize 控制长边（默认 180px）</text>
    </view>

    <!-- 多图 -->
    <view class="demo-section">
      <text class="demo-title">多图 multipleSize / space</text>
      <dd-album :urls="four" :multipleSize="90" :space="10" />
      <text class="demo-note">多图时九宫格排列，multipleSize 控制每张边长（默认 70px），space 控制间距</text>
    </view>

    <!-- 行数 + 查看更多 -->
    <view class="demo-section">
      <text class="demo-title">maxCount + showMore 查看更多</text>
      <dd-album :urls="nine" :maxCount="6" :multipleSize="80" />
      <text class="demo-note">最多展示 6 张，最后一格显示「+N 张」查看更多</text>
    </view>

    <!-- rowCount -->
    <view class="demo-section">
      <text class="demo-title">rowCount 每行数量</text>
      <dd-album :urls="four" :rowCount="2" :multipleSize="140" />
      <text class="demo-note">rowCount=2 时每行 2 张，singleSize/multipleSize 按行宽自适应</text>
    </view>

    <!-- 对象数组 keyName -->
    <view class="demo-section">
      <text class="demo-title">对象数组 keyName</text>
      <dd-album :urls="objs" keyName="pic" :multipleSize="80" />
      <text class="demo-note">urls 支持对象数组，keyName 指定图片地址字段</text>
    </view>

    <!-- 图片预览 -->
    <view class="demo-section">
      <text class="demo-title">点击预览 previewFullImage</text>
      <dd-album :urls="four" :multipleSize="80" :previewFullImage="true" />
      <text class="demo-note">previewFullImage=true 点击图片全屏预览</text>
    </view>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">

const one = 'https://picsum.photos/seed/ddktv-one/400/300'

const four = [
  'https://picsum.photos/seed/ddktv-a/300/300',
  'https://picsum.photos/seed/ddktv-b/300/300',
  'https://picsum.photos/seed/ddktv-c/300/300',
  'https://picsum.photos/seed/ddktv-d/300/300',
]

const nine = Array.from({ length: 9 }, (_, i) => `https://picsum.photos/seed/ddktv-n${i}/300/300`)

const objs = [
  { pic: 'https://picsum.photos/seed/ddktv-o1/300/300', title: '大厅' },
  { pic: 'https://picsum.photos/seed/ddktv-o2/300/300', title: '走廊' },
  { pic: 'https://picsum.photos/seed/ddktv-o3/300/300', title: '包房' },
]
</script>

<style scoped>
.demo-page { padding: 24rpx 0; }
</style>
