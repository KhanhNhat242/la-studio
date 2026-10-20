'use client'

import React, { CSSProperties, useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import type { Concept } from '@/lib/data/concepts'
import { links } from '@/lib/data/site'

interface ConceptCarouselProps {
    concepts: Concept[]
}

const SIDE_SCALE = 0.88
const CARD_GAP = 20
const MIN_CARD_WIDTH = 240
const MAX_CARD_WIDTH = 380

const navButtonClass =
    'absolute top-1/2 z-40 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-beige bg-ivory/95 text-ink shadow-lg shadow-sand/20 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-sand hover:text-rose-deep active:scale-95 motion-reduce:transition-none sm:h-12 sm:w-12'

const ConceptCarousel = ({ concepts }: ConceptCarouselProps) => {
    const [current, setCurrent] = useState(0)
    const [layout, setLayout] = useState({ containerWidth: 1100, windowWidth: 1200 })
    const trackRef = useRef<HTMLDivElement>(null)
    const touchX = useRef<number | null>(null)
    const total = concepts.length

    useEffect(() => {
        const el = trackRef.current
        if (!el) return
        const observer = new ResizeObserver(() => setLayout({ containerWidth: el.clientWidth, windowWidth: window.innerWidth }))
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    // Khoảng từ mép carousel tới mép trong của nút prev/next (khớp class left-*/w-* của nút) + khoảng hở
    const { containerWidth, windowWidth } = layout
    const buttonEdge = (windowWidth < 640 ? 4 + 40 : windowWidth < 1024 ? 8 + 48 : 16 + 48) + 12
    const halfAvailable = containerWidth / 2 - buttonEdge
    // Chia đều không gian giữa 2 nút cho card giữa + 2 card bên (đã thu nhỏ) + 2 khe hở
    const cardWidth = Math.min(
        Math.max((2 * halfAvailable - 2 * CARD_GAP) / (1 + 2 * SIDE_SCALE), MIN_CARD_WIDTH),
        MAX_CARD_WIDTH
    )
    // Mép ngoài card bên chạm sát nút; trên mobile card bên được phép nằm dưới nút
    const sideX = Math.max(halfAvailable - (cardWidth * SIDE_SCALE) / 2, cardWidth * 0.55)

    const nextSlide = useCallback(() => setCurrent((p) => (p + 1) % total), [total])
    const prevSlide = useCallback(() => setCurrent((p) => (p - 1 + total) % total), [total])

    // Vị trí tương đối so với card đang chọn, xoay vòng trong [-floor(total/2) ... +floor(total/2)]
    const getOffset = (index: number) => {
        let offset = (index - current) % total
        if (offset > Math.floor(total / 2)) offset -= total
        if (offset < -Math.floor(total / 2)) offset += total
        return offset
    }

    // Hiệu ứng coverflow: chỉ hiện card giữa + 1 card mỗi bên, card còn lại ẩn sau card giữa
    const getCardStyle = (offset: number): CSSProperties => {
        const abs = Math.abs(offset)
        if (abs > 1) {
            return { width: cardWidth, transform: 'translateX(-50%) scale(0.7)', opacity: 0, zIndex: 0, pointerEvents: 'none' }
        }

        const x = abs === 0 ? 0 : Math.sign(offset) * sideX
        return {
            width: cardWidth,
            transform: `translateX(calc(-50% + ${x}px)) scale(${abs === 0 ? 1 : SIDE_SCALE})`,
            opacity: abs === 0 ? 1 : 0.55,
            zIndex: abs === 0 ? 30 : 20,
            filter: abs === 0 ? 'none' : 'blur(1.5px) brightness(0.97)',
            pointerEvents: 'auto',
        }
    }

    if (total === 0) return null

    return (
        <div
            className="relative w-full overflow-hidden py-4 outline-none select-none"
            tabIndex={0}
            role="region"
            aria-roledescription="carousel"
            aria-label="Những concept được yêu thích"
            onKeyDown={(e) => {
                if (e.key === 'ArrowLeft') prevSlide()
                if (e.key === 'ArrowRight') nextSlide()
            }}
        >
            <div
                ref={trackRef}
                className="relative flex h-[450px] w-full items-center justify-center sm:h-[480px] lg:h-[530px]"
                onTouchStart={(e) => {
                    touchX.current = e.touches[0].clientX
                }}
                onTouchEnd={(e) => {
                    if (touchX.current === null) return
                    const dx = e.changedTouches[0].clientX - touchX.current
                    if (Math.abs(dx) > 40) {
                        if (dx < 0) nextSlide()
                        else prevSlide()
                    }
                    touchX.current = null
                }}
            >
                {/* Nút điều hướng */}
                <button type="button" onClick={prevSlide} aria-label="Concept trước" className={`${navButtonClass} left-1 sm:left-2 lg:left-4`}>
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button type="button" onClick={nextSlide} aria-label="Concept tiếp theo" className={`${navButtonClass} right-1 sm:right-2 lg:right-4`}>
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {concepts.map((concept, index) => {
                    const offset = getOffset(index)
                    const isCenter = offset === 0

                    return (
                        <article
                            key={concept.slug}
                            onClick={() => {
                                if (!isCenter) setCurrent(index)
                            }}
                            style={getCardStyle(offset)}
                            aria-hidden={!isCenter}
                            className={`absolute top-0 left-1/2 flex h-[420px] flex-col rounded-3xl border border-beige bg-ivory p-3.5 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] motion-reduce:transition-none sm:h-[450px] lg:h-[500px] ${isCenter
                                ? 'shadow-[0_24px_50px_-20px] shadow-rose-deep/40 ring-1 ring-sand/30'
                                : 'cursor-pointer shadow-[0_10px_30px_-20px] shadow-sand/30'
                                }`}
                        >
                            {/* Ảnh */}
                            <div className="relative min-h-0 w-full flex-1 overflow-hidden rounded-2xl bg-blush-soft">
                                <Image
                                    src={concept.image}
                                    alt={concept.imageAlt}
                                    fill
                                    sizes={`${MAX_CARD_WIDTH}px`}
                                    className="object-cover"
                                />
                                <span className="absolute top-3 left-3 max-w-[calc(100%-1.5rem)] truncate rounded-full border border-beige bg-ivory/90 px-2.5 py-1 text-[11px] tracking-wide text-ink backdrop-blur-sm">
                                    {concept.service}
                                </span>
                            </div>

                            {/* Thông tin */}
                            <div className="shrink-0 space-y-1.5 px-1.5 pt-3.5">
                                <h3 className="truncate font-serif text-lg leading-snug text-ink sm:text-xl">{concept.name}</h3>
                                <p className="line-clamp-2 min-h-[2.8em] text-[13px] leading-relaxed text-ink-soft">{concept.description}</p>
                            </div>
                        </article>
                    )
                })}
            </div>

            {/* Dấu chấm phân trang */}
            <div className="mt-5 flex items-center justify-center gap-1.5">
                {concepts.map((concept, i) => (
                    <button
                        type="button"
                        key={concept.slug}
                        onClick={() => setCurrent(i)}
                        aria-label={`Đến concept ${i + 1}: ${concept.name}`}
                        aria-current={i === current}
                        className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-rose' : 'w-1.5 bg-beige hover:bg-rose/60'}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default ConceptCarousel
