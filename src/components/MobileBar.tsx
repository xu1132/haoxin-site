import { COMPANY } from '../data'
import { PhoneIcon, WechatIcon } from './Icons'

export default function MobileBar() {
  return (
    <div className="mbar" role="region" aria-label="快捷联系">
      <a className="mbar-main" href={`tel:${COMPANY.phone}`}>
        <PhoneIcon size={20} />
        <span>
          拨打电话
          <b>{COMPANY.phoneDisplay}</b>
        </span>
      </a>
      <a className="mbar-sub" href={`sms:${COMPANY.phone}`}>
        <WechatIcon size={20} />
        发短信
      </a>
    </div>
  )
}
