// Dịch vụ chính – giữ nguyên tên theo phiếu (docs/REQUIREMENTS.md mục 3.2)
export const services = [
    'Chụp ảnh concept cá nhân',
    'Chụp ảnh nghệ thuật',
    'Chụp ảnh cổ trang',
    'Chụp ảnh chân dung',
    'Chụp ảnh theo chủ đề và phong cách riêng',
] as const

export type Service = (typeof services)[number]

export interface Concept {
    slug: string
    name: string
    description: string
    service: Service
    image: string
    imageAlt: string
    isPlaceholder?: boolean
}

// PLACEHOLDER: tên & mô tả concept đặt theo mẫu thiết kế, cần sale xác nhận danh sách thật
export const featuredConcepts: Concept[] = [
    {
        slug: 'nang-tho-mong',
        name: 'Nàng Thơ Thơ Mộng',
        description: 'Nhẹ nhàng, bay bổng cùng hoa ly và váy voan trắng.',
        service: 'Chụp ảnh concept cá nhân',
        image: '/images/concepts/nang-tho-mong.jpg',
        imageAlt: 'Cô gái mặc váy voan trắng ôm bó hoa ly hồng',
        isPlaceholder: true,
    },
    {
        slug: 'mua-giang-sinh-ngot-ngao',
        name: 'Mùa Giáng Sinh Ngọt Ngào',
        description: 'Tinh nghịch, ấm áp đón mùa lễ hội.',
        service: 'Chụp ảnh theo chủ đề và phong cách riêng',
        image: '/images/concepts/mua-giang-sinh-ngot-ngao.jpg',
        imageAlt: 'Cô gái áo len trắng đội mũ cây thông Noel, tạo dáng trái tim',
        isPlaceholder: true,
    },
    {
        slug: 'nang-tho-trong-treo',
        name: 'Nàng Thơ Trong Trẻo',
        description: 'Tự nhiên, gần gũi như hơi thở ngày thường.',
        service: 'Chụp ảnh chân dung',
        image: '/images/concepts/nang-tho-trong-treo.jpg',
        imageAlt: 'Cô gái áo len kem ngồi tựa nhẹ, nụ cười trong trẻo',
        isPlaceholder: true,
    },
]
