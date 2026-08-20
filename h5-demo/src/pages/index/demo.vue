<template>
  <view class="demo-page">
    <view class="home-header">
      <text class="home-title">DidaoUI-uniapp</text>
      <text class="home-subtitle">帝到KTV UniApp 组件库 · 63 组件 · 5 端编译</text>
      <view class="home-author" @click="openAuthor">
        <text class="home-author-label" @click="openAuthor">作者</text>
        <text class="home-author-name">i@duminghong.com</text>
      </view>
    </view>

    <!-- 表单组件 -->
    <view class="home-section">
      <text class="home-section-title">表单组件</text>
      <view class="home-grid">
        <view v-for="c in categories.input" :key="c.path" class="home-item" @click="go(c.path)">
          <text class="home-item-name">{{ c.name }}</text>
          <text class="home-item-en">{{ c.en }}</text>
        </view>
      </view>
    </view>

    <!-- 导航组件 -->
    <view class="home-section">
      <text class="home-section-title">导航组件</text>
      <view class="home-grid">
        <view v-for="c in categories.navigation" :key="c.path" class="home-item" @click="go(c.path)">
          <text class="home-item-name">{{ c.name }}</text>
          <text class="home-item-en">{{ c.en }}</text>
        </view>
      </view>
    </view>

    <!-- 布局组件 -->
    <view class="home-section">
      <text class="home-section-title">布局组件</text>
      <view class="home-grid">
        <view v-for="c in categories.layout" :key="c.path" class="home-item" @click="go(c.path)">
          <text class="home-item-name">{{ c.name }}</text>
          <text class="home-item-en">{{ c.en }}</text>
        </view>
      </view>
    </view>

    <!-- 展示组件 -->
    <view class="home-section">
      <text class="home-section-title">展示组件</text>
      <view class="home-grid">
        <view v-for="c in categories.display" :key="c.path" class="home-item" @click="go(c.path)">
          <text class="home-item-name">{{ c.name }}</text>
          <text class="home-item-en">{{ c.en }}</text>
        </view>
      </view>
    </view>

    <!-- 浮层组件 -->
    <view class="home-section">
      <text class="home-section-title">浮层组件</text>
      <view class="home-grid">
        <view v-for="c in categories.overlay" :key="c.path" class="home-item" @click="go(c.path)">
          <text class="home-item-name">{{ c.name }}</text>
          <text class="home-item-en">{{ c.en }}</text>
        </view>
      </view>
    </view>

    <!-- 交互组件 -->
    <view class="home-section">
      <text class="home-section-title">交互组件</text>
      <view class="home-grid">
        <view v-for="c in categories.interaction" :key="c.path" class="home-item" @click="go(c.path)">
          <text class="home-item-name">{{ c.name }}</text>
          <text class="home-item-en">{{ c.en }}</text>
        </view>
      </view>
    </view>

    <!-- 小程序组件 -->
    <view class="home-section">
      <text class="home-section-title">小程序组件</text>
      <view class="home-grid">
        <view v-for="c in categories.miniprogram" :key="c.path" class="home-item" @click="go(c.path)">
          <text class="home-item-name">{{ c.name }}</text>
          <text class="home-item-en">{{ c.en }}</text>
        </view>
      </view>
    </view>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">

function openAuthor() {
  // #ifdef H5
  window.open('https://duminghong.com/', '_blank')
  // #endif
  // #ifndef H5
  uni.setClipboardData({
    data: 'i@duminghong.com',
    success: () => uni.showToast({ title: '邮箱已复制', icon: 'none' }),
  })
  // #endif
}
interface CompDef {
  path: string
  name: string
  en: string
}

