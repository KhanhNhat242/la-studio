import React, { CSSProperties } from 'react'
import Image from 'next/image'
import { featuredConcepts } from '@/lib/data/concepts'
import { links } from '@/lib/data/site'
import { FlowerBranch } from '@/components/decor/LineArt'
import SectionHeading from './SectionHeading'

const ConceptsSection = () => {
    return (
        <section id="concept" aria-labelledby="concept-title" className="relative pt-4 md:pt-6">
            <FlowerBranch className="pointer-events-none absolute top-0 right-[4%] hidden h-48 w-auto rotate-12 text-ink/30 lg:block" />

            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
                <SectionHeading id="concept-title" eyebrow="Khám phá các Concept nghệ thuật" title="Các Concept nổi bật" />

                <ul className="grid gap-10 sm:grid-cols-3 sm:gap-6 lg:gap-10">
                    {featuredConcepts.map((concept, i) => (
                        <li
                            key={concept.slug}
                            data-reveal="up"
                            style={{ '--reveal-delay': `${i * 140}ms` } as CSSProperties}
                        >
                            <article className="group mx-auto flex max-w-[300px] flex-col sm:max-w-[360px] items-center text-center">
                                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[32px] bg-blush-soft shadow-[0_24px_48px_-28px] shadow-rose-deep/50 ring-1 ring-beige">
                                    <Image
                                        src={concept.image}
                                        alt={concept.imageAlt}
                                        fill
                                        sizes="(min-width: 1024px) 340px, (min-width: 640px) 30vw, 90vw"
                                        className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-ink/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                </div>
                                <h3 className="mt-6 font-serif text-2xl leading-snug text-ink">{concept.name}</h3>
                                <p className="mt-2 max-w-[260px] text-[15px] leading-relaxed text-ink-soft">{concept.description}</p>
                                <a
                                    href={links.conceptDetail(concept.slug)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-5 rounded-full bg-beige/70 px-6 py-2 text-sm text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-blush hover:text-rose-deep"
                                    aria-label={`Xem chi tiết concept ${concept.name}`}
                                >
                                    Xem chi tiết
                                </a>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default ConceptsSection
