import React, { CSSProperties } from 'react'
import Image from 'next/image'
import { BrushIcon, FlowerBranch, FriendsIcon, NotebookIcon, ThreadLine } from '@/components/decor/LineArt'

const commitments = [
    { label: 'Make-up tự nhiên', Icon: BrushIcon },
    { label: 'Concept độc bản', Icon: NotebookIcon },
    { label: 'Đội ngũ chu đáo', Icon: FriendsIcon },
]

const AboutSection = () => {
    return (
        <section id="ve-chung-minh" aria-labelledby="about-title" className="relative pt-8 md:pt-10">
            <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 md:grid-cols-[0.85fr_1.15fr] md:gap-12 lg:gap-20 lg:px-10">
                {/* Ảnh Polaroid */}
                <div className="relative mx-auto w-full max-w-[340px]" data-reveal="left">
                    <div className="pointer-events-none absolute -inset-8 rounded-full bg-blush-soft blur-2xl" aria-hidden="true" />
                    <FlowerBranch className="sway absolute -bottom-10 -left-16 h-56 w-auto origin-bottom -rotate-12 text-ink/45 sm:-left-24" />

                    <figure className="relative -rotate-3 bg-ivory p-3 pb-20 shadow-[0_30px_60px_-30px] shadow-ink/40 transition-transform duration-700 hover:rotate-0">
                        {/* Băng keo giấy */}
                        <span className="absolute -top-4 left-1/2 h-8 w-28 -translate-x-1/2 -rotate-3 bg-beige/80 shadow-sm" aria-hidden="true" />
                        <div className="relative aspect-[4/5] overflow-hidden bg-blush-soft">
                            <Image
                                src="/images/about/about-polaroid.jpg"
                                alt="Nàng thơ áo len trắng tựa tay, ánh nhìn dịu dàng"
                                fill
                                sizes="(min-width: 768px) 320px, 80vw"
                                className="reveal-zoom object-cover"
                            />
                        </div>
                        <figcaption className="absolute inset-x-4 bottom-4 text-center font-hand text-[19px] leading-snug text-ink-soft">
                            Mỗi cô gái đều là một bài thơ chưa được viết...
                        </figcaption>
                    </figure>
                </div>

                {/* Nội dung */}
                <div className="text-center md:text-left">
                    <p className="font-hand text-2xl text-rose-deep md:text-[28px]" data-reveal="up">
                        Về chúng mình
                    </p>
                    <h2
                        id="about-title"
                        className="mt-1 font-serif text-[34px] leading-tight text-ink md:text-5xl"
                        data-reveal="up"
                        style={{ '--reveal-delay': '100ms' } as CSSProperties}
                    >
                        Tiệm ảnh của những
                        <br className="hidden sm:block" /> kẻ mộng mơ
                    </h2>
                    <p
                        className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-ink-soft md:mx-0"
                        data-reveal="up"
                        style={{ '--reveal-delay': '200ms' } as CSSProperties}
                    >
                        Hành trình tôn vinh vẻ đẹp tự nhiên của “Nàng”. Chúng mình tin rằng, mỗi cô gái đều mang một vẻ đẹp thơ
                        mộng rất riêng. La studio ra đời để cùng bạn lưu giữ những khoảnh khắc trong trẻo, tự nhiên nhất.
                    </p>

                    <ul className="mx-auto mt-10 grid max-w-md grid-cols-3 gap-4 md:mx-0">
                        {commitments.map(({ label, Icon }, i) => (
                            <li
                                key={label}
                                className="flex flex-col items-center gap-3 text-center"
                                data-reveal="up"
                                style={{ '--reveal-delay': `${300 + i * 120}ms` } as CSSProperties}
                            >
                                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-beige bg-ivory text-rose-deep shadow-sm">
                                    <Icon className="h-9 w-9" />
                                </span>
                                <span className="text-sm leading-snug text-ink">{label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Nét cong mảnh dẫn sang phần Concept */}
            <ThreadLine className="pointer-events-none mt-4 -mb-4 h-20 w-full text-rose/35 md:-mt-4 md:-mb-8 md:h-28" />
        </section>
    )
}

export default AboutSection
