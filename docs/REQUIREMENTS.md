# Tài liệu yêu cầu – Website demo "La studio – chụp ảnh nàng thơ"

> **Nguồn gốc:** Phiếu DEV 22 (file `la-studio.pdf`, sale ghi, ngày giao hồ sơ 16/10/2026).
> **Vai trò của file này:** Đây là **nguồn sự thật duy nhất (single source of truth)** về phạm vi, nội dung, nhận diện và chức năng của website. Mọi việc code / thêm tính năng phải đối chiếu với file này (xem quy tắc trong [AGENTS.md](../AGENTS.md)).
>
> Quy ước đánh dấu trong tài liệu:
> - **[PHIẾU]** – thông tin lấy nguyên văn từ phiếu yêu cầu, không được tự ý thay đổi.
> - **[SUY RA]** – thông tin giải mã / suy ra trực tiếp từ dữ liệu trong phiếu (ví dụ giải mã link Google Maps).
> - **[ĐỀ XUẤT]** – quyết định kỹ thuật/thiết kế của dev để lấp chỗ phiếu bỏ trống. Có thể thay khi khách/sale phản hồi.
> - **[CHƯA CÓ]** – ô trong phiếu bỏ trống, cần hỏi sale. Khi code phải dùng placeholder có đánh dấu, **không bịa thông tin thật**.

---

## 1. Thông tin phiếu & quy trình

| Trường | Giá trị | Ghi chú |
|---|---|---|
| Tên phiếu | PHIẾU DEV 22 – La studio – chụp ảnh nàng thơ | [PHIẾU] |
| STT | — | [CHƯA CÓ] |
| Dev phụ trách | — | Dev tự điền (ô vàng) |
| Trạng thái demo | — | Dev tự điền (ô vàng) |
| Link demo | — | Dev dán link sau khi deploy (ô vàng) |
| Trạng thái gửi sale | — | Dev chọn; chọn **"Xong – chờ sale gửi"** thì phiếu tự đóng |
| Ngày giao hồ sơ | **16/10/2026** | [PHIẾU] |
| Sale phụ trách | **Minh Toàn** | [PHIẾU] |
| Mã DN (file sale) | **DN0098** | [PHIẾU] |
| Ưu tiên (GĐ chọn) | — | [CHƯA CÓ] |
| Hạn giao demo | — | [CHƯA CÓ] – phiếu nhắc "SALE GHI HẠN" |
| Ngày gửi khách | — | [CHƯA CÓ] |
| Phản hồi của khách | — | [CHƯA CÓ] |

**Quy trình dev phải làm khi xong demo:** deploy → lấy link demo → điền 3 ô vàng (Dev phụ trách, Trạng thái demo, Link demo) → chọn trạng thái gửi sale "Xong – chờ sale gửi".

---

## 2. Thông tin doanh nghiệp

| Trường | Giá trị | Ghi chú |
|---|---|---|
| Tên doanh nghiệp | **La studio – chụp ảnh nàng thơ** | [PHIẾU] |
| Tên trên Google Maps | **La STUDIO – TIỆM ẢNH NHÀ LA** | [SUY RA] giải mã URL Maps |
| Ngành | Studio (chụp ảnh) | [PHIẾU] |
| Danh mục trên Google Maps | `makeup_artist` | [SUY RA] → studio có kèm dịch vụ trang điểm |
| Tỉnh / TP | Hồ Chí Minh | [PHIẾU] |
| Người liên hệ | — | [CHƯA CÓ] |
| SĐT / Zalo | **84 93 141 95 38** → hiển thị `0931 419 538`, quốc tế `+84 931 419 538` | [PHIẾU] / [SUY RA] |
| Link Zalo | `https://zalo.me/0931419538` | [SUY RA] |
| Gọi điện | `tel:+84931419538` | [SUY RA] |
| Facebook Page | https://www.facebook.com/profile.php?id=61590492897254 | [PHIẾU] |
| Messenger | `https://m.me/61590492897254` | [SUY RA] – cần kiểm tra lại link hoạt động |
| Google Maps | Xem link đầy đủ ở mục 2.1 | [PHIẾU] |
| Toạ độ studio | `10.7644669, 106.6656651` | [SUY RA] lấy từ `!3d…!4d…` (KHÔNG dùng toạ độ `@10.7644669,106.5894474` – đó là tâm khung nhìn) |
| Địa chỉ dạng chữ | — | [CHƯA CÓ] – lấy từ Google Maps khi có, tạm hiển thị "TP. Hồ Chí Minh" + nút mở bản đồ |
| Website hiện tại | Không có | [CHƯA CÓ] |
| Khách đồng ý xem demo? | — | [CHƯA CÓ] (trường bắt buộc nhưng sale chưa ghi) |

