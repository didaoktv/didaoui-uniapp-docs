<template>
  <dd-top-navbar title="警告弹窗" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">Type — Info / Success / Warning / Error / Confirm</text>
      <view class="demo-row">
        <dd-button size="sm" type="ghost" @click="t1 = true">Info</dd-button>
        <dd-button size="sm" type="success" @click="t2 = true">Success</dd-button>
        <dd-button size="sm" type="warning" @click="t3 = true">Warning</dd-button>
        <dd-button size="sm" type="danger" @click="t4 = true">Error</dd-button>
        <dd-button size="sm" type="primary" @click="t5 = true">Confirm</dd-button>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">ShowCancel — 单按钮 / 双按钮</text>
      <text class="demo-label">show-cancel=false（默认）</text>
      <view class="demo-row">
        <dd-button size="sm" type="primary" @click="t6 = true">单按钮</dd-button>
        <dd-button size="sm" type="secondary" @click="t7 = true">双按钮</dd-button>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">自定义按钮文字</text>
      <view class="demo-row">
        <dd-button size="sm" type="primary" @click="t8 = true">自定义文案</dd-button>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">CloseOnClickModal</text>
      <text class="demo-label">close-on-click-modal=true</text>
      <view class="demo-row">
        <dd-button size="sm" type="primary" @click="t9 = true">遮罩可关闭</dd-button>
      </view>
    </view>

    <dd-alert v-model="t1" type="info" title="提示" message="这是一条提示信息" @confirm="showToast('确认')" />
    <dd-alert v-model="t2" type="success" title="预订成功" message="您的包房已预订成功" @confirm="showToast('确认')" />
    <dd-alert v-model="t3" type="warning" title="余额不足" message="请先充值再继续操作" :show-cancel="true" @confirm="showToast('充值')" @cancel="showToast('取消')" />
    <dd-alert v-model="t4" type="error" title="操作失败" message="网络异常，请重试" :show-cancel="true" confirm-text="重试" @confirm="showToast('重试')" />
    <dd-alert v-model="t5" type="confirm" title="确认取消？" message="取消后需重新预订" :show-cancel="true" @confirm="showToast('确认')" @cancel="showToast('取消')" />

    <dd-alert v-model="t6" type="info" title="只读提示" message="此处为只读信息，只有确认按钮" @confirm="showToast('知道了')" />
    <dd-alert v-model="t7" type="warning" title="删除确认" message="删除后不可恢复" :show-cancel="true" @confirm="showToast('删除')" @cancel="showToast('取消')" />
    <dd-alert v-model="t8" type="confirm" title="升级 VIP" message="是否升级为 VIP 包房？" :show-cancel="true" confirm-text="升级" cancel-text="以后再说" @confirm="showToast('升级')" @cancel="showToast('以后再说')" />
    <dd-alert v-model="t9" type="info" title="遮罩可关闭" message="点击遮罩即可关闭" :close-on-click-modal="true" @confirm="showToast('确认')" />

    <dd-toast />

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdAlert, DdButton, DdToast } from '@didaoktv/didaoui-uniapp'
import { showToast } from '@didaoktv/didaoui-uniapp/components/dd-toast/dd-toast.vue'

const t1 = ref(false)
const t2 = ref(false)
const t3 = ref(false)
const t4 = ref(false)
const t5 = ref(false)
const t6 = ref(false)
const t7 = ref(false)
const t8 = ref(false)
const t9 = ref(false)
</script>

<style scoped>
.demo-page {  }
</style>