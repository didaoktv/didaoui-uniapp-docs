<template>
  <dd-top-navbar title="冠军卡片" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">Podium 领奖台</text>
      <view class="demo-row">
        <dd-champion-card variant="podium" :rank="2" name="张三" score="9280" style="flex:1" />
        <dd-champion-card variant="podium" :rank="1" name="李四" score="12500" style="flex:1" />
        <dd-champion-card variant="podium" :rank="3" name="王五" score="7650" style="flex:1" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">Horizontal 行式</text>
      <view class="demo-col">
        <dd-champion-card variant="horizontal" :rank="1" name="歌神" score="12500" />
        <dd-champion-card variant="horizontal" :rank="2" name="麦霸" score="9280" />
        <dd-champion-card variant="horizontal" :rank="3" name="金嗓" score="7650" />
        <dd-champion-card variant="horizontal" :rank="4" name="声霸" score="5420" />
        <dd-champion-card variant="horizontal" :rank="5" name="歌者" score="3280" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">List 列表</text>
      <view class="demo-col">
        <dd-champion-card variant="list" :rank="1" name="第一名" score="12500" />
        <dd-champion-card variant="list" :rank="2" name="第二名" score="9280" />
        <dd-champion-card variant="list" :rank="3" name="第三名" score="7650" />
        <dd-champion-card variant="list" :rank="4" name="第四名" score="5420" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">不同排名 Ranks</text>
      <view class="demo-row">
        <dd-champion-card variant="podium" :rank="1" name="冠军" score="10000" style="flex:1" />
        <dd-champion-card variant="podium" :rank="2" name="亚军" score="8000" style="flex:1" />
        <dd-champion-card variant="podium" :rank="3" name="季军" score="6000" style="flex:1" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">点击事件 Click</text>
      <view class="demo-col">
        <dd-champion-card variant="horizontal" :rank="1" name="可点击" score="9999" @click="onClick" />
      </view>
    </view>
    <dd-toast />
    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { DdChampionCard, DdToast } from '@didaoktv/didaoui-uniapp'
import { showToast } from '@didaoktv/didaoui-uniapp/components/dd-toast/dd-toast.vue'

function onClick(e){ showToast('点击排名: ' + e.rank) }
</script>

<style scoped>
.demo-page { }
</style>