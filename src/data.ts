/** 全站文案与数据集中管理，改内容只改这里。 */

/** 图片统一走 BASE_URL，保证发布到 GitHub Pages 的 /<repo>/ 子路径下也能取到 */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const COMPANY = {
  name: '周口市浩鑫物业服务有限公司',
  short: '浩鑫物业',
  /** 车身实拍号码，如需更换请同步修改这里 */
  phone: '13137678181',
  phoneDisplay: '131-3767-8181',
  wechat: '13137678181',
  hours: '全年 24 小时接单 · 节假日不休',
  area: '河南省周口市（详细地址可电话索取）',
  since: 2016,
}

export const HIGHLIGHTS = [
  '自有清洗吸污车，不转包',
  '市区 30 分钟到场',
  '先报价，同意再施工',
  '疏通不成功不收费',
]

export type Service = {
  no: string
  title: string
  desc: string
  tags: string[]
  icon: 'pipe' | 'tank' | 'jet' | 'pool' | 'city' | 'camera'
}

export const SERVICES: Service[] = [
  {
    no: '01',
    title: '管道疏通',
    desc: '厨房下水、卫生间地漏、阳台立管、单元主管道，家庭和商铺都能处理。',
    tags: ['家庭', '商铺', '主管道'],
    icon: 'pipe',
  },
  {
    no: '02',
    title: '化粪池清理',
    desc: '小区、学校、厂区化粪池抽运清掏，抽完冲洗池壁，不留残渣不返味。',
    tags: ['小区', '学校', '厂区'],
    icon: 'tank',
  },
  {
    no: '03',
    title: '高压清洗',
    desc: '16–24MPa 高压水射流冲洗管壁油垢、树根、泥沙，恢复管道原有过水断面。',
    tags: ['油垢', '树根', '泥沙'],
    icon: 'jet',
  },
  {
    no: '04',
    title: '污水池 / 隔油池',
    desc: '餐饮后厨隔油池、地下室污水池清掏外运，配防污布作业，完工冲洗地面。',
    tags: ['餐饮', '地下室', '物业'],
    icon: 'pool',
  },
  {
    no: '05',
    title: '市政管网清淤',
    desc: '雨污检查井、排水沟、箱涵清淤，人工配合机械，淤泥装车外运合规处置。',
    tags: ['雨污井', '排水沟', '箱涵'],
    icon: 'city',
  },
  {
    no: '06',
    title: '管道检测定位',
    desc: '内窥检测看管内情况，先找到塌陷、错口、堵塞点，再决定怎么修，不盲挖。',
    tags: ['查堵点', '查塌陷', '验收'],
    icon: 'camera',
  },
]

export const SPECS = [
  { value: '16–24', unit: 'MPa', label: '高压泵工作压力' },
  { value: '60', unit: 'm+', label: '随车高压软管' },
  { value: '6', unit: 'm+', label: '吸污有效深度' },
  { value: '双仓', unit: '', label: '清水仓 + 污水仓' },
  { value: '蓝牌', unit: '', label: 'C1 可驾 · 可进小区' },
  { value: '24', unit: 'h', label: '应急出车' },
]

export const PROCESS = [
  { no: '1', title: '电话说清情况', desc: '位置、堵在哪、什么时候开始的，先判断要不要出车。' },
  { no: '2', title: '到场勘查报价', desc: '看管线走向和堵塞程度，现场报价，同意再动工。' },
  { no: '3', title: '铺布保护现场', desc: '井口、地面铺防污布，工具摆放整齐，不弄脏客户地面。' },
  { no: '4', title: '疏通 / 抽运作业', desc: '高压冲洗或真空抽吸，边作业边确认是否彻底通畅。' },
  { no: '5', title: '验收冲洗离场', desc: '当场试水验收，冲洗井口地面，污物运至合规处置点。' },
]

export const AREAS = [
  '川汇区', '淮阳区', '项城市', '扶沟县', '西华县',
  '商水县', '沈丘县', '郸城县', '太康县', '鹿邑县',
]

export const CLIENTS = [
  '住宅小区物业', '餐饮门店后厨', '学校 / 医院', '工厂园区',
  '沿街商铺', '市政养护单位', '酒店宾馆', '农贸市场',
]

export type Shot = {
  src: string
  title: string
  desc: string
  /** 卡片角标：作业类型 */
  cat: string
  /** 竖图 3/4、横图 16/9，瀑布流按这个比例排 */
  ratio: string
  /** 可选：裁切焦点，避免人像被切头 */
  pos?: string
}

export const SHOTS: Shot[] = [
  {
    src: asset('images/work-manhole.jpg'),
    title: '检查井开盖抽污',
    desc: '井盖掀开直接下管，抽完把井沿和地面冲干净再盖回去。',
    cat: '管道疏通',
    ratio: '3 / 4',
    pos: 'center 45%',
  },
  {
    src: asset('images/work-tank.jpg'),
    title: '小区污水池抽运',
    desc: '车停到池边，粗软管下池，抽满一车拉去处置点。',
    cat: '抽运外运',
    ratio: '16 / 9',
  },
  {
    src: asset('images/work-pipe.jpg'),
    title: '高压管冲洗主管',
    desc: '盘管器带 60 米高压管，边冲边收，人不用下井。',
    cat: '高压清洗',
    ratio: '3 / 4',
    pos: 'center 40%',
  },
  {
    src: asset('images/work-sewer.jpg'),
    title: '楼前主管返水抢修',
    desc: '商务楼前主管返水，通条带水推进，一人扶管一人控压。',
    cat: '现场抢修',
    ratio: '16 / 9',
  },
  {
    src: asset('images/truck-detail.jpg'),
    title: '清洗吸污一体车',
    desc: '罐体、盘管器、吸污口，一趟车把清洗和抽运都做完。',
    cat: '车辆设备',
    ratio: '16 / 9',
  },
  {
    src: asset('images/truck-portrait.jpg'),
    title: '整车侧视',
    desc: '蓝牌车型，小区窄巷、地下车库出入口都能进。',
    cat: '车辆设备',
    ratio: '3 / 4',
  },
]

export const FAQS = [
  {
    q: '你们是本地公司还是外地接单的？',
    a: '公司注册地在周口，车辆和工人都在本地，不上门转包、不倒手给第三方。电话里说的价，到场基本就是那个价。',
  },
  {
    q: '一般多久能到？',
    a: '市区（川汇区、淮阳区）通常 30 分钟内到场；各县城区当天可到；乡镇视路程安排。急单请电话里先说清具体位置和堵点。',
  },
  {
    q: '怎么收费？会不会到场加价？',
    a: '先看现场：管线走向、堵塞程度、作业距离、是否需要抽运，然后给出总价，客户同意后才动工。中途不追加项目费用，疏通不成功不收费。',
  },
  {
    q: '晚上、周末、节假日能来吗？',
    a: '能。24 小时接单，节假日不休。夜间作业会注意控制噪音，尽量不影响周边住户。',
  },
  {
    q: '抽出来的污物怎么处理？',
    a: '统一运至有资质的污水处置点处理，不就近偷排、不倒进雨水管网。需要的话可提供清运记录。',
  },
  {
    q: '作业会不会把地面弄脏？',
    a: '出车前带防污布和冲洗水，井口四周铺布，完工冲洗井沿和地面，工具归位后才离场。',
  },
]
