/**
 * 构建后预渲染：把 React 渲染出来的正文写回 dist/index.html。
 *
 * 这一步是「百度/豆包能不能收录」的地基。改之前线上 HTML 是
 *   <div id="root"></div>
 * 源码里 0 个中文字，搜索引擎只能看到标题和 description。
 * 百度蜘蛛要排「渲染队列」才执行 JS、且经常超时；字节的 Bytespider
 * 基本不执行 JS。所以必须在构建期把正文烤进 HTML。
 */
import { access, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = process.cwd()
const distHtml = path.join(root, 'dist', 'index.html')
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js')

const ROOT_PLACEHOLDER = '<div id="root"></div>'
const JSONLD_PLACEHOLDER = '<!--JSONLD-->'

/** 用来确认预渲染真的把正文烤进去了，失败就直接报错中断构建 */
const SANITY_WORDS = ['浩鑫物业', '管道疏通', '化粪池', '131-3767-8181']

const kb = (n) => `${(n / 1024).toFixed(1)}KB`

await access(ssrEntry).catch(() => {
  throw new Error(`[prerender] 找不到 SSR 产物 ${ssrEntry}，先跑 vite build --ssr`)
})

const mod = await import(pathToFileURL(ssrEntry).href)
const appHtml = mod.render()
const jsonLd = mod.buildJsonLd()

let html = await readFile(distHtml, 'utf8')
const before = html.length

if (!html.includes(ROOT_PLACEHOLDER)) {
  throw new Error(
    `[prerender] dist/index.html 里找不到 ${ROOT_PLACEHOLDER}，` +
      '说明 vite 输出的 HTML 结构变了，请检查 index.html 的 #root 容器',
  )
}
// 用函数形式替换，避免正文里的 $& / $1 被当成替换模式
html = html.replace(ROOT_PLACEHOLDER, () => `<div id="root">${appHtml}</div>`)

if (html.includes(JSONLD_PLACEHOLDER)) {
  html = html.replace(JSONLD_PLACEHOLDER, () => jsonLd)
} else {
  console.warn('[prerender] 警告：index.html 没有 <!--JSONLD--> 占位，跳过结构化数据注入')
}

const missing = SANITY_WORDS.filter((w) => !html.includes(w))
if (missing.length) {
  throw new Error(`[prerender] 预渲染结果缺少关键词：${missing.join('、')}，正文没进去`)
}

await writeFile(distHtml, html, 'utf8')

console.log(
  `[prerender] OK  index.html ${kb(before)} -> ${kb(html.length)}` +
    `  (正文 ${appHtml.length} 字符，JSON-LD ${jsonLd.length} 字符)`,
)
