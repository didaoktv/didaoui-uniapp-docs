import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'

import DocPhoneSimulator from './components/DocPhoneSimulator.vue'
import DemoBlock from './components/DemoBlock.vue'
import PhoneFrame from './components/PhoneFrame.vue'
import ColorCard from './components/ColorCard.vue'
import HomeShowcase from './components/HomeShowcase.vue'
import HomeCategoryGrid from './components/HomeCategoryGrid.vue'

import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      // 全局手机模拟器：在非组件页隐藏（内部按路由判断）
      'layout-bottom': () => h(DocPhoneSimulator),
    }),
  enhanceApp({ app }) {
    app.component('DemoBlock', DemoBlock)
    app.component('PhoneFrame', PhoneFrame)
    app.component('ColorCard', ColorCard)
    app.component('HomeShowcase', HomeShowcase)
    app.component('HomeCategoryGrid', HomeCategoryGrid)
    app.component('DocPhoneSimulator', DocPhoneSimulator)
  },
} satisfies Theme
