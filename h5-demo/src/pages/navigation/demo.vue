<template>
  <dd-top-navbar title="底部导航" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">底部导航（内嵌展示）</text>
      <text class="demo-label">激活项：</text>
      <text class="demo-note">{{ items[active].label }}</text>
      <dd-navigation
        v-model="active"
        :items="items"
        :fixed="false"
        :border="true"
        @change="onChange"
      />
    </view>

    <view class="demo-section">
      <text class="demo-title">无边框</text>
      <dd-navigation
        v-model="active2"
        :items="items"
        :fixed="false"
        :border="false"
        @change="onChange2"
      />
    </view>

    <view class="demo-section">
      <text class="demo-title">自定义图标槽</text>
      <dd-navigation
        v-model="active3"
        :items="slotItems"
        :fixed="false"
        :border="true"
        @change="onChange3"
      >
        <template #icon="{ item, active }">
          <dd-icon
            :name="item.icon"
            :color="active ? '#F5A623' : '#9E9E9E'"
            size="36rpx"
          />
        </template>
      </dd-navigation>
    </view>

    <view class="demo-section">
      <text class="demo-title">3项导航</text>
      <dd-navigation
        v-model="active4"
        :items="threeItems"
        :fixed="false"
        :border="true"
      />
    </view>

    <view class="demo-section">
      <text class="demo-title">5项导航</text>
      <dd-navigation
        v-model="active5"
        :items="fiveItems"
        :fixed="false"
        :border="true"
      />
    </view>

    <view class="demo-section">
      <text class="demo-title">change 事件</text>
      <text class="demo-note">最新事件：{{ lastEvent }}</text>
      <dd-navigation
        v-model="active6"
        :items="items"
        :fixed="false"
        :border="true"
        @change="(i: number) => (lastEvent = '切换到: ' + items[i].label)"
      />
    </view>

    <dd-toast />
    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdNavigation, DdToast } from '@didaoktv/didaoui-uniapp'
import DdIcon from '@didaoktv/didaoui-uniapp/components/dd-icon/dd-icon.vue'
import { showToast } from '@didaoktv/didaoui-uniapp/components/dd-toast/dd-toast.vue'
import DemoNav from '../../components/DemoNav.vue'


const active = ref(0)
const active2 = ref(0)
const active3 = ref(0)
const active4 = ref(0)
const active5 = ref(0)
const active6 = ref(0)
const lastEvent = ref('暂无')

const items = [
  { icon: 'wap-home-o', label: '首页' },
  { icon: 'music-o', label: '点歌' },
  { icon: 'hotel-o', label: '房态' },
  { icon: 'user-o', label: '我的' }
]

const slotItems = [
  { icon: 'wap-home-o', label: '首页' },
  { icon: 'bar-chart-o', label: '排行' },
  { icon: 'chat-o', label: '消息' },
  { icon: 'user-o', label: '我的' }
]

const threeItems = [
  { icon: 'music-o', label: '点歌' },
  { icon: 'notes-o', label: '已点' },
  { icon: 'user-o', label: '我的' }
]

const fiveItems = [
  { icon: 'wap-home-o', label: '首页' },
  { icon: 'music-o', label: '点歌' },
  { icon: 'bar-chart-o', label: '排行' },
  { icon: 'hotel-o', label: '房态' },
  { icon: 'user-o', label: '我的' }
]

function onChange(i: number) {
  showToast('切换到：' + items[i].label)
}
function onChange2(i: number) {
  showToast('无边框 → ' + items[i].label)
}
function onChange3(i: number) {
  showToast('自定义图标 → ' + slotItems[i].label)
}
</script>

<style lang="scss" scoped>
.demo-page { }
</style>
