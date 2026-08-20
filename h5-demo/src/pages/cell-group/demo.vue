<template>
  <dd-top-navbar title="单元格组" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">基础 Cell Group</text>
      <dd-cell-group>
        <dd-cell title="会员等级" value="黄金会员" />
        <dd-cell title="当前积分" value="12,580" />
        <dd-cell title="有效期至" value="2026-12-31" />
      </dd-cell-group>
    </view>

    <view class="demo-section">
      <text class="demo-title">带标题 With Title</text>
      <dd-cell-group title="账户信息">
        <dd-cell title="昵称" value="歌神" />
        <dd-cell title="性别" value="男" />
        <dd-cell title="生日" value="1990-01-15" />
      </dd-cell-group>
    </view>

    <view class="demo-section">
      <text class="demo-title">多组 Multi Group</text>
      <dd-cell-group title="订单管理">
        <dd-cell title="我的订单" value="3 条" is-link @click="tip('订单')" />
        <dd-cell title="优惠券" value="5 张可用" is-link @click="tip('优惠券')" />
      </dd-cell-group>
      <view style="height:24rpx"></view>
      <dd-cell-group title="设置">
        <dd-cell title="消息通知" value="已开启" is-link @click="tip('通知')" />
        <dd-cell title="隐私设置" is-link @click="tip('隐私')" />
      </dd-cell-group>
    </view>

    <view class="demo-section">
      <text class="demo-title">混合 ListCell</text>
      <dd-cell-group title="房间列表">
        <dd-list-cell title="A01 总统套房" subtitle="VIP · 容纳10人" value="使用中" icon="hotel-o" :arrow="true" :is-link="true" @click="tip('A01')" />
        <dd-list-cell title="B02 标准包间" subtitle="容纳4人" value="空闲" icon="music" :arrow="true" :is-link="true" @click="tip('B02')" />
        <dd-list-cell title="C03 主题房" subtitle="容纳6人" value="已预订" icon="brush-o" :arrow="true" :is-link="true" @click="tip('C03')" />
      </dd-cell-group>
    </view>

    <view class="demo-section">
      <text class="demo-title">自定义标题 Slot</text>
      <dd-cell-group>
        <template #title>
          <view class="cell-group-title-star">
            <dd-icon name="star" color="#FFC107" size="24" />
            <text style="color:#FFC107;font-weight:600">收藏列表</text>
          </view>
        </template>
        <dd-cell title="七里香" value="周杰伦" />
        <dd-cell title="稻香" value="周杰伦" />
      </dd-cell-group>
    </view>

    <view class="demo-section">
      <text class="demo-title">分组嵌套 CellGroup 嵌套</text>
      <dd-cell-group title="用户中心">
        <dd-cell title="基本信息" value="编辑" is-link @click="tip('基本信息')" />
        <dd-cell title="会员等级" value="黄金" />
        <dd-cell title="退出登录" is-link @click="tip('退出')" />
      </dd-cell-group>
    </view>
    <dd-toast />
    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { DdCellGroup, DdCell, DdListCell, DdToast } from '@didaoktv/didaoui-uniapp'
import DdIcon from '@didaoktv/didaoui-uniapp/components/dd-icon/dd-icon.vue'
import { showToast } from '@didaoktv/didaoui-uniapp/components/dd-toast/dd-toast.vue'

function tip(m){ showToast(m) }
</script>

<style scoped>
.demo-page { }
.cell-group-title-star{display:flex;align-items:center;gap:8rpx;}
</style>
