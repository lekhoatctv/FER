# 🔧 Hướng Dẫn Setup MockAPI - Tiếng Việt

## Bước 1: Tạo Resource "Orchids" trên MockAPI

### Cách làm:

1. **Vào trang MockAPI của bạn:**
   - Link: https://mockapi.io/projects/69039d30d0f10a340b2518ee

2. **Tạo Resource mới:**
   - Click nút **"New Resource"** (màu xanh)
   - Hoặc click **"+ Add New Resource"**

3. **Đặt tên Resource:**
   - Trong ô "Resource name", gõ: **Orchids**
   - ⚠️ **CHÚ Ý:** Phải viết đúng chữ hoa "O" - **Orchids** (không phải orchids)

4. **Thêm các Fields (Trường dữ liệu):**

Nhấn **"Add field"** và thêm từng trường sau:

| Field Name | Type | Default Value |
|------------|------|---------------|
| `name` | string | "Orchid Name" |
| `origin` | string | "Vietnam" |
| `color` | string | "Pink" |
| `rating` | number | 4.5 |
| `category` | string | "Phalaenopsis" |
| `isSpecial` | boolean | false |
| `isNatural` | boolean | true |
| `image` | string | "https://via.placeholder.com/200" |

5. **Lưu Resource:**
   - Click nút **"Create"** hoặc **"Save"**

## Bước 2: Verify API Endpoint

Sau khi tạo xong, bạn sẽ có endpoint:
```
https://69039d30d0f10a340b2518ee.mockapi.io/Orchids
```

## Bước 3: Test API

### Cách 1: Test bằng Browser
Mở link sau trong trình duyệt:
```
https://69039d30d0f10a340b2518ee.mockapi.io/Orchids
```
➡️ Nếu thấy `[]` (mảng rỗng) = Thành công! API đang hoạt động.

### Cách 2: Test trong App
1. Chạy app: `npm run dev`
2. Vào: `http://localhost:5173/test-api`
3. Click nút **"Test Connection"**
4. Nếu thấy ✅ SUCCESS = Kết nối thành công!

## Bước 4: Thêm Dữ Liệu Mẫu

### Cách 1: Dùng MockAPI Dashboard
1. Vào MockAPI dashboard
2. Click resource **"Orchids"**
3. Click **"Generate Data"** 
4. Chọn số lượng (ví dụ: 10 records)
5. Click **"Generate"**

### Cách 2: Dùng Test API trong App
1. Vào `http://localhost:5173/test-api`
2. Click **"Add Sample Data"**
3. Lặp lại để thêm nhiều hoa lan

### Cách 3: Dùng DataSeeder
1. Vào `http://localhost:5173/seeder`
2. Click **"Test Connection"**
3. Click **"Seed Data"**

## ❗ Troubleshooting (Giải quyết lỗi)

### Lỗi 404 - Not Found
**Nguyên nhân:** Resource "Orchids" chưa được tạo trên MockAPI

**Giải pháp:**
- Vào MockAPI dashboard
- Kiểm tra xem có resource tên **"Orchids"** không
- Nếu chưa có, tạo theo Bước 1 ở trên

### Lỗi CORS
**Nguyên nhân:** MockAPI chặn request từ localhost

**Giải pháp:**
- MockAPI thường cho phép CORS sẵn, không cần config
- Nếu vẫn lỗi, thử tắt extension chặn quảng cáo

### Lỗi Network Error
**Nguyên nhân:** Không có internet hoặc API URL sai

**Giải pháp:**
- Kiểm tra kết nối internet
- Kiểm tra API URL có đúng không:
  ```
  https://69039d30d0f10a340b2518ee.mockapi.io/Orchids
  ```
- Chữ "O" trong "Orchids" phải viết hoa

## ✅ Checklist Hoàn Thành

- [ ] Đã tạo resource "Orchids" trên MockAPI
- [ ] Đã thêm đủ 8 fields (name, origin, color, rating, category, isSpecial, isNatural, image)
- [ ] Test API trong browser thấy `[]` hoặc có data
- [ ] Test trong app tại `/test-api` thấy ✅ SUCCESS
- [ ] Đã thêm ít nhất 5-10 orchids mẫu
- [ ] Dashboard hiển thị được danh sách orchids
- [ ] CRUD operations hoạt động (Add, Edit, Delete)

## 📞 Cần Trợ Giúp?

Nếu vẫn gặp lỗi, chụp màn hình và gửi cho mình:
1. Trang MockAPI dashboard (cho thấy resource "Orchids")
2. Console log trong browser (F12 → Console)
3. Màn hình `/test-api` khi test

---

**Chúc bạn thành công! 🌺**
