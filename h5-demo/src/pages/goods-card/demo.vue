<template>
  <dd-top-navbar title="商品卡片" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">布局 Layout</text>
      <text class="demo-label">Horizontal 横向（点单列表）</text>
      <view class="demo-col">
        <dd-goods-card
          thumb="https://dummyimage.com/140x140/f5a623/0a0a0a&text=果盘"
          title="经典果盘"
          desc="当季水果现切 · 含蘸酱"
          :price="88"
          tag="热卖"
          @click="onClick"
        />
        <dd-goods-card
          thumb="https://dummyimage.com/140x140/2d4ba0/ffffff&text=畅饮"
          title="欢乐畅饮套餐"
          desc="指定啤酒 / 软饮任选 6 瓶"
          :price="168"
          :origin-price="199"
          :num="2"
        />
      </view>

      <text class="demo-label" style="margin-top:24rpx">Vertical 竖向（宫格陈列）</text>
      <view class="demo-row" style="display:grid;grid-template-columns:repeat(2,1fr);gap:16rpx">
        <dd-goods-card layout="vertical" thumb="https://dummyimage.com/300x300/4caf50/ffffff&text=果盘" title="水果拼盘" :price="68" />
        <dd-goods-card layout="vertical" thumb="https://dummyimage.com/300x300/f5a623/0a0a0a&text=全家福" title="果盘全家福" :price="128" tag="新品" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">状态 Status</text>
      <view class="demo-col">
        <dd-goods-card
          thumb="https://dummyimage.com/140x140/e53935/ffffff&text=售罄"
          title="限定特调鸡尾酒"
          desc="已售罄，下次补货后开放"
          :price="58"
          tag="售罄"
          disabled
        />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">自定义插槽 Slot</text>
      <text class="demo-label">Bottom 底部加购</text>
      <dd-goods-card thumb="https://dummyimage.com/140x140/00bcd4/ffffff&text=果盘" title="单份果盘" :price="38">
        <template #bottom>
          <dd-button type="primary" size="sm" style="width:100%">加入购物车</dd-button>
        </template>
      </dd-goods-card>
    </view>
    <dd-toast />
    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { DdGoodsCard, DdToast, DdButton } from '@didaoktv/didaoui-uniapp'
import { showToast } from '@didaoktv/didaoui-uniapp/components/dd-toast/dd-toast.vue'

function onClick() {
  showToast('已点单: ' + '经典果盘')
}
</script>

<style scoped>
.demo-page { }
</style>