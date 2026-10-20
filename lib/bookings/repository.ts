import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import type { Booking } from './types'

// Bản demo: lưu file JSON (docs/REQUIREMENTS.md mục 6.2).
// Deploy serverless (Vercel) không ghi file bền được → đổi sang DB thật, giữ nguyên interface này.
export interface BookingRepository {
    list: () => Promise<Booking[]>
    create: (booking: Booking) => Promise<void>
}

const FILE = path.join(process.cwd(), 'data', 'bookings.json')

const readAll = async (): Promise<Booking[]> => {
    try {
        return JSON.parse(await readFile(FILE, 'utf8')) as Booking[]
    } catch {
        return []
    }
}

export const bookingRepository: BookingRepository = {
    list: async () => (await readAll()).sort((a, b) => b.createdAt.localeCompare(a.createdAt)),
    create: async (booking) => {
        const all = await readAll()
        all.push(booking)
        await mkdir(path.dirname(FILE), { recursive: true })
        await writeFile(FILE, JSON.stringify(all, null, 2), 'utf8')
    },
}
