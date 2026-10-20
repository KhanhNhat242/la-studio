import React from 'react'
import HeroSection from '@/components/home/HeroSection'
import AboutSection from '@/components/home/AboutSection'
import ServiceSection from '@/components/home/ServiceSection'
import GallerySection from '@/components/home/GallerySection'
import CollectionSection from '@/components/home/CollectionSection'
import { site } from '@/lib/data/site'

// Dữ liệu có cấu trúc cho Google (docs/REQUIREMENTS.md mục 7.2)
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.fullName,
    alternateName: site.mapsName,
    description: site.description,
    telephone: '+84931419538',
    address: { '@type': 'PostalAddress', addressLocality: 'TP. Hồ Chí Minh', addressCountry: 'VN' },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    hasMap: site.mapsLink,
    sameAs: [site.facebook],
}

const Home = () => {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
            />
            <HeroSection />
            <AboutSection />
            <ServiceSection />
            {/* <GallerySection /> */}
            <CollectionSection />
        </>
    )
}

export default Home
