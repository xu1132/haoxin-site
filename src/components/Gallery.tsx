import { useCallback, useEffect, useState } from 'react'
import { SHOTS } from '../data'
import Reveal from './Reveal'
import { CloseIcon, ArrowIcon } from './Icons'

export default function Gallery() {
  const [idx, setIdx] = useState<number | null>(null)

  const close = useCallback(() => setIdx(null), [])
  const go = useCallback(
    (dir: number) => {
      setIdx((v) => (v === null ? v : (v + dir + SHOTS.length) % SHOTS.length))
    },
    [],
  )

  useEffect(() => {
    if (idx === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [idx, close, go])

  return (
    <section className="sec sec-shots" id="shots">
      <div className="wrap">
        <div className="sec-head">
          <Reveal>
            <p className="sec-no">
              <span>06</span> 作业现场
            </p>
            <h2>
              车、管子、
              <br />
              和干活的人。
            </h2>
          </Reveal>
          <Reveal className="sec-head-side" delay={80}>
            <p>
              下面的照片全是出车时随手拍的，不是素材图：掀井盖、下软管、接管抽运，
              能看到的东西都在现场。
            </p>
          </Reveal>
        </div>

        <ul className="shots">
          {SHOTS.map((s, i) => (
            <Reveal as="li" key={s.src} delay={(i % 3) * 70}>
              <button className="shot" onClick={() => setIdx(i)} aria-label={`查看大图：${s.title}`}>
                <span className="shot-img" style={{ aspectRatio: s.ratio }}>
                  <img src={s.src} alt={s.title} loading="lazy" style={{ objectPosition: s.pos }} />
                </span>
                <span className="shot-cat">{s.cat}</span>
                <span className="shot-body">
                  <strong>{s.title}</strong>
                  <em>{s.desc}</em>
                </span>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      {idx !== null && (
        <div className="lb" role="dialog" aria-modal="true" onClick={close}>
          <button className="lb-close" onClick={close} aria-label="关闭">
            <CloseIcon size={22} />
          </button>
          <button
            className="lb-nav lb-prev"
            onClick={(e) => {
              e.stopPropagation()
              go(-1)
            }}
            aria-label="上一张"
          >
            <ArrowIcon size={22} />
          </button>
          <figure className="lb-fig" onClick={(e) => e.stopPropagation()}>
            <img src={SHOTS[idx].src} alt={SHOTS[idx].title} />
            <figcaption>
              <strong>{SHOTS[idx].title}</strong>
              <span>{SHOTS[idx].desc}</span>
              <em>{SHOTS[idx].cat}</em>
            </figcaption>
          </figure>
          <button
            className="lb-nav lb-next"
            onClick={(e) => {
              e.stopPropagation()
              go(1)
            }}
            aria-label="下一张"
          >
            <ArrowIcon size={22} />
          </button>
        </div>
      )}
    </section>
  )
}
