import React, { CSSProperties } from 'react'
import Image from 'next/image'
import { moments } from '@/lib/data/gallery'
import { site } from '@/lib/data/site'
import SectionHeading from './SectionHeading'

// Mỗi polaroid nghiêng & lệch một chút cho cảm giác dán tay
const layout = [
    { rotate: -6, offset: 'lg:translate-y-2', holder: 'tape' },
    { rotate: 4, offset: 'lg:translate-y-10', holder: 'pin' },
    { rotate: -2, offset: 'lg:-translate-y-2', holder: 'tape' },
    { rotate: 5, offset: 'lg:translate-y-8', holder: 'pin' },
    { rotate: -4, offset: 'lg:translate-y-0', holder: 'tape' },
] as const

const GallerySection = () => {
    return (
        <section id="album" aria-labelledby="album-title" className="relative pt-[100px] pb-10 md:pt-[120px]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                <SectionHeading id="album-title" eyebrow="Khoảnh khắc được yêu" title="Khoảnh khắc La Studio" />

                <ul className="flex flex-wrap justify-center gap-x-4 gap-y-10 sm:gap-x-6 lg:flex-nowrap lg:gap-x-0">
                    {moments.map((moment, i) => {
                        const { rotate, offset, holder } = layout[i % layout.length]
                        return (
                            <li
                                key={moment.image}
                                className={`w-[44%] sm:w-[30%] lg:-mx-1 lg:w-1/5 ${offset}`}
                                data-reveal="up"
                                style={{ '--reveal-delay': `${i * 110}ms` } as CSSProperties}
                            >
                                <figure
                                    className="group relative bg-ivory p-2 pb-12 shadow-[0_22px_40px_-24px] shadow-ink/50 transition-all duration-500 hover:z-10 hover:scale-[1.04] hover:rotate-0! sm:p-2.5 sm:pb-14"
                                    style={{ rotate: `${rotate}deg` }}
                                >
                                    {holder === 'tape' ? (
                                        <span className="absolute -top-3 left-1/2 z-10 h-6 w-20 -translate-x-1/2 rotate-2 bg-blush/80 shadow-sm" aria-hidden="true" />
                                    ) : (
                                        <span className="absolute -top-2 left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-rose-deep shadow-md ring-2 ring-ivory/70" aria-hidden="true" />
                                    )}
                                    <div className="relative aspect-[3/4] overflow-hidden bg-blush-soft">
                                        <Image
                                            src={moment.image}
                                            alt={moment.alt}
                                            fill
                                            sizes="(min-width: 1024px) 240px, (min-width: 640px) 30vw, 44vw"
                                            className="object-cover object-top"
                                        />
                                    </div>
                                    <figcaption className="absolute inset-x-2 bottom-3 text-center font-hand text-lg text-ink-soft sm:bottom-3.5 sm:text-xl">
                                        {moment.caption}
                                    </figcaption>
                                </figure>
                            </li>
                        )
                    })}
                </ul>

                <div className="mt-16 text-center lg:mt-20" data-reveal="up">
                    <a
                        href={site.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-ink/50 px-7 py-3 text-[15px] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-deep hover:text-rose-deep"
                    >
                        Xem thêm album trên Facebook
                        <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default GallerySection