### 2.1. Link Google Maps (nguyên văn)

```
https://www.google.com/maps/place/La+STUDIO+-+TI%E1%BB%86M+%E1%BA%A2NH+NH%C3%80+LA/@10.7644669,106.5894474,13z/data=!4m10!1m2!2m1!1zTGEgc3R1ZGlvLSBjaOG7pXAg4bqjbmggbsOgbmcgdGjGoQ!3m6!1s0x31752f6d4fc9e8dd:0xa29f7f1f34c72bf6!8m2!3d10.7644669!4d106.6656651!15sCiJMYSBzdHVkaW8tIGNo4bulcCDhuqNuaCBuw6BuZyB0aMahWiMiIWxhIHN0dWRpbyBjaOG7pXAg4bqjbmggbsOgbmcgdGjGoZIBDW1ha2V1cF9hcnRpc3SaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMjF3WmsweVZtcGlWazUxVmtVME1HUkdSbXhPVjJ4M1kydDRSRk13UlJBQuABAPoBBAgAECo!16s%2Fg%2F11z90t47p7?entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D
```

- Place ID (CID): `0x31752f6d4fc9e8dd:0xa29f7f1f34c72bf6`
- Embed bản đồ [ĐỀ XUẤT]: `https://www.google.com/maps?q=10.7644669,106.6656651&z=16&output=embed`

---

## 3. Mục tiêu, dịch vụ & khách hàng

### 3.1. Mục tiêu website [PHIẾU]
**Giới thiệu công ty / dịch vụ.** → Website là trang giới thiệu (brochure site) + thu yêu cầu đặt lịch. **Không** có thanh toán online, giỏ hàng, tài khoản khách hàng.

### 3.2. Sản phẩm / dịch vụ chính [PHIẾU] (đủ 5 mục, giữ đúng tên)
1. Chụp ảnh concept cá nhân
2. Chụp ảnh nghệ thuật
3. Chụp ảnh cổ trang
4. Chụp ảnh chân dung
5. Chụp ảnh theo chủ đề và phong cách riêng

### 3.3. Khách hàng mục tiêu [PHIẾU]
- Nữ giới từ 18–35 tuổi
- Sinh viên
- Người yêu thích chụp ảnh nghệ thuật
- Khách hàng muốn lưu giữ kỷ niệm, chụp ảnh sinh nhật hoặc concept cá nhân

→ Hệ quả thiết kế [SUY RA]: **mobile-first** (đa số truy cập từ điện thoại qua Facebook/Zalo), giọng văn gần gũi, nữ tính, xưng "nàng" / "La"; nút Zalo/Messenger luôn dễ bấm; giá hiển thị rõ ràng (khách sinh viên nhạy cảm về giá).

### 3.4. Điểm mạnh / khác biệt (USP)
[CHƯA CÓ]. [ĐỀ XUẤT] dùng tạm các USP chung, đánh dấu placeholder, ví dụ: concept đa dạng, có trang điểm & trang phục, chỉnh màu nghệ thuật, không gian studio riêng. **Phải ghi chú cần sale xác nhận.**

---

## 4. Nhận diện thương hiệu & phong cách

### 4.1. Màu chủ đạo / phong cách [PHIẾU]
**Hồng pastel – trắng kem – be**; phong cách **Feminine, Elegant, Artistic, nhẹ nhàng và sang trọng**.

### 4.2. Bảng màu (design tokens) [ĐỀ XUẤT – bắt buộc dùng qua token]

