<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Quy tắc dự án La studio (BẮT BUỘC)

> Áp dụng cho mọi người và mọi AI agent khi viết code, thêm tính năng, sửa nội dung trong repo này. Nếu có mâu thuẫn, thứ tự ưu tiên: yêu cầu trực tiếp của người dùng > `docs/REQUIREMENTS.md` > file này > thói quen cá nhân.

## 1. Nguồn sự thật: `docs/REQUIREMENTS.md`

- **Đọc `docs/REQUIREMENTS.md` trước khi làm bất kỳ việc gì.** Mọi trang, chức năng, màu sắc, nội dung phải truy được về một mục trong file đó (F1–F11, mục 4 nhận diện, mục 5 nội dung).
- Không tự thêm trang/chức năng/route ngoài phạm vi. Muốn thêm/đổi → cập nhật `docs/REQUIREMENTS.md` (mục liên quan + mục 10 "Nhật ký thay đổi") **trong cùng thay đổi** đó.
- Không bỏ hay đổi tên 5 dịch vụ (mục 3.2) và 11 chức năng (mục 6) đã ghi trong phiếu.
- Khi sale/khách cung cấp thông tin mới (giá, địa chỉ, concept…): sửa tài liệu trước, rồi sửa `lib/data/`.

## 2. Không bịa thông tin thật

- Thông tin doanh nghiệp (tên, SĐT, link, toạ độ) chỉ lấy từ `lib/data/site.ts`, mà file này phải khớp mục 2 của tài liệu. Không hard-code SĐT/link rải rác trong component.
- Mục nào đánh dấu **[CHƯA CÓ]** (giá, địa chỉ chữ, giờ mở cửa, USP, feedback…) → dùng dữ liệu mẫu, đặt cờ `isPlaceholder: true` hoặc comment `// PLACEHOLDER: cần sale xác nhận`, và hiển thị chú thích phù hợp (vd. "Giá tham khảo").
- Không dùng ảnh/logo có bản quyền của bên khác. Logo template homestay cũ không được dùng.

## 3. Nhận diện & giao diện

- Chỉ dùng bảng màu token ở mục 4.2 (`cream`, `ivory`, `blush`, `blush-soft`, `rose`, `rose-deep`, `beige`, `sand`, `ink`, `ink-soft`), khai báo trong `@theme` của `app/globals.css` và dùng qua class Tailwind (`bg-cream`, `text-ink`…). **Cấm** hex tuỳ ý trong className (vd. `text-[#01796F]`) và cấm màu ngoài bảng.
- Theme Ant Design (`ConfigProvider`) phải map vào cùng token màu/font, không để màu xanh mặc định của antd lộ ra.
- Phong cách: Feminine, Elegant, Artistic – nhẹ nhàng, sang trọng; nhiều khoảng trắng, bo góc mềm, hiệu ứng chậm. Không màu gắt, không hiệu ứng giật.
- Font qua `next/font/google` với `subsets: ['latin', 'vietnamese']`; dùng class `font-serif` (tiêu đề), `font-sans` (nội dung), `font-hand` (chữ viết tay) – mục 4.3.
- Hoạ tiết vẽ tay, sóng chuyển section, cánh hoa rơi: tái sử dụng `components/decor/` trước khi vẽ mới. Ưu tiên ảnh có sẵn trong `public/images/library/`; chép ảnh dùng sang thư mục theo nhóm với tên có nghĩa.
- Không dark mode.
- Mobile-first, responsive từ 360px, không cuộn ngang. Kiểm tra mobile trước desktop.
- Hiệu ứng: tái sử dụng hệ `data-reveal`, `.deco-float`, `.lightbox-fade`, `.glass-panel` có sẵn trong `app/globals.css`; mọi animation mới phải có nhánh `prefers-reduced-motion`.

## 4. Nội dung & ngôn ngữ

- Toàn bộ chữ hiển thị là **tiếng Việt có dấu**, đúng chính tả; `<html lang="vi">`.
- Giọng văn gần gũi, nữ tính, hướng tới nữ 18–35 tuổi / sinh viên.
- Mỗi trang có `metadata` riêng theo mẫu `<Trang> | La studio – chụp ảnh nàng thơ`.
- Ảnh luôn có `alt` tiếng Việt mô tả nội dung.

## 5. Kỹ thuật (Next.js 16.4 – đọc docs bundled)

- Trước khi dùng API Next.js nào, đọc hướng dẫn tương ứng trong `node_modules/next/dist/docs/` (xem khối ở đầu file). Lưu ý `cacheComponents` đang bật: dữ liệu động / runtime API (cookies, headers, searchParams) phải nằm trong `<Suspense>` hoặc dùng `'use cache'` đúng cách (`01-app/01-getting-started/08-caching.md`).
- Mặc định là **Server Component**; chỉ thêm `'use client'` cho component thật sự cần state/sự kiện/browser API, và đẩy ranh giới client xuống càng thấp càng tốt (không đặt `'use client'` ở `page.tsx` nếu không cần).
- Form & ghi dữ liệu dùng **Server Actions** (`01-app/02-guides/forms.md`): validate lại ở server, action admin phải kiểm tra đăng nhập bên trong action.
- Đặt file đúng cấu trúc mục 7.3 của tài liệu: dữ liệu tĩnh ở `lib/data/`, logic đặt lịch ở `lib/bookings/`, component dùng chung ở `components/`, ảnh ở `public/images/<nhóm>/`.
- Import bằng alias `@/…`. TypeScript strict, không dùng `any`, khai báo type cho dữ liệu (`Concept`, `Package`, `Booking`…).
- Ảnh dùng `next/image`; link nội bộ dùng `next/link`. Next 16 đã **bỏ prop `priority`** → ảnh quan trọng (hero) dùng `loading="eager"` + `fetchPriority="high"` (hoặc `preload`).
- Server Component không dùng `new Date()`/`Math.random()` khi render (cacheComponents sẽ báo lỗi prerender) – dùng giá trị cố định trong `lib/data/`.
- Bí mật (vd. `ADMIN_PASSWORD`) chỉ qua biến môi trường; không commit `.env*`.
- `/admin/**` không xuất hiện trong menu public, đặt `robots: { index: false }`.
- Theo phong cách code hiện có: component dạng `const X = () => {}` + `export default X`, comment ngắn bằng tiếng Việt khi cần giải thích.

## 6. Định nghĩa "Xong" (Definition of Done)

Một thay đổi chỉ được coi là xong khi:
1. Khớp mục tương ứng trong `docs/REQUIREMENTS.md` (và tài liệu đã được cập nhật nếu phạm vi thay đổi).
2. `npm run lint` và `npm run build` pass không lỗi.
3. Đã xem thử trên kích thước mobile và desktop; không lỗi console, không cuộn ngang.
4. Không còn màu/chữ/ảnh của template cũ (homestay, `#01796F`, "Booking Homestay") trong phần đã chạm tới.
5. Placeholder được đánh dấu rõ ràng.

## 7. Bàn giao demo

Khi demo hoàn tất: deploy → điền vào phiếu 3 ô vàng (Dev phụ trách, Trạng thái demo, Link demo) → chọn trạng thái gửi sale **"Xong – chờ sale gửi"** (mục 1 tài liệu). Ghi link demo vào mục 10 "Nhật ký thay đổi".
