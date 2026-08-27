<template>
  <dd-top-navbar title="Markdown 渲染" />
  <view class="demo-page">

    <!-- 基础语法 -->
    <view class="demo-section">
      <text class="demo-title">基础语法（标题/列表/引用）</text>
      <view class="md-card">
        <dd-markdown :content="basicMd" />
      </view>
    </view>

    <!-- 代码块 -->
    <view class="demo-section">
      <text class="demo-title">代码块 + 行号 showLineNumber</text>
      <view class="md-card">
        <dd-markdown :content="codeMd" :showLineNumber="true" />
      </view>
      <text class="demo-note">showLineNumber=true 时代码块左侧显示行号</text>
    </view>

    <!-- 表格 -->
    <view class="demo-section">
      <text class="demo-title">表格 Table</text>
      <view class="md-card">
        <dd-markdown :content="tableMd" />
      </view>
    </view>

    <!-- 暗色主题 -->
    <view class="demo-section">
      <text class="demo-title">暗色主题 theme="dark"</text>
      <view class="md-card md-card--dark">
        <dd-markdown :content="darkMd" theme="dark" />
      </view>
      <text class="demo-note">dark 主题下代码块/引用/链接自动切换为暗色配色</text>
    </view>

    <!-- 链接点击 -->
    <view class="demo-section">
      <text class="demo-title">链接点击 linktap</text>
      <view class="md-card">
        <dd-markdown :content="linkMd" @linktap="onLinktap" />
      </view>
      <text class="demo-note">点击链接：{{ lastLink || '尚未点击' }}</text>
    </view>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const lastLink = ref('')

function onLinktap(attrs: { href?: string }) {
  lastLink.value = attrs?.href || '(空链接)'
}

const basicMd = `# 帝到KTV 欢唱指南

## 套餐说明
- 黄金场套餐：果盘 + 软饮畅饮 4 小时
- 通宵场套餐：啤酒一打 + 小食拼盘

> 温馨提示：周五至周日为高峰时段，建议提前预订。

**加钟规则**：每小时 ￥58，会员享 8 折。`

const codeMd = `### 预订示例代码

\`\`\`js
// 预订包房
const booking = {
  room: '中包 05',
  time: '20:00 - 24:00',
  price: 198,
}
console.log(booking)
\`\`\``

const tableMd = `### 包房价目表

| 类型 | 容纳 | 价格/小时 |
| --- | --- | --- |
| 小包 | 1-6 人 | ￥128 |
| 中包 | 6-12 人 | ￥198 |
| 大包 | 12-20 人 | ￥288 |`

const darkMd = `# 深夜欢唱模式

- 22:00 后全场 **8 折**
- 通宵场免费续唱一小时

\`\`\`js
const discount = price * 0.8
\`\`\``

const linkMd = `更多请访问 [帝到KTV 官网](https://didaoktv.com) 或 [组件文档](https://didaoktv.com)`
</script>

<style scoped>
.demo-page { padding: 24rpx 0; }

.md-card {
  border-radius: 12rpx;
  overflow: hidden;
}

.md-card--dark {
  border: 1px solid var(--dd-surface-container);
}
</style>
