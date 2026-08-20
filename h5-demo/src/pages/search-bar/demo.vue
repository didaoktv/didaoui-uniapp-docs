<template>
  <dd-top-navbar title="搜索栏" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">基础搜索 Basic</text>
      <dd-search-bar v-model="kw" placeholder="搜索歌曲、歌手" @search="(v) => kw = v" />
    </view>

    <view class="demo-section">
      <text class="demo-title">取消按钮 ShowCancel</text>
      <dd-search-bar v-model="kw2" show-cancel placeholder="搜索" />
    </view>

    <view class="demo-section">
      <text class="demo-title">方角 Square</text>
      <dd-search-bar :round="false" placeholder="方角搜索栏" />
    </view>

    <view class="demo-section">
      <text class="demo-title">禁用 Disabled</text>
      <dd-search-bar model-value="禁用" disabled />
      <dd-search-bar :round="false" model-value="禁用方角" disabled style="margin-top:20rpx" />
    </view>

    <view class="demo-section">
      <text class="demo-title">自动聚焦 Autofocus</text>
      <dd-search-bar v-model="kw3" autofocus placeholder="进入页面自动聚焦" />
    </view>

    <view class="demo-section">
      <text class="demo-title">带内容 With Content</text>
      <dd-search-bar v-model="kw4" placeholder="搜索" />
      <text class="demo-note">已输入：{{ kw4 }}</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">Placeholder 变化</text>
      <dd-search-bar placeholder="搜索你喜欢的歌曲" />
      <dd-search-bar placeholder="搜索城市 / 地区" style="margin-top:20rpx" />
      <dd-search-bar placeholder="输入关键词搜索" style="margin-top:20rpx" />
    </view>

    <view class="demo-section">
      <text class="demo-title">实时绑定 Binding</text>
      <text class="demo-note">kw = {{ kw }}</text>
      <text class="demo-note">kw2 = {{ kw2 }}</text>
      <text class="demo-note">kw4 = {{ kw4 }}</text>
    </view>

  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdSearchBar } from '@didaoktv/didaoui-uniapp'


const kw = ref('')
const kw2 = ref('周杰伦')
const kw3 = ref('')
const kw4 = ref('')
</script>

<style scoped>
.demo-page { }
</style>
