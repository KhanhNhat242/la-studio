'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Gắn class .is-revealed cho các phần tử [data-reveal] khi cuộn tới (CSS ở app/globals.css)
const RevealOnScroll = () => {
    const pathname = usePathname()

    useEffect(() => {
        const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-revealed')
                    } else if (entry.boundingClientRect.top > 0) {
                        // Chỉ ẩn lại khi phần tử nằm dưới màn hình (cuộn ngược lên)
                        entry.target.classList.remove('is-revealed')
                    }
                })
            },
            { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
        )
        elements.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [pathname])

    return null
}

export default RevealOnScroll
