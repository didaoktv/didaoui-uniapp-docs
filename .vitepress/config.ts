import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import { existsSync } from 'node:fs'
import container from 'markdown-it-container'

// 本地开发: 同级存在组件库源码时 alias 过去（改源码即时热更新）
// CI/Vercel: 目录不存在，回落到 node_modules 里的 npm 包
const libEntry = fileURLToPath(new URL('../DidaoUI-uniapp/index.ts', import.meta.url))
const viteAlias = existsSync(libEntry)
  ? { resolve: { alias: { '@didaoktv/didaoui-uniapp': libEntry } } }
  : {}

// ponytail: 侧边栏与 h5-demo/src/pages/index/demo.vue 首页导航 7 分类 1:1 对齐（成员/顺序/命名），
// 类内按关联性排序（构建基座 → 变体 → 业务复合）；豁免 icon-usage（check-md.mjs allowlist 的纯演示页，无 md）。
// 路径 /components/{slug} 对应 components/{slug}.md (cleanUrls)
const componentSidebar = [
  {
    text: '表单组件',
    collapsed: false,
    items: [
      // 表单流叙事：容器 → 输入 → 开关选择 → 拾取器 → 输入辅助 → 上传/采集 → 复合表单 → 提交
      { text: 'Form 表单', link: '/components/form' },
      { text: 'Field 表单项', link: '/components/field' },
      { text: 'Input 输入框', link: '/components/input' },
      { text: 'SearchBar 搜索栏', link: '/components/search-bar' },
      { text: 'Switch 开关', link: '/components/switch' },
      { text: 'Checkbox 复选框', link: '/components/checkbox' },
      { text: 'CheckboxGroup 复选框组', link: '/components/checkbox-group' },
      { text: 'Radio 单选框', link: '/components/radio' },
      { text: 'RadioGroup 单选框组', link: '/components/radio-group' },
      { text: 'Slider 滑块', link: '/components/slider' },
      { text: 'Stepper 步进器', link: '/components/stepper' },
      { text: 'Rate 评分', link: '/components/rate' },
      { text: 'Picker 选择器', link: '/components/picker' },
      { text: 'Cascader 级联选择器', link: '/components/cascader' },
      { text: 'TreeSelect 分类选择', link: '/components/tree-select' },
      { text: 'DatePicker 日期选择', link: '/components/date-picker' },
      { text: 'Calendar 日历', link: '/components/calendar' },
      { text: 'Keyboard 键盘', link: '/components/keyboard' },
      { text: 'NumberKeyboard 数字键盘', link: '/components/number-keyboard' },
      { text: 'CarKeyboard 车牌键盘', link: '/components/car-keyboard' },
      { text: 'Upload 上传', link: '/components/upload' },
      { text: 'Cropper 图片裁剪', link: '/components/cropper' },
      { text: 'Signature 签名', link: '/components/signature' },
      { text: 'GoodsSku 商品SKU', link: '/components/goods-sku' },
      { text: 'Button 按钮', link: '/components/button' },
      { text: 'CodeButton 验证码按钮', link: '/components/code-button' },
    ],
  },
  {
    text: '导航组件',
    collapsed: false,
    items: [
      // 页面结构流：顶部 → 内容标签 → 侧边 → 底部 → 滚动
      { text: 'TopNavbar 顶部导航栏', link: '/components/top-navbar' },
      { text: 'SegmentedTab 分段器', link: '/components/segmented-tab' },
      { text: 'SwipeableTab 可滑动标签', link: '/components/swipeable-tab' },
      { text: 'DropdownMenu 下拉菜单', link: '/components/dropdown-menu' },
      { text: 'Sidebar 侧边栏', link: '/components/sidebar' },
      { text: 'SidebarItem 侧边栏子项', link: '/components/sidebar-item' },
      { text: 'Drawer 抽屉', link: '/components/drawer' },
      { text: 'Tabbar 标签栏', link: '/components/tabbar' },
      { text: 'Navigation 底部导航', link: '/components/navigation' },
      { text: 'Backtop 回到顶部', link: '/components/backtop' },
    ],
  },
  {
    text: '布局组件',
    collapsed: false,
    items: [
      // 容器族：通用卡片 → 业务卡片 → 网格 → 折叠容器 → 定位容器
      { text: 'Card 卡片', link: '/components/card' },
      { text: 'RoomCard 房间卡片', link: '/components/room-card' },
      { text: 'GoodsCard 商品卡片', link: '/components/goods-card' },
      { text: 'FeatureGrid 功能网格', link: '/components/feature-grid' },
      { text: 'Collapse 折叠面板', link: '/components/collapse' },
      { text: 'Sticky 吸顶容器', link: '/components/sticky' },
    ],
  },
  {
    text: '展示组件',
    collapsed: false,
    items: [
      // 文本原子（含 Icon）→ 状态标记 → 列表 → 媒体/富文本 → 进度与状态 → 业务卡片 → Canvas 生成物
      { text: 'Text 文本', link: '/components/text' },
      { text: 'Icon 图标', link: '/components/icon' },
      { text: 'Link 超链接', link: '/components/link' },
      { text: 'Copy 复制', link: '/components/copy' },
      { text: 'Divider 分割线', link: '/components/divider' },
      { text: 'Tag 标签', link: '/components/tag' },
      { text: 'Badge 徽标', link: '/components/badge' },
      { text: 'Avatar 头像', link: '/components/avatar' },
      { text: 'AvatarGroup 头像组', link: '/components/avatar-group' },
      { text: 'Cell 单元格', link: '/components/cell' },
      { text: 'CellGroup 单元格分组', link: '/components/cell-group' },
      { text: 'ListCell 列表项', link: '/components/list-cell' },
      { text: 'Image 图片', link: '/components/image' },
      { text: 'Album 相册', link: '/components/album' },
      { text: 'Parse 富文本解析器', link: '/components/parse' },
      { text: 'Markdown 渲染', link: '/components/markdown' },
      { text: 'Progress 进度条', link: '/components/progress' },
      { text: 'Steps 步骤条', link: '/components/steps' },
      { text: 'CountDown 倒计时', link: '/components/count-down' },
      { text: 'Skeleton 骨架屏', link: '/components/skeleton' },
      { text: 'EmptyState 空状态', link: '/components/empty-state' },
      { text: 'StatCard 统计卡片', link: '/components/stat-card' },
      { text: 'ChampionCard 冠军卡片', link: '/components/champion-card' },
      { text: 'BillDetail 账单明细', link: '/components/bill-detail' },
      { text: 'WorkorderCard 工单条目', link: '/components/workorder-card' },
      { text: 'Coupon 优惠券', link: '/components/coupon' },
      { text: 'Price 价格', link: '/components/price' },
      { text: 'Qrcode 二维码', link: '/components/qrcode' },
      { text: 'SubmitBar 提交订单栏', link: '/components/submit-bar' },
      { text: 'Canvas 画布', link: '/components/canvas' },
      { text: 'Barcode 条形码', link: '/components/barcode' },
      { text: 'Poster 海报', link: '/components/poster' },
    ],
  },
  {
    text: '浮层组件',
    collapsed: false,
    items: [
      // 基座层（Portal/Overlay/Popup）→ 对话类 → 锚定气泡 → 瞬时提示 → 加载
      { text: 'Portal 传送门', link: '/components/portal' },
      { text: 'Overlay 遮罩层', link: '/components/overlay' },
      { text: 'Popup 弹出层', link: '/components/popup' },
      { text: 'Modal 模态框', link: '/components/modal' },
      { text: 'Dialog 对话框', link: '/components/dialog' },
      { text: 'Alert 警告弹窗', link: '/components/alert' },
      { text: 'ActionSheet 动作面板', link: '/components/action-sheet' },
      { text: 'Popover 气泡菜单', link: '/components/popover' },
      { text: 'Toast 轻提示', link: '/components/toast' },
      { text: 'Loading 加载', link: '/components/loading' },
    ],
  },
  {
    text: '交互组件',
    collapsed: false,
    items: [
      // 独立手势 → 列表交互族
      { text: 'Swipe 轮播', link: '/components/swipe' },
      { text: 'SwipeAction 滑动单元格', link: '/components/swipe-action' },
      { text: 'PullRefresh 下拉刷新', link: '/components/pull-refresh' },
      { text: 'Loadmore 触底加载', link: '/components/loadmore' },
    ],
  },
  {
    text: '小程序组件',
    collapsed: false,
    items: [
      { text: 'MiniProgramNavbar 小程序导航栏', link: '/components/mini-program-navbar' },
      { text: 'CapsuleButton 胶囊按钮', link: '/components/capsule-button' },
    ],
  },
]

