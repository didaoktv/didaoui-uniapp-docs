<template>
  <dd-top-navbar title="标签栏" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">基础标签栏（内嵌）</text>
      <text class="demo-note">激活：{{ active }}</text>
      <dd-tabbar
        v-model="active"
        :fixed="false"
        :placeholder="false"
        :border="true"
      >
        <dd-tabbar-item name="home" icon="wap-home-o" label="首页" />
        <dd-tabbar-item name="rank" icon="bar-chart-o" label="排行" />
        <dd-tabbar-item name="msg" icon="chat-o" label="消息" dot />
        <dd-tabbar-item name="me" icon="user-o" label="我的" badge="3" />
      </dd-tabbar>
    </view>

    <view class="demo-section">
      <text class="demo-title">无边框</text>
      <dd-tabbar
        v-model="active2"
        :fixed="false"
        :placeholder="false"
        :border="false"
      >
        <dd-tabbar-item name="home" icon="wap-home-o" label="首页" />
        <dd-tabbar-item name="rank" icon="bar-chart-o" label="排行" />
        <dd-tabbar-item name="me" icon="user-o" label="我的" />
      </dd-tabbar>
    </view>

    <view class="demo-section">
      <text class="demo-title">自定义激活色</text>
      <dd-tabbar
        v-model="active3"
        :fixed="false"
        :placeholder="false"
        :border="true"
        active-color="#2D4BA0"
        inactive-color="#616161"
      >
        <dd-tabbar-item name="home" icon="wap-home-o" label="首页" />
        <dd-tabbar-item name="rank" icon="bar-chart-o" label="排行" />
        <dd-tabbar-item name="me" icon="user-o" label="我的" />
      </dd-tabbar>
    </view>

    <view class="demo-section">
      <text class="demo-title">自定义颜色（渐变金）</text>
      <dd-tabbar
        v-model="active4"
        :fixed="false"
        :placeholder="false"
        :border="true"
        active-color="#FF6B35"
        inactive-color="#757575"
      >
        <dd-tabbar-item name="home" icon="music-o" label="点歌" />
        <dd-tabbar-item name="rank" icon="star" label="收藏" />
        <dd-tabbar-item name="me" icon="gift-o" label="福利" />
      </dd-tabbar>
    </view>

    <view class="demo-section">
      <text class="demo-title">无 safeArea</text>
      <dd-tabbar
        v-model="active5"
        :fixed="false"
        :placeholder="false"
        :border="true"
        :safe-area-inset-bottom="false"
      >
        <dd-tabbar-item name="home" icon="wap-home-o" label="首页" />
        <dd-tabbar-item name="me" icon="user-o" label="我的" />
      </dd-tabbar>
    </view>

    <view class="demo-section">
      <text class="demo-title">change 事件</text>
      <text class="demo-note">最新事件：{{ tabEvent }}</text>
      <dd-tabbar
        v-model="active6"
        :fixed="false"
        :placeholder="false"
        :border="true"
        @change="(v: string | number) => (tabEvent = '切换到: ' + v)"
      >
        <dd-tabbar-item name="home" icon="wap-home-o" label="首页" />
        <dd-tabbar-item name="rank" icon="bar-chart-o" label="排行" />
        <dd-tabbar-item name="me" icon="user-o" label="我的" />
      </dd-tabbar>
    </view>

    <dd-toast />
    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdTabbar, DdTabbarItem, DdToast } from '@didaoktv/didaoui-uniapp'
import DemoNav from '../../components/DemoNav.vue'


const active = ref('home')
const active2 = ref('home')
const active3 = ref('home')
const active4 = ref('home')
const active5 = ref('home')
const active6 = ref('home')
const tabEvent = ref('暂无')
</script>

<style lang="scss" scoped>
.demo-page { }
</style>
