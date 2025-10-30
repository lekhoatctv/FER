# ✅ CHECKLIST LAB 6 - HOÀN CHỈNH

## 📊 TỔNG QUAN

Lab 6 yêu cầu implement các chức năng sau:
- ✅ Redux Toolkit (State Management)
- ✅ MockAPI Integration (Backend API)
- ✅ Formik & Yup (Form Validation)
- ✅ CRUD Operations (Create, Read, Update, Delete)
- ⚠️ Google OAuth (Cần xử lý)

---

## 1️⃣ REDUX TOOLKIT ✅

### Files đã tạo:
- ✅ `src/redux/store.js` - Redux store
- ✅ `src/redux/orchidsSlice.js` - Quản lý CRUD operations
- ✅ `src/redux/authSlice.js` - Quản lý authentication

### Functions trong orchidsSlice:
- ✅ `fetchOrchids()` - GET tất cả orchids
- ✅ `addOrchid(data)` - POST orchid mới
- ✅ `updateOrchid({ id, data })` - PUT cập nhật orchid
- ✅ `deleteOrchid(id)` - DELETE xóa orchid

### API URL hiện tại:
```javascript
https://69039d30d0f10a340b2518ee.mockapi.io/Orchids
```

---

## 2️⃣ MOCKAPI INTEGRATION ✅

### Đã setup:
- ✅ Account MockAPI
- ✅ Project: "Orchids Management"
- ✅ Project ID: `69039d30d0f10a340b2518ee`

### CẦN LÀM THÊM:
⚠️ **Tạo Resource "Orchids" với các fields:**

| Field | Type | Mô tả |
|-------|------|-------|
| `name` | string | Tên hoa lan |
| `origin` | string | Xuất xứ (Vietnam, Thailand...) |
| `color` | string | Màu sắc (Pink, White...) |
| `rating` | number | Điểm đánh giá (0-5) |
| `category` | string | Phân loại (Phalaenopsis...) |
| `isSpecial` | boolean | Có đặc biệt không |
| `isNatural` | boolean | Tự nhiên hay lai |
| `image` | string | Link ảnh |

**Cách tạo:** Xem file `MOCKAPI_SETUP.md`

---

## 3️⃣ FORMIK & YUP ✅

### File: `src/components/OrchidForm.jsx`

#### Validation Rules:
```javascript
- name: Bắt buộc, tối thiểu 3 ký tự
- origin: Bắt buộc, tối thiểu 3 ký tự
- color: Bắt buộc
- category: Bắt buộc
- rating: Bắt buộc, số từ 0-5
- image: Bắt buộc, phải là URL hợp lệ
```

#### Chức năng:
- ✅ Add mode: Thêm orchid mới
- ✅ Edit mode: Sửa orchid có sẵn
- ✅ Realtime validation (hiển thị lỗi ngay khi nhập)
- ✅ Image preview (xem trước ảnh khi nhập URL)
- ✅ Checkboxes: isSpecial, isNatural

---

## 4️⃣ CRUD OPERATIONS ✅

### File: `src/components/Dashboard.jsx`

#### CREATE (Thêm mới):
- ✅ Nút "Add New Orchid"
- ✅ Navigate sang `/add`
- ✅ Form validation với Yup
- ✅ POST data lên MockAPI
- ✅ Redirect về Dashboard sau khi thành công

#### READ (Xem danh sách):
- ✅ Hiển thị table với tất cả orchids
- ✅ Các cột: Image, Name, Origin, Color, Rating, Category, Actions
- ✅ Search box (tìm kiếm theo tên)
- ✅ Loading state khi fetch data

#### UPDATE (Sửa):
- ✅ Nút "Edit" ở mỗi row
- ✅ Navigate sang `/edit/:id`
- ✅ Form pre-filled với data cũ
- ✅ PUT data lên MockAPI
- ✅ Redirect về Dashboard sau khi thành công

#### DELETE (Xóa):
- ✅ Nút "Delete" ở mỗi row
- ✅ Confirm dialog trước khi xóa
- ✅ DELETE request lên MockAPI
- ✅ Update UI sau khi xóa

---

## 5️⃣ ROUTES ✅

### Tất cả routes đã setup:

| Route | Component | Mô tả |
|-------|-----------|-------|
| `/` | Orchids | Trang chủ/Gallery |
| `/dashboard` | Dashboard | Quản lý CRUD |
| `/login` | Login | Đăng nhập |
| `/add` | OrchidForm | Thêm orchid mới |
| `/edit/:id` | OrchidForm | Sửa orchid |
| `/detail/:id` | DetailPage | Chi tiết orchid |
| `/natural` | Natural | Trang natural orchids |
| `/about` | About | Giới thiệu |
| `/contact` | Contact | Liên hệ |
| `/intro` | Intro | Lab 5 intro page |
| `/seeder` | DataSeeder | Tool seed data |
| `/lab6` | Lab6Guide | Hướng dẫn Lab 6 |
| `/test-api` | TestAPI | **MỚI** - Test MockAPI |

---

## 6️⃣ GOOGLE OAUTH ⚠️

### Vấn đề:
- ❌ Cần verify bằng thẻ visa/mastercard
- ❌ Bạn không có visa

### Giải pháp (Chọn 1 trong 3):

#### Option 1: Mock Login (Khuyên dùng) ⭐
**Mô tả:** Login giả, không cần Google thật

**Ưu điểm:**
- ✅ Đơn giản, nhanh
- ✅ Vẫn có authentication flow
- ✅ Không cần visa

