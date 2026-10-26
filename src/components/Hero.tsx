import { COMPANY, HIGHLIGHTS, asset } from '../data'
import { ArrowIcon, CheckIcon } from './Icons'
import Reveal from './Reveal'

const TICKER = [
  '管道疏通',
  '化粪池清理',
  '高压清洗',
  '隔油池清掏',
  '市政管网清淤',
  '污水外运',
  '24H 应急',
  '周口全域',
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <span className="hero-ghost">疏通</span>
      </div>

      <div className="wrap hero-in">
        <Reveal className="hero-copy">
          <p className="eyebrow">
            <span className="dot" />
            周口本地 · 24 小时应急疏通
          </p>

          <h1>
           周口管道疏通，
            <br />
            <mark>一个电话</mark>就有人到。
          </h1>

          <p className="lead">
            {COMPANY.name}，本地自有清洗吸污车。管道疏通、化粪池清理、高压清洗、污水池隔油池清掏、雨污管网清淤——
            小区物业、餐饮后厨、厂区学校，一个电话，人和车一起到。
          </p>

          <div className="hero-cta">
            <a className="callcard" href={`tel:${COMPANY.phone}`}>
              <span className="callcard-lab">24 小时直拨</span>
              <strong className="callcard-num">{COMPANY.phoneDisplay}</strong>
              <span className="callcard-hint">点击拨打 · 微信同号 · 先报价后施工</span>
            </a>
            <a className="btn btn-ghost" href="#services">
              看服务项目
              <ArrowIcon size={18} />
            </a>
          </div>

          <ul className="chips">
            {HIGHLIGHTS.map((h) => (
              <li key={h}>
                <CheckIcon size={16} />
                {h}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="hero-fig" delay={120} as="figure">
          <div className="hero-fig-frame">
            <img
              src={asset('images/truck.jpg')}
              alt="周口市浩鑫物业服务有限公司自有黄色清洗吸污车，罐体印有清洗吸污和联系电话"
              width={1000}
              height={1000}
            />
            <span className="tape tape-tl" aria-hidden="true" />
            <span className="tape tape-br" aria-hidden="true" />
            <figcaption className="fig-tag">清洗吸污一体车 · 车身实拍</figcaption>
          </div>
          <div className="badge-24" aria-hidden="true">
            <b>24</b>
            <span>小时值守</span>
          </div>
        </Reveal>
      </div>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[0, 1].map((k) => (
            <div className="ticker-row" key={k}>
              {TICKER.map((t) => (
                <span key={t + k}>
                  {t}
                  <i>◆</i>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
