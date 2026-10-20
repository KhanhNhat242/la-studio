'use client'

import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import type { Photo } from '@/lib/data/gallery'

interface LightboxProps {
    photos: Photo[]
    index: number
    onClose: () => void
    onChange: (index: number) => void
}

const navClass =
    'absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-ivory/30 bg-ivory/15 text-ivory backdrop-blur-md transition-all duration-300 hover:bg-ivory/30 active:scale-95 motion-reduce:transition-none sm:h-14 sm:w-14'

const Arrow = ({ dir }: { dir: 'prev' | 'next' }) => (
    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d={dir === 'prev' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'} />
    </svg>
)

// Xem ảnh cỡ lớn: nút trước/sau, phím mũi tên, Esc để đóng, vuốt trên mobile (docs/REQUIREMENTS.md F6)
const Lightbox = ({ photos, index, onClose, onChange }: LightboxProps) => {
    const closeRef = useRef<HTMLButtonElement>(null)
    const touchX = useRef<number | null>(null)
    const total = photos.length
    const photo = photos[index]

    const prev = () => onChange((index - 1 + total) % total)
    const next = () => onChange((index + 1) % total)

    // Khoá cuộn trang, đưa focus vào lightbox và trả lại focus khi đóng
    useEffect(() => {
        const previous = document.activeElement as HTMLElement | null
        const overflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        closeRef.current?.focus()
        return () => {
            document.body.style.overflow = overflow
            previous?.focus()
        }
    }, [])

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowLeft') onChange((index - 1 + total) % total)
            if (e.key === 'ArrowRight') onChange((index + 1) % total)
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [index, total, onClose, onChange])

    return createPortal(
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={`Ảnh ${index + 1} trên ${total}`}
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose()
            }}
            onTouchStart={(e) => {
                touchX.current = e.touches[0].clientX
            }}
            onTouchEnd={(e) => {
                if (touchX.current === null) return
                const dx = e.changedTouches[0].clientX - touchX.current
                if (Math.abs(dx) > 40) {
                    if (dx < 0) next()
                    else prev()
                }
                touchX.current = null
            }}
        >
            <p className="absolute top-5 left-5 text-sm tracking-widest text-ivory/80" aria-live="polite">
                {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </p>
            <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Đóng"
                className="absolute top-3 right-3 z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-ivory transition-colors duration-300 hover:bg-ivory/15"
            >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeWidth="1.8" d="M6 6l12 12M18 6L6 18" />
                </svg>
            </button>

            <button type="button" onClick={prev} aria-label="Ảnh trước" className={`${navClass} left-2 sm:left-6`}>
                <Arrow dir="prev" />
            </button>
            <button type="button" onClick={next} aria-label="Ảnh tiếp theo" className={`${navClass} right-2 sm:right-6`}>
                <Arrow dir="next" />
            </button>

            <figure key={photo.image} className="lightbox-fade flex max-h-full w-full flex-col items-center px-4 sm:px-24">
                <Image
                    src={photo.image}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    sizes="(min-width: 1024px) 70vw, 100vw"
                    className="h-auto max-h-[80vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
                />
            </figure>
        </div>,
        document.body
    )
}

export default Lightbox