**Triển khai:**
```javascript
// Thay Google OAuth bằng nút Login đơn giản
// Click = tự động login với user giả
```

#### Option 2: Username/Password Login
**Mô tả:** Form đăng nhập thủ công

**Ưu điểm:**
- ✅ Có form validation
- ✅ Giống login thật
- ✅ Lưu vào localStorage

#### Option 3: Giữ nguyên + Document
**Mô tả:** Không đổi code, chỉ giải thích

**Ưu điểm:**
- ✅ Code đầy đủ
- ✅ Thầy thấy biết implement

**Nhược điểm:**
- ❌ Không test được

---

## 🧪 TESTING

### Tool đã tạo:

#### 1. Test API (`/test-api`) **MỚI**
- ✅ Test connection với MockAPI
- ✅ Add sample data
- ✅ View response
- ✅ Debug lỗi

#### 2. Data Seeder (`/seeder`)
- ✅ Seed 20 orchids cùng lúc
- ✅ Clear all data
- ✅ View logs

### Cách test:

```bash
# 1. Chạy app
npm run dev

# 2. Test MockAPI connection
Vào: http://localhost:5173/test-api
Click: "Test Connection"

# 3. Add sample data
Click: "Add Sample Data"

# 4. Vào Dashboard
Vào: http://localhost:5173/dashboard

# 5. Test CRUD
- Add: Click "Add New Orchid"
- Edit: Click "Edit" ở một row
- Delete: Click "Delete" ở một row
```

---

## 📝 CÁC BƯỚC CẦN LÀM

### Bước 1: Setup MockAPI Resource ⚠️
```
1. Vào MockAPI dashboard
2. Tạo resource "Orchids" (chữ O viết hoa)
3. Thêm 8 fields (xem phần 2 ở trên)
4. Save
```
👉 Chi tiết: Xem file `MOCKAPI_SETUP.md`

### Bước 2: Test API Connection
```
1. Vào: http://localhost:5173/test-api
2. Click: "Test Connection"
3. Nếu ✅ SUCCESS = OK
4. Nếu ❌ ERROR = Xem lại resource name
```

### Bước 3: Add Sample Data
```
Chọn 1 trong 3 cách:
1. MockAPI Dashboard → Generate Data
2. App Test API → Add Sample Data
3. App Seeder → Seed Data
```

### Bước 4: Test CRUD Operations
```
1. Vào Dashboard
2. Test Add → điền form → Save
3. Test Edit → click Edit → sửa → Save
4. Test Delete → click Delete → Confirm
5. Test Search → gõ tên vào search box
```

### Bước 5: Xử lý Google OAuth
```
Chọn Option 1, 2 hoặc 3 (xem phần 6)
Mình khuyên Option 1 - Mock Login
```

---

## ✅ CHECKLIST HOÀN THÀNH

### Redux Toolkit:
- [x] store.js created
- [x] orchidsSlice.js with CRUD thunks
- [x] authSlice.js with login/logout

### MockAPI:
- [x] Account created
- [x] Project created
- [ ] ⚠️ Resource "Orchids" created (CẦN LÀM)
- [ ] ⚠️ Sample data added (CẦN LÀM)

### Formik & Yup:
- [x] OrchidForm.jsx
- [x] Validation schema
- [x] Error messages
- [x] Add mode
- [x] Edit mode

### CRUD:
- [x] Dashboard component
- [x] Table display
- [x] Add button
- [x] Edit button
- [x] Delete button with confirm
- [x] Search functionality
- [x] Loading states

### Routes:
- [x] All routes configured
- [x] Navigation working
- [x] Protected routes (require login)

### Testing Tools:
- [x] TestAPI component
- [x] DataSeeder component
- [x] Lab6Guide component

### Documentation:
- [x] MOCKAPI_SETUP.md
- [x] LAB6_COMPLETE_CHECKLIST.md
- [x] README.md

### Authentication:
- [ ] ⚠️ Chọn giải pháp (Option 1, 2, hoặc 3)
- [ ] ⚠️ Implement giải pháp đã chọn

---

## 🎯 KẾ HOẠCH TIẾP THEO

### Ngay bây giờ:
1. **Tạo Resource "Orchids" trên MockAPI** (5 phút)
   - Xem hướng dẫn: `MOCKAPI_SETUP.md`

2. **Test API Connection** (2 phút)
   - Vào `/test-api`
   - Click "Test Connection"

3. **Add Sample Data** (3 phút)
   - Vào `/seeder`
   - Click "Seed Data"

4. **Test CRUD** (10 phút)
   - Test Add
   - Test Edit
   - Test Delete

### Sau đó:
5. **Chọn giải pháp OAuth** (quyết định Option 1, 2, hay 3)
6. **Implement giải pháp** (5-15 phút tùy option)
7. **Test tổng thể** (5 phút)
8. **Push lên GitHub** ✅

---

## 🆘 CẦN TRỢ GIÚP?

### Bạn bị lỗi gì, hãy nói mình:
1. Lỗi 404 → Resource chưa tạo
2. Lỗi CORS → Tắt ad blocker
3. Lỗi Network → Check internet + API URL
4. Form không save → Check validation

### Cách report lỗi:
1. Chụp màn hình console (F12)
2. Chụp màn hình lỗi
3. Nói mình đang làm bước nào
4. Copy/paste error message

---

**BẠN MUỐN LÀM GÌ TIẾP THEO?**

A. Mình hướng dẫn setup MockAPI Resource (5 phút)
B. Mình làm Mock Login cho bạn (5 phút)
C. Mình làm cả 2 luôn (10 phút)

**Chọn A, B, hay C?** 😊
