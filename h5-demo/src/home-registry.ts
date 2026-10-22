/**
 * 组件导航共享数据源（单一事实源）：
 * - h5-demo 首页 demo.vue 的分区导航
 * - 文档站 .vitepress/config.ts 的 componentSidebar（由 homeSections 派生，自动携带 ver 版本标签）
 * 新增/发版组件只改这里一处（同时仍需按 AGENTS.md 登记各计数文件）。
 */

export interface CompDef {
  path: string
  name: string
  en: string
  /** 新增组件的版本标记（如 v1.2.0），首页显示小徽标、文档站侧边栏拼在文本尾部 */
  ver?: string
  /** 侧边栏中文名覆盖（仅当 name 与 en 重复导致拼接难看时用，如 Markdown） */
  sideName?: string
}

export interface HomeSection {
  key: string
  /** 分区标题（首页分区标题 = 侧边栏分组名） */
  title: string
  comps: CompDef[]
}

export const homeSections: HomeSection[] = [
  {
    key: 'input',
    title: '表单组件',
    // 表单流叙事：容器 → 输入 → 开关选择 → 拾取器 → 输入辅助 → 上传/采集 → 复合表单 → 提交
    comps: [
      { path: 'pages/form/demo', name: '表单', en: 'Form', ver: 'v1.2.0' },
      { path: 'pages/field/demo', name: '表单项', en: 'Field' },
      { path: 'pages/input/demo', name: '输入框', en: 'Input' },
      { path: 'pages/search-bar/demo', name: '搜索栏', en: 'SearchBar' },
      { path: 'pages/switch/demo', name: '开关', en: 'Switch' },
      { path: 'pages/checkbox/demo', name: '复选框', en: 'Checkbox' },
      { path: 'pages/checkbox-group/demo', name: '复选框组', en: 'CheckboxGroup', ver: 'v1.2.0' },
      { path: 'pages/radio/demo', name: '单选框', en: 'Radio' },
      { path: 'pages/radio-group/demo', name: '单选框组', en: 'RadioGroup', ver: 'v1.2.0' },
      { path: 'pages/slider/demo', name: '滑块', en: 'Slider' },
      { path: 'pages/stepper/demo', name: '步进器', en: 'Stepper' },
      { path: 'pages/rate/demo', name: '评分', en: 'Rate' },
      { path: 'pages/picker/demo', name: '选择器', en: 'Picker' },
      { path: 'pages/cascader/demo', name: '级联选择器', en: 'Cascader', ver: 'v1.2.0' },
      { path: 'pages/tree-select/demo', name: '分类选择', en: 'TreeSelect', ver: 'v1.4.0' },
      { path: 'pages/date-picker/demo', name: '日期选择', en: 'DatePicker' },
      { path: 'pages/calendar/demo', name: '日历', en: 'Calendar' },
      { path: 'pages/keyboard/demo', name: '键盘', en: 'Keyboard', ver: 'v1.2.0' },
      { path: 'pages/number-keyboard/demo', name: '数字键盘', en: 'NumberKeyboard', ver: 'v1.2.0' },
      { path: 'pages/car-keyboard/demo', name: '车牌键盘', en: 'CarKeyboard', ver: 'v1.2.0' },
      { path: 'pages/upload/demo', name: '上传', en: 'Upload' },
      { path: 'pages/cropper/demo', name: '图片裁剪', en: 'Cropper', ver: 'v1.2.0' },
      { path: 'pages/signature/demo', name: '签名', en: 'Signature', ver: 'v1.2.0' },
      { path: 'pages/goods-sku/demo', name: '商品SKU', en: 'GoodsSku', ver: 'v1.2.0' },
      { path: 'pages/package-sku/demo', name: '套餐可选组', en: 'PackageSku', ver: 'v2.3.0' },
      { path: 'pages/button/demo', name: '按钮', en: 'Button' },
      { path: 'pages/code-button/demo', name: '验证码按钮', en: 'CodeButton', ver: 'v1.3.3' },
    ],
  },
  {
    key: 'navigation',
    title: '导航组件',
    // 页面结构流：顶部 → 内容标签 → 侧边 → 底部 → 滚动
    comps: [
      { path: 'pages/top-navbar/demo', name: '顶部导航栏', en: 'TopNavbar' },
      { path: 'pages/segmented-tab/demo', name: '分段器', en: 'SegmentedTab' },
      { path: 'pages/swipeable-tab/demo', name: '可滑动标签', en: 'SwipeableTab' },
      { path: 'pages/dropdown-menu/demo', name: '下拉菜单', en: 'DropdownMenu' },
      { path: 'pages/sidebar/demo', name: '侧边栏', en: 'Sidebar', ver: 'v1.4.0' },
      { path: 'pages/sidebar-item/demo', name: '侧边栏子项', en: 'SidebarItem', ver: 'v1.4.0' },
      { path: 'pages/drawer/demo', name: '抽屉', en: 'Drawer' },
      { path: 'pages/tabbar/demo', name: '标签栏', en: 'Tabbar' },
      { path: 'pages/navigation/demo', name: '底部导航', en: 'Navigation' },
      { path: 'pages/backtop/demo', name: '回到顶部', en: 'Backtop' },
    ],
  },
  {
    key: 'layout',
    title: '布局组件',
    // 容器族：通用卡片 → 业务卡片 → 网格 → 折叠容器 → 定位容器
    comps: [
      { path: 'pages/card/demo', name: '卡片', en: 'Card' },
      { path: 'pages/room-card/demo', name: '房间卡片', en: 'RoomCard' },
      { path: 'pages/goods-card/demo', name: '商品卡片', en: 'GoodsCard', ver: 'v1.4.3' },
      { path: 'pages/feature-grid/demo', name: '功能网格', en: 'FeatureGrid' },
      { path: 'pages/collapse/demo', name: '折叠面板', en: 'Collapse' },
      { path: 'pages/sticky/demo', name: '吸顶容器', en: 'Sticky' },
    ],
  },
  {
    key: 'display',
    title: '展示组件',
    // 文本原子（含 Icon）→ 状态标记 → 列表 → 媒体/富文本 → 进度与状态 → 业务卡片 → Canvas 生成物
    comps: [
      { path: 'pages/text/demo', name: '文本', en: 'Text', ver: 'v1.2.0' },
      { path: 'pages/icon/demo', name: '图标', en: 'Icon' },
      { path: 'pages/icon-usage/demo', name: '组件库图标', en: 'IconUsage' },
      { path: 'pages/link/demo', name: '超链接', en: 'Link', ver: 'v1.2.0' },
      { path: 'pages/copy/demo', name: '复制', en: 'Copy', ver: 'v1.2.0' },
      { path: 'pages/divider/demo', name: '分割线', en: 'Divider' },
      { path: 'pages/tag/demo', name: '标签', en: 'Tag' },
      { path: 'pages/badge/demo', name: '徽标', en: 'Badge' },
      { path: 'pages/avatar/demo', name: '头像', en: 'Avatar' },
      { path: 'pages/avatar-group/demo', name: '头像组', en: 'AvatarGroup', ver: 'v1.2.0' },
      { path: 'pages/cell/demo', name: '单元格', en: 'Cell' },
      { path: 'pages/cell-group/demo', name: '单元格分组', en: 'CellGroup' },
      { path: 'pages/list-cell/demo', name: '列表项', en: 'ListCell' },
      { path: 'pages/image/demo', name: '图片', en: 'Image' },
      { path: 'pages/album/demo', name: '相册', en: 'Album', ver: 'v1.2.0' },
      { path: 'pages/parse/demo', name: '富文本解析器', en: 'Parse', ver: 'v1.2.0' },
      { path: 'pages/markdown/demo', name: 'Markdown渲染', en: 'Markdown', sideName: '渲染', ver: 'v1.2.0' },
      { path: 'pages/progress/demo', name: '进度条', en: 'Progress' },
      { path: 'pages/steps/demo', name: '步骤条', en: 'Steps' },
      { path: 'pages/count-down/demo', name: '倒计时', en: 'CountDown' },
      { path: 'pages/skeleton/demo', name: '骨架屏', en: 'Skeleton' },
      { path: 'pages/empty-state/demo', name: '空状态', en: 'EmptyState' },
      { path: 'pages/stat-card/demo', name: '统计卡片', en: 'StatCard' },
      { path: 'pages/champion-card/demo', name: '冠军卡片', en: 'ChampionCard' },
      { path: 'pages/bill-detail/demo', name: '账单明细', en: 'BillDetail' },
      { path: 'pages/workorder-card/demo', name: '工单条目', en: 'WorkorderCard' },
      { path: 'pages/coupon/demo', name: '优惠券', en: 'Coupon', ver: 'v1.2.0' },
      { path: 'pages/price/demo', name: '价格', en: 'Price', ver: 'v1.4.0' },
      { path: 'pages/qrcode/demo', name: '二维码', en: 'Qrcode' },
      { path: 'pages/submit-bar/demo', name: '提交订单栏', en: 'SubmitBar', ver: 'v1.4.0' },
      { path: 'pages/cart-bar/demo', name: '购物车栏', en: 'CartBar', ver: 'v2.6.0' },
      { path: 'pages/canvas/demo', name: '画布', en: 'Canvas', ver: 'v1.2.0' },
      { path: 'pages/barcode/demo', name: '条形码', en: 'Barcode', ver: 'v1.2.0' },
      { path: 'pages/poster/demo', name: '海报', en: 'Poster', ver: 'v1.2.0' },
    ],
  },
  {
    key: 'overlay',
    title: '浮层组件',
    // 基座层（Overlay/Popup）→ 对话类 → 锚定气泡 → 瞬时提示 → 加载
    comps: [
      { path: 'pages/portal/demo', name: '传送门', en: 'Portal', ver: 'v1.3.5' },
      { path: 'pages/overlay/demo', name: '遮罩层', en: 'Overlay' },
      { path: 'pages/popup/demo', name: '弹出层', en: 'Popup' },
      { path: 'pages/modal/demo', name: '模态框', en: 'Modal' },
      { path: 'pages/dialog/demo', name: '对话框', en: 'Dialog' },
      { path: 'pages/alert/demo', name: '警告弹窗', en: 'Alert' },
      { path: 'pages/action-sheet/demo', name: '动作面板', en: 'ActionSheet' },
      { path: 'pages/popover/demo', name: '气泡菜单', en: 'Popover' },
      { path: 'pages/toast/demo', name: '轻提示', en: 'Toast' },
      { path: 'pages/loading/demo', name: '加载', en: 'Loading' },
    ],
  },
  {
    key: 'interaction',
    title: '交互组件',
    // 独立手势 → 列表交互族
    comps: [
      { path: 'pages/swipe/demo', name: '轮播', en: 'Swipe' },
      { path: 'pages/swipe-action/demo', name: '滑动单元格', en: 'SwipeAction' },
      { path: 'pages/pull-refresh/demo', name: '下拉刷新', en: 'PullRefresh' },
      { path: 'pages/loadmore/demo', name: '触底加载', en: 'Loadmore' },
    ],
  },
  {
    key: 'miniprogram',
    title: '小程序组件',
    comps: [
      { path: 'pages/mini-program-navbar/demo', name: '小程序导航栏', en: 'MiniProgramNavbar' },
      { path: 'pages/capsule-button/demo', name: '胶囊按钮', en: 'CapsuleButton' },
    ],
  },
]
