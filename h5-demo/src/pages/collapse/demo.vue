<template>
  <dd-top-navbar title="折叠面板" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">可展开多个</text>
      <text class="demo-note">同时展开多个折叠项</text>
      <dd-collapse v-model="active">
        <dd-collapse-item name="1" title="会员权益">
          <view class="demo-note">尊享会员享8折优惠及免费果盘</view>
        </dd-collapse-item>
        <dd-collapse-item name="2" title="预订须知">
          <view class="demo-note">预订后请于15分钟内到场</view>
        </dd-collapse-item>
        <dd-collapse-item name="3" title="包房类型">
          <view class="demo-note">大包/中包/小包/VIP包</view>
        </dd-collapse-item>
      </dd-collapse>
    </view>

    <view class="demo-section">
      <text class="demo-title">手风琴模式</text>
      <text class="demo-note">同时只能展开一项</text>
      <dd-collapse v-model="acc" accordion>
        <dd-collapse-item name="a" title="周一优惠" />
        <dd-collapse-item name="b" title="周末特惠" />
        <dd-collapse-item name="c" title="节日活动" />
      </dd-collapse>
    </view>

    <view class="demo-section">
      <text class="demo-title">包含禁用项</text>
      <dd-collapse v-model="active2">
        <dd-collapse-item name="1" title="有效选项 A">
          <view class="demo-note">内容 A</view>
        </dd-collapse-item>
        <dd-collapse-item name="2" title="已禁用选项" disabled>
          <view class="demo-note">不可展开</view>
        </dd-collapse-item>
        <dd-collapse-item name="3" title="有效选项 C">
          <view class="demo-note">内容 C</view>
        </dd-collapse-item>
      </dd-collapse>
    </view>

    <view class="demo-section">
      <text class="demo-title">change 事件</text>
      <text class="demo-note">最新事件：{{ collapseEvent }}</text>
      <dd-collapse
        v-model="eventVal"
        @change="(v: any) => (collapseEvent = '展开: ' + JSON.stringify(v))"
      >
        <dd-collapse-item name="x" title="选项 X">
          <view class="demo-note">X 内容</view>
        </dd-collapse-item>
        <dd-collapse-item name="y" title="选项 Y">
          <view class="demo-note">Y 内容</view>
        </dd-collapse-item>
      </dd-collapse>
    </view>

    <view class="demo-section">
      <text class="demo-title">空状态</text>
      <text class="demo-note">无任何展开项</text>
      <dd-collapse v-model="empty">
        <dd-collapse-item name="1" title="折叠项 1">
          <view class="demo-note">默认收起</view>
        </dd-collapse-item>
        <dd-collapse-item name="2" title="折叠项 2">
          <view class="demo-note">默认收起</view>
        </dd-collapse-item>
      </dd-collapse>
    </view>

    <dd-toast />
    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdCollapse, DdCollapseItem, DdToast } from '@didaoktv/didaoui-uniapp'
import DemoNav from '../../components/DemoNav.vue'


const active = ref(['1'])
const acc = ref('1')
const active2 = ref<string[]>([])
const eventVal = ref<string[]>([])
const collapseEvent = ref('暂无')
const empty = ref<string[]>([])
</script>

<style lang="scss" scoped>
.demo-page { }
</style>