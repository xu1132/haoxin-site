type P = { className?: string; size?: number }

const base = (size = 24) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
})

export const PhoneIcon = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M6.5 3h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5L16 12l4 1.5v3a2.5 2.5 0 0 1-2.7 2.5C11 18.4 5.6 13 4 6.7A2.5 2.5 0 0 1 6.5 3Z" />
  </svg>
)

export const CheckIcon = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M4 12.5 9 17.5 20 6.5" />
  </svg>
)

export const PinIcon = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
)

export const ClockIcon = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
)

export const WechatIcon = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M9.2 4C5.8 4 3 6.4 3 9.4c0 1.7 1 3.2 2.5 4.2L5 16l2.6-1.3c.5.1 1 .2 1.6.2h.4" />
    <path d="M20.8 14.2c0-2.6-2.5-4.7-5.5-4.7s-5.6 2.1-5.6 4.7 2.5 4.7 5.6 4.7c.6 0 1.2-.1 1.7-.2L21 20l-.6-2.3c.3-.9.4-1.2.4-1.5Z" />
  </svg>
)

export const ArrowIcon = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
)

export const CloseIcon = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M5 5l14 14M19 5 5 19" />
  </svg>
)

export const PlusIcon = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M12 5v14M5 12h14" />
  </svg>
)

/* ---------- 服务图标 ---------- */
export const ServiceIcon = ({ name, size = 26 }: { name: string; size?: number }) => {
  const s = base(size)
  switch (name) {
    case 'pipe':
      return (
        <svg {...s}>
          <path d="M3 8h7a3 3 0 0 1 3 3v2a3 3 0 0 0 3 3h5" />
          <path d="M3 5v6M21 13v6" />
          <path d="M13 6.5 15 9l-2 2.5" />
        </svg>
      )
    case 'tank':
      return (
        <svg {...s}>
          <rect x="4" y="7" width="16" height="11" rx="5.5" />
          <path d="M8 4.5h8M12 4.5V7" />
          <path d="M4 12.5h16" strokeDasharray="2 2.5" />
        </svg>
      )
    case 'jet':
      return (
        <svg {...s}>
          <path d="M3 9h6l3 3-3 3H3z" />
          <path d="M14 8.5 21 5M14 12h7M14 15.5 21 19" />
        </svg>
      )
    case 'pool':
      return (
        <svg {...s}>
          <path d="M3 16c1.6-1.4 3.2-1.4 4.8 0s3.2 1.4 4.8 0 3.2-1.4 4.8 0 3.2 1.4 4.8 0" />
          <path d="M6 13V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6" />
          <path d="M10 5v8M14 5v8" />
        </svg>
      )
    case 'city':
      return (
        <svg {...s}>
          <path d="M4 20V9l4-2 4 2v11" />
          <path d="M12 20V12l4-2 4 2v8" />
          <path d="M3 20h18M7 13h2M7 16h2M15 15h2" />
        </svg>
      )
    case 'camera':
      return (
        <svg {...s}>
          <rect x="3" y="6" width="13" height="10" rx="2" />
          <path d="M16 10l5-2.5v7L16 12" />
          <circle cx="9" cy="11" r="2.2" />
        </svg>
      )
    default:
      return null
  }
}
