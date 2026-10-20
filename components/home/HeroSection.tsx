import React, { CSSProperties } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { links } from '@/lib/data/site'
import FallingPetals from '@/components/decor/FallingPetals'
import { FlowerBranch, Wave } from '@/components/decor/LineArt'

interface ArchPhotoProps {
    src: string
    alt: string
    sizes: string
    className: string
    delay: number
    isMain?: boolean
}

// Ảnh trong khung vòm: viền mảnh + nền ngà như khung tranh
const ArchPhoto = ({ src, alt, sizes, className, delay, isMain }: ArchPhotoProps) => (
    <div
        className={`hero-in absolute rounded-t-full rounded-b-[22px] border border-ink/25 bg-ivory p-1.5 shadow-[0_24px_50px_-24px] shadow-rose-deep/45 sm:p-2 ${className}`}
        style={{ '--hero-delay': `${delay}ms` } as CSSProperties}
    >
        <div className="relative h-full w-full overflow-hidden rounded-t-full rounded-b-2xl bg-blush-soft">
            <Image
                src={src}
                alt={alt}
                fill
                sizes={sizes}
                loading="eager"
                fetchPriority={isMain ? 'high' : 'auto'}
                className="object-cover object-top"
            />
        </div>
    </div>
)

const HeroSection = () => {
    return (
        <section
            id="hero"
            aria-labelledby="hero-title"
            // Cao bằng 1 màn hình nhưng tối đa 960px để không bị loãng trên màn hình lớn/dọc
            className="relative flex min-h-[min(calc(100svh-var(--header-h)),960px)] items-center overflow-hidden bg-linear-to-b from-blush-soft via-blush-soft to-blush pt-6 pb-28 md:pb-36"
        >
            {/* Quầng sáng mềm phía sau */}
            <div className="pointer-events-none absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-ivory/70 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute right-[-10%] bottom-10 h-[380px] w-[380px] rounded-full bg-ivory/50 blur-3xl" aria-hidden="true" />
            <FallingPetals />

            <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-6 lg:px-10">
                {/* Chữ */}
                <div className="text-center lg:text-left">
                    <p
                        className="hero-in flex items-center justify-center gap-3 text-[13px] tracking-[0.2em] text-rose-deep uppercase lg:justify-start"
                        style={{ '--hero-delay': '0ms' } as CSSProperties}
                    >
                        <span className="h-px w-10 bg-rose/60" aria-hidden="true" />
                        Tiệm ảnh nàng thơ
                    </p>

                    <h1 id="hero-title" className="mt-5 font-serif text-ink">
                        <span
                            className="hero-in block text-[clamp(2.25rem,4.4vw,3.75rem)] leading-[1.15]"
                            style={{ '--hero-delay': '120ms' } as CSSProperties}
                        >
                            Chạm vào giấc mơ
                        </span>
                        <span
                            className="hero-in relative inline-block py-1 text-[clamp(3.25rem,7.4vw,6.25rem)] leading-[1.1] font-medium tracking-tight"
                            style={{ '--hero-delay': '260ms' } as CSSProperties}
                        >
                            NÀNG THƠ
                            {/* Nét gạch chân vẽ tay */}
                            <svg
                                viewBox="0 0 300 20"
                                fill="none"
                                className="absolute -bottom-1 left-[4%] h-4 w-[92%] text-rose/70"
                                aria-hidden="true"
                            >
                                <path d="M4 14 C 80 4 180 2 296 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </span>
                        <span
                            className="hero-in block text-[clamp(2.25rem,4.4vw,3.75rem)] leading-[1.15]"
                            style={{ '--hero-delay': '400ms' } as CSSProperties}
                        >
                            của bạn
                        </span>
                    </h1>

                    <p
                        className="hero-in mx-auto mt-6 max-w-md text-[17px] leading-relaxed text-ink-soft lg:mx-0"
                        style={{ '--hero-delay': '540ms' } as CSSProperties}
                    >
                        Nơi lưu giữ những khoảnh khắc trong ngần, tự nhiên và thơ mộng nhất của thanh xuân.
                    </p>
                </div>

                {/* Cụm ảnh khung vòm xếp lớp */}
                <div className="relative mx-auto aspect-[1.08] w-full max-w-[min(100%,calc(min(60svh,580px)*1.08))]">
                    <FlowerBranch className="sway absolute -right-[6%] bottom-[8%] hidden h-[62%] w-auto origin-bottom text-ink/55 sm:block" />
                    <div className="absolute -left-[7%] bottom-[-4%] h-[34%] -scale-x-100 text-ink/45" aria-hidden="true">
                        <FlowerBranch className="sway h-full w-auto origin-bottom" />
                    </div>

                    <ArchPhoto
                        src="/images/hero/hero-main.jpg"
                        alt="Nàng thơ váy voan trắng nghiêng mình bên bó hoa ly hồng"
                        sizes="(min-width: 1024px) 340px, 58vw"
                        className="top-[11%] left-[3%] h-[87%] w-[55%]"
                        delay={200}
                        isMain
                    />
                    <ArchPhoto
                        src="/images/hero/hero-top.jpg"
                        alt="Nàng thơ ngồi giữa váy voan, ôm bó hoa ly"
                        sizes="(min-width: 1024px) 220px, 38vw"
                        className="top-0 left-[57%] h-[50%] w-[36%]"
                        delay={420}
                    />
                    <ArchPhoto
                        src="/images/hero/hero-bottom.jpg"
                        alt="Chân dung nàng thơ tóc dài bên cành hoa ly"
                        sizes="(min-width: 1024px) 220px, 36vw"
                        className="top-[53%] left-[61%] h-[45%] w-[34%]"
                        delay={620}
                    />

                    {/* Sticker */}
                    <div
                        className="hero-in absolute bottom-[3%] left-[44%] z-10"
                        style={{ '--hero-delay': '900ms' } as CSSProperties}
                    >
                        <div className="-rotate-6">
                            <div className="deco-float flex h-[62px] w-[128px] items-center justify-center rounded-[50%] border border-ink/40 bg-ivory/95 text-center text-[13px] leading-tight text-ink shadow-md sm:h-[72px] sm:w-[148px] sm:text-sm">
                                100% tự nhiên
                                <br />& mộng mơ
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Wave className="absolute bottom-[-1px] left-0 h-16 w-full text-cream md:h-24" />
        </section>
    )
}

export default HeroSection
