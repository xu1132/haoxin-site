import { SERVICES } from '../data'
import { ServiceIcon, ArrowIcon, PhoneIcon } from './Icons'
import { COMPANY } from '../data'
import Reveal from './Reveal'

export default function Services() {
  return (
    <section className="sec" id="services">
      <div className="wrap">
        <div className="sec-head">
          <Reveal>
            <p className="sec-no">
              <span>01</span> 服务项目
            </p>
            <h2>
              从家里的地漏，
              <br />
              到小区的主管网。
            </h2>
          </Reveal>
          <Reveal className="sec-head-side" delay={80}>
            <p>
              家庭、商铺、物业、厂区，堵在哪就通到哪。所有项目上门先看现场、先报价，
              同意之后再动工——不存在「干完再加钱」。
            </p>
          </Reveal>
        </div>

        <ul className="svc-grid">
          {SERVICES.map((s, i) => (
            <Reveal as="li" key={s.no} className="svc-card" delay={i * 60}>
              <div className="svc-top">
                <span className="svc-no">{s.no}</span>
                <span className="svc-ico">
                  <ServiceIcon name={s.icon} />
                </span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="svc-tags">
                {s.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal className="svc-cta">
          <div>
            <strong>不确定属于哪一类？</strong>
            <span>电话里说清楚位置和现象，我们帮你判断要不要出车。</span>
          </div>
          <a className="btn btn-ink" href={`tel:${COMPANY.phone}`}>
            <PhoneIcon size={18} />
            {COMPANY.phoneDisplay}
            <ArrowIcon size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
