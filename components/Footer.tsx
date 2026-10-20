import React from 'react'
import { links, site } from '@/lib/data/site'
import { Wave } from '@/components/decor/LineArt'
import { FacebookIcon, MessengerIcon, PhoneIcon, PinIcon, ZaloIcon } from '@/components/icons/ContactIcons'

const socials = [
    { label: 'Zalo', href: site.zalo, Icon: ZaloIcon },
    { label: 'Facebook', href: site.facebook, Icon: FacebookIcon },
    { label: 'Messenger', href: site.messenger, Icon: MessengerIcon },
]

const Footer = () => {
    return (
        <footer id="lien-he" aria-labelledby="footer-title" className="relative mt-[100px] md:mt-[120px]">
            <Wave className="absolute -top-[59px] left-0 h-[60px] w-full text-beige md:-top-[89px] md:h-[90px]" />

            <div className="bg-beige">
                <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-10 pb-12 sm:px-6 md:grid-cols-[1.15fr_1fr] md:gap-14 lg:px-10">
                    {/* Bản đồ */}
                    <div className="overflow-hidden rounded-[28px] border-4 border-ivory bg-ivory shadow-[0_24px_48px_-28px] shadow-ink/50" data-reveal="up">
                        <iframe
                            src={site.mapsEmbed}
                            title={`Bản đồ đường đến ${site.name}`}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="block h-64 w-full rounded-[24px] md:h-72"
                        />
                    </div>

                    {/* Thông tin liên hệ */}
                    <div className="text-center md:text-left" data-reveal="up">
                        <h2 id="footer-title" className="font-serif text-[34px] leading-none text-ink">
                            {site.name}
                        </h2>
                        <p className="mt-1.5 font-hand text-xl text-rose-deep">{site.tagline}</p>
                        <p className="mx-auto mt-4 max-w-sm text-[15px] leading-relaxed text-ink-soft md:mx-0">
                            Ghé La để cùng viết nên bài thơ thanh xuân của riêng nàng nhé.
                        </p>

                        <ul className="mt-6 space-y-3 text-[15px] text-ink">
                            <li>
                                <a href={site.phoneHref} className="inline-flex items-center gap-3 transition-colors hover:text-rose-deep">
                                    <PhoneIcon className="h-5 w-5 text-rose-deep" />
                                    {site.phoneDisplay}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={site.mapsLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 transition-colors hover:text-rose-deep"
                                >
                                    <PinIcon className="h-5 w-5 text-rose-deep" />
                                    {site.address}
                                </a>
                            </li>
                        </ul>

                        <div className="mt-6 flex items-center justify-center gap-3 md:justify-start">
                            {socials.map(({ label, href, Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="flex h-11 w-11 items-center justify-center rounded-full bg-ivory text-ink shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose hover:text-ivory"
                                >
                                    <Icon className="h-5 w-5" />
                                </a>
                            ))}
                            <a
                                href={links.booking}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 rounded-full bg-rose px-5 py-2.5 text-sm text-ivory shadow-md shadow-rose/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-deep"
                            >
                                Đặt lịch chụp
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-sand/40">
                    <p className="mx-auto max-w-6xl px-16 pt-5 pb-8 text-center text-xs text-ink-soft sm:px-6 sm:py-5 lg:px-10">
                        © {site.copyrightYear} {site.fullName}. Tiệm ảnh nhà La · TP. Hồ Chí Minh
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
