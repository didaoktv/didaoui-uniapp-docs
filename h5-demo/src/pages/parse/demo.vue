<template>
  <dd-top-navbar title="富文本解析器" />
  <view class="demo-page">

    <!-- 基础 HTML -->
    <view class="demo-section">
      <text class="demo-title">基础 HTML 富文本</text>
      <view class="parse-card">
        <dd-parse :content="html" />
      </view>
      <text class="demo-note">支持常见标签：h2 / p / strong / em / span / br 等</text>
    </view>

    <!-- 图片预览 -->
    <view class="demo-section">
      <text class="demo-title">图片 previewImg 点击预览</text>
      <view class="parse-card">
        <dd-parse :content="imgHtml" :previewImg="true" />
      </view>
      <text class="demo-note">previewImg=true（默认）点击图片全屏预览</text>
    </view>

    <!-- 链接点击 -->
    <view class="demo-section">
      <text class="demo-title">链接 copyLink / linktap</text>
      <view class="parse-card">
        <dd-parse :content="linkHtml" :copyLink="true" @linktap="onLinktap" />
      </view>
      <text class="demo-note">点击链接触发 linktap：{{ lastLink || '尚未点击' }}</text>
    </view>

    <!-- 表格滚动 + 文本可选中 -->
    <view class="demo-section">
      <text class="demo-title">表格 scrollTable / selectable</text>
      <view class="parse-card">
        <dd-parse :content="tableHtml" :scrollTable="true" :selectable="true" />
      </view>
      <text class="demo-note">scrollTable 让宽表格横向滚动；selectable 允许长按选中复制文本</text>
    </view>

    <!-- 自定义标签样式 tagStyle -->
    <view class="demo-section">
      <text class="demo-title">自定义标签样式 tagStyle</text>
      <view class="parse-card">
        <dd-parse
          :content="html"
          :tagStyle="{ p: 'color:#9e9e9e;line-height:1.8', strong: 'color:#F5A623' }"
        />
      </view>
      <text class="demo-note">tagStyle 按标签名注入样式，p 灰色 / strong 金色</text>
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

const html = `<h2>欢唱套餐说明</h2>
<p>本套餐含 <strong>果盘一份</strong>、<em>软饮畅饮</em> 4 小时，仅限 <span style="color:#F5A623">周五至周日</span> 使用。</p>
<p>预订热线：400-800-1234</p>`

const imgHtml = `<p>门店环境实拍：</p>
<img src="https://picsum.photos/seed/dd-parse/320/180" />`

const linkHtml = `<p>详情见 <a href="https://didaoktv.com">帝到KTV 官网</a>，或查看 <a href="https://duminghong.com">作者主页</a></p>`

const tableHtml = `<table>
<tr><th>包房类型</th><th>容纳人数</th><th>价格/小时</th></tr>
<tr><td>小包</td><td>1-6 人</td><td>￥128</td></tr>
<tr><td>中包</td><td>6-12 人</td><td>￥198</td></tr>
<tr><td>大包</td><td>12-20 人</td><td>￥288</td></tr>
</table>`
</script>

<style scoped>
.demo-page { padding: 24rpx 0; }

.parse-card {
  background: #fff;
  border-radius: 12rpx;
  padding: 20rpx;
  color: #333;
}
</style>
