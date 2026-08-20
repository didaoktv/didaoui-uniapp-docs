<template>
  <dd-top-navbar title="房间卡片" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">视图 View</text>
      <text class="demo-label">Grid 网格模式</text>
      <view class="demo-row">
        <dd-room-card view="grid" room-no="A01" status="occupied" type="standard" capacity="8" style="width:45%" />
        <dd-room-card view="grid" room-no="B02" status="idle" type="vip" capacity="4" style="width:45%" />
      </view>
      <view class="demo-row" style="margin-top:20rpx">
        <dd-room-card view="grid" room-no="C03" status="reserved" type="theme" capacity="6" style="width:45%" />
        <dd-room-card view="grid" room-no="D04" status="idle" type="standard" style="width:45%" />
      </view>

      <text class="demo-label" style="margin-top:24rpx">List 列表模式</text>
      <view class="demo-col">
        <dd-room-card view="list" room-no="A01" room-name="总统套房" status="occupied" type="vip" capacity="8" time="19:30" hoverable @click="onRoomClick" />
        <dd-room-card view="list" room-no="B02" room-name="标准包间" status="idle" type="standard" capacity="4" time="20:00" />
        <dd-room-card view="list" room-no="C03" room-name="主题包厢" status="reserved" type="theme" capacity="6" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">状态 Status</text>
      <view class="demo-row">
        <dd-room-card view="grid" room-no="01" status="occupied" style="width:30%" />
        <dd-room-card view="grid" room-no="02" status="idle" style="width:30%" />
        <dd-room-card view="grid" room-no="03" status="reserved" style="width:30%" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">类型 Type</text>
      <view class="demo-row">
        <dd-room-card view="grid" room-no="101" type="vip" style="width:30%" />
        <dd-room-card view="grid" room-no="102" type="standard" style="width:30%" />
        <dd-room-card view="grid" room-no="103" type="theme" style="width:30%" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">列表状态色 List Status</text>
      <view class="demo-col">
        <dd-room-card view="list" room-no="VIP01" room-name="VIP 包厢" status="occupied" type="vip" capacity="10" time="19:00" />
        <dd-room-card view="list" room-no="STD02" room-name="标准包间" status="idle" type="standard" capacity="4" />
        <dd-room-card view="list" room-no="THM03" room-name="主题房" status="reserved" type="theme" capacity="6" time="21:00" />
      </view>
    </view>
    <dd-toast />
    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { DdRoomCard, DdToast } from '@didaoktv/didaoui-uniapp'
import { showToast } from '@didaoktv/didaoui-uniapp/components/dd-toast/dd-toast.vue'

function onRoomClick(e){ showToast('房间: ' + e.roomNo) }
</script>

<style scoped>
.demo-page { }
</style>