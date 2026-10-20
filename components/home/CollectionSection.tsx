import React from 'react'
import { collection } from '@/lib/data/gallery'
import PhotoCollection from '@/components/gallery/PhotoCollection'
import SectionHeading from './SectionHeading'

// Số ảnh hiện trên lưới, ảnh còn lại xem trong lightbox qua nút "Xem thêm"
const VISIBLE_COUNT = 15

const CollectionSection = () => {
    return (
        <section id="album" aria-labelledby="collection-title" className="relative pt-[100px] pb-10 md:pt-[120px]">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
                <SectionHeading id="collection-title" eyebrow="Bộ sưu tập" title="Album ảnh nàng thơ" />
                <PhotoCollection photos={collection} visibleCount={VISIBLE_COUNT} />
            </div>
        </section>
    )
}

export default CollectionSection
