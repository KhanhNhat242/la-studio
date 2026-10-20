import React, { CSSProperties } from 'react'
import { PetalShape } from './LineArt'

interface Petal {
    left: string
    size: number
    duration: number
    delay: number
    drift: number
    opacity: number
    tone: 'ivory' | 'rose'
}

// Vị trí cố định (không random) để server và client render giống nhau
const petals: Petal[] = [
    { left: '6%', size: 14, duration: 16, delay: 0, drift: 60, opacity: 0.75, tone: 'ivory' },
    { left: '18%', size: 10, duration: 19, delay: 5, drift: -40, opacity: 0.6, tone: 'rose' },
    { left: '31%', size: 12, duration: 15, delay: 9, drift: 50, opacity: 0.7, tone: 'ivory' },
    { left: '44%', size: 9, duration: 21, delay: 2, drift: -30, opacity: 0.5, tone: 'rose' },
    { left: '57%', size: 13, duration: 17, delay: 11, drift: 45, opacity: 0.7, tone: 'ivory' },
    { left: '68%', size: 11, duration: 18, delay: 4, drift: -55, opacity: 0.6, tone: 'rose' },
    { left: '79%', size: 15, duration: 14, delay: 7, drift: 35, opacity: 0.8, tone: 'ivory' },
    { left: '90%', size: 10, duration: 20, delay: 13, drift: -45, opacity: 0.55, tone: 'rose' },
]

const FallingPetals = () => {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            {petals.map((p, i) => (
                <span
                    key={i}
                    className={`petal absolute -top-8 block ${p.tone === 'rose' ? 'text-rose' : 'text-ivory'}`}
                    style={
                        {
                            left: p.left,
                            width: p.size,
                            height: p.size * 1.2,
                            '--petal-duration': `${p.duration}s`,
                            '--petal-delay': `${p.delay}s`,
                            '--petal-drift': `${p.drift}px`,
                            '--petal-opacity': p.opacity,
                        } as CSSProperties
                    }
                >
                    <PetalShape className="h-full w-full drop-shadow-sm" />
                </span>
            ))}
        </div>
    )
}

export default FallingPetals
