# 图标 DdIcon

> Iconfont 图标字体封装的跨平台图标组件。通过 `@font-face`（H5/APP）与 `uni.loadFontFace`（小程序）双端策略加载字体文件，支持尺寸、颜色、红点提示，并按 9 大类组织 258 个图标。

## 介绍

DdIcon 是最轻量的图标组件，底层使用自托管 iconfont 字库（project 5222155），通过 class 切换 `:before` 的 `content` 值实现不同图标。字体加载按平台差异化处理：H5 / APP 端走 CSS `@font-face`（内嵌 base64，含在线回退链接），小程序端走 `uni.loadFontFace` API。

## 代码演示

### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;gap:32rpx;align-items:center">
    <dd-icon name="search" />
    <dd-icon name="success" />
    <dd-icon name="warning" />
    <dd-icon name="info" />
    <dd-icon name="cross" />
  </view>
</template>
```

</DemoBlock>
:::

### 尺寸与颜色

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;flex-direction:column;gap:32rpx">
    <view style="display:flex;gap:32rpx;align-items:center">
      <dd-icon name="star-o" size="16" />
      <dd-icon name="star-o" size="24" />
      <dd-icon name="star-o" size="32" />
      <dd-icon name="star-o" size="48" />
    </view>
    <view style="display:flex;gap:32rpx;align-items:center">
      <dd-icon name="star" size="28" color="#F5A623" />
      <dd-icon name="star" size="28" color="#E60012" />
      <dd-icon name="star" size="28" color="#07C160" />
      <dd-icon name="star" size="28" color="#1989FA" />
    </view>
  </view>
</template>
```

</DemoBlock>
:::

### 红点提示

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;gap:32rpx;align-items:center">
    <dd-icon name="friends" size="28" :dot="true" />
    <dd-icon name="manager" size="28" :dot="true" />
    <dd-icon name="gift" size="28" :dot="true" />
  </view>
</template>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| name | 图标名称（必填） | `string` | — |
| size | 图标大小，支持 `'16'` 或 `16` | `string \| number` | `'inherit'` |
| color | 图标颜色 | `string` | `'inherit'` |
| dot | 是否显示右上角红点 | `boolean` | `false` |

### 事件

无事件。

## 图标列表

> 与 `dd-icon.vue` 导出的 `iconGroups` / `iconLabels` 保持一致；新增或删除图标时请同步更新。

### 通用操作

`cross`(叉号) · `close`(关闭) · `clear`(清除) · `delete`(删除) · `delete-o`(删除描边) · `edit`(编辑) · `plus`(加号) · `minus`(减号) · `add`(加号) · `add-o`(加号描边) · `add-square`(方块加号) · `arrow`(箭头) · `arrow-left`(箭头左) · `arrow-down`(箭头下) · `arrow-up`(箭头上) · `arrow-double-left`(双箭头左) · `arrow-double-right`(双箭头右) · `back-top`(回到顶部) · `down`(向下) · `ellipsis`(省略号) · `more`(更多) · `more-o`(更多描边) · `exchange`(交换) · `filter-o`(筛选描边) · `sort`(排序) · `ascending`(升序) · `descending`(降序) · `list-switch`(列表切换) · `list-switching`(列表切换) · `column`(竖向排列) · `expand`(展开) · `expand-o`(展开描边) · `shrink`(缩小) · `enlarge`(放大) · `font`(字体) · `font-o`(字体描边) · `sign`(签到) · `lock`(锁定) · `revoke`(撤销) · `upgrade`(升级) · `qr`(二维码) · `qr-invalid`(二维码失效) · `scan`(扫码) · `certificate`(证书) · `bars`(菜单)

### 状态反馈

