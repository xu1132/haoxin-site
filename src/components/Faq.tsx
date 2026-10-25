import { FAQS, COMPANY } from '../data'
import Reveal from './Reveal'
import { PlusIcon, PhoneIcon } from './Icons'

export default function Faq() {
  return (
    <section className="sec sec-faq" id="faq">
      <div className="wrap faq-in">
        <Reveal className="faq-copy">
          <p className="sec-no">
            <span>07</span> 常见问题
          </p>
          <h2>
            问得最多的
            <br />
            几个问题。
          </h2>
          <p>
            还有别的疑问，直接打电话问最快——接电话的就是出车的师傅，说得清、也答得准。
          </p>
          <a className="btn btn-ink" href={`tel:${COMPANY.phone}`}>
            <PhoneIcon size={18} />
            {COMPANY.phoneDisplay}
          </a>
        </Reveal>

        <div className="faq-list">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 50}>
              <details className="faq-item" open={i === 0}>
                <summary>
                  <span>{f.q}</span>
                  <i aria-hidden="true">
                    <PlusIcon size={18} />
                  </i>
                </summary>
                <p>{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
