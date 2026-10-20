'use server'

import { randomUUID } from 'node:crypto'
import { bookingRepository } from './repository'
import { todayInVietnam } from './constants'
import { normalizePhone, readBookingInput, validateBooking } from './validate'
import type { BookingFormState } from './types'

export const createBooking = async (_prev: BookingFormState, formData: FormData): Promise<BookingFormState> => {
    const input = readBookingInput(formData)
    // Validate lại ở server, không tin dữ liệu từ client
    const errors = validateBooking(input, todayInVietnam())
    if (Object.keys(errors).length > 0) {
        return { ok: false, errors, message: 'Nàng kiểm tra lại giúp La vài thông tin nhé' }
    }

    try {
        await bookingRepository.create({
            ...input,
            id: randomUUID(),
            phone: normalizePhone(input.phone),
            people: input.people ? Number(input.people) : 1,
            status: 'Mới',
            createdAt: new Date().toISOString(),
        })
    } catch {
        return { ok: false, errors: {}, message: 'La chưa nhận được yêu cầu, nàng thử lại hoặc nhắn Zalo giúp La nhé' }
    }

    return { ok: true, errors: {}, fullName: input.fullName, phone: input.phone }
}
