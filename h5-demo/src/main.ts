import { createSSRApp } from 'vue'
import App from './App.vue'
import ui from '@didaoktv/didaoui-uniapp'

export function createApp() {
  const app = createSSRApp(App)
  // ponytail: 库与 demo 各自 node_modules 的 vue 类型声明泛型默认不一致，运行时无影响
  app.use(ui as any)
  return { app }
}