| Token | Hex | Dùng cho |
|---|---|---|
| `cream` | `#FFF9F4` | Nền chính (trắng kem) |
| `ivory` | `#FFFDF9` | Nền card / panel |
| `blush` | `#F6D6DC` | Hồng pastel – nền nhấn, badge |
| `blush-soft` | `#FBEAEE` | Hồng rất nhạt – nền section xen kẽ |
| `rose` | `#C98A96` | Hồng đậm – nút chính, link, trạng thái active |
| `rose-deep` | `#A8677A` | Hover của nút chính, chữ nhấn cần tương phản |
| `beige` | `#E9DCCB` | Be – viền, đường kẻ, nền phụ |
| `sand` | `#CDB89E` | Be đậm – icon, chi tiết trang trí |
| `ink` | `#4A3A3E` | Màu chữ chính (nâu hồng đậm, không dùng đen tuyền) |
| `ink-soft` | `#7A6A6E` | Chữ phụ |

- Chữ trên nền kem phải dùng `ink` / `ink-soft` / `rose-deep` để đạt tương phản WCAG AA (≥ 4.5:1 cho chữ thường). `blush`, `beige` **không** dùng làm màu chữ.
- **Cấm** dùng lại màu xanh `#01796F` và các màu của template homestay cũ.
- Không làm dark mode cho demo (brand là tông sáng); bỏ khối `prefers-color-scheme: dark` hiện có.

### 4.3. Typography [ĐỀ XUẤT]
- Tiêu đề: **Playfair Display** hoặc **Cormorant Garamond** (serif thanh lịch) – qua `next/font/google`.
- Nội dung: **Be Vietnam Pro** (sans, tối ưu tiếng Việt).
- Chữ viết tay (chú thích polaroid, tiêu đề phụ): **Dancing Script** – class `font-hand`.
- Bắt buộc khai báo `subsets: ['latin', 'vietnamese']` để không lỗi dấu tiếng Việt.
- Đã chốt (20/10/2026): Playfair Display (`font-serif`) · Be Vietnam Pro (`font-sans`) · Dancing Script (`font-hand`), khai báo trong `app/layout.tsx`.

### 4.4. Ngôn ngữ hình ảnh
- Nhiều khoảng trắng, bo góc mềm, đường kẻ mảnh màu be, hoạ tiết trang trí nhẹ (hoa, nét line art).
- Hiệu ứng nhẹ nhàng, chậm (dùng sẵn các class `data-reveal`, `deco-float`, `lightbox-fade`, `glass-panel` trong `app/globals.css`); luôn tôn trọng `prefers-reduced-motion`.
- Ảnh là trọng tâm: ảnh lớn, tỉ lệ dọc (3:4, 4:5) phù hợp ảnh chân dung.

### 4.5. Logo & tư liệu
- Link Logo (Drive) [PHIẾU]: https://drive.google.com/drive/u/0/folders/1WQGfUqJPTUvTAExgEv71jNx55hPBxVXK
- Link ảnh / tư liệu (Drive) [PHIẾU]: cùng thư mục trên.
- **Lưu ý:** `public/images/mainlogo-img1.jpg` hiện tại là logo homestay (cây thông + ngôi nhà) của template cũ, **không phải** logo La studio → phải thay bằng logo từ Drive.
- Ảnh tải về đặt tại `public/images/` theo cấu trúc ở mục 7.3. Khi chưa có ảnh thật dùng placeholder trung tính, không dùng ảnh có bản quyền của bên khác.

### 4.6. Website tham khảo khách thích
[CHƯA CÓ].

### 4.7. Lưu ý / điều cần tránh
[CHƯA CÓ] trong phiếu. [ĐỀ XUẤT] tự tránh: màu gắt/neon, font quá trang trí khó đọc, hiệu ứng nhanh/giật, chữ nhỏ trên mobile, nội dung thông tin sai sự thật (giá, địa chỉ, giờ mở cửa).

---

## 5. Ngôn ngữ & nội dung

- Ngôn ngữ: [CHƯA CÓ] → [ĐỀ XUẤT] **chỉ tiếng Việt** (`<html lang="vi">`), không làm đa ngôn ngữ.
- Nội dung sẵn có (giới thiệu, bảng giá, giờ mở cửa…) [PHIẾU]: sale chỉ dán lại **link Google Maps** → chưa có văn bản giới thiệu, bảng giá, giờ mở cửa cụ thể.
  - Giờ mở cửa, đánh giá, ảnh: lấy từ trang Google Maps / Facebook nếu truy cập được; nếu không, dùng placeholder.
  - **Bảng giá, tên gói, số ảnh, thời lượng:** [CHƯA CÓ] → dùng **dữ liệu mẫu** và hiển thị dòng chú thích kiểu "Giá tham khảo – liên hệ để được báo giá chính xác". Toàn bộ dữ liệu mẫu tập trung trong `lib/data/` để thay một chỗ.
