'use client'

import React from 'react'
import { SELECT_PACKAGE_EVENT } from '@/lib/bookings/constants'

interface SelectPackageButtonProps {
    slug: string
    name: string
    className?: string
}

// Điền sẵn gói vào form đặt lịch rồi cuộn xuống form
const SelectPackageButton = ({ slug, name, className }: SelectPackageButtonProps) => {
    const onClick = () => {
        window.dispatchEvent(new CustomEvent(SELECT_PACKAGE_EVENT, { detail: slug }))
        document.getElementById('booking')?.scrollIntoView({ block: 'start' })
    }

    return (
        <button type="button" onClick={onClick} className={className} aria-label={`Đặt lịch ${name}`}>
            Đặt lịch ngay
        </button>
    )
}

export default SelectPackageButton
