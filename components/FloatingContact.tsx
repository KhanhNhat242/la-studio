import React from 'react'
import { site } from '@/lib/data/site'
import { MessengerIcon, PhoneIcon, ZaloIcon } from '@/components/icons/ContactIcons'

// F10 – nút Zalo / Messenger / Gọi điện nổi ở mọi trang
const items = [
    { label: 'Nhắn Zalo cho La studio', href: site.zalo, Icon: ZaloIcon, external: true },
    { label: 'Nhắn Messenger cho La studio', href: site.messenger, Icon: MessengerIcon, external: true },
    { label: `Gọi ${site.phoneDisplay}`, href: site.phoneHref, Icon: PhoneIcon, external: false },
]

const FloatingContact = () => {
    return (
        <div className="fixed right-3 bottom-4 z-40 flex flex-col gap-2.5 sm:right-5 sm:bottom-6">
            {items.map(({ label, href, Icon, external }, i) => (
                <a
                    key={label}
                    href={href}
                    aria-label={label}
                    title={label}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className={`relative flex h-11 w-11 items-center justify-center rounded-full shadow-lg transition-transform duration-300 hover:-translate-y-0.5 sm:h-12 sm:w-12 ${i === items.length - 1 ? 'bg-rose text-ivory shadow-rose/40' : 'border border-blush bg-ivory text-rose-deep shadow-ink/15'
                        }`}
                >
                    {i === items.length - 1 && (
                        <span className="absolute inset-0 rounded-full bg-rose/40 motion-safe:animate-ping" aria-hidden="true" />
                    )}
                    <Icon className="relative h-6 w-6" />
                </a>
            ))}
        </div>
    )
}

export default FloatingContact
