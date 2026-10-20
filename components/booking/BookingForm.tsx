'use client'

import React, { ChangeEvent, FormEvent, ReactNode, useActionState, useEffect, useState, useSyncExternalStore } from 'react'
import Image from 'next/image'
import { createBooking } from '@/lib/bookings/actions'
import { CONCEPT_CONSULT, MAX_PEOPLE, SELECT_PACKAGE_EVENT, timeSlots, todayInVietnam } from '@/lib/bookings/constants'
import { validateBooking } from '@/lib/bookings/validate'
import type { BookingErrors, BookingFormState, BookingInput } from '@/lib/bookings/types'
import { featuredConcepts } from '@/lib/data/concepts'
import { packages } from '@/lib/data/packages'
import { site } from '@/lib/data/site'

const emptyInput: BookingInput = {
    fullName: '',
    phone: '',
    concept: '',
    packageSlug: packages.find((p) => p.isFeatured)?.slug ?? '',
    date: '',
    timeSlot: '',
    people: '1',
    notes: '',
}

const initialState: BookingFormState = { ok: false, errors: {} }

const fieldClass =
    'w-full rounded-xl border bg-cream px-3.5 py-2.5 text-sm text-ink transition-colors duration-300 placeholder:text-ink-soft/50 focus:border-rose focus:outline-none aria-invalid:border-rose-deep/60'

// Ngày hôm nay chỉ tính ở trình duyệt (server trả '' để không dùng new Date() khi prerender)
const subscribeNoop = () => () => {}
const useToday = () => useSyncExternalStore(subscribeNoop, todayInVietnam, () => '')

interface FieldProps {
    name: keyof BookingInput
    label: string
    error?: string
    children: ReactNode
}

const Field = ({ name, label, error, children }: FieldProps) => (
    <div>
        <label htmlFor={`booking-${name}`} className="mb-1.5 block text-xs tracking-wide text-ink-soft">
            {label}
        </label>
        {children}
        {error && (
            <p id={`booking-${name}-error`} className="mt-1 text-xs text-rose-deep">
                {error}
            </p>
        )}
    </div>
)

