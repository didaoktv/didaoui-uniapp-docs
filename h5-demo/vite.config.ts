import { defineConfig } from 'vite'
import uniPlugin from '@dcloudio/vite-plugin-uni'
import { fileURLToPath, URL } from 'node:url'
import { existsSync } from 'node:fs'

// uni-app H5 demo — 端口在 manifest.json (h5.devServer.port=5274, strictPort) 配置
// 5274 刻意避开 Vite 默认端口带 (5173+)：ktv-system 各端 dev server 都从 5173 起漂移，
// h5-demo 端口被 iframe (DocPhoneSimulator) 硬编码引用，被占必须报错而非漂走。
// ponytail: CJS/ESM interop — @dcloudio/vite-plugin-uni 用 exports.default，
// ESM import 拿到的是 { default: fn, ... }，需要解包
const uni = (uniPlugin as any).default ?? uniPlugin

// 本地存在组件库源码时 alias 过去（含 4 个业务组件 bill-detail/workorder-card/calendar/qrcode），
// 指向「目录」而非 index.ts——目录自带 package.json 的 exports：
//   顶层 '@didaoktv/didaoui-uniapp'        → resolves "." → index.ts
//   深路径 '.../components/dd-toast/dd-toast.vue' → matches "./components/*"
// CI/装 npm 包时回落到 node_modules（需含 v1.1.0+）。
const libEntry = fileURLToPath(new URL('../../DidaoUI-uniapp', import.meta.url))
const viteAlias = existsSync(libEntry)
  ? { resolve: { alias: { '@didaoktv/didaoui-uniapp': libEntry } } }
  : {}

export default defineConfig({
  plugins: [uni()],
  ...viteAlias,
})
