'use client'

import React, { CSSProperties } from 'react'
import { featuredConcepts } from '@/lib/data/concepts'
import { FlowerBranch } from '@/components/decor/LineArt'
import SectionHeading from './SectionHeading'
import ConceptCarousel from './ConceptCarousel'
import { packages } from '@/lib/data/packages'
import BookingForm from '@/components/booking/BookingForm'
import SelectPackageButton from '@/components/booking/SelectPackageButton'

const ServiceSection = () => {
    return (
        <div>
            <section id='service' aria-labelledby="concept-title" className="relative pt-4 md:pt-6">
                <FlowerBranch className="pointer-events-none absolute top-0 right-[4%] hidden h-48 w-auto rotate-12 text-ink/30 lg:block" />

                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
                    <SectionHeading id="concept-title" eyebrow="Khám phá các Concept nghệ thuật" title="Các Concept nổi bật" />

                    <div data-reveal="up">
                        <ConceptCarousel concepts={featuredConcepts} />
                    </div>
                </div>
            </section>

            <section id='pricing' aria-labelledby="pricing-title" className="relative pt-[100px] md:pt-[120px]">
                <div className="pointer-events-none absolute top-1/2 left-1/2 h-[520px] w-[min(900px,100%)] -translate-x-1/2 -translate-y-1/3 rounded-full bg-blush-soft/80 blur-3xl" aria-hidden="true" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                    <SectionHeading id="pricing-title" eyebrow="Gói chụp dành cho nàng" title="Bảng giá & Đặt lịch" />

                    <div className="grid items-start gap-12 xl:grid-cols-[1.75fr_1fr] xl:gap-10">
                        {/* Bên trái: 3 thẻ bảng giá – bám dưới header khi cuộn qua form (desktop) */}
                        <div className="xl:sticky xl:top-[calc(var(--header-h)+2rem)]">
                            <ul className="grid gap-8 md:grid-cols-3 md:gap-5 md:pt-4 xl:gap-6">
                                {packages.map((pkg, i) => (
                                    <li
                                        key={pkg.slug}
                                        data-reveal="up"
                                        style={{ '--reveal-delay': `${i * 140}ms` } as CSSProperties}
                                    >
                                        <article
                                            className={`relative mx-auto flex h-full max-w-[340px] flex-col rounded-[28px] border bg-ivory text-center transition-transform duration-500 hover:-translate-y-1.5 ${pkg.isFeatured
                                                ? 'border-rose/50 shadow-[0_30px_60px_-30px] shadow-rose-deep/60 md:-translate-y-3'
                                                : 'border-beige shadow-[0_20px_40px_-28px] shadow-ink/35'
                                                }`}
                                        >
                                            {pkg.isFeatured && (
                                                <span className="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2 rounded-full bg-rose-deep px-4 py-1 text-xs tracking-wide whitespace-nowrap text-ivory shadow-md">
                                                    ✦ Phổ biến
                                                </span>
                                            )}
                                            <header
                                                className={`rounded-t-[27px] py-4 ${pkg.isFeatured ? 'bg-rose pt-6 text-ivory' : 'bg-blush text-ink'}`}
                                            >
                                                <h3 className="font-serif text-xl">{pkg.name}</h3>
                                            </header>

                                            <div className="flex flex-1 flex-col px-5 pt-5 pb-6">
                                                <p className="font-serif text-[26px] leading-none text-rose-deep">{pkg.price}</p>
                                                <p className="mt-1.5 text-xs text-ink-soft">/ buổi chụp</p>

                                                <ul className="mt-5 flex-1 space-y-2 border-t border-dashed border-beige pt-5 text-sm text-ink">
                                                    {pkg.features.map((feature) => (
                                                        <li key={feature} className="flex items-start justify-center gap-2 md:justify-start md:text-left">
                                                            <span className="text-rose" aria-hidden="true">
                                                                ❀
                                                            </span>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>

                                                <SelectPackageButton
                                                    slug={pkg.slug}
                                                    name={pkg.name}
                                                    className={`mt-6 cursor-pointer rounded-full px-5 py-2.5 text-sm transition-all duration-300 ${pkg.isFeatured
                                                        ? 'bg-rose text-ivory shadow-md shadow-rose/30 hover:bg-rose-deep'
                                                        : 'bg-blush-soft text-rose-deep ring-1 ring-blush hover:bg-blush'
                                                        }`}
                                                />
                                            </div>
                                        </article>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-10 text-center text-sm text-ink-soft italic text-balance" data-reveal="up">
                                Giá tham khảo – liên hệ La để được tư vấn chính xác
                            </p>
                        </div>

                        {/* Bên phải: form đặt lịch (F8) */}
                        <div
                            id="booking"
                            className="mx-auto w-full max-w-2xl scroll-mt-(--header-h) xl:max-w-none"
                            data-reveal="right"
                            style={{ '--reveal-delay': '300ms' } as CSSProperties}
                        >
                            <BookingForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ServiceSection
