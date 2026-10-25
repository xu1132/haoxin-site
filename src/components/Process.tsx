import { PROCESS } from '../data'
import Reveal from './Reveal'

export default function Process() {
  return (
    <section className="sec sec-process" id="process">
      <div className="wrap">
        <div className="sec-head">
          <Reveal>
            <p className="sec-no">
              <span>04</span> 服务流程
            </p>
            <h2>
              从打电话到离场，
              <br />
              一共五步。
            </h2>
          </Reveal>
          <Reveal className="sec-head-side" delay={80}>
            <p>
              每一步都当着客户做，不把车开到看不见的地方，也不在中间加项目。
              干完当场试水，通不通由客户说了算。
            </p>
          </Reveal>
        </div>

        <ol className="steps">
          {PROCESS.map((p, i) => (
            <Reveal as="li" key={p.no} className="step" delay={i * 70}>
              <span className="step-no">{p.no}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
