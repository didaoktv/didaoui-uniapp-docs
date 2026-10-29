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

      <text class="demo-label" style="margin-top:24rpx">Horizontal Sm 横向小号（购物车列表）</text>
      <view class="demo-col">
        <dd-goods-card size="sm" thumb="https://dummyimage.com/140x140/f5a623/0a0a0a&text=果盘" title="经典果盘" :price="38" :num="1" />
        <dd-goods-card size="sm" thumb="https://dummyimage.com/140x140/ffc107/0a0a0a&text=啤酒" title="青岛啤酒经典" :price="8" :num="2" />
      </view>

      <text class="demo-label" style="margin-top:24rpx">Vertical Sm 竖向小号（一行三列）</text>
      <view class="demo-row" style="display:grid;grid-template-columns:repeat(3,1fr);gap:16rpx">
        <dd-goods-card layout="vertical" size="sm" thumb="https://dummyimage.com/300x300/e53935/ffffff&text=汉堡" title="香辣鸡腿堡" :price="23" tag="人气必点" />
        <dd-goods-card layout="vertical" size="sm" thumb="https://dummyimage.com/300x300/ff9800/ffffff&text=鸡卷" title="味滋脆鸡肉堡（微辣）" :price="25" />
        <dd-goods-card layout="vertical" size="sm" thumb="https://dummyimage.com/300x300/4caf50/ffffff&text=蔬堡" title="阳光果蔬鸡肉堡" :price="21" />
      </view>

      <text class="demo-label" style="margin-top:24rpx">Vertical Xs 竖向超小号（一行四列）</text>
      <view class="demo-row" style="display:grid;grid-template-columns:repeat(4,1fr);gap:16rpx">
        <dd-goods-card layout="vertical" size="xs" thumb="https://dummyimage.com/300x300/e53935/ffffff&text=鸡腿堡" title="香辣鸡腿堡" :num="2" />
        <dd-goods-card layout="vertical" size="xs" thumb="https://dummyimage.com/300x300/ff9800/ffffff&text=鸡排堡" title="香辣鸡排堡" />
        <dd-goods-card layout="vertical" size="xs" thumb="https://dummyimage.com/300x300/4caf50/ffffff&text=薯条" title="黄金薯条" :num="3" />
        <dd-goods-card layout="vertical" size="xs" title="青岛啤酒经典" />
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
      <text class="demo-label" style="margin-top:24rpx">无图占位（主题随机底色 + 名称前 2 字）</text>
      <view class="demo-col">
        <dd-goods-card title="青岛啤酒经典" desc="目录暂无封面图" :price="8" />
        <dd-goods-card title="科罗娜啤酒" desc="目录暂无封面图" :price="15" />
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
      <text class="demo-label" style="margin-top:24rpx">Title-suffix 名称后缀 / Price 价格位替换</text>
      <view class="demo-col">
        <dd-goods-card thumb="https://dummyimage.com/140x140/00bcd4/ffffff&text=果盘" title="单份果盘" desc="当季水果现切 · 含蘸酱" :price="38">
          <template #title-suffix><text style="color:#999;font-size:24rpx">×2</text></template>
        </dd-goods-card>
        <dd-goods-card thumb="https://dummyimage.com/140x140/4caf50/ffffff&text=赠饮" title="开业赠饮" desc="满额赠送 · 不重复计数">
          <template #price>
            <dd-tag variant="warning">赠送</dd-tag>
          </template>
        </dd-goods-card>
      </view>
    </view>
    <dd-toast />
    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { DdGoodsCard, DdToast, DdButton, DdTag } from '@didaoktv/didaoui-uniapp'
import { showToast } from '@didaoktv/didaoui-uniapp/components/dd-toast/dd-toast.vue'

function onClick() {
  showToast('已点单: ' + '经典果盘')
}
</script>

<style scoped>
.demo-page { }
</style>