# 🎯 HƯỚNG DẪN SETUP FIREBASE - NHANH 5 PHÚT

## ⚡ Các Bước Cần Làm

### 1️⃣ Tạo Firebase Project (2 phút)

**Link:** https://console.firebase.google.com/

1. Click **"Add project"** (Thêm dự án)
2. Tên project: `orchid-management` 
3. Tắt Google Analytics
4. Click **Create project**

### 2️⃣ Thêm Web App (1 phút)

1. Click icon **</>** (Web)
2. App nickname: `Orchid App`
3. KHÔNG tick Firebase Hosting
4. Click **Register app**

### 3️⃣ Copy Firebase Config (30 giây)

Bạn sẽ thấy code như này:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "orchid-management-xxx.firebaseapp.com",
  projectId: "orchid-management-xxx",
  storageBucket: "orchid-management-xxx.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

**📋 COPY toàn bộ đoạn này!**

### 4️⃣ Paste vào App (30 giây)

Mở file: `src/config/firebase.js`

Thay thế `firebaseConfig` cũ bằng config bạn vừa copy:

```javascript
const firebaseConfig = {
  // PASTE CONFIG CỦA BẠN VÀO ĐÂY
};
```

### 5️⃣ Bật Google Sign-in (1 phút)

1. Vào **Authentication** (sidebar bên trái)
2. Click **Get started**
3. Tab **Sign-in method**
4. Click **Google**
5. Bật công tắc **Enable**
6. Chọn email support
7. Click **Save**

### 6️⃣ Test (30 giây)

```bash
# Chạy app
npm run dev

# Vào: http://localhost:5173/login
# Click "Sign in with Google"
# Popup Google hiện ra → Chọn tài khoản
# ✅ Đăng nhập thành công!
```

---

## ✅ CHECKLIST

- [ ] Đã tạo Firebase project
- [ ] Đã thêm Web app  
- [ ] Đã copy firebaseConfig
- [ ] Đã paste vào `src/config/firebase.js`
- [ ] Đã enable Google sign-in
- [ ] Test login thành công

---

## 🎉 XEM THÊM

Chi tiết đầy đủ: `FIREBASE_SETUP.md`

---

## 🆘 GẶP LỖI?

### Lỗi: "Firebase not initialized"
➡️ Kiểm tra đã paste firebaseConfig chưa

### Lỗi: "Invalid API key"  
➡️ Copy lại config từ Firebase Console

### Lỗi: Popup bị block
➡️ Cho phép popup trong browser

### Không thấy nút Login?
➡️ Clear cache: Ctrl + Shift + R

---

**Chúc bạn thành công! 🔥**
