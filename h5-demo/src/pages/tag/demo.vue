<template>
  <dd-top-navbar title="标签" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">类型 Type</text>
      <view class="demo-row">
        <dd-tag type="filled" variant="primary" text="VIP" />
        <dd-tag type="outlined" variant="primary" text="Outlined" />
        <dd-tag type="dot" variant="primary" text="Dot" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">填充色 Filled</text>
      <view class="demo-row">
        <dd-tag type="filled" variant="primary" text="Primary" />
        <dd-tag type="filled" variant="accent" text="Accent" />
        <dd-tag type="filled" variant="success" text="Success" />
      </view>
      <view class="demo-row" style="margin-top:20rpx">
        <dd-tag type="filled" variant="warning" text="Warning" />
        <dd-tag type="filled" variant="error" text="Error" />
        <dd-tag type="filled" variant="info" text="Info" />
        <dd-tag type="filled" variant="default" text="Default" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">描边 Outlined</text>
      <view class="demo-row">
        <dd-tag type="outlined" variant="primary" text="Primary" />
        <dd-tag type="outlined" variant="accent" text="Accent" />
        <dd-tag type="outlined" variant="success" text="Success" />
      </view>
      <view class="demo-row" style="margin-top:20rpx">
        <dd-tag type="outlined" variant="warning" text="Warning" />
        <dd-tag type="outlined" variant="error" text="Error" />
        <dd-tag type="outlined" variant="info" text="Info" />
        <dd-tag type="outlined" variant="default" text="Default" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">圆点 Dot</text>
      <view class="demo-row">
        <dd-tag type="dot" variant="primary" text="Primary" />
        <dd-tag type="dot" variant="accent" text="Accent" />
        <dd-tag type="dot" variant="success" text="Success" />
      </view>
      <view class="demo-row" style="margin-top:20rpx">
        <dd-tag type="dot" variant="warning" text="Warning" />
        <dd-tag type="dot" variant="error" text="Error" />
        <dd-tag type="dot" variant="info" text="Info" />
        <dd-tag type="dot" variant="default" text="Default" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">尺寸 Size</text>
      <view class="demo-row">
        <dd-tag type="filled" size="sm" text="SM" />
        <dd-tag type="filled" size="md" text="MD" />
        <dd-tag type="outlined" size="sm" text="SM" />
        <dd-tag type="outlined" size="md" text="MD" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">圆角 Round</text>
      <view class="demo-row">
        <dd-tag type="filled" round text="圆角" />
        <dd-tag type="outlined" round text="圆角" />
        <dd-tag type="dot" round text="圆角" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">可关闭 Closable</text>
      <view class="demo-row">
        <dd-tag v-for="(t,i) in tags" :key="t" type="filled" variant="primary" :text="t" closable @close="onClose(i)" />
      </view>
      <view class="demo-row" style="margin-top:20rpx">
        <dd-tag v-for="(t,i) in tags2" :key="t" type="outlined" variant="accent" :text="t" closable @close="onClose2(i)" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">状态组合 States</text>
      <view class="demo-row">
        <dd-tag type="filled" size="sm" round text="小圆角" />
        <dd-tag type="outlined" size="md" round closable text="描边圆角可关" @close="()=>{}" />
        <dd-tag type="dot" size="sm" round text="小圆点圆角" />
      </view>
    </view>
    <dd-toast />
    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdTag, DdToast } from '@didaoktv/didaoui-uniapp'
import { showToast } from '@didaoktv/didaoui-uniapp/components/dd-toast/dd-toast.vue'

const tags = ref(['新歌','流行','热门'])
const tags2 = ref(['电子','古典','民谣'])
function onClose(i){ tags.value.splice(i,1); showToast('已移除') }
function onClose2(i){ tags2.value.splice(i,1); showToast('已移除') }
</script>

<style scoped>
.demo-page { }
</style>