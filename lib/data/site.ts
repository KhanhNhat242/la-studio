// Thông tin doanh nghiệp – phải khớp mục 2 của docs/REQUIREMENTS.md

const PHONE_RAW = '0931419538'
const FACEBOOK_ID = '61590492897254'
const LAT = 10.7644669
const LNG = 106.6656651

export const site = {
    name: 'La Studio',
    tagline: 'Chụp ảnh nàng thơ',
    fullName: 'La Studio – Chụp ảnh nàng thơ',
    mapsName: 'La STUDIO – TIỆM ẢNH NHÀ LA',
    description:
        'La studio – tiệm ảnh nàng thơ tại TP. Hồ Chí Minh. Chụp ảnh concept cá nhân, nghệ thuật, cổ trang, chân dung và theo phong cách riêng.',
    phoneDisplay: '0931 419 538',
    phoneHref: 'tel:+84931419538',
    zalo: `https://zalo.me/${PHONE_RAW}`,
    facebook: `https://www.facebook.com/profile.php?id=${FACEBOOK_ID}`,
    // PLACEHOLDER: link Messenger suy ra từ ID Facebook, cần kiểm tra lại
    messenger: `https://m.me/${FACEBOOK_ID}`,
    // PLACEHOLDER: chưa có địa chỉ dạng chữ, cần sale xác nhận
    address: 'TP. Hồ Chí Minh',
    geo: { lat: LAT, lng: LNG },
    mapsLink:
        'https://www.google.com/maps/place/La+STUDIO+-+TI%E1%BB%86M+%E1%BA%A2NH+NH%C3%80+LA/@10.7644669,106.5894474,13z/data=!4m10!1m2!2m1!1zTGEgc3R1ZGlvLSBjaOG7pXAg4bqjbmggbsOgbmcgdGjGoQ!3m6!1s0x31752f6d4fc9e8dd:0xa29f7f1f34c72bf6!8m2!3d10.7644669!4d106.6656651',
    mapsEmbed: `https://www.google.com/maps?q=${LAT},${LNG}&z=16&output=embed`,
    copyrightYear: 2026,
} as const

// Trang F4 (chi tiết concept) chưa làm → tạm trỏ về Zalo tư vấn. Đặt lịch (F8) dùng form ở trang chủ.
// Khi làm xong chỉ cần đổi ở đây.
export const links = {
    booking: '/#booking',
    consult: site.zalo,
    conceptDetail: (slug: string) => {
        void slug
        return site.zalo
    },
}

export const isExternal = (href: string) => href.startsWith('http')

export interface NavItem {
    label: string
    href: string
    sectionId: string
}

// Menu trang chủ (docs/REQUIREMENTS.md mục 6.1)
export const navItems: NavItem[] = [
    { label: 'Trang chủ', href: '/#hero', sectionId: 'hero' },
    { label: 'Về chúng mình', href: '/#about-us', sectionId: 'about-us' },
    { label: 'Dịch vụ', href: '/#service', sectionId: 'service' },
    { label: 'Album', href: '/#album', sectionId: 'album' },
    { label: 'Liên hệ', href: '/#contact-us', sectionId: 'contact-us' },
]
