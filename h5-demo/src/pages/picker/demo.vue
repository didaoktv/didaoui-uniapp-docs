<template>
  <dd-top-navbar title="选择器" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">单列选择 Single Column</text>
      <view class="dp-btn" @click="show1 = true">选择包房类型</view>
      <text class="demo-note">已选：{{ res1 || '尚未选择' }}</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">多列选择 Multi Column</text>
      <view class="dp-btn" @click="show2 = true">选择预约时间</view>
      <text class="demo-note">已选：{{ res2 || '尚未选择' }}</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">加载中 Loading</text>
      <view class="dp-btn" @click="openLoading">显示加载中</view>
      <text class="demo-note">已选：{{ res3 || '尚未选择' }}</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">只读 Readonly</text>
      <view class="dp-btn" @click="openReadonly">只读选择器</view>
      <text class="demo-note">已选：{{ res4 || '尚未选择' }}</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">动态标题 Dynamic Title</text>
      <view class="dp-btn" @click="show5 = true">选择歌手</view>
      <text class="demo-note">已选：{{ res5 || '尚未选择' }}</text>
    </view>

    <dd-picker v-model:show="show1" :columns="rooms" title="选择包房类型" @confirm="(e) => res1 = e.values.map(v=>v).join(' ')" />
    <dd-picker v-model:show="show2" :columns="cols" title="选择预约时间" @confirm="(e) => res2 = e.values.join(' ')" />
    <dd-picker v-model:show="show3" :columns="cols" title="加载中示例" :loading="loadingState" @confirm="(e) => res3 = e.values.join(' ')" />
    <dd-picker v-model:show="show4" :columns="rooms" title="只读示例" :readonly="true" @confirm="(e) => res4 = e.values.join(' ')" />
    <dd-picker v-model:show="show5" :columns="singers" title="选择歌手" @confirm="(e) => res5 = e.values.map(v=>v).join(' ')" />
    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdPicker } from '@didaoktv/didaoui-uniapp'


const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)
const show4 = ref(false)
const show5 = ref(false)
const res1 = ref('')
const res2 = ref('')
const res3 = ref('')
const res4 = ref('')
const res5 = ref('')

const loadingState = ref(false)

function openLoading() {
  show3.value = true
  loadingState.value = true
  setTimeout(() => { loadingState.value = false }, 2000)
}

function openReadonly() {
  show4.value = true
}

const rooms = [{text:'大包',value:'L'},{text:'中包',value:'M'},{text:'小包',value:'S'}]
const cols = [
  [{text:'今天',value:0},{text:'明天',value:1}],
  [{text:'20:00',value:'20'},{text:'21:00',value:'21'},{text:'22:00',value:'22'}]
]
const singers = [
  {text:'周杰伦',value:'jay'},
  {text:'林俊杰',value:'jj'},
  {text:'张学友',value:'jacky'},
  {text:'刘德华',value:'andy'}
]
</script>

<style scoped>
.demo-page { }
.dp-btn{padding:16rpx 28rpx;background:#2A2A2A;border-radius:12rpx;color:#FFC107;font-size:26rpx;display:inline-block;}
</style>