- Mọi nội dung chữ hiển thị viết bằng tiếng Việt có dấu, đúng chính tả.

---

## 6. Chức năng cần có [PHIẾU] (đủ 11 mục, không được bỏ)

| # | Chức năng (nguyên văn phiếu) | Route [ĐỀ XUẤT] | Mô tả & tiêu chí chấp nhận |
|---|---|---|---|
| F1 | **Trang chủ** | `/` | Hero ảnh lớn + slogan "chụp ảnh nàng thơ"; giới thiệu ngắn; 5 dịch vụ (mục 3.2); concept nổi bật; bảng giá rút gọn; ảnh bộ sưu tập nổi bật; feedback (placeholder); CTA "Đặt lịch chụp" + Zalo. |
| F2 | **Giới thiệu** | `/about` | Câu chuyện La studio, phong cách, đội ngũ (placeholder), USP (mục 3.4), không gian studio. |
| F3 | **Danh sách concept** | `/concepts` | Lưới các concept, mỗi thẻ: ảnh bìa, tên, nhóm dịch vụ (1 trong 5 mục 3.2), giá từ…; lọc theo nhóm dịch vụ. |
| F4 | **Chi tiết concept** | `/concepts/[slug]` | Album ảnh concept, mô tả, gói phù hợp, trang phục/makeup đi kèm, concept liên quan; nút **"Chọn concept này"** (→ F7). Slug không tồn tại → `notFound()`. |
| F5 | **Bảng giá theo gói** | `/pricing` | Các gói (vd. Cơ bản / Tiêu chuẩn / Cao cấp – dữ liệu mẫu): giá, số ảnh chỉnh, thời lượng, trang phục, makeup; nút đặt lịch theo gói (→ F8 có điền sẵn gói). |
| F6 | **Bộ sưu tập ảnh** | `/gallery` | Lưới ảnh dạng masonry, lọc theo nhóm dịch vụ, bấm ảnh mở **lightbox** (chuyển ảnh trước/sau, đóng bằng Esc, vuốt trên mobile). |
| F7 | **Chọn concept** | trong `/booking` | Bước chọn concept trong form đặt lịch (chọn trực quan bằng thẻ ảnh); nhận sẵn `?concept=<slug>` từ F4. |
| F8 | **Đặt lịch chụp** | `/booking` | Form: họ tên*, SĐT/Zalo* (validate số VN), concept*, gói*, ngày chụp mong muốn* (không chọn ngày quá khứ), khung giờ, số người, ghi chú. Validate cả client và server. Gửi thành công → màn hình xác nhận + gợi ý nhắn Zalo. Lưu thành **yêu cầu đặt lịch** trạng thái "Mới". Nhận sẵn `?concept=` và `?package=`. |
| F9 | **Liên hệ** | `/contact` | SĐT, Zalo, Facebook, Messenger, địa chỉ + **bản đồ Google Maps** nhúng (toạ độ mục 2), giờ mở cửa; form liên hệ ngắn (tuỳ chọn). |
| F10 | **Zalo/Messenger** | toàn site | Nút nổi (floating) cố định góc phải dưới ở **mọi trang**: Zalo, Messenger, Gọi điện; không che nội dung/nút chính trên mobile. |
| F11 | **Quản lý yêu cầu đặt lịch** | `/admin/bookings` | Trang quản trị: danh sách yêu cầu (mới nhất trước), lọc theo trạng thái/ngày, xem chi tiết, đổi trạng thái **Mới → Đã liên hệ → Đã xác nhận → Hoàn thành / Huỷ**. Có bảo vệ đăng nhập đơn giản. Không hiện trong menu public, `noindex`. |

