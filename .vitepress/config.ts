import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import { existsSync } from 'node:fs'
import container from 'markdown-it-container'
import { homeSections } from '../h5-demo/src/home-registry'

// 本地开发: 同级存在组件库源码时 alias 过去（改源码即时热更新）
// CI/Vercel: 目录不存在，回落到 node_modules 里的 npm 包
const libEntry = fileURLToPath(new URL('../DidaoUI-uniapp/index.ts', import.meta.url))
const viteAlias = existsSync(libEntry)
  ? { resolve: { alias: { '@didaoktv/didaoui-uniapp': libEntry } } }
  : {}

// 侧边栏由 home-registry.ts 派生（与 h5-demo 首页导航单一事实源）。
// ver 版本以徽标 span 内嵌（VPSidebarItem 用 v-html 渲染 text，样式见 theme/custom.css；
// 内容为构建期自家常量，无注入面）。
// 路径 /components/{slug} 对应 components/{slug}.md (cleanUrls)。
// 豁免 icon-usage（check-md.mjs allowlist 的纯演示页，无对应 md）。
const SIDEBAR_EXCLUDE = new Set(['icon-usage'])
const compSlug = (path: string) => path.replace(/^pages\//, '').replace(/\/demo$/, '')
const componentSidebar = homeSections.map((s) => ({
  text: s.title,
  collapsed: false,
  items: s.comps
    .filter((c) => !SIDEBAR_EXCLUDE.has(compSlug(c.path)))
    .map((c) => ({
      text: `<span class="dd-item-label">${c.en} ${c.sideName ?? c.name}</span>${c.ver ? ` <span class="dd-ver-badge">${c.ver}</span>` : ''}`,
      link: `/components/${compSlug(c.path)}`,
    })),
}))

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
            { text: '主题定制', link: '/guide/theme' },
            { text: '更新日志', link: '/guide/changelog' },
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
