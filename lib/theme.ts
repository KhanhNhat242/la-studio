import type { ThemeConfig } from 'antd'

// Bảng màu dùng cho JS (antd) – phải khớp token trong app/globals.css (docs/REQUIREMENTS.md mục 4.2)
export const palette = {
    cream: '#FFF9F4',
    ivory: '#FFFDF9',
    blush: '#F6D6DC',
    blushSoft: '#FBEAEE',
    rose: '#C98A96',
    roseDeep: '#A8677A',
    beige: '#E9DCCB',
    sand: '#CDB89E',
    ink: '#4A3A3E',
    inkSoft: '#7A6A6E',
} as const

export const antdTheme: ThemeConfig = {
    token: {
        colorPrimary: palette.rose,
        colorLink: palette.roseDeep,
        colorText: palette.ink,
        colorTextSecondary: palette.inkSoft,
        colorBorder: palette.beige,
        colorBgBase: palette.ivory,
        borderRadius: 14,
        fontFamily: 'var(--font-be-vietnam), system-ui, sans-serif',
    },
}
