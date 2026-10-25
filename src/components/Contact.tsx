import { useState } from 'react'
import { COMPANY } from '../data'
import Reveal from './Reveal'
import { PhoneIcon, WechatIcon, ClockIcon, PinIcon, CheckIcon } from './Icons'

const PROMISE = [
  '上门先报价，同意再施工',
  '疏通不成功不收费',
  '污物外运合规处置',
  '作业后冲洗恢复现场',
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyWechat = async () => {
    try {
      await navigator.clipboard.writeText(COMPANY.wechat)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="sec sec-contact" id="contact">
      <div className="wrap">
        <div className="contact-card">
          <Reveal className="contact-copy">
            <p className="sec-no light">
              <span>08</span> 联系我们
            </p>
            <h2>
              水漫上来了，
              <br />
              别等着看。
            </h2>
            <p>
              一个电话，说清位置和现象，师傅带上车和设备出发。
              白天夜里都有人接，节假日不休息。
            </p>

            <a className="contact-tel" href={`tel:${COMPANY.phone}`}>
              <PhoneIcon size={26} />
              <span>
                <b>{COMPANY.phoneDisplay}</b>
                <em>点击直接拨打</em>
              </span>
            </a>
          </Reveal>

          <Reveal className="contact-info" delay={100}>
            <dl>
              <div>
                <dt>
                  <PhoneIcon size={18} /> 服务电话
                </dt>
                <dd>{COMPANY.phoneDisplay}</dd>
              </div>
              <div>
                <dt>
                  <WechatIcon size={18} /> 微信 / 定位
                </dt>
                <dd>
                  {COMPANY.wechat}
                  <button className="copy" onClick={copyWechat}>
                    {copied ? '已复制' : '复制'}
                  </button>
                </dd>
              </div>
              <div>
                <dt>
                  <ClockIcon size={18} /> 营业时间
                </dt>
                <dd>{COMPANY.hours}</dd>
              </div>
              <div>
                <dt>
                  <PinIcon size={18} /> 服务区域
                </dt>
                <dd>{COMPANY.area}</dd>
              </div>
            </dl>

            <ul className="promise">
              {PROMISE.map((p) => (
                <li key={p}>
                  <CheckIcon size={15} />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
