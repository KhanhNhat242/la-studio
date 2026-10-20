import React from 'react'

// Các nét vẽ tay (line art) dùng trang trí – vẽ bằng currentColor để đổi màu qua class text-*

interface ArtProps {
    className?: string
}

const Leaf = ({ x, y, r, s = 1 }: { x: number; y: number; r: number; s?: number }) => (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
        <path d="M0 0 C 6 -9 20 -10 28 0 C 20 8 6 8 0 0 Z" />
        <path d="M3 0 C 10 -1 17 -1 24 0" />
    </g>
)

const Blossom = ({ x, y, s = 1, r = 0 }: { x: number; y: number; s?: number; r?: number }) => (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
        {[0, 72, 144, 216, 288].map((deg) => (
            <path key={deg} transform={`rotate(${deg})`} d="M0 -2 C -6 -8 -5 -17 0 -19 C 5 -17 6 -8 0 -2 Z" />
        ))}
        <circle r="2.6" />
    </g>
)

const Bud = ({ x, y, r = 0, s = 1 }: { x: number; y: number; r?: number; s?: number }) => (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
        <path d="M0 0 C -6 -8 -4 -18 0 -22 C 4 -18 6 -8 0 0 Z" />
        <path d="M0 -2 C -2 -8 -1 -14 0 -18" />
    </g>
)

// Cành hoa dọc: dùng ở hero, cạnh polaroid, góc section
export const FlowerBranch = ({ className }: ArtProps) => (
    <svg
        viewBox="0 0 160 260"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.1}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        <path d="M80 256 C 76 200 92 150 78 100 C 70 70 84 40 98 22" />
        <path d="M80 192 C 62 178 44 172 30 154" />
        <path d="M83 142 C 100 130 116 120 128 100" />
        <path d="M77 98 C 62 88 54 74 48 58" />
        <Leaf x={80} y={222} r={-150} />
        <Leaf x={79} y={210} r={-30} s={0.9} />
        <Leaf x={58} y={175} r={-170} s={0.8} />
        <Leaf x={86} y={160} r={-20} s={0.85} />
        <Leaf x={106} y={127} r={-60} s={0.75} />
        <Leaf x={70} y={118} r={-160} s={0.8} />
        <Leaf x={82} y={66} r={-40} s={0.7} />
        <Blossom x={100} y={20} s={1.05} />
        <Blossom x={130} y={96} s={0.75} r={20} />
        <Bud x={30} y={154} r={-40} />
        <Bud x={48} y={58} r={-20} s={0.9} />
    </svg>
)

// Cành nhỏ nằm ngang: dùng dưới tiêu đề, cạnh chữ viết tay
export const Sprig = ({ className }: ArtProps) => (
    <svg
        viewBox="0 0 220 60"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.1}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        <path d="M6 40 C 50 30 90 46 130 34 C 160 25 186 26 210 18" />
        <Leaf x={40} y={35} r={-70} s={0.7} />
        <Leaf x={60} y={36} r={60} s={0.65} />
        <Leaf x={95} y={41} r={-80} s={0.7} />
        <Leaf x={118} y={37} r={70} s={0.6} />
        <Leaf x={150} y={29} r={-75} s={0.6} />
        <Bud x={176} y={26} r={50} s={0.8} />
        <Blossom x={210} y={18} s={0.7} />
    </svg>
)

// Nét cong mảnh nối giữa các section
export const ThreadLine = ({ className }: ArtProps) => (
    <svg
        viewBox="0 0 1440 220"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinecap="round"
        preserveAspectRatio="none"
        className={className}
        aria-hidden="true"
    >
        <path d="M-20 160 C 220 220 380 40 640 110 C 860 170 980 30 1180 60 C 1300 78 1380 40 1460 20" />
    </svg>
)

interface WaveProps extends ArtProps {
    flip?: boolean
}

// Đường lượn sóng chuyển nền giữa các section (tô bằng currentColor)
export const Wave = ({ className, flip }: WaveProps) => (
    <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={className}
        style={flip ? { transform: 'scaleY(-1)' } : undefined}
        aria-hidden="true"
    >
        <path
            fill="currentColor"
            d="M0 64 C 180 112 360 120 560 84 C 760 48 900 10 1100 28 C 1240 40 1350 76 1440 60 L 1440 120 L 0 120 Z"
        />
    </svg>
)

const iconProps = {
    viewBox: '0 0 48 48',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.4,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
}

// Icon vẽ tay cho phần cam kết
export const BrushIcon = ({ className }: ArtProps) => (
    <svg {...iconProps} className={className}>
        <path d="M30 8 C 33 6 38 9 37 13 L 24 30 L 18 25 Z" />
        <path d="M18 25 C 12 26 10 31 11 36 C 9 39 7 40 6 41 C 13 42 20 40 23 34 C 24 32 24 31 24 30" />
        <path d="M28 14 L 32 18" />
        <path d="M38 26 l 1.5 3 3 1.5 -3 1.5 -1.5 3 -1.5 -3 -3 -1.5 3 -1.5 Z" />
    </svg>
)

export const NotebookIcon = ({ className }: ArtProps) => (
    <svg {...iconProps} className={className}>
        <path d="M10 8 C 16 7 24 7 30 8 L 31 40 C 24 41 16 41 10 40 Z" />
        <path d="M14 6 v 5 M 20 6 v 5 M 26 6 v 5" />
        <path d="M15 18 h 11 M 15 24 h 9 M 15 30 h 6" />
        <path d="M40 14 L 43 17 L 30 36 L 26 38 L 27 34 Z" />
    </svg>
)

export const FriendsIcon = ({ className }: ArtProps) => (
    <svg {...iconProps} className={className}>
        <circle cx="17" cy="16" r="5.5" />
        <circle cx="32" cy="17" r="4.5" />
        <path d="M6 38 C 6 30 11 25 17 25 C 23 25 28 30 28 38" />
        <path d="M27 27 C 29 25.5 30.5 25 32 25 C 37 25 41 29 41 36" />
        <path d="M24 9 C 25 7 27 7 27.5 8.5 C 28 7 30.5 7 30.5 9.5 C 30.5 11.5 27.5 13 27.5 13 C 27.5 13 24 11.5 24 9 Z" />
    </svg>
)

// Cánh hoa (tô màu) – dùng cho hiệu ứng cánh hoa rơi
export const PetalShape = ({ className }: ArtProps) => (
    <svg viewBox="0 0 20 24" className={className} aria-hidden="true">
        <path fill="currentColor" d="M10 1 C 17 6 19 15 10 23 C 1 15 3 6 10 1 Z" />
        <path d="M10 4 C 10 10 10 15 10 20" stroke="white" strokeOpacity={0.5} strokeWidth={0.8} fill="none" />
    </svg>
)
