import { useEffect, useState } from 'react'
import { COMPANY } from '../data'
import { PhoneIcon, CloseIcon } from './Icons'

const NAV = [
  { href: '#services', label: '服务项目' },
  { href: '#equipment', label: '车辆设备' },
  { href: '#team', label: '作业团队' },
  { href: '#process', label: '服务流程' },
  { href: '#areas', label: '覆盖区域' },
  { href: '#faq', label: '常见问题' },
]

export function LogoMark() {
  return (
    <span className="logo-mark" aria-hidden="true">
      浩
    </span>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`hd ${solid ? 'is-solid' : ''}`}>
      <div className="wrap hd-in">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <LogoMark />
          <span className="brand-txt">
            <strong>{COMPANY.short}</strong>
            <em>管道疏通 · 抽污清掏</em>
          </span>
        </a>

        <nav className="hd-nav" aria-label="主导航">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hd-act">
          <a className="btn btn-call btn-sm" href={`tel:${COMPANY.phone}`}>
            <PhoneIcon size={18} />
            <span>{COMPANY.phoneDisplay}</span>
          </a>
          <button
            className="hd-burger"
            aria-label={open ? '关闭菜单' : '打开菜单'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <CloseIcon size={22} />
            ) : (
              <span className="burger-lines" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            )}
          </button>
        </div>
      </div>

      <div className={`hd-drawer ${open ? 'is-open' : ''}`}>
        <nav aria-label="移动导航">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-call btn-block" href={`tel:${COMPANY.phone}`} onClick={() => setOpen(false)}>
          <PhoneIcon size={18} />
          拨打 {COMPANY.phoneDisplay}
        </a>
        <p className="hd-drawer-note">24 小时接单 · 市区 30 分钟到场</p>
      </div>
    </header>
  )
}
