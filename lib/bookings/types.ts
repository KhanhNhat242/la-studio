// Kiểu dữ liệu yêu cầu đặt lịch (docs/REQUIREMENTS.md F8, F11)
export type BookingStatus = 'Mới' | 'Đã liên hệ' | 'Đã xác nhận' | 'Hoàn thành' | 'Huỷ'

export interface BookingInput {
    fullName: string
    phone: string
    concept: string
    packageSlug: string
    date: string
    timeSlot: string
    people: string
    notes: string
}

export interface Booking extends Omit<BookingInput, 'people'> {
    id: string
    people: number
    status: BookingStatus
    createdAt: string
}

export type BookingErrors = Partial<Record<keyof BookingInput, string>>

export interface BookingFormState {
    ok: boolean
    errors: BookingErrors
    message?: string
    // Tên khách & SĐT để hiện ở màn hình xác nhận
    fullName?: string
    phone?: string
}