const categories: Record<string, CompDef[]> = {
  input: [
    { path: 'pages/button/demo', name: '按钮', en: 'Button' },
    { path: 'pages/input/demo', name: '输入框', en: 'Input' },
    { path: 'pages/switch/demo', name: '开关', en: 'Switch' },
    { path: 'pages/checkbox/demo', name: '复选框', en: 'Checkbox' },
    { path: 'pages/radio/demo', name: '单选框', en: 'Radio' },
    { path: 'pages/search-bar/demo', name: '搜索栏', en: 'SearchBar' },
    { path: 'pages/slider/demo', name: '滑块', en: 'Slider' },
    { path: 'pages/stepper/demo', name: '步进器', en: 'Stepper' },
    { path: 'pages/date-picker/demo', name: '日期选择', en: 'DatePicker' },
    { path: 'pages/field/demo', name: '表单项', en: 'Field' },
    { path: 'pages/picker/demo', name: '选择器', en: 'Picker' },
    { path: 'pages/rate/demo', name: '评分', en: 'Rate' },
    { path: 'pages/upload/demo', name: '上传', en: 'Upload' },
    { path: 'pages/icon/demo', name: '图标', en: 'Icon' },
    { path: 'pages/icon-usage/demo', name: '组件库图标', en: 'IconUsage' },
  ],
  navigation: [
    { path: 'pages/navigation/demo', name: '底部导航', en: 'Navigation' },
    { path: 'pages/top-navbar/demo', name: '顶部导航栏', en: 'TopNavbar' },
    { path: 'pages/segmented-tab/demo', name: '分段器', en: 'SegmentedTab' },
    { path: 'pages/swipeable-tab/demo', name: '可滑动标签', en: 'SwipeableTab' },
    { path: 'pages/drawer/demo', name: '抽屉', en: 'Drawer' },
    { path: 'pages/tabbar/demo', name: '标签栏', en: 'Tabbar' },
    { path: 'pages/tabbar-item/demo', name: '标签项', en: 'TabbarItem' },
    { path: 'pages/backtop/demo', name: '回到顶部', en: 'Backtop' },
    { path: 'pages/collapse/demo', name: '折叠面板', en: 'Collapse' },
    { path: 'pages/collapse-item/demo', name: '折叠项', en: 'CollapseItem' },
    { path: 'pages/dropdown-menu/demo', name: '下拉菜单', en: 'DropdownMenu' },
    { path: 'pages/dropdown-item/demo', name: '下拉项', en: 'DropdownItem' },
  ],
  layout: [
    { path: 'pages/card/demo', name: '卡片', en: 'Card' },
    { path: 'pages/room-card/demo', name: '房间卡片', en: 'RoomCard' },
    { path: 'pages/feature-grid/demo', name: '功能网格', en: 'FeatureGrid' },
    { path: 'pages/sticky/demo', name: '吸顶容器', en: 'Sticky' },
  ],
  display: [
    { path: 'pages/tag/demo', name: '标签', en: 'Tag' },
    { path: 'pages/stat-card/demo', name: '统计卡片', en: 'StatCard' },
    { path: 'pages/champion-card/demo', name: '冠军卡片', en: 'ChampionCard' },
    { path: 'pages/avatar/demo', name: '头像', en: 'Avatar' },
    { path: 'pages/badge/demo', name: '徽标', en: 'Badge' },
    { path: 'pages/list-cell/demo', name: '列表项', en: 'ListCell' },
    { path: 'pages/cell/demo', name: '单元格', en: 'Cell' },
    { path: 'pages/cell-group/demo', name: '单元格组', en: 'CellGroup' },
    { path: 'pages/count-down/demo', name: '倒计时', en: 'CountDown' },
    { path: 'pages/divider/demo', name: '分割线', en: 'Divider' },
    { path: 'pages/image/demo', name: '图片', en: 'Image' },
    { path: 'pages/progress/demo', name: '进度条', en: 'Progress' },
    { path: 'pages/skeleton/demo', name: '骨架屏', en: 'Skeleton' },
    { path: 'pages/empty-state/demo', name: '空状态', en: 'EmptyState' },
    { path: 'pages/step/demo', name: '步骤项', en: 'Step' },
    { path: 'pages/steps/demo', name: '步骤条', en: 'Steps' },
  ],
  overlay: [
    { path: 'pages/modal/demo', name: '模态框', en: 'Modal' },
    { path: 'pages/action-sheet/demo', name: '动作面板', en: 'ActionSheet' },
    { path: 'pages/toast/demo', name: '轻提示', en: 'Toast' },
    { path: 'pages/alert/demo', name: '警告弹窗', en: 'Alert' },
    { path: 'pages/loading/demo', name: '加载', en: 'Loading' },
    { path: 'pages/dialog/demo', name: '对话框', en: 'Dialog' },
    { path: 'pages/overlay/demo', name: '遮罩层', en: 'Overlay' },
    { path: 'pages/popup/demo', name: '弹出层', en: 'Popup' },
    { path: 'pages/popover/demo', name: '气泡菜单', en: 'Popover' },
    { path: 'pages/popover-item/demo', name: '气泡项', en: 'PopoverItem' },
  ],
  interaction: [
    { path: 'pages/swipe-action/demo', name: '滑动单元格', en: 'SwipeAction' },
    { path: 'pages/swipe/demo', name: '轮播', en: 'Swipe' },
    { path: 'pages/swipe-item/demo', name: '轮播项', en: 'SwipeItem' },
    { path: 'pages/pull-refresh/demo', name: '下拉刷新', en: 'PullRefresh' },
    { path: 'pages/loadmore/demo', name: '触底加载', en: 'Loadmore' },
  ],
  miniprogram: [
    { path: 'pages/capsule-button/demo', name: '胶囊按钮', en: 'CapsuleButton' },
    { path: 'pages/mini-program-navbar/demo', name: '小程序导航栏', en: 'MiniProgramNavbar' },
  ],
}

function go(path: string) {
  uni.navigateTo({ url: '/' + path })
}
</script>

<style lang="scss" scoped>
.home-header {
  padding: 48rpx 32rpx 32rpx;
  text-align: left;
}

.home-title {
  display: block;
  font-size: 48rpx;
  font-weight: 800;
  color: #f5a623;
  letter-spacing: 2rpx;
  margin-bottom: 12rpx;
}

.home-subtitle {
  display: block;
  font-size: 24rpx;
  color: #9e9e9e;
  line-height: 1.5;
}

.home-section {
  margin-bottom: 32rpx;
}

.home-section-title {
  display: block;
  font-size: 28rpx;
  font-weight: 700;
  color: #f5f5f5;
  padding: 16rpx 32rpx;
  letter-spacing: 1rpx;
}

.home-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 24rpx;
  gap: 20rpx;
}

.home-item {
  background: #171717;
  border-radius: 12rpx;
  padding: 24rpx 16rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rpx;
  transition: background 0.15s;
}

.home-item:active {
  background: #2a2a2a;
}

.home-item-name {
  font-size: 26rpx;
  color: #f5f5f5;
  font-weight: 500;
}

.home-item-en {
  font-size: 20rpx;
  color: #9e9e9e;
}

.home-author {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12rpx;
  margin-top: 20rpx;
  padding: 12rpx 20rpx;
  background: #171717;
  border-radius: 32rpx;
  align-self: flex-start;
}

.home-author-label {
  font-size: 22rpx;
  color: #616161;
}

.home-author-name {
  font-size: 22rpx;
  color: #f5a623;
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 4rpx;
}

.home-footer {
  padding: 48rpx 32rpx 32rpx;
  text-align: center;
}

.home-footer-text {
  font-size: 22rpx;
  color: #424242;
}
</style>