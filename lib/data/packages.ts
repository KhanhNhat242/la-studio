export interface Package {
    slug: string
    name: string
    price: string
    features: string[]
    isFeatured?: boolean
    isPlaceholder?: boolean
}

// PLACEHOLDER: toàn bộ giá & quyền lợi là dữ liệu mẫu, chờ sale gửi bảng giá thật
export const packages: Package[] = [
    {
        slug: 'tho-ngay',
        name: 'Gói Thơ Ngây',
        price: '990.000đ',
        features: ['2 trang phục', '10 ảnh chỉnh sửa', 'Thời gian chụp 1 giờ', 'Make-up tự nhiên'],
        isPlaceholder: true,
    },
    {
        slug: 'nang-tho',
        name: 'Gói Nàng Thơ',
        price: '1.490.000đ',
        features: ['3 trang phục', '15 ảnh chỉnh sửa', 'Thời gian chụp 1,5 giờ', 'Make-up & làm tóc'],
        isFeatured: true,
        isPlaceholder: true,
    },
    {
        slug: 'signature',
        name: 'Gói Signature',
        price: '2.290.000đ',
        features: ['4 trang phục', '25 ảnh chỉnh sửa', 'Thời gian chụp 2 giờ', 'Concept thiết kế riêng'],
        isPlaceholder: true,
    },
]
