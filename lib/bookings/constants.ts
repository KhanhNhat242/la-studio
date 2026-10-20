// Giá trị concept khi khách chưa chọn và muốn La tư vấn
export const CONCEPT_CONSULT = 'nho-la-tu-van'

// PLACEHOLDER: khung giờ chụp mẫu, cần sale xác nhận giờ mở cửa thật
export const timeSlots = ['Sáng (8h – 11h)', 'Trưa (11h – 14h)', 'Chiều (14h – 17h)', 'Tối (17h – 20h)'] as const

export const MAX_PEOPLE = 10

// Sự kiện trình duyệt: nút "Đặt lịch ngay" trên thẻ gói → điền sẵn gói vào form
export const SELECT_PACKAGE_EVENT = 'la:select-package'

// Ngày hôm nay theo giờ Việt Nam, dạng YYYY-MM-DD
export const todayInVietnam = () =>
    new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Ho_Chi_Minh' }).format(new Date())
