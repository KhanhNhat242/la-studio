import React, { CSSProperties } from 'react'
import { packages } from '@/lib/data/packages'
import { links } from '@/lib/data/site'
import SectionHeading from './SectionHeading'

const PricingSection = () => {
    return (
        <section id="bang-gia" aria-labelledby="pricing-title" className="relative pt-[100px] md:pt-[120px]">
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-[520px] w-[min(900px,100%)] -translate-x-1/2 -translate-y-1/3 rounded-full bg-blush-soft/80 blur-3xl" aria-hidden="true" />

            <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">
                <SectionHeading id="pricing-title" eyebrow="Gói chụp dành cho nàng" title="Bảng giá yêu thương" />

                <ul className="grid items-center gap-8 md:grid-cols-3 md:gap-6">
                    {packages.map((pkg, i) => (
                        <li
                            key={pkg.slug}
                            data-reveal="up"
                            style={{ '--reveal-delay': `${i * 140}ms` } as CSSProperties}
                        >
                            <article
                                className={`relative mx-auto flex max-w-[340px] flex-col rounded-[28px] border bg-ivory text-center transition-transform duration-500 hover:-translate-y-1.5 ${pkg.isFeatured
                                    ? 'border-rose/50 shadow-[0_30px_60px_-30px] shadow-rose-deep/60 md:-my-4 md:py-0'
                                    : 'border-beige shadow-[0_20px_40px_-28px] shadow-ink/35'
                                    }`}
                            >
                                {pkg.isFeatured && (
                                    <span className="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2 rounded-full bg-rose-deep px-4 py-1 text-xs tracking-wide text-ivory shadow-md">
                                        ✦ Bán chạy
                                    </span>
                                )}
                                <header
                                    className={`rounded-t-[27px] py-5 ${pkg.isFeatured ? 'bg-rose pt-7 text-ivory' : 'bg-blush text-ink'}`}
                                >
                                    <h3 className="font-serif text-2xl">{pkg.name}</h3>
                                </header>

                                <div className="flex flex-1 flex-col px-7 pt-6 pb-8">
                                    <p className="font-serif text-[32px] leading-none text-rose-deep">{pkg.price}</p>
                                    <p className="mt-1.5 text-xs text-ink-soft">/ buổi chụp</p>

                                    <ul className="mt-6 space-y-2.5 border-t border-dashed border-beige pt-6 text-[15px] text-ink">
                                        {pkg.features.map((feature) => (
                                            <li key={feature} className="flex items-center justify-center gap-2">
                                                <span className="text-rose" aria-hidden="true">
                                                    ❀
                                                </span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <a
                                        href={links.booking}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`mt-8 rounded-full px-6 py-2.5 text-sm transition-all duration-300 ${pkg.isFeatured
                                            ? 'bg-rose text-ivory shadow-md shadow-rose/30 hover:bg-rose-deep'
                                            : 'bg-blush-soft text-rose-deep ring-1 ring-blush hover:bg-blush'
                                            }`}
                                        aria-label={`Đặt lịch ${pkg.name}`}
                                    >
                                        Đặt lịch ngay
                                    </a>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>

                <p className="mt-12 text-center text-sm text-ink-soft italic text-balance" data-reveal="up">
                    Giá tham khảo – liên hệ La để được tư vấn chính xác
                </p>
            </div>
        </section>
    )
}

export default PricingSection
