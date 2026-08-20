<template>
  <dd-top-navbar title="模态框" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">Type — Dialog</text>
      <view class="demo-row">
        <dd-button type="primary" @click="show1 = true">居中弹窗</dd-button>
        <dd-button type="secondary" @click="show2 = true">无关闭按钮</dd-button>
        <dd-button type="ghost" @click="show3 = true">自定义宽度</dd-button>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">Type — Bottom Sheet</text>
      <view class="demo-row">
        <dd-button type="primary" @click="show4 = true">底部弹层</dd-button>
        <dd-button type="secondary" @click="show5 = true">无标题</dd-button>
        <dd-button type="ghost" @click="show6 = true">点击遮罩不关闭</dd-button>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">ShowClose / CloseOnClickModal</text>
      <text class="demo-label">show-close=false，close-on-click-modal=false</text>
      <view class="demo-row">
        <dd-button type="primary" @click="show7 = true">无关闭 + 遮罩不关闭</dd-button>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">Slot — Header / Footer</text>
      <text class="demo-label">自定义 header 插槽 + footer 插槽</text>
      <view class="demo-row">
        <dd-button type="primary" @click="show8 = true">自定义插槽</dd-button>
      </view>
    </view>

    <dd-modal v-model="show1" type="dialog" title="提示" :show-close="true">
      <view style="padding:32rpx;color:#9E9E9E">是否确认删除该包房预订？</view>
      <template #footer>
        <view style="padding:16rpx;display:flex;gap:20rpx;justify-content:flex-end">
          <dd-button size="sm" type="ghost" @click="show1 = false">取消</dd-button>
          <dd-button size="sm" type="primary" @click="show1 = false">确定</dd-button>
        </view>
      </template>
    </dd-modal>

    <dd-modal v-model="show2" type="dialog" title="预订成功" :show-close="false">
      <view style="padding:32rpx;color:#9E9E9E;text-align:center">您的包房已预订成功</view>
    </dd-modal>

    <dd-modal v-model="show3" type="dialog" title="自定义宽度" width="800rpx">
      <view style="padding:32rpx;color:#9E9E9E">宽度 800rpx 的对话框</view>
    </dd-modal>

    <dd-modal v-model="show4" type="bottom-sheet" title="选择操作">
      <view style="padding:32rpx;color:#9E9E9E">底部弹层内容</view>
    </dd-modal>

    <dd-modal v-model="show5" type="bottom-sheet">
      <view style="padding:32rpx;color:#9E9E9E">无标题底部弹层</view>
    </dd-modal>

    <dd-modal v-model="show6" type="bottom-sheet" title="点击遮罩不关闭" :close-on-click-modal="false">
      <view style="padding:32rpx;color:#9E9E9E">点击遮罩不会关闭此弹层</view>
    </dd-modal>

    <dd-modal v-model="show7" type="dialog" title="不可关闭" :show-close="false" :close-on-click-modal="false">
      <view style="padding:32rpx;color:#9E9E9E">无关闭按钮，遮罩点击不关闭</view>
      <template #footer>
        <view style="padding:16rpx;display:flex;justify-content:center">
          <dd-button size="sm" type="primary" @click="show7 = false">我知道了</dd-button>
        </view>
      </template>
    </dd-modal>

    <dd-modal v-model="show8" type="dialog" :show-close="true">
      <template #header>
        <text style="font-size:32rpx;font-weight:700;color:#FFC107">自定义 Header</text>
      </template>
      <view style="padding:32rpx;color:#9E9E9E">这是通过默认插槽传入的内容</view>
      <template #footer>
        <view style="padding:16rpx;display:flex;gap:20rpx;justify-content:flex-end">
          <dd-button size="sm" type="ghost" @click="show8 = false">取消</dd-button>
          <dd-button size="sm" type="primary" @click="show8 = false">确定</dd-button>
        </view>
      </template>
    </dd-modal>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdModal, DdButton } from '@didaoktv/didaoui-uniapp'

const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)
const show4 = ref(false)
const show5 = ref(false)
const show6 = ref(false)
const show7 = ref(false)
const show8 = ref(false)
</script>

<style scoped>
.demo-page {  }
</style>