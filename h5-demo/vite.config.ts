import { defineConfig } from 'vite'
import uniPlugin from '@dcloudio/vite-plugin-uni'

// uni-app H5 demo — 端口在 manifest.json (h5.devServer.port=5174) 配置
// ponytail: CJS/ESM interop — @dcloudio/vite-plugin-uni 用 exports.default，
// ESM import 拿到的是 { default: fn, ... }，需要解包
const uni = (uniPlugin as any).default ?? uniPlugin

export default defineConfig({
  plugins: [uni()],
})
