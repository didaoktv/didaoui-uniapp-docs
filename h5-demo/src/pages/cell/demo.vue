<template>
  <dd-top-navbar title="单元格" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">尺寸 Size</text>
      <view class="dd-cell-col">
        <dd-cell title="小号 SM" value="描述" size="sm" />
        <dd-cell title="中号 MD" value="描述" size="md" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">必填 Required</text>
      <view class="dd-cell-col">
        <dd-cell title="姓名" required value="张先生" />
        <dd-cell title="手机号" required value="138****8888" />
        <dd-cell title="备注" value="可选" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">链接 Link</text>
      <view class="dd-cell-col">
        <dd-cell title="个人资料" value="编辑" is-link @click="tip('个人资料')" />
        <dd-cell title="隐私设置" is-link @click="tip('隐私')" />
        <dd-cell title="退出登录" value="" is-link @click="tip('退出')" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">箭头方向 Arrow Direction</text>
      <view class="dd-cell-col">
        <dd-cell title="右箭头" is-link arrow-direction="right" @click="tip('右')" />
        <dd-cell title="左箭头" is-link arrow-direction="left" @click="tip('左')" />
        <dd-cell title="上箭头" is-link arrow-direction="up" @click="tip('上')" />
        <dd-cell title="下箭头" is-link arrow-direction="down" @click="tip('下')" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">居中 Center</text>
      <view class="dd-cell-col">
        <dd-cell title="居中标题" value="居中内容" center />
        <dd-cell title="居中必填" required value="居中必填内容" center />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">标签 Label</text>
      <view class="dd-cell-col">
        <dd-cell title="用户名" label="用于登录" value="admin" />
        <dd-cell title="邮箱" label="*必填" required value="test@test.com" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">图标 Icon</text>
      <view class="dd-cell-col">
        <dd-cell title="消息" icon="chat-o" value="3 条" is-link @click="tip('消息')" />
        <dd-cell title="收藏" icon="star" value="12 首" />
        <dd-cell title="历史" icon="clock-o" value="30 条" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">无边框 Borderless</text>
      <view class="dd-cell-col">
        <dd-cell title="项目一" value="值一" borderless />
        <dd-cell title="项目二" value="值二" borderless />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">状态组合 States</text>
      <view class="dd-cell-col">
        <dd-cell title="图标+标签+必填+链接" icon="setting-o" label="系统设置" required is-link arrow-direction="right" @click="tip('设置')" />
        <dd-cell title="居中+无边框" value="居中无边框" center borderless />
        <dd-cell title="小号+必填+链接" required size="sm" is-link @click="tip('小号链接')" />
      </view>
    </view>
    <dd-toast />
    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { DdCell, DdToast } from '@didaoktv/didaoui-uniapp'
import { showToast } from '@didaoktv/didaoui-uniapp/components/dd-toast/dd-toast.vue'

function tip(m){ showToast(m) }
</script>

<style scoped>
.demo-page { }
.dd-cell-col{display:flex;flex-direction:column;background:#1a1a1a;border-radius:12rpx;overflow:hidden;}
</style>
