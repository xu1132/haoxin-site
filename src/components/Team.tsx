import { COMPANY, asset } from '../data'
import Reveal from './Reveal'
import { PhoneIcon } from './Icons'

const VALUES = [
  { t: '先报价', d: '看完现场给总价，同意了再干' },
  { t: '不返工', d: '通不开不收钱，通开当场试水' },
  { t: '不留污', d: '铺布作业，走前冲洗井口地面' },
]

export default function Team() {
  return (
    <section className="sec sec-team" id="team">
      <div className="wrap team-in">
        <Reveal className="team-media" as="figure">
          <div className="photo-card">
            <img
              src={asset('images/team.jpg')}
              alt="周口市浩鑫物业服务有限公司作业队五人在清洗吸污车前合影"
              width={1000}
              height={1150}
              loading="lazy"
            />
            <span className="tape tape-top" aria-hidden="true" />
          </div>
          <figcaption>夜班收工前，五个人的合影 · 车身实拍</figcaption>
        </Reveal>

        <Reveal className="team-copy" delay={100}>
          <p className="sec-no">
            <span>03</span> 作业团队
          </p>
          <h2>
            五个人，
            <br />
            一台车，随叫随到。
          </h2>
          <p>
            公司不大，人都在本地。接电话的就是出车的人，不用先过客服、再等派单。
            师傅干这行十多年，什么管子堵成什么样、该用高压冲还是该先掏，到场看一眼心里就有数。
          </p>

          <blockquote className="couplet">
            <p>
              任由风雨多猖狂，
              <br />
              创业路上要逞强；
              <br />
              不与他人比吃喝，
              <br />
              但愿来日见锋芒。
            </p>
            <cite>—— 写在作业队合影上的一首顺口溜</cite>
          </blockquote>

          <ul className="values">
            {VALUES.map((v) => (
              <li key={v.t}>
                <strong>{v.t}</strong>
                <span>{v.d}</span>
              </li>
            ))}
          </ul>

          <a className="btn btn-ink" href={`tel:${COMPANY.phone}`}>
            <PhoneIcon size={18} />
            直接找师傅：{COMPANY.phoneDisplay}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
