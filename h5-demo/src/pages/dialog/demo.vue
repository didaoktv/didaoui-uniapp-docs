<template>
  <dd-top-navbar title="对话框" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">Theme — Default / Round-Button</text>
      <view class="demo-row">
        <dd-button type="primary" @click="d1 = true">默认样式</dd-button>
        <dd-button type="secondary" @click="d2 = true">圆角按钮</dd-button>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">ShowConfirmButton / ShowCancelButton</text>
      <view class="demo-row">
        <dd-button size="sm" type="primary" @click="d3 = true">仅确认</dd-button>
        <dd-button size="sm" type="primary" @click="d4 = true">确认 + 取消</dd-button>
        <dd-button size="sm" type="primary" @click="d5 = true">仅取消</dd-button>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">自定义按钮文字 / 颜色</text>
      <view class="demo-row">
        <dd-button size="sm" type="primary" @click="d6 = true">自定义文字</dd-button>
        <dd-button size="sm" type="primary" @click="d7 = true">自定义颜色</dd-button>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">Width / CloseOnClickOverlay</text>
      <view class="demo-row">
        <dd-button size="sm" type="primary" @click="d8 = true">自定义宽度</dd-button>
        <dd-button size="sm" type="primary" @click="d9 = true">遮罩可关闭</dd-button>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">无标题 + Slot 内容</text>
      <view class="demo-row">
        <dd-button size="sm" type="primary" @click="d10 = true">无标题</dd-button>
      </view>
    </view>

    <dd-dialog v-model="d1" title="预订成功" message="您的包房已预订成功" :show-cancel-button="true" @confirm="showToast('确认')" @cancel="showToast('取消')" />
    <dd-dialog v-model="d2" title="升级 VIP" message="是否升级为 VIP 包房？" theme="round-button" :show-cancel-button="true" confirm-text="升级" @confirm="showToast('升级')" />
    <dd-dialog v-model="d3" title="提示" message="这是一条确认信息" @confirm="showToast('确认')" />
    <dd-dialog v-model="d4" title="删除确认" message="删除后不可恢复，请谨慎操作" :show-cancel-button="true" @confirm="showToast('删除')" @cancel="showToast('取消')" />
    <dd-dialog v-model="d5" title="仅有取消" message="此对话框只有取消按钮" :show-confirm-button="false" :show-cancel-button="true" />
    <dd-dialog v-model="d6" title="升级 VIP" message="是否升级为 VIP 包房？" :show-cancel-button="true" confirm-text="立即升级" cancel-text="稍后再说" @confirm="showToast('升级')" />
    <dd-dialog v-model="d7" title="自定义颜色" message="确认按钮使用自定义颜色" theme="round-button" :show-cancel-button="true" confirm-color="#F5A623" cancel-color="#9E9E9E" @confirm="showToast('确认')" />
    <dd-dialog v-model="d8" title="自定义宽度" message="宽度 500rpx" width="500rpx" :show-cancel-button="true" @confirm="showToast('确认')" />
    <dd-dialog v-model="d9" title="遮罩可关闭" message="点击遮罩即可关闭对话框" :close-on-click-overlay="true" :show-cancel-button="true" @confirm="showToast('确认')" @cancel="showToast('取消')" />
    <dd-dialog v-model="d10" theme="round-button" :show-cancel-button="true" @confirm="showToast('确认')" @cancel="showToast('取消')">
      <text style="color:#FFC107;font-size:30rpx;font-weight:700;text-align:center;display:block">无标题自定义内容</text>
    </dd-dialog>

    <dd-toast />

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdDialog, DdButton, DdToast } from '@didaoktv/didaoui-uniapp'
import { showToast } from '@didaoktv/didaoui-uniapp/components/dd-toast/dd-toast.vue'

const d1 = ref(false)
const d2 = ref(false)
const d3 = ref(false)
const d4 = ref(false)
const d5 = ref(false)
const d6 = ref(false)
const d7 = ref(false)
const d8 = ref(false)
const d9 = ref(false)
const d10 = ref(false)
</script>

<style scoped>
.demo-page {  }
</style>