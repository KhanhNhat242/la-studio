import React from 'react'

interface IconProps {
    className?: string
}

export const FacebookIcon = ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21h2.9Z" />
    </svg>
)

export const MessengerIcon = ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M12 2.8c-5.2 0-9.2 3.8-9.2 8.9 0 2.7 1.1 5 2.9 6.6v3.1l2.8-1.6c1.1.3 2.3.5 3.5.5 5.2 0 9.2-3.8 9.2-8.9S17.2 2.8 12 2.8Zm1 11.9-2.4-2.5-4.5 2.5 5-5.3 2.4 2.5 4.4-2.5-4.9 5.3Z" />
    </svg>
)

export const PhoneIcon = ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <path d="M5 4h3.5l1.7 4.2-2.2 1.4a11 11 0 0 0 6.4 6.4l1.4-2.2L20 15.5V19a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 5.6 1.5 1.5 0 0 1 5 4Z" />
    </svg>
)

export const PinIcon = ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
        <circle cx="12" cy="9.5" r="2.5" />
    </svg>
)

// Chữ "Zalo" trong bong bóng chat (không dùng logo thương hiệu)
export const ZaloIcon = ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
            d="M12 3c-5 0-9 3.4-9 7.7 0 2.4 1.3 4.6 3.3 6l-.6 3.3 3.4-1.8c.9.2 1.9.3 2.9.3 5 0 9-3.4 9-7.8S17 3 12 3Z"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinejoin="round"
        />
        <text x="12" y="13.2" textAnchor="middle" fontSize="6.4" fontWeight="700" fill="currentColor" fontFamily="system-ui, sans-serif">
            Zalo
        </text>
    </svg>
)
