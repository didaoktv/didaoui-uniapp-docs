import { createSSRApp } from 'vue'
import App from './App.vue'
import ui from '@didaoktv/didaoui-uniapp'

export function createApp() {
  const app = createSSRApp(App)
  app.use(ui)
  return { app }
}
