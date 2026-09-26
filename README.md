# HCMC CultureHub - Báo Cáo Nghiên Cứu KHKT

Hệ thống slides báo cáo khoa học kỹ thuật chuyên nghiệp cho đề tài:
**Nghiên cứu xây dựng HCMC CultureHub - Hệ thống học liệu số thông minh tích hợp trí tuệ nhân tạo (AI) hỗ trợ học sinh THPT khám phá văn hóa TP.HCM**

---

## Hướng Dẫn Xuất Bản Lên GitHub Pages (Tránh Lỗi Trắng Trang 404)

Dự án đã được cấu hình tối ưu sẵn để xuất web lên GitHub Pages:
1. `vite.config.ts` đã được cấu hình `base: './'` (đảm bảo không bị lỗi đường dẫn tuyệt đối `/assets/...` khi đưa lên sub-path của GitHub Pages `https://<username>.github.io/<repo>/`).
2. Đã tạo file `.nojekyll` trong `public/` (tránh việc GitHub Pages bỏ qua các file tĩnh).
3. Đã tạo sẵn file GitHub Actions tự động tại `.github/workflows/deploy.yml`.

### Cách 1: Triển Khai Tự Động Qua GitHub Actions (Khuyên Dùng)
1. Đẩy code lên GitHub repository của bạn (`main` hoặc `master`).
2. Trên trang GitHub của repository:
   - Vào tab **Settings** -> mục **Pages** (cột bên trái).
   - Tại phần **Build and deployment** -> **Source**: Chọn **GitHub Actions**.
3. Mỗi khi bạn push code, GitHub Actions sẽ tự động cài đặt, chạy `npm run build` và xuất bản website của bạn lên `https://<username>.github.io/<repo>/` hoàn toàn tự động.

### Cách 2: Triển Khai Thủ Công Từ Thư Mục `dist`
1. Chạy lệnh:
   ```bash
   npm run build
   ```
2. Toàn bộ website tĩnh đã được sinh ra trong thư mục `dist/`.
3. Bạn có thể triển khai nội dung thư mục `dist/` lên nhánh `gh-pages` bằng package `gh-pages` hoặc cài đặt Source là nhánh `gh-pages`:
   ```bash
   git add dist -f
   git commit -m "Deploy dist to GitHub Pages"
   git subtree push --prefix dist origin gh-pages
   ```
   Sau đó trong GitHub **Settings -> Pages**: Chọn nhánh `gh-pages` và thư mục `/ (root)`.
