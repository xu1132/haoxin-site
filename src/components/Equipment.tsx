import { SPECS, asset } from '../data'
import Reveal from './Reveal'
import { CheckIcon } from './Icons'

const ONBOARD = ['盘管器 + 高压喷头', '8 米吸污粗软管', '防污布 / 警示锥', '夜间照明与冲洗水']

export default function Equipment() {
  return (
    <section className="sec sec-dark" id="equipment">
      <div className="wrap">
        <div className="eq">
          <Reveal className="eq-media">
            <figure className="eq-main">
              <img
                src={asset('images/truck-detail.jpg')}
                alt="黄色清洗吸污车罐体与车身电话实拍"
                width={1000}
                height={579}
                loading="lazy"
              />
              <figcaption>罐体、盘管器、吸污口——车身实拍</figcaption>
            </figure>
            <figure className="eq-sub">
              <img src={asset('images/truck-portrait.jpg')} alt="清洗吸污车驾驶室与罐体侧视" width={960} height={1056} loading="lazy" />
            </figure>
            <span className="eq-stamp" aria-hidden="true">
              自有车辆
              <br />
              不转包
            </span>
          </Reveal>

          <Reveal className="eq-body" delay={100}>
            <p className="sec-no light">
              <span>02</span> 车辆设备
            </p>
            <h2>
              一台车，
              <br />
              装下了疏通要用的全部家伙。
            </h2>
            <p className="eq-lead">
              东风蓝牌清洗吸污一体车：前半罐清水、后半罐污水，高压泵冲洗与真空抽吸同车完成。
              车宽不到 2.1 米，小区窄巷、地下车库出入口都能进，不用再等大车。
            </p>

            <dl className="spec-grid">
              {SPECS.map((s) => (
                <div key={s.label} className="spec">
                  <dt>
                    <b>{s.value}</b>
                    {s.unit && <i>{s.unit}</i>}
                  </dt>
                  <dd>{s.label}</dd>
                </div>
              ))}
            </dl>

            <ul className="onboard">
              {ONBOARD.map((o) => (
                <li key={o}>
                  <CheckIcon size={15} />
                  {o}
                </li>
              ))}
            </ul>

            <p className="eq-note">
              * 参数为车辆常规配置，实际以出车车辆为准；如需核对铭牌与罐体容积，可电话沟通。
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