### 6.1. Menu điều hướng (chốt theo mẫu thiết kế trang chủ)
Logo chữ "La studio / chụp ảnh nàng thơ" · **Trang chủ · Về chúng mình · Concept · Bảng giá · Album · Liên hệ** · nút **Đặt lịch chụp** (nền hồng). Header sticky.
- Hiện tại menu là anchor tới các section của trang chủ: `/#trang-chu`, `/#ve-chung-minh`, `/#concept`, `/#bang-gia`, `/#album`, `/#lien-he` (footer). Khi làm các trang riêng (F2, F3, F5, F6, F9) thì đổi `navItems` trong `lib/data/site.ts`.
- Các trang chưa làm (F4 chi tiết concept, F8 đặt lịch) **tạm trỏ về Zalo** qua `links` trong `lib/data/site.ts` – không để link 404 trong bản demo.
- Không tạo route ngoài danh sách mục 6 nếu chưa cập nhật tài liệu.

### 6.1.1. Bố cục trang chủ (F1) – theo mẫu thiết kế
| Thứ tự | Section | id | Nội dung chính |
|---|---|---|---|
| 1 | Hero "Chạm vào giấc mơ" | `trang-chu` | Cao đúng 1 màn hình; tiêu đề "Chạm vào giấc mơ NÀNG THƠ của bạn"; mô tả; CTA "Khám phá Concept" + "Nhận tư vấn" (viền mảnh); 3 ảnh khung vòm xếp lớp; sticker "100% tự nhiên & mộng mơ"; cành hoa line art; cánh hoa rơi; sóng chuyển nền xuống kem |
| 2 | Về chúng mình | `ve-chung-minh` | Polaroid nàng áo len + băng keo giấy + chữ viết tay; tiêu đề "Tiệm ảnh của những kẻ mộng mơ"; 3 cam kết có icon vẽ tay; nét cong mảnh dẫn sang section sau |
| 3 | Các Concept nổi bật | `concept` | 3 thẻ ảnh dọc 3:4 bo góc: tên + 1 câu mô tả + nút "Xem chi tiết" |
| 4 | Bảng giá yêu thương | `bang-gia` | 3 thẻ: Gói Thơ Ngây · Gói Nàng Thơ (nhãn "Bán chạy") · Gói Signature; chú thích "Giá tham khảo – liên hệ La để được tư vấn chính xác" |
| 5 | Khoảnh khắc La Studio | `album` | 5 polaroid nghiêng, băng keo/ghim, chú thích viết tay; nút xem thêm trên Facebook |
| 6 | Footer | `lien-he` | Sóng màu be; bản đồ Google Maps bo góc; SĐT, địa chỉ, Zalo/Facebook/Messenger; nút đặt lịch |

- Khoảng cách: Hero → About ~120–140px (gồm phần sóng); giữa các section còn lại 100px (mobile) / 120px (desktop).
- Ảnh trang chủ đã chọn từ `public/images/library/` và chép sang `public/images/{hero,about,concepts,gallery}/` với tên có nghĩa. Không cần gen ảnh: nền và hoạ tiết dùng gradient + SVG line art (`components/decor/`).

### 6.2. Lưu trữ & quản trị đặt lịch [ĐỀ XUẤT – cần chốt]
- Ghi/đọc qua **Server Actions** (theo `node_modules/next/dist/docs/01-app/02-guides/forms.md`), mọi action phải validate input và kiểm tra quyền (action admin).
- Demo: lưu vào lớp repository `lib/bookings/` (bản đầu dùng file JSON hoặc bộ nhớ). Thiết kế interface để sau đổi sang DB thật (Supabase/Postgres…) mà không sửa UI.
- Đăng nhập admin: mật khẩu qua biến môi trường `ADMIN_PASSWORD` + cookie httpOnly; không hard-code mật khẩu, không commit `.env*`.
- Lưu ý khi deploy serverless (Vercel): file JSON không ghi bền được → cần DB thật nếu demo phải chạy F11 thực tế.

---

## 7. Yêu cầu phi chức năng [ĐỀ XUẤT]

### 7.1. Giao diện & trải nghiệm
- Responsive: mobile (≥ 360px), tablet, desktop; thiết kế mobile-first; không cuộn ngang.
- Ảnh dùng `next/image`, có `alt` tiếng Việt mô tả, `sizes` hợp lý; ảnh hero `priority`.
- Truy cập: nút có `aria-label`, focus nhìn thấy được, tương phản AA, điều khiển được bằng bàn phím (lightbox, menu).