const BookingForm = () => {
    const [state, formAction, pending] = useActionState(createBooking, initialState)
    const [values, setValues] = useState<BookingInput>(emptyInput)
    const [clientErrors, setClientErrors] = useState<BookingErrors>({})
    const [showSuccess, setShowSuccess] = useState(true)
    const today = useToday()

    // Nhận gói được chọn từ nút "Đặt lịch ngay" trên thẻ bảng giá
    useEffect(() => {
        const onSelect = (e: Event) => {
            const slug = (e as CustomEvent<string>).detail
            setValues((v) => ({ ...v, packageSlug: slug }))
            setClientErrors((errs) => ({ ...errs, packageSlug: undefined }))
        }
        window.addEventListener(SELECT_PACKAGE_EVENT, onSelect)
        return () => window.removeEventListener(SELECT_PACKAGE_EVENT, onSelect)
    }, [])

    const errors: BookingErrors = { ...state.errors, ...clientErrors }

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const name = e.target.name as keyof BookingInput
        setValues((v) => ({ ...v, [name]: e.target.value }))
        setClientErrors((errs) => ({ ...errs, [name]: undefined }))
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        const found = validateBooking(values, today)
        setClientErrors(found)
        if (Object.keys(found).length > 0) {
            e.preventDefault()
            return
        }
        setShowSuccess(true)
    }

    const resetForm = () => {
        setValues(emptyInput)
        setClientErrors({})
        setShowSuccess(false)
    }

    const fieldProps = (name: keyof BookingInput) => ({
        id: `booking-${name}`,
        name,
        value: values[name],
        onChange,
        'aria-invalid': errors[name] ? true : undefined,
        'aria-describedby': errors[name] ? `booking-${name}-error` : undefined,
        className: `${fieldClass} ${errors[name] ? 'border-rose-deep/60' : 'border-beige'}`,
    })

    return (
        <div className="rounded-[28px] border border-beige bg-ivory p-6 shadow-[0_24px_50px_-30px] shadow-rose-deep/40 sm:p-8">
            {/* Thẻ studio nhỏ */}
            <div className="mb-6 flex items-center gap-3.5 rounded-2xl border border-beige bg-cream p-3">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-blush-soft">
                    <Image src="/images/about/about-polaroid.jpg" alt="Nàng thơ áo len trắng tại La studio" fill sizes="56px" className="object-cover" />
                </div>
                <div className="min-w-0">
                    <p className="font-serif text-base text-ink">{site.name}</p>
                    <p className="text-xs text-ink-soft">{site.address}</p>
                </div>
            </div>

            {state.ok && showSuccess ? (
                <div className="py-6 text-center" role="status">
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blush-soft text-2xl text-rose-deep" aria-hidden="true">
                        ❀
                    </span>
                    <h3 className="mt-4 font-serif text-2xl text-ink">La đã nhận lịch của nàng!</h3>
                    <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
                        Cảm ơn {state.fullName}. La sẽ liên hệ qua số {state.phone} để xác nhận lịch chụp sớm nhất nhé.
                    </p>
                    <a
                        href={site.zalo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-block rounded-full bg-rose px-6 py-2.5 text-sm text-ivory shadow-md shadow-rose/30 transition-colors duration-300 hover:bg-rose-deep"
                    >
                        Nhắn Zalo cho La ngay
                    </a>
                    <button type="button" onClick={resetForm} className="mt-4 block w-full cursor-pointer text-xs text-rose-deep hover:underline">
                        Gửi một yêu cầu khác
                    </button>
                </div>
            ) : (
                <form action={formAction} onSubmit={onSubmit} noValidate className="space-y-4">
                    <p className="text-sm text-ink">Thông tin của nàng</p>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <Field name="fullName" label="Họ và tên *" error={errors.fullName}>
                            <input {...fieldProps('fullName')} type="text" autoComplete="name" placeholder="Nguyễn Thị Mai" />
                        </Field>
                        <Field name="phone" label="SĐT / Zalo *" error={errors.phone}>
                            <input {...fieldProps('phone')} type="tel" autoComplete="tel" inputMode="tel" placeholder="0931 419 538" />
                        </Field>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <Field name="concept" label="Concept *" error={errors.concept}>
                            <select {...fieldProps('concept')}>
                                <option value="" disabled>
                                    Chọn concept
                                </option>
                                {featuredConcepts.map((c) => (
                                    <option key={c.slug} value={c.slug}>
                                        {c.name}
                                    </option>
                                ))}
                                <option value={CONCEPT_CONSULT}>Nhờ La tư vấn giúp</option>
                            </select>
                        </Field>
                        <Field name="packageSlug" label="Gói chụp *" error={errors.packageSlug}>
                            <select {...fieldProps('packageSlug')}>
                                {packages.map((p) => (
                                    <option key={p.slug} value={p.slug}>
                                        {p.name}
                                    </option>
                                ))}
                            </select>
                        </Field>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <Field name="date" label="Ngày chụp mong muốn *" error={errors.date}>
                            <input {...fieldProps('date')} type="date" min={today || undefined} />
                        </Field>
                        <Field name="timeSlot" label="Khung giờ" error={errors.timeSlot}>
                            <select {...fieldProps('timeSlot')}>
                                <option value="">Linh hoạt</option>
                                {timeSlots.map((slot) => (
                                    <option key={slot} value={slot}>
                                        {slot}
                                    </option>
                                ))}
                            </select>
                        </Field>
                    </div>

                    <Field name="people" label="Số người chụp" error={errors.people}>
                        <input {...fieldProps('people')} type="number" min={1} max={MAX_PEOPLE} inputMode="numeric" />
                    </Field>

                    <Field name="notes" label="Ghi chú / mong muốn riêng" error={errors.notes}>
                        <textarea
                            {...fieldProps('notes')}
                            rows={3}
                            maxLength={500}
                            placeholder="Vd. mình thích phong cách nhẹ nhàng, chụp buổi sáng…"
                        />
                    </Field>

                    {state.message && !state.ok && (
                        <p className="rounded-xl bg-blush-soft px-4 py-2.5 text-center text-xs text-rose-deep" role="alert">
                            {state.message}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={pending}
                        className="w-full cursor-pointer rounded-full bg-rose py-3.5 text-sm tracking-wide text-ivory shadow-md shadow-rose/30 transition-all duration-300 hover:bg-rose-deep active:scale-[0.98] disabled:cursor-wait disabled:opacity-70"
                    >
                        {pending ? 'Đang gửi…' : 'Đặt lịch ngay'}
                    </button>

                    <p className="text-center text-xs text-ink-soft">
                        Hoặc nhắn nhanh qua Zalo:{' '}
                        <a href={site.zalo} target="_blank" rel="noopener noreferrer" className="text-rose-deep hover:underline">
                            {site.phoneDisplay}
                        </a>
                    </p>
                </form>
            )}
        </div>
    )
}

export default BookingForm
