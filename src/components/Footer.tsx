import { COMPANY } from '../data'
import { LogoMark } from './Header'

export default function Footer() {
  return (
    <footer className="ft">
      <div className="wrap ft-in">
        <div className="ft-brand">
          <LogoMark />
          <div>
            <strong>{COMPANY.name}</strong>
            <span>管道疏通 · 抽污清掏 · 高压清洗 · 24 小时应急</span>
          </div>
        </div>

        <nav className="ft-nav" aria-label="页脚导航">
          <a href="#services">服务项目</a>
          <a href="#equipment">车辆设备</a>
          <a href="#team">作业团队</a>
          <a href="#areas">覆盖区域</a>
          <a href="#faq">常见问题</a>
        </nav>

        <div className="ft-meta">
          <p>
            服务电话 <a href={`tel:${COMPANY.phone}`}>{COMPANY.phoneDisplay}</a>
          </p>
          <p className="ft-note">本站照片均为公司出车现场实拍，未经许可请勿转载。</p>
          <p className="ft-copy">
            © {new Date().getFullYear()} {COMPANY.name} · 保留所有权利
          </p>
        </div>
      </div>
    </footer>
  )
}