`completed`(已完成) · `completed-o`(已完成描边) · `checked`(已选) · `success`(成功) · `fail`(失败) · `failure`(失效) · `circle`(圆圈) · `passed`(已通过) · `star`(星星) · `star-o`(星星描边) · `good-job`(点赞) · `good-job-o`(点赞描边) · `thumb-circle`(点赞圆圈) · `thumb-circle-o`(点赞圆圈描边) · `clock`(时钟) · `clock-o`(时钟描边) · `fire`(火焰) · `fire-o`(火焰描边) · `hot`(热门) · `hot-o`(热门描边) · `like`(点赞) · `like-o`(点赞描边) · `info`(信息) · `info-o`(信息描边) · `warning`(警告) · `warning-o`(警告描边) · `warn-o`(警示描边) · `question`(问号) · `question-o`(问号描边) · `aim`(准星) · `award`(奖章) · `award-o`(奖章描边) · `medal`(勋章) · `medal-o`(勋章描边) · `gem`(宝石) · `gem-o`(宝石描边) · `diamond`(钻石) · `diamond-o`(钻石描边) · `flower-o`(花朵描边)

### 社交

`wechat`(微信) · `weibo`(微博) · `alipay`(支付宝) · `qq`(QQ) · `wechat-moments`(朋友圈) · `wechat-pay`(微信支付) · `miniprogram-o`(小程序描边)

### 订单物流

`logistics`(物流) · `cluster`(集群) · `cluster-o`(集群描边) · `underway`(进行中) · `underway-o`(进行中描边) · `cart`(购物车) · `cart-o`(购物车描边) · `cart-circle`(购物车圆圈) · `cart-circle-o`(购物车圆圈描边) · `shopping-cart`(购物车) · `shopping-cart-o`(购物车描边) · `shop-collect`(收藏店铺) · `shop-collect-o`(收藏店铺描边) · `free-postage`(包邮) · `cash-on-deliver`(货到付款) · `peer-pay`(余额互转) · `pending-payment`(待支付) · `paid`(已支付) · `after-sale`(售后) · `refund-o`(退款描边) · `todo-list`(待办清单) · `todo-list-o`(待办清单描边) · `tosend`(待发货) · `orders-o`(订单描边)

### 金融

`gold-coin`(金币) · `gold-coin-o`(金币描边) · `balance-pay`(余额支付) · `balance-list`(账单明细) · `balance-list-o`(账单明细描边) · `balance-o`(余额描边) · `cash-o`(现金描边) · `cash-back-record`(退款记录) · `cash-back-record-o`(退款记录描边) · `cashier-o`(收银台描边) · `points`(积分) · `credit-pay`(信用卡) · `debit-pay`(储蓄卡) · `ecard-pay`(电子卡) · `other-pay`(其他支付) · `coupon`(优惠券) · `coupon-o`(优惠券描边) · `gift-card`(礼品卡) · `gift-card-o`(礼品卡描边) · `point-gift`(积分礼品) · `point-gift-o`(积分礼品描边) · `vip-card`(会员卡) · `vip-card-o`(会员卡描边) · `bill`(账单) · `bill-o`(账单描边) · `card`(卡券)

### 联系人

`contact`(联系人) · `contact-o`(联系人描边) · `friends`(好友) · `friends-o`(好友描边) · `manager`(店长) · `manager-o`(店长描边) · `user`(用户) · `user-o`(用户描边) · `user-circle-o`(用户圆圈描边) · `idcard`(身份证) · `smile`(微笑) · `smile-o`(微笑描边) · `smile-comment`(微笑评论) · `smile-comment-o`(微笑评论描边) · `comment`(评论) · `comment-o`(评论描边) · `comment-circle`(评论圆圈) · `comment-circle-o`(评论圆圈描边) · `chat`(聊天) · `chat-o`(聊天描边) · `phone`(电话) · `phone-o`(电话描边) · `phone-circle`(电话圆圈) · `phone-circle-o`(电话圆圈描边) · `browsing-history`(浏览历史) · `browsing-history-o`(浏览历史描边) · `bookmark`(书签) · `bookmark-o`(书签描边)