### 7.2. SEO & chia sẻ
- `metadata` riêng từng trang (title dạng `<Trang> | La studio – chụp ảnh nàng thơ`), description tiếng Việt, Open Graph image.
- JSON-LD `LocalBusiness` (tên, SĐT, toạ độ, link Facebook/Maps).
- `sitemap.ts`, `robots.ts`; chặn index `/admin`.

### 7.3. Cấu trúc thư mục
```
app/                    # routes (App Router)
  (site)/...            # các trang public F1–F10 (tuỳ chọn route group)
  admin/bookings/       # F11
components/             # UI dùng chung (Header, Footer, FloatingContact, ...)
components/<feature>/   # component theo tính năng (booking, gallery, concepts…)
lib/data/               # dữ liệu tĩnh: site.ts (thông tin DN), services.ts, concepts.ts, packages.ts, gallery.ts
lib/bookings/           # kiểu dữ liệu, validate, repository, server actions đặt lịch
public/images/          # logo/, concepts/<slug>/, gallery/, hero/
docs/                   # tài liệu (file này)
```

### 7.4. Kỹ thuật
- Next.js **16.4** App Router, React 19.3, TypeScript strict, Tailwind CSS v4, Ant Design v6 (đã có `AntdRegistry`). `cacheComponents` và `partialPrefetching` đang bật trong `next.config.ts`.
- `npm run lint` và `npm run build` phải pass trước khi coi là xong.

---

## 8. Hiện trạng repo cần sửa (kế thừa từ template cũ)

| Vị trí | Vấn đề | Trạng thái |
|---|---|---|
| `package.json` | `name: "ngu-am-o-dalat"` | ✅ Đã đổi thành `la-studio` |
| `app/layout.tsx` | `title: "Booking Homestay"`, `lang="en"`, font Geist | ✅ Metadata La studio, `lang="vi"`, font mục 4.3, theme antd |
| `public/images/mainlogo-img1.jpg` | Logo homestay | ✅ Đã xoá; tạm dùng logo chữ "La studio" (mẫu thiết kế dùng logo chữ). Thư mục `library` chưa có file logo – nếu có logo hình từ Drive thì thêm vào `public/images/logo/` |
| `components/Header.tsx` | Màu `#01796F` (xanh), menu `/services` | ✅ Viết lại theo mục 6.1 |
| `app/globals.css` | Khối dark mode, `font-family: Arial` ghi đè font | ✅ Bỏ dark mode, token màu & font trong `@theme` |
| `README.md` | Nội dung mặc định create-next-app | ⏳ Chưa cập nhật |

---

## 9. Câu hỏi mở cần hỏi sale (Minh Toàn)

1. Khách đã đồng ý xem demo chưa? Hạn giao demo? Mức ưu tiên?
2. Người liên hệ (tên chủ studio)?
3. Địa chỉ cụ thể, giờ mở cửa?
4. Bảng giá thật: tên gói, giá, số ảnh, thời lượng, có kèm makeup/trang phục không?
5. Danh sách concept thật (tên, ảnh, mô tả)?
6. USP / điểm khác biệt của studio?
7. Website tham khảo khách thích? Điều cần tránh?
8. Có cần tiếng Anh không?
9. Quản lý đặt lịch: ai dùng, có cần thông báo (Zalo/email) khi có lịch mới không, có cần DB thật ở bản demo không?
10. Quyền truy cập thư mục Drive logo/ảnh (nếu link bị giới hạn).

---

## 10. Nhật ký thay đổi yêu cầu

Mọi thay đổi phạm vi (thêm/bớt chức năng, đổi màu, đổi route, có thông tin mới từ sale/khách) **phải ghi vào đây** và sửa các mục liên quan ở trên.

| Ngày | Người | Nội dung thay đổi | Nguồn |
|---|---|---|---|
| 20/10/2026 | Dev | Tạo tài liệu từ Phiếu DEV 22 | `la-studio.pdf` |
| 20/10/2026 | Dev | Làm trang chủ F1 + nút liên hệ nổi F10 theo mẫu thiết kế; chốt menu 6.1, bố cục 6.1.1, font 4.3. Giá/concept là dữ liệu mẫu (PLACEHOLDER). Nút đặt lịch & "Xem chi tiết" tạm trỏ Zalo | Mẫu thiết kế + mô tả section của người dùng |
