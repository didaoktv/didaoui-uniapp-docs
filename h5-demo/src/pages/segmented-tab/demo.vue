<template>
  <dd-top-navbar title="分段器" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">胶囊样式 (pill)</text>
      <dd-segmented-tab
        v-model="pillVal"
        :options="['本日', '本周', '本月']"
        variant="pill"
        @change="onPillChange"
      />
      <text class="demo-note">选中：{{ ['本日', '本周', '本月'][pillVal] }}</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">文字样式 (text)</text>
      <dd-segmented-tab
        v-model="textVal"
        :options="['房态排序', '余时排序', '显示房型']"
        variant="text"
      />
      <text class="demo-note">选中：{{ ['房态排序', '余时排序', '显示房型'][textVal] }}</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">对象选项</text>
      <dd-segmented-tab
        v-model="objVal"
        :options="objOptions"
        variant="pill"
      />
      <text class="demo-note">选中：{{ objOptions[objVal].label }}</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">多项选择 (pill)</text>
      <dd-segmented-tab
        v-model="multiVal"
        :options="['热门', '新歌', '经典', '推荐']"
        variant="pill"
      />
    </view>

    <view class="demo-section">
      <text class="demo-title">多项选择 (text)</text>
      <dd-segmented-tab
        v-model="multiTextVal"
        :options="['全部', '在线', '离线', '忙碌']"
        variant="text"
      />
    </view>

    <view class="demo-section">
      <text class="demo-title">change 事件</text>
      <text class="demo-note">最新事件：{{ segEvent }}</text>
      <dd-segmented-tab
        v-model="eventVal"
        :options="['选项A', '选项B', '选项C']"
        variant="pill"
        @change="(i: number) => (segEvent = '切换到: ' + ['选项A','选项B','选项C'][i])"
      />
    </view>

    <view class="demo-section">
      <text class="demo-title">自定义起始索引</text>
      <dd-segmented-tab
        v-model="startVal"
        :options="['第一', '第二', '第三']"
        variant="text"
      />
      <text class="demo-note">初始选中第二项</text>
    </view>

    <dd-toast />
    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdSegmentedTab, DdToast } from '@didaoktv/didaoui-uniapp'
import { showToast } from '@didaoktv/didaoui-uniapp/components/dd-toast/dd-toast.vue'
import DemoNav from '../../components/DemoNav.vue'


const pillVal = ref(0)
const textVal = ref(0)
const objVal = ref(0)
const multiVal = ref(0)
const multiTextVal = ref(0)
const eventVal = ref(0)
const segEvent = ref('暂无')
const startVal = ref(1)

const objOptions = [
  { label: '标准间' },
  { label: '豪华包' },
  { label: 'VIP包' },
  { label: '总统包' }
]

function onPillChange(i: number) {
  showToast('pill → ' + ['本日', '本周', '本月'][i])
}
</script>

<style lang="scss" scoped>
.demo-page { }
</style>