### 服务功能

`service`(客服) · `service-o`(客服描边) · `search`(搜索) · `location`(定位) · `location-o`(定位描边) · `map-marked`(地图标记) · `notes`(笔记) · `notes-o`(笔记描边) · `description`(描述) · `description-o`(描述描边) · `records`(账本) · `records-o`(账本描边) · `gift`(礼物) · `gift-o`(礼物描边) · `send-gift`(送礼) · `send-gift-o`(送礼描边) · `bag`(购物袋) · `bag-o`(购物袋描边) · `bell`(铃铛) · `bullhorn-o`(喇叭描边) · `bulb-o`(灯泡描边) · `invitation`(邀请) · `label`(标签) · `label-o`(标签描边) · `envelop-o`(信封描边) · `calendar-o`(日历描边) · `brush-o`(笔刷描边) · `printer`(打印机) · `newspaper`(报纸) · `newspaper-o`(报纸描边) · `birthday-cake-o`(生日蛋糕描边) · `setting`(设置) · `setting-o`(设置描边) · `share`(分享) · `share-o`(分享描边) · `shield-o`(盾牌描边) · `guide-o`(指引描边) · `link-o`(链接描边)

### 媒体

`music`(音乐) · `music-o`(音乐描边) · `video`(视频) · `video-o`(视频描边) · `audio`(音频) · `photograph`(拍照) · `photo`(图片) · `photo-o`(图片描边) · `photo-fail`(图片缺失) · `play`(播放) · `play-circle`(播放圆圈) · `play-circle-o`(播放圆圈描边) · `pause`(暂停) · `pause-circle`(暂停圆圈) · `pause-circle-o`(暂停圆圈描边) · `stop`(停止) · `stop-circle`(停止圆圈) · `stop-circle-o`(停止圆圈描边) · `tv-o`(电视描边) · `volume`(音量) · `volume-o`(音量描边) · `live`(直播) · `eye`(眼睛) · `eye-o`(眼睛描边) · `closed-eye`(闭眼) · `umbrella-circle`(伞圆圈) · `replay`(重播)

### 商品其他

`shop`(店铺) · `shop-o`(店铺描边) · `goods-collect`(收藏商品) · `goods-collect-o`(收藏商品描边) · `graphic`(图文) · `wap-home`(移动版首页) · `wap-home-o`(移动版首页描边) · `wap-nav`(移动版导航) · `weapp-nav`(小程序导航) · `desktop-o`(桌面描边) · `hotel-o`(酒店描边) · `home-o`(首页描边) · `bar-chart-o`(柱状图描边) · `chart-trending-o`(趋势图描边) · `apps-o`(应用描边) · `discount`(折扣) · `discount-o`(折扣描边) · `new`(上新) · `new-o`(新品描边) · `new-arrival`(新品) · `new-arrival-o`(新品描边) · `hot-sale`(热卖) · `hot-sale-o`(热卖描边) · `flag-o`(旗帜描边)

## 设计规范

::: tip 最佳实践
- 使用语义化的 icon 名（`warning` 而非 `cross`），便于维护。
- 通过 `color` prop 传入品牌色，避免在外部覆盖样式。
- 红点提示用在未读消息、通知等场景，`dot` 固定为 12rpx 大小。
- 列表中使用 16~20px，导航中使用 20~24px，装饰性图标可用 32px+。
:::

::: warning 注意事项
- H5/APP 端字体 `@font-face` 已内嵌 base64，但又保留 iconfont.cn 在线回退链接；在线链接不承诺生产稳定，企业场景应改用自托管字库文件。
- 小程序端字体通过 `uni.loadFontFace` 异步加载，首屏可能出现文字闪烁。
- 新增图标需同步修改 `dd-icon.vue` 的 `iconNames` / `iconLabels` / `iconGroups` 与 SCSS `&--:before` content 值。
:::