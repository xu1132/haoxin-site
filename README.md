# 周口市浩鑫物业服务有限公司 · 宣传页

一个单页宣传站（Vite + React + TypeScript），给本地管道疏通 / 抽污清掏生意用的「黄页」型落地页。
视觉取向：工业黄 + 墨黑 + 纸白，硬边框、硬阴影、编号标签，走印刷品 / 施工铭牌的味道，不做常见的蓝白渐变模板。

## 运行

```bash
npm install
npm run dev      # http://localhost:5273
npm run build    # 产物在 dist/
npm run preview  # 预览构建产物
```

## 目录

```
src/
  data.ts              全站文案与数据（公司信息、服务、参数、区域、FAQ、图集）
  styles.css           全站样式（设计令牌 + 响应式）
  App.tsx              页面结构
  components/          Header / Hero / Services / Equipment / Team / Process
                       Areas / Gallery / Faq / Contact / Footer / MobileBar
public/images/         图片资源
```

改文案只需要动 `src/data.ts`；改配色只需要动 `src/styles.css` 顶部的 `:root`。

## 图片说明

全部为现场实拍，无 AI 生成图。

| 文件 | 内容 |
| --- | --- |
| `truck.jpg` | 清洗吸污车整车，首屏主图 |
| `truck-detail.jpg` | 罐体「清洗吸污」字样 + 车身电话 |
| `truck-portrait.jpg` | 驾驶室与罐体侧视（设备区块叠图） |
| `team.jpg` | 五人作业队合影（已裁掉手机录屏界面与顶部无关画面，做过去噪 / 锐化 / 提亮） |
| `work-manhole.jpg` | 掀井盖下软管抽污（竖图 3:4） |
| `work-pipe.jpg` | 高压管冲洗主管道（竖图 3:4） |
| `work-tank.jpg` | 小区污水池抽运（横图 16:9） |
| `work-sewer.jpg` | 楼前主管返水抢修（横图 16:9） |

图集区块按「竖图 3:4 / 横图 16:9」的多列瀑布流排（`columns`），
新照片按原图比例加进 `data.ts` 的 `SHOTS` 即可，不需要改样式。
拍照建议：横图拍 16:9、竖图拍 3:4，井口和人尽量留在画面中间，瀑布流不会切脸。

## 上线前需要替换 / 确认的信息

1. **电话** `131-3767-8181`（取自车身实拍）。如有第二部号码或座机，加到 `data.ts` 的 `COMPANY`。
2. **详细地址**：目前写「河南省周口市（详细地址可电话索取）」，有固定场地的话换成具体门牌。
3. **车辆参数**：高压泵 16–24MPa、60m 高压管、吸污深度 ≥6m、双仓等为同类车型常规配置，
   建议按行驶证 / 罐体铭牌核对一遍再对外。
4. **服务承诺**：「疏通不成功不收费」「市区 30 分钟到场」是转化力很强的话术，
   但如果实际做不到，请改成能兑现的表述，避免纠纷。
5. **备案号**：如需在国内服务器上托管，页面底部要补 ICP 备案号。
6. 微信二维码：目前只写了「微信同号」，如有收款 / 加好友二维码可以放到联系区块。

## 交互

- 顶栏吸顶 + 移动端抽屉菜单
- 滚动淡入（`IntersectionObserver`，尊重 `prefers-reduced-motion`）
- 图集点击看大图，支持 Esc / ← → 切换
- FAQ 用原生 `<details>`，无 JS 也能展开
- 手机端固定底部「拨打电话 / 发短信」条
