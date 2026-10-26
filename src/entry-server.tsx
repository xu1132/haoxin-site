/**
 * 构建时预渲染入口（SSG）。
 *
 * 只在 `vite build --ssr` 里用到，产物由 scripts/prerender.mjs 塞回
 * dist/index.html 的 #root。目的：让静态 HTML 源码里就有全部中文正文。
 * 百度蜘蛛对 JS 渲染支持弱且慢，字节的 Bytespider 基本不执行 JS ——
 * 不预渲染的话，它们抓到的就是一个空 <div id="root"></div>。
 */
import { renderToString } from 'react-dom/server'
import App from './App'
import { buildJsonLd } from './schema'

export function render(): string {
  return renderToString(<App />)
}

export { buildJsonLd }
