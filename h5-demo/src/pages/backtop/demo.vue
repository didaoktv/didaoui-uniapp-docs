<template>
  <dd-top-navbar title="回到顶部" />
  <view class="demo-page">

    <dd-swipeable-tab
      v-model="activeTab"
      :options="['基础', '触发高度', '位置', '图标', '时长']"
      mode="fixed"
      class="demo-tabs"
    />

    <view v-show="activeTab === 0" class="demo-section">
      <text class="demo-title">基础：滚动显示回到顶部</text>
      <text class="demo-note">向下滚动，超过 200px 后按钮出现</text>
      <dd-backtop
        :scroll-top="scrollTop"
        :visibility-height="200"
        @click="tip('回到顶部')"
      />
      <view v-for="i in 6" :key="i" class="demo-spacer">滚动区域 {{ i }}</view>
    </view>

    <view v-show="activeTab === 1" class="demo-section">
      <text class="demo-title">不同 visibilityHeight</text>
      <text class="demo-note">默认 400，当前设置 50</text>
      <dd-backtop
        :scroll-top="scrollTop"
        :visibility-height="50"
        :right="30"
        :bottom="200"
      />
      <view v-for="i in 4" :key="i" class="demo-spacer">滚动区域 {{ i }}</view>
    </view>

    <view v-show="activeTab === 2" class="demo-section">
      <text class="demo-title">自定义位置 (right/bottom)</text>
      <text class="demo-note">right: 20rpx, bottom: 300rpx</text>
      <dd-backtop
        :scroll-top="scrollTop"
        :visibility-height="100"
        :right="20"
        :bottom="300"
      />
      <view v-for="i in 4" :key="i" class="demo-spacer">滚动区域 {{ i }}</view>
    </view>

    <view v-show="activeTab === 3" class="demo-section">
      <text class="demo-title">自定义图标</text>
      <dd-backtop
        :scroll-top="scrollTop"
        :visibility-height="10"
        :right="200"
        :bottom="600"
      >
        <template #icon>
          <dd-icon name="back-top" size="36rpx" color="#F5A623" />
        </template>
      </dd-backtop>
      <view v-for="i in 3" :key="i" class="demo-spacer">滚动区域 {{ i }}</view>
    </view>

    <view v-show="activeTab === 4" class="demo-section">
      <text class="demo-title">duration 控制</text>
      <text class="demo-note">duration: 1000ms（慢滚动）</text>
      <dd-backtop
        :scroll-top="scrollTop"
        :visibility-height="10"
        :right="200"
        :bottom="900"
        :duration="1000"
      />
      <view v-for="i in 3" :key="i" class="demo-spacer">滚动区域 {{ i }}</view>
    </view>

    <dd-toast />
    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onPageScroll } from '@dcloudio/uni-app'
import { DdBacktop, DdToast, DdSwipeableTab } from '@didaoktv/didaoui-uniapp'
import DdIcon from '@didaoktv/didaoui-uniapp/components/dd-icon/dd-icon.vue'
import { showToast } from '@didaoktv/didaoui-uniapp/components/dd-toast/dd-toast.vue'
import DemoNav from '../../components/DemoNav.vue'


const activeTab = ref(0)
const scrollTop = ref(0)
onPageScroll((e) => {
  scrollTop.value = e.scrollTop
})

function tip(m: string) {
  showToast(m)
}
</script>

<style lang="scss" scoped>
.demo-page { }

.demo-tabs {
  position: sticky;
  top: 88rpx;
  z-index: 10;
  background: #fff;
}
</style>
