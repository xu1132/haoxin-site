import { AREAS, CLIENTS, COMPANY } from '../data'
import Reveal from './Reveal'
import { PinIcon } from './Icons'

export default function Areas() {
  return (
    <section className="sec sec-areas" id="areas">
      <div className="wrap areas-in">
        <Reveal className="areas-copy">
          <p className="sec-no">
            <span>05</span> 覆盖区域
          </p>
          <h2>
            周口全域，
            <br />
            市区半小时。
          </h2>
          <p>
            川汇区、淮阳区及各县城区当天可到，乡镇看路程安排。
            位置发个微信定位，师傅按导航直接到楼下。
          </p>
          <p className="areas-hint">
            <PinIcon size={18} />
            {COMPANY.area}
          </p>

          <div className="clients">
            <p className="clients-lab">常服务的客户</p>
            <ul>
              {CLIENTS.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="areas-map" delay={100}>
          <div className="map-plate">
            <span className="map-lab">周口市 · 服务覆盖</span>
            <ul className="area-chips">
              {AREAS.map((a, i) => (
                <li key={a} style={{ animationDelay: `${i * 40}ms` }}>
                  {a}
                </li>
              ))}
            </ul>
            <div className="map-foot">
              <span>
                市区 <b>≤30</b> 分钟
              </span>
              <span>
                县城区 <b>当日</b>
              </span>
              <span>
                应急 <b>24H</b>
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
