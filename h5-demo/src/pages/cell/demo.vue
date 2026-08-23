<template>
  <dd-top-navbar title="单元格" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">分组 Group（默认通栏）</text>
      <dd-cell-group title="预订信息">
        <dd-cell title="包厢类型" value="VIP大包" />
        <dd-cell title="到场时间" value="今晚 20:00" />
        <dd-cell title="人数" value="8人" />
      </dd-cell-group>
      <text class="demo-note">默认通栏 + 首尾外框发丝线（border 默认 true）</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">内嵌分组 inset</text>
      <dd-cell-group title="账户安全" inset>
        <dd-cell title="手机号" value="138****8888" />
        <dd-cell title="登录密码" value="已设置" is-link @click="tip('密码')" />
        <dd-cell title="实名认证" value="未认证" is-link @click="tip('实名')" />
      </dd-cell-group>
    </view>

    <view class="demo-section">
      <text class="demo-title">尺寸 Size</text>
      <dd-cell-group inset>
        <dd-cell title="标准 normal" value="描述" />
        <dd-cell title="大号 large" value="描述" size="large" />
      </dd-cell-group>
    </view>

    <view class="demo-section">
      <text class="demo-title">点击态 clickable 与 click 事件</text>
      <dd-cell-group inset>
        <dd-cell title="可点击（无箭头）" clickable @click="tip('clickable')" />
        <dd-cell title="链接 is-link" value="编辑" is-link @click="tip('is-link')" />
        <dd-cell title="纯展示（无点击态）" value="只读" />
      </dd-cell-group>
      <text class="demo-note">click 事件总是抛出，clickable/is-link 只控制点击反馈样式</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">箭头方向 Arrow Direction</text>
      <dd-cell-group inset>
        <dd-cell title="右箭头" is-link arrow-direction="right" @click="tip('右')" />
        <dd-cell title="左箭头" is-link arrow-direction="left" @click="tip('左')" />
        <dd-cell title="上箭头" is-link arrow-direction="up" @click="tip('上')" />
        <dd-cell title="下箭头" is-link arrow-direction="down" @click="tip('下')" />
      </dd-cell-group>
    </view>

    <view class="demo-section">
      <text class="demo-title">页面跳转 url + linkType</text>
      <dd-cell-group inset>
        <dd-cell title="navigateTo 跳转" is-link url="/pages/switch/demo" />
        <dd-cell title="redirectTo 跳转" is-link url="/pages/tag/demo" link-type="redirectTo" />
      </dd-cell-group>
    </view>

    <view class="demo-section">
      <text class="demo-title">图标 Icon 与标签 Label</text>
      <dd-cell-group inset>
        <dd-cell title="会员等级" icon="crown" label="黄金会员 · 享 92 折" value="G3" />
        <dd-cell title="储值余额" icon="wallet" label="含赠送金额 ¥120" value="¥680.00" />
      </dd-cell-group>
    </view>

    <view class="demo-section">
      <text class="demo-title">插槽 Slots</text>
      <dd-cell-group inset>
        <dd-cell title="title 插槽" value="正常值">
          <template #title>
            <text style="color: #F5A623">自定义标题</text>
          </template>
        </dd-cell>
        <dd-cell title="value 插槽">
          <template #value>
            <dd-tag type="primary" size="sm">进行中</dd-tag>
          </template>
        </dd-cell>
        <dd-cell title="right-icon 插槽">
          <template #right-icon>
            <dd-icon name="search" />
          </template>
        </dd-cell>
      </dd-cell-group>
    </view>

    <view class="demo-section">
      <text class="demo-title">必填 Required 与边框 border</text>
      <dd-cell-group inset>
        <dd-cell title="姓名" required value="张先生" />
        <dd-cell title="备注" value="可选" />
        <dd-cell title="无边框行" value="border=false" :border="false" />
      </dd-cell-group>
    </view>

    <view class="demo-section">
      <text class="demo-title">居中 Center 与自定义标题样式</text>
      <dd-cell-group inset>
        <dd-cell title="居中标题" value="居中内容" center />
        <dd-cell title="金色标题" value="titleStyle" title-style="color:#F5A623;font-weight:600" />
      </dd-cell-group>
    </view>

  </view>
</template>

<script setup lang="ts">
function tip(msg: string) {
  uni.showToast({ title: msg, icon: 'none' })
}
</script>

<style scoped>
.demo-page { }
</style>
