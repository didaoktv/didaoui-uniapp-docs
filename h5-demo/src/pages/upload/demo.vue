<template>
  <dd-top-navbar title="上传" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">基础上传 Basic</text>
      <dd-upload v-model="files" :max-count="6" :max-size="5" image-fit="cover" />
      <text class="demo-note">最多上传 6 张，单张不超过 5MB</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">多选 Multiple</text>
      <text class="demo-label">多选 Multiple=true (默认)</text>
      <dd-upload v-model="mFiles" :max-count="9" :multiple="true" />
      <text class="demo-note">已选 {{ mFiles.length }} 张 / 9</text>

      <text class="demo-label" style="margin-top:16rpx">单选 Multiple=false</text>
      <dd-upload v-model="sFiles" :max-count="1" :multiple="false" />
      <text class="demo-note">已选 {{ sFiles.length }} 张 / 1</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">最大数量 MaxCount</text>
      <text class="demo-label">maxCount = 1</text>
      <dd-upload v-model="m1" :max-count="1" />
      <text class="demo-note">{{ m1.length }} / 1</text>

      <text class="demo-label" style="margin-top:16rpx">maxCount = 3</text>
      <dd-upload v-model="m3" :max-count="3" />
      <text class="demo-note">{{ m3.length }} / 3</text>

      <text class="demo-label" style="margin-top:16rpx">maxCount = 9</text>
      <dd-upload v-model="m9" :max-count="9" />
      <text class="demo-note">{{ m9.length }} / 9</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">图片适配 ImageFit</text>
      <text class="demo-label">cover 填充 (默认)</text>
      <dd-upload v-model="fit1" image-fit="cover" />

      <text class="demo-label" style="margin-top:16rpx">contain 包含</text>
      <dd-upload v-model="fit2" image-fit="contain" />

      <text class="demo-label" style="margin-top:16rpx">fill 拉伸</text>
      <dd-upload v-model="fit3" image-fit="fill" />
    </view>

    <view class="demo-section">
      <text class="demo-title">禁用 Disabled</text>
      <dd-upload v-model="dFiles" :max-count="6" disabled />
      <text class="demo-note">禁用状态下不可添加/删除图片</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">文件数量 File Count</text>
      <view class="demo-col">
        <text class="demo-note">files: {{ files.length }} 张</text>
        <text class="demo-note">mFiles: {{ mFiles.length }} 张</text>
        <text class="demo-note">m3: {{ m3.length }} 张</text>
      </view>
    </view>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdUpload } from '@didaoktv/didaoui-uniapp'


const files = ref([
  { url: 'https://picsum.photos/200/200?1', name: '包间1.jpg' },
  { url: 'https://picsum.photos/200/200?2', name: '包间2.jpg' }
])
const mFiles = ref<{url:string}[]>([])
const sFiles = ref<{url:string}[]>([])
const m1 = ref<{url:string}[]>([])
const m3 = ref<{url:string}[]>([{ url: 'https://picsum.photos/200/200?3' }])
const m9 = ref<{url:string}[]>([])
const fit1 = ref<{url:string}[]>([{ url: 'https://picsum.photos/200/200?4' }])
const fit2 = ref<{url:string}[]>([{ url: 'https://picsum.photos/300/150?5' }])
const fit3 = ref<{url:string}[]>([{ url: 'https://picsum.photos/400/100?6' }])
const dFiles = ref<{url:string}[]>([{ url: 'https://picsum.photos/200/200?7' }])
</script>

<style scoped>
.demo-page { }
</style>
