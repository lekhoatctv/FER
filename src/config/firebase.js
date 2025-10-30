import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// ⚠️ QUAN TRỌNG: Thay config này bằng config của BẠN từ Firebase Console
// Xem hướng dẫn trong file: FIREBASE_SETUP.md

const firebaseConfig = {
    apiKey: "AIzaSyBvK1Z3p6Y2xK9yZ4wK5vK7uK8wK9xK0wK",
    authDomain: "orchid-management-demo.firebaseapp.com",
    projectId: "orchid-management-demo",
    storageBucket: "orchid-management-demo.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abc123def456"
};

// ⚠️ NẾU BẠN ĐÃ TẠO FIREBASE PROJECT:
// 1. Vào: https://console.firebase.google.com/
// 2. Chọn project của bạn
// 3. Vào Project Settings (bánh răng) → General
// 4. Scroll xuống "Your apps" → chọn Web app
// 5. Copy firebaseConfig và PASTE VÀO ĐÂY (thay thế config trên)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
