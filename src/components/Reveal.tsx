import { useEffect, useRef, useState, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  delay?: number
  as?: 'div' | 'section' | 'li' | 'article' | 'figure' | 'header'
  className?: string
}

/** 滚动进入视口时淡入上移，尊重 prefers-reduced-motion */
export default function Reveal({ children, delay = 0, as = 'div', className = '' }: Props) {
  const ref = useRef<HTMLElement | null>(null)
  /**
   * 构建时预渲染（无 window）默认就是显示状态 —— 否则静态 HTML 里全是
   * opacity:0 的隐藏内容，搜索引擎和 AI 爬虫会当成「屏弊文本」处理。
   * 浏览器端仍从 false 开始，滚动淡入动画不受影响。
   */
  const [shown, setShown] = useState(typeof window === 'undefined')

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true)
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const Tag = as as any
  return (
    <Tag
      ref={ref as any}
      className={`reveal ${shown ? 'is-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
