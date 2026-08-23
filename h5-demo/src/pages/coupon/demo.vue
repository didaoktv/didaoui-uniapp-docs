<template>
  <dd-top-navbar title="优惠券" />
  <view class="demo-page">

    <!-- 形状 shape -->
    <view class="demo-section">
      <text class="demo-title">形状 shape（coupon / envelope / card）</text>
      <view class="demo-col">
        <dd-coupon
          shape="coupon"
          amount="88"
          limit="满 288 可用"
          title="欢唱代金券"
          desc="全场包房通用"
          time="2026-08-22 ~ 2026-09-22"
          @click="onUse"
        />
        <dd-coupon
          shape="envelope"
          amount="66"
          limit="满 199 可用"
          title="中秋欢唱红包"
          desc="限时 3 天"
          action-text="抢"
        />
        <dd-coupon
          shape="card"
          amount="128"
          limit="满 588 可用"
          title="黄金场立减券"
          time="永久有效"
          action-text="去使用"
        />
      </view>
    </view>

    <!-- 尺寸 size -->
    <view class="demo-section">
      <text class="demo-title">尺寸 size（small / medium / large）</text>
      <view class="demo-col">
        <dd-coupon size="small" amount="20" title="小尺寸券" />
        <dd-coupon size="medium" amount="50" title="中尺寸券（默认）" />
        <dd-coupon size="large" amount="100" title="大尺寸券" />
      </view>
    </view>

    <!-- 主题色 type -->
    <view class="demo-section">
      <text class="demo-title">主题色 type</text>
      <view class="demo-col">
        <dd-coupon type="primary" amount="30" title="会员日券" action-text="领取" />
        <dd-coupon type="success" amount="40" title="续费返券" action-text="领取" />
        <dd-coupon type="warning" amount="58" title="加钟折扣券" action-text="领取" />
        <dd-coupon type="error" amount="88" title="爆款抢购券" action-text="抢" />
      </view>
    </view>

    <!-- 禁用 disabled -->
    <view class="demo-section">
      <text class="demo-title">禁用 disabled</text>
      <dd-coupon
        :disabled="true"
        amount="99"
        limit="满 999 可用"
        title="已过期优惠券"
        time="2025-08-22 已过期"
      />
      <text class="demo-note">disabled=true 半透明展示且点击不触发 click 事件</text>
    </view>

    <!-- 自定义插槽 -->
    <view class="demo-section">
      <text class="demo-title">自定义插槽</text>
      <dd-coupon amount="66" title="插槽示例券">
        <template #title="{ title }">
          <text class="cp-slot-title">🎁 {{ title }}（自定义标题）</text>
        </template>
        <template #desc>
          <text class="cp-slot-desc">自定义描述：仅限周五黄金场使用</text>
        </template>
        <template #action="{ actionText }">
          <view class="cp-slot-btn">{{ actionText }}</view>
        </template>
      </dd-coupon>
      <text class="demo-note">支持插槽：unit / amount / limit / title / desc / time / action + 默认插槽</text>
    </view>

    <!-- 自定义颜色 bgColor / color -->
    <view class="demo-section">
      <text class="demo-title">自定义颜色 bgColor / color</text>
      <dd-coupon
        bg-color="#1F2937"
        color="#F5A623"
        amount="38"
        title="暗色会员券"
        desc="指定 bgColor 与 color"
      />
    </view>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">

function onUse() {
  uni.showToast({ title: '点击了优惠券', icon: 'none' })
}
</script>

<style scoped>
.demo-page { padding: 24rpx 0; }

.cp-slot-title {
  font-size: 32rpx;
  font-weight: bold;
}

.cp-slot-desc {
  font-size: 24rpx;
  opacity: 0.9;
}

.cp-slot-btn {
  padding: 10rpx 32rpx;
  background: #E60012;
  color: #fff;
  border-radius: 999rpx;
  font-size: 24rpx;
}
</style>
