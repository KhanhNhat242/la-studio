import React from 'react'
import { Sprig } from '@/components/decor/LineArt'

interface SectionHeadingProps {
    eyebrow: string
    title: string
    id?: string
}

// Tiêu đề section: chữ viết tay nhỏ + tiêu đề serif + cành hoa mảnh
const SectionHeading = ({ eyebrow, title, id }: SectionHeadingProps) => {
    return (
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16" data-reveal="up">
            <p className="font-hand text-2xl text-rose-deep md:text-[28px]">{eyebrow}</p>
            <h2 id={id} className="mt-1 font-serif text-[34px] leading-tight text-ink md:text-5xl">
                {title}
            </h2>
            <Sprig className="mx-auto mt-4 h-7 w-40 text-sand" />
        </div>
    )
}

export default SectionHeading
