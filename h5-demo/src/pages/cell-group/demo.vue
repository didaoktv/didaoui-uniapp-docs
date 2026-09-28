<template>
  <dd-top-navbar title="单元格分组" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">基础分组（默认通栏）</text>
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
      <text class="demo-title">无外框 border=false</text>
      <dd-cell-group title="无边框分组" :border="false">
        <dd-cell title="标题" value="值" />
        <dd-cell title="标题" value="值" />
      </dd-cell-group>
    </view>

    <view class="demo-section">
      <text class="demo-title">title 插槽</text>
      <dd-cell-group inset>
        <template #title>
          <text style="color: #F5A623">自定义分组标题（slot）</text>
        </template>
        <dd-cell title="标题" value="值" />
      </dd-cell-group>
    </view>

    <view class="demo-section">
      <text class="demo-title">默认插槽</text>
      <dd-cell-group title="欢唱套餐" inset>
        <dd-cell title="黄金场 4 小时" value="￥198" is-link @click="tip('套餐')" />
        <dd-cell title="夜场欢唱" value="￥398" is-link @click="tip('夜场')" />
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