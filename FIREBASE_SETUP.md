# 🔥 Hướng Dẫn Setup Firebase Authentication - Tiếng Việt

## Bước 1: Tạo Firebase Project

1. **Vào Firebase Console:**
   - Link: https://console.firebase.google.com/
   - Đăng nhập bằng Gmail

2. **Tạo Project mới:**
   - Click **"Add project"** (hoặc "Thêm dự án")
   - Đặt tên: **Orchid Management**
   - Click **Continue** (Tiếp tục)
   
3. **Google Analytics:**
   - Tắt Google Analytics (không cần)
   - Click **Create project** (Tạo dự án)
   - Đợi 30 giây để Firebase tạo xong

4. **Nhấn Continue để vào Dashboard**

## Bước 2: Thêm Web App

1. **Trong Firebase Dashboard:**
   - Click icon **</>** (Web) ở giữa màn hình
   
2. **Đăng ký App:**
   - App nickname: **Orchid App**
   - ❌ KHÔNG tick "Firebase Hosting"
   - Click **Register app** (Đăng ký ứng dụng)

3. **Copy Firebase Config:**
   
   Bạn sẽ thấy đoạn code như này:
   ```javascript
   const firebaseConfig = {
     apiKey: "AIza...",
     authDomain: "orchid-management.firebaseapp.com",
     projectId: "orchid-management",
     storageBucket: "orchid-management.appspot.com",
     messagingSenderId: "123456789",
     appId: "1:123456789:web:abc123"
   };
   ```
   
   **📋 COPY TOÀN BỘ đoạn này** (mình sẽ dùng sau)

4. **Click Continue to console**

## Bước 3: Bật Google Authentication

1. **Vào mục Authentication:**
   - Bên trái sidebar, click **Authentication**
   - Click **Get started** (Bắt đầu)

2. **Chọn Sign-in method:**
   - Click tab **Sign-in method** (ở trên)
   - Click **Google** trong danh sách providers

3. **Enable Google:**
   - Bật công tắc **Enable** (Bật)
   - Project support email: Chọn email của bạn
   - Click **Save** (Lưu)

4. **✅ XONG!** Không cần setup gì thêm!

## Bước 4: Copy Config vào App

Quay lại app, mình sẽ tạo file config Firebase:

**File:** `src/config/firebase.js`

```javascript
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY_HERE",
  authDomain: "PASTE_YOUR_AUTH_DOMAIN_HERE",
  projectId: "PASTE_YOUR_PROJECT_ID_HERE",
  storageBucket: "PASTE_YOUR_STORAGE_BUCKET_HERE",
  messagingSenderId: "PASTE_YOUR_MESSAGING_SENDER_ID_HERE",
  appId: "PASTE_YOUR_APP_ID_HERE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
```

**⚠️ QUAN TRỌNG:** Thay thế các giá trị "PASTE_YOUR_..." bằng config bạn copy ở Bước 2.3

## Bước 5: Test

1. Chạy app: `npm run dev`
2. Vào `/login`
3. Click nút Login → Popup Google hiện ra
4. Chọn tài khoản → Đăng nhập thành công!

## ❓ FAQ - Câu hỏi thường gặp

### Q: Firebase có miễn phí không?
✅ **CÓ!** Firebase Auth hoàn toàn miễn phí, không giới hạn số lượng users.

### Q: Có cần thẻ visa không?
✅ **KHÔNG!** Firebase Auth không cần visa hay credit card.

### Q: Có cần verify project không?
✅ **KHÔNG!** Dùng được ngay, không cần verify.

### Q: Localhost có hoạt động không?
✅ **CÓ!** Firebase tự động cho phép localhost:5173

### Q: So với Google OAuth thì sao?
Firebase dễ hơn, nhanh hơn, không cần setup phức tạp.

## 🆘 Gặp lỗi?

### Lỗi: "Firebase not initialized"
- Kiểm tra file `firebase.js` đã import đúng chưa
- Kiểm tra firebaseConfig có đầy đủ 6 fields không

### Lỗi: "Auth domain not authorized"
- Vào Firebase Console
- Authentication → Settings → Authorized domains
- Thêm `localhost` nếu chưa có

### Lỗi: Popup bị block
- Tắt popup blocker trong browser
- Hoặc dùng Safari/Firefox

## ✅ Checklist

- [ ] Đã tạo Firebase project
- [ ] Đã thêm Web app
- [ ] Đã copy firebaseConfig
- [ ] Đã enable Google sign-in method
- [ ] Đã paste config vào file firebase.js
- [ ] Test login thành công

---

**Chúc bạn thành công! 🔥**
