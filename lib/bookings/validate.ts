import { featuredConcepts } from '@/lib/data/concepts'
import { packages } from '@/lib/data/packages'
import { CONCEPT_CONSULT, MAX_PEOPLE, timeSlots } from './constants'
import type { BookingErrors, BookingInput } from './types'

// SĐT di động VN: 0xxxxxxxxx hoặc +84xxxxxxxxx (đầu số 3, 5, 7, 8, 9)
const VN_PHONE = /^(?:\+?84|0)(?:3|5|7|8|9)\d{8}$/
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/

export const normalizePhone = (phone: string) => phone.replace(/[\s.-]/g, '')

export const readBookingInput = (formData: FormData): BookingInput => {
    const get = (key: keyof BookingInput) => {
        const value = formData.get(key)
        return typeof value === 'string' ? value.trim() : ''
    }
    return {
        fullName: get('fullName'),
        phone: get('phone'),
        concept: get('concept'),
        packageSlug: get('packageSlug'),
        date: get('date'),
        timeSlot: get('timeSlot'),
        people: get('people'),
        notes: get('notes'),
    }
}

// Dùng chung cho client và server; `today` dạng YYYY-MM-DD để chặn ngày quá khứ
export const validateBooking = (input: BookingInput, today: string): BookingErrors => {
    const errors: BookingErrors = {}

    if (input.fullName.length < 2) errors.fullName = 'Nàng cho La xin họ tên nhé'
    else if (input.fullName.length > 80) errors.fullName = 'Họ tên tối đa 80 ký tự'

    if (!VN_PHONE.test(normalizePhone(input.phone))) errors.phone = 'Số điện thoại / Zalo chưa đúng (vd. 0931 419 538)'

    const conceptOk = input.concept === CONCEPT_CONSULT || featuredConcepts.some((c) => c.slug === input.concept)
    if (!conceptOk) errors.concept = 'Nàng chọn một concept nhé'

    if (!packages.some((p) => p.slug === input.packageSlug)) errors.packageSlug = 'Nàng chọn một gói chụp nhé'

    if (!ISO_DATE.test(input.date)) errors.date = 'Nàng chọn ngày chụp mong muốn nhé'
    else if (today && input.date < today) errors.date = 'Ngày chụp không được ở quá khứ'

    if (input.timeSlot && !timeSlots.some((slot) => slot === input.timeSlot)) errors.timeSlot = 'Khung giờ không hợp lệ'

    if (input.people) {
        const people = Number(input.people)
        if (!Number.isInteger(people) || people < 1 || people > MAX_PEOPLE) errors.people = `Số người từ 1 đến ${MAX_PEOPLE}`
    }

    if (input.notes.length > 500) errors.notes = 'Ghi chú tối đa 500 ký tự'

    return errors
}
