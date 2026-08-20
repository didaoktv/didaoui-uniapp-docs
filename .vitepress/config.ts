import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import { existsSync } from 'node:fs'

// 本地开发: 同级存在组件库源码时 alias 过去（改源码即时热更新）
// CI/Vercel: 目录不存在，回落到 node_modules 里的 npm 包
const libEntry = fileURLToPath(new URL('../DidaoUI-uniapp/index.ts', import.meta.url))
const viteAlias = existsSync(libEntry)
  ? { resolve: { alias: { '@didaoktv/didaoui-uniapp': libEntry } } }
  : {}

// ponytail: 侧边栏组件清单按任务 7 分类组织，与 @didaoktv/didaoui-uniapp index.ts 导出对齐
// 路径 /components/{slug} 对应 components/{slug}.md (cleanUrls)
const componentSidebar = [
  {
    text: '表单输入',
    collapsed: false,
    items: [
      { text: 'Button 按钮', link: '/components/button' },
      { text: 'Input 输入框', link: '/components/input' },
      { text: 'Field 表单项', link: '/components/field' },
      { text: 'Switch 开关', link: '/components/switch' },
      { text: 'Checkbox 复选框', link: '/components/checkbox' },
      { text: 'Radio 单选框', link: '/components/radio' },
      { text: 'Stepper 步进器', link: '/components/stepper' },
      { text: 'SearchBar 搜索栏', link: '/components/search-bar' },
      { text: 'Slider 滑块', link: '/components/slider' },
      { text: 'DatePicker 日期选择', link: '/components/date-picker' },
      { text: 'Picker 选择器', link: '/components/picker' },
      { text: 'Rate 评分', link: '/components/rate' },
      { text: 'Upload 上传', link: '/components/upload' },
      { text: 'Icon 图标', link: '/components/icon' },
    ],
  },
  {
    text: '导航',
    collapsed: false,
    items: [
      { text: 'Navigation 导航', link: '/components/navigation' },
      { text: 'TopNavbar 顶部导航栏', link: '/components/top-navbar' },
      { text: 'SwipeableTab 滑动标签', link: '/components/swipeable-tab' },
      { text: 'SegmentedTab 分段标签', link: '/components/segmented-tab' },
      { text: 'Drawer 抽屉', link: '/components/drawer' },
      { text: 'Tabbar 标签栏', link: '/components/tabbar' },
      { text: 'DropdownMenu 下拉菜单', link: '/components/dropdown-menu' },
    ],
  },
  {
    text: '布局',
    collapsed: false,
    items: [
      { text: 'Card 卡片', link: '/components/card' },
      { text: 'Cell 单元格', link: '/components/cell' },
      { text: 'ListCell 列表单元', link: '/components/list-cell' },
      { text: 'FeatureGrid 功能网格', link: '/components/feature-grid' },
      { text: 'Sticky 粘性布局', link: '/components/sticky' },
      { text: 'Divider 分割线', link: '/components/divider' },
      { text: 'Collapse 折叠面板', link: '/components/collapse' },
    ],
  },
  {
    text: '数据展示',
    collapsed: false,
    items: [
      { text: 'Avatar 头像', link: '/components/avatar' },
      { text: 'Badge 徽标', link: '/components/badge' },
      { text: 'Tag 标签', link: '/components/tag' },
      { text: 'Progress 进度条', link: '/components/progress' },
      { text: 'Skeleton 骨架屏', link: '/components/skeleton' },
      { text: 'EmptyState 空状态', link: '/components/empty-state' },
      { text: 'StatCard 统计卡片', link: '/components/stat-card' },
      { text: 'RoomCard 房间卡', link: '/components/room-card' },
      { text: 'ChampionCard 冠军卡', link: '/components/champion-card' },
      { text: 'Image 图片', link: '/components/image' },
      { text: 'Steps 步骤条', link: '/components/steps' },
      { text: 'CountDown 倒计时', link: '/components/count-down' },
      { text: 'CellGroup 单元格组', link: '/components/cell-group' },
      { text: 'TabbarItem 标签栏项', link: '/components/tabbar-item' },
    ],
  },
  {
    text: '浮层反馈',
    collapsed: false,
    items: [
      { text: 'Modal 弹层', link: '/components/modal' },
      { text: 'Toast 轻提示', link: '/components/toast' },
      { text: 'Alert 警告提示', link: '/components/alert' },
      { text: 'ActionSheet 动作面板', link: '/components/action-sheet' },
      { text: 'Loading 加载', link: '/components/loading' },
      { text: 'Popup 弹出层', link: '/components/popup' },
      { text: 'Dialog 对话框', link: '/components/dialog' },
      { text: 'Popover 气泡菜单', link: '/components/popover' },
      { text: 'Overlay 遮罩层', link: '/components/overlay' },
      { text: 'SwipeAction 滑动操作', link: '/components/swipe-action' },
    ],
  },
  {
    text: '交互',
    collapsed: false,
    items: [
      { text: 'Swipe 轮播', link: '/components/swipe' },
      { text: 'SwipeItem 轮播项', link: '/components/swipe-item' },
      { text: 'PullRefresh 下拉刷新', link: '/components/pull-refresh' },
      { text: 'Loadmore 触底加载', link: '/components/loadmore' },
      { text: 'Backtop 回到顶部', link: '/components/backtop' },
    ],
  },
  {
    text: '小程序专属',
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

  // 合并 vite 配置：处理 .vue + alias @didaoktv/didaoui-uniapp
  vite: viteAlias,
})
