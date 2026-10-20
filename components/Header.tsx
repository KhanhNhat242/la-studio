'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { links, navItems, site } from '@/lib/data/site'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeId, setActiveId] = useState(navItems[0].sectionId)

    // Đổ bóng nhẹ khi cuộn khỏi đầu trang
    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 8)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Đánh dấu mục menu theo section đang xem
    useEffect(() => {
        const sections = navItems
            .map((item) => document.getElementById(item.sectionId))
            .filter((el): el is HTMLElement => el !== null)
        if (sections.length === 0) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveId(entry.target.id)
                })
            },
            { rootMargin: '-45% 0px -50% 0px' }
        )
        sections.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    const closeMenu = () => setIsOpen(false)

    return (
        <header
            className={`sticky top-0 z-50 h-(--header-h) transition-[background-color,box-shadow] duration-500 ${isScrolled || isOpen
                ? 'bg-ivory/85 shadow-[0_6px_24px_-12px] shadow-ink/20 backdrop-blur-md'
                : 'bg-blush-soft'
                }`}
        >
            <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-10">
                {/* Logo chữ */}
                <Link href="/#hero" onClick={closeMenu} className="group flex flex-col items-center leading-none">
                    <span className="font-serif text-[28px] tracking-tight text-ink sm:text-[30px]">{site.name}</span>
                    <span className="mt-1 text-[11px] tracking-[0.08em] text-ink-soft transition-colors group-hover:text-rose-deep">
                        {site.tagline}
                    </span>
                </Link>

                {/* Menu desktop */}
                <nav aria-label="Menu chính" className="hidden lg:block">
                    <ul className="flex items-center">
                        {navItems.map((item, index) => {
                            const isActive = activeId === item.sectionId
                            return (
                                <li key={item.href} className="flex items-center">
                                    {index > 0 && <span className="mx-3.5 h-1 w-1 rounded-full bg-sand" aria-hidden="true" />}
                                    <Link
                                        href={item.href}
                                        aria-current={isActive ? 'true' : undefined}
                                        className={`group relative py-1 text-[15px] transition-colors duration-300 ${isActive ? 'text-rose-deep' : 'text-ink hover:text-rose-deep'
                                            }`}
                                    >
                                        {item.label}
                                        <span
                                            className={`absolute -bottom-0.5 left-1/2 h-px -translate-x-1/2 bg-rose transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                                }`}
                                        />
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                <div className="flex items-center gap-2">
                    <a
                        href={links.booking}
                        className="rounded-full bg-rose px-4 py-2 text-sm text-ivory shadow-sm shadow-rose/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-deep sm:px-6 sm:py-2.5 sm:text-[15px]"
                    >
                        Đặt lịch chụp
                    </a>

                    {/* Nút mở menu trên mobile/tablet */}
                    <button
                        type="button"
                        onClick={() => setIsOpen((prev) => !prev)}
                        aria-label={isOpen ? 'Đóng menu' : 'Mở menu'}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-blush focus:outline-none focus-visible:ring-2 focus-visible:ring-rose/40 lg:hidden"
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
                            {isOpen ? (
                                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h10" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Menu xổ xuống trên mobile/tablet */}
            <div
                id="mobile-menu"
                className={`overflow-hidden border-t border-beige/70 bg-ivory/95 backdrop-blur-md transition-all duration-500 ease-out lg:hidden ${isOpen ? 'max-h-96 opacity-100' : 'pointer-events-none max-h-0 opacity-0'
                    }`}
            >
                <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
                    {navItems.map((item) => {
                        const isActive = activeId === item.sectionId
                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    onClick={closeMenu}
                                    className={`block rounded-xl px-4 py-2.5 text-base transition-colors ${isActive ? 'bg-blush-soft text-rose-deep' : 'text-ink hover:bg-blush-soft'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </header>
    )
}

export default Header
