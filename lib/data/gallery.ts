export interface Moment {
    image: string
    alt: string
    caption: string
}

// Ảnh "Khoảnh khắc La Studio" trên trang chủ
export const moments: Moment[] = [
    {
        image: '/images/gallery/vibe-giang-sinh.jpg',
        alt: 'Cô gái áo len trắng đội mũ cây thông, ngồi cạnh cành thông',
        caption: 'Vibe Giáng sinh ✨',
    },
    {
        image: '/images/gallery/ngot-ngao.jpg',
        alt: 'Cô gái áo len kem ngồi ôm gối, cười tươi',
        caption: 'Ngọt ngào ✨',
    },
    {
        image: '/images/gallery/diu-dang.jpg',
        alt: 'Chân dung cô gái tóc dài cài hoa trắng trên nền xanh rêu',
        caption: 'Dịu dàng ✨',
    },
    {
        image: '/images/gallery/trong-treo.jpg',
        alt: 'Cô gái váy voan trắng ngồi ôm bó hoa ly',
        caption: 'Trong trẻo ✨',
    },
    {
        image: '/images/gallery/tinh-nghich.jpg',
        alt: 'Cô gái đeo bịt tai lông, nháy mắt tinh nghịch',
        caption: 'Tinh nghịch ✨',
    },
]

export interface Photo {
    image: string
    alt: string
    // Kích thước gốc – giữ đúng tỉ lệ, không cắt chiều cao khi hiển thị
    width: number
    height: number
}

const COLLECTION_DIR = '/images/gallery/collection'

// Bộ sưu tập ảnh trang chủ: 25 ảnh chọn ngẫu nhiên từ public/images/library (bỏ ảnh nhỏ hơn 800px)
export const collection: Photo[] = [
    { image: `${COLLECTION_DIR}/ca-tinh-vest-den.jpg`, width: 1086, height: 1448, alt: 'Cô gái áo vest đen, cà vạt đỏ quỳ gối, phong cách cá tính' },
    { image: `${COLLECTION_DIR}/nang-tho-om-hoa-ly.jpg`, width: 955, height: 1440, alt: 'Cô gái váy voan trắng ôm bó hoa ly hồng' },
    { image: `${COLLECTION_DIR}/bong-bay-do.jpg`, width: 1080, height: 1440, alt: 'Cô gái tóc ngắn quàng khăn sọc đỏ trắng nháy mắt bên chùm bóng bay đỏ' },
    { image: `${COLLECTION_DIR}/vuon-hoa-dai.jpg`, width: 1056, height: 1430, alt: 'Cô gái váy trắng ngồi giữa vườn hoa dại trên nền xanh rêu' },
    { image: `${COLLECTION_DIR}/canh-hoa-ly.jpg`, width: 955, height: 1440, alt: 'Cô gái váy voan ngồi cầm cành hoa ly trên nền trắng' },
    { image: `${COLLECTION_DIR}/hoa-phan-ngoi-tua.jpg`, width: 1365, height: 2048, alt: 'Cô gái áo trắng ngồi tựa cạnh bình hoa hồng phấn' },
    { image: `${COLLECTION_DIR}/hoa-phan-toc-tet.jpg`, width: 1365, height: 2048, alt: 'Cô gái tóc tết cài hoa đứng giữa những cành hoa hồng nhạt' },
    { image: `${COLLECTION_DIR}/vest-den-ngoi-nghieng.jpg`, width: 1080, height: 1440, alt: 'Cô gái áo vest đen ngồi nghiêng, ánh nhìn sắc sảo' },
    { image: `${COLLECTION_DIR}/den-vang-vai-tran.jpg`, width: 1080, height: 1440, alt: 'Chân dung cô gái búi tóc vai trần dưới ánh đèn vàng' },
    { image: `${COLLECTION_DIR}/den-vang-dam-den.jpg`, width: 1080, height: 1440, alt: 'Cô gái đầm đen cúp ngực ngồi nghiêng trong studio ánh vàng' },
    { image: `${COLLECTION_DIR}/chan-dung-trong-treo.jpg`, width: 1200, height: 890, alt: 'Chân dung cô gái tóc buộc thấp, lớp trang điểm trong trẻo' },
    { image: `${COLLECTION_DIR}/hoa-cai-toc.jpg`, width: 1064, height: 1426, alt: 'Cô gái tóc đen cài hoa nhỏ, tựa má trầm tư trên nền xanh rêu' },
    { image: `${COLLECTION_DIR}/couple-tua-mat.jpg`, width: 1068, height: 1280, alt: 'Chàng trai cúi nhìn cô gái nằm trên thảm lá thu' },
    { image: `${COLLECTION_DIR}/khan-voan-hoa-cuc.jpg`, width: 1280, height: 1600, alt: 'Cô gái trùm khăn voan cài hoa cúc trắng, tay chạm má' },
    { image: `${COLLECTION_DIR}/khan-voan-cam-hoa-cuc.jpg`, width: 1280, height: 1600, alt: 'Cô gái trùm khăn voan cầm bông cúc trắng trước mặt' },
    { image: `${COLLECTION_DIR}/hoa-phan-dung.jpg`, width: 1365, height: 2048, alt: 'Cô gái áo trắng tóc dài đứng giữa hoa hồng phấn trên nền xanh rêu' },
    { image: `${COLLECTION_DIR}/couple-la-thu.jpg`, width: 1280, height: 816, alt: 'Cặp đôi cầm lá thu, cô gái đeo bịt tai lông trắng' },
    { image: `${COLLECTION_DIR}/hoa-ly-ngoai-nhin.jpg`, width: 955, height: 1440, alt: 'Cô gái tóc đen vai trần ngoái nhìn bên những bông hoa ly hồng' },
    { image: `${COLLECTION_DIR}/dam-den-dang-dai.jpg`, width: 1080, height: 1440, alt: 'Cô gái búi tóc mặc đầm đen dáng dài đứng nghiêng' },
    { image: `${COLLECTION_DIR}/banh-mi-dang-yeu.jpg`, width: 956, height: 1280, alt: 'Cô gái trang điểm trong trẻo cầm lát bánh mì đáng yêu' },
    { image: `${COLLECTION_DIR}/nang-tho-ngoi-hoa-ly.jpg`, width: 955, height: 1440, alt: 'Cô gái váy voan trắng ngồi ôm bó hoa ly giữa phông trắng' },
    { image: `${COLLECTION_DIR}/nang-tho-cui-dau.jpg`, width: 955, height: 1440, alt: 'Cô gái váy voan cúi đầu nhắm mắt bên hoa ly hồng' },
    { image: `${COLLECTION_DIR}/mu-cay-thong.jpg`, width: 930, height: 1280, alt: 'Cô gái áo len trắng đội mũ cây thông Noel, tay chạm môi' },
    { image: `${COLLECTION_DIR}/bit-tai-long.jpg`, width: 1086, height: 1280, alt: 'Cô gái đeo bịt tai lông, khăn len kẻ, cầm chiếc lá vàng nháy mắt' },
    { image: `${COLLECTION_DIR}/giang-sinh-ghe-trang.jpg`, width: 920, height: 1280, alt: 'Cô gái áo len trắng đội mũ cây thông ngồi trên ghế trắng' },
]
