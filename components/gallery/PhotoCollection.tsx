'use client'

import React, { CSSProperties, useState } from 'react'
import Image from 'next/image'
import type { Photo } from '@/lib/data/gallery'
import Lightbox from './Lightbox'

interface PhotoCollectionProps {
    photos: Photo[]
    // Số ảnh hiện trên lưới, phần còn lại xem qua nút "Xem thêm"
    visibleCount: number
}

const ZoomIcon = () => (
    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="11" cy="11" r="6.5" strokeWidth="1.6" />
        <path strokeLinecap="round" strokeWidth="1.6" d="M16 16l4 4M11 8.5v5M8.5 11h5" />
    </svg>
)

// Lưới ảnh dạng masonry: mỗi ảnh giữ nguyên tỉ lệ gốc, không cắt chiều cao
const PhotoCollection = ({ photos, visibleCount }: PhotoCollectionProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)
    const visible = photos.slice(0, visibleCount)
    const remaining = photos.length - visible.length

    return (
        <>
            <ul className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4 lg:gap-5">
                {visible.map((photo, i) => (
                    <li
                        key={photo.image}
                        className="mb-4 break-inside-avoid sm:mb-5"
                        data-reveal="up"
                        style={{ '--reveal-delay': `${(i % 4) * 90}ms` } as CSSProperties}
                    >
                        <button
                            type="button"
                            onClick={() => setOpenIndex(i)}
                            className="group block w-full cursor-zoom-in text-left"
                            aria-label={`Xem ảnh lớn: ${photo.alt}`}
                        >
                            <span className="relative block overflow-hidden rounded-2xl bg-blush-soft shadow-[0_18px_36px_-26px] shadow-ink/50">
                                <Image
                                    src={photo.image}
                                    alt={photo.alt}
                                    width={photo.width}
                                    height={photo.height}
                                    sizes="(min-width: 1024px) 270px, (min-width: 640px) 31vw, 47vw"
                                    className="block h-auto w-full"
                                />
                                <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" aria-hidden="true" />
                            </span>
                            <span className="mt-2 flex items-center justify-between px-1 text-[11px] tracking-wider text-ink-soft">
                                <span>#{String(i + 1).padStart(2, '0')}</span>
                                <span className="transition-colors duration-300 group-hover:text-rose-deep">
                                    <ZoomIcon />
                                </span>
                            </span>
                        </button>
                    </li>
                ))}

                {remaining > 0 && (
                    <li className="mb-4 break-inside-avoid sm:mb-5" data-reveal="up">
                        <button
                            type="button"
                            onClick={() => setOpenIndex(visible.length)}
                            className="group flex aspect-[3/4] w-full cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-rose/50 bg-blush-soft text-rose-deep transition-colors duration-500 hover:bg-blush"
                        >
                            <span className="font-serif text-4xl sm:text-5xl">+{remaining}</span>
                            <span className="text-sm tracking-wide">Xem thêm ảnh</span>
                            <span
                                className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-ivory/80 transition-transform duration-500 group-hover:translate-x-1 motion-reduce:transition-none"
                                aria-hidden="true"
                            >
                                →
                            </span>
                        </button>
                        <span className="mt-2 block px-1 text-[11px] tracking-wider text-ink-soft">{photos.length} ảnh</span>
                    </li>
                )}
            </ul>

            {openIndex !== null && (
                <Lightbox photos={photos} index={openIndex} onClose={() => setOpenIndex(null)} onChange={setOpenIndex} />
            )}
        </>
    )
}

export default PhotoCollection