export default defineConfig({
  lang: 'zh-CN',
  title: 'DidaoUI-uniapp',
  description: '帝到KTV UniApp 组件库 — 帝王金 · 皇家蓝 · 抖音商城风',
  base: '/',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['meta', { name: 'theme-color', content: '#F5A623' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    ],
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: '',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Noto+Sans+SC:wght@400;500;600;700;800;900&display=swap',
      },
    ],
  ],

  themeConfig: {
    // 暗色优先：默认 dark，右上角可切换浅色
    appearance: 'dark',

    logo: '/logo.svg',

    nav: [
      { text: '组件', link: '/components/button', activeMatch: '/components/' },
      { text: '设计', link: '/design/color', activeMatch: '/design/' },
      { text: '指南', link: '/guide/quick-start', activeMatch: '/guide/' },
    ],

    sidebar: {
      '/components/': componentSidebar,
      '/design/': [
        {
          text: '设计基础',
          items: [
            { text: '色彩', link: '/design/color' },
            { text: '字体排版', link: '/design/typography' },
            { text: '间距', link: '/design/spacing' },
            { text: '圆角', link: '/design/radius' },
            { text: '渐变', link: '/design/gradient' },
            { text: '阴影与发光', link: '/design/shadow' },
            { text: '玻璃拟态', link: '/design/glass' },
          ],
        },
      ],
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '快速上手', link: '/guide/quick-start' },
            { text: '多端编译', link: '/guide/multi-platform' },
            { text: '主题定制', link: '/guide/theming' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/didaoktv/didaoui-uniapp' }],

    outline: { level: [2, 3], label: '本页导航' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdatedText: '最后更新',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到亮色',
    darkModeSwitchTitle: '切换到暗色',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索文档' },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '清除',
            backButtonTitle: '返回',
            noResultsText: '没有结果',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },

    footer: {
      message: 'MIT 协议发布',
      copyright: '© 2026 ddktv · 帝到KTV',
    },
  },

  // 注册 :::demo 自定义容器 — 让 markdown 中的 :::demo...::: 转为 DemoBlock 包裹
  markdown: {
    config(md) {
      md.use(container, 'demo', {
        validate(params: string) {
          return params.trim().match(/^demo\s*(.*)$/)
        },
        render(tokens: any, idx: number) {
          const token = tokens[idx]
          if (token.nesting === 1) {
            return `<div class="custom-block demo-container">\n`
          } else {
            return `</div>\n`
          }
        },
      })
    },
  },

  // 合并 vite 配置：处理 .vue + alias @didaoktv/didaoui-uniapp
  // strictPort：5273 被占时直接报错而非静默漂移（漂移会抢 h5-demo 的端口，破坏 iframe 契约）
  vite: {
    ...viteAlias,
    server: { strictPort: true },
  },
})
