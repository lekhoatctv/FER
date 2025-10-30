# Lab 6 - Fetch API Setup Guide

## 🚀 MockAPI Setup

### Step 1: Create MockAPI Project
1. Go to [mockapi.io](https://mockapi.io/)
2. Sign up or login
3. Create a new project called "Orchids Management"

### Step 2: Create Orchids Endpoint
1. Click "Add New Resource"
2. Name it: `orchids`
3. Add the following fields:
   - `name` (string)
   - `image` (string)
   - `origin` (string)
   - `color` (string)
   - `rating` (number)
   - `isSpecial` (boolean)
   - `isNatural` (boolean)
   - `category` (string)

### Step 3: Update API URL
Open `src/redux/orchidsSlice.js` and update the API_URL with your MockAPI endpoint:
```javascript
const API_URL = 'https://YOUR_PROJECT_ID.mockapi.io/orchids';
```

## � Firebase Authentication Setup

### Step 1: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Name: `orchid-management`
4. Disable Google Analytics
5. Click "Create project"

### Step 2: Add Web App & Get Config
1. Click **</>** icon (Web)
2. App nickname: `Orchid App`
3. Don't check "Firebase Hosting"
4. Click "Register app"
5. **Copy the firebaseConfig** object

### Step 3: Enable Google Sign-in
1. Go to **Authentication** → **Get started**
2. Click **Sign-in method** tab
3. Click **Google** → Enable → Save

### Step 4: Update Firebase Config
Open `src/config/firebase.js` and replace firebaseConfig with your own:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  // ... paste your config here
};
```

**📖 Detailed Guide:** See `FIREBASE_QUICK_SETUP.md`

**✅ No credit card required!**

## 📦 Features Implemented

✅ **Redux Toolkit** - State management
✅ **Formik & Yup** - Form handling and validation
✅ **Axios** - HTTP requests
✅ **Firebase Authentication** - Google Sign-in (No credit card needed!)
✅ **CRUD Operations** - Create, Read, Update, Delete

## 🎯 Routes

- `/` - Home/Gallery
- `/dashboard` - CRUD Management (requires login)
- `/login` - Google Login
- `/add` - Add new orchid (requires login)
- `/edit/:id` - Edit orchid (requires login)
- `/detail/:id` - View orchid details
- `/natural` - Natural orchids page
- `/about` - About page
- `/contact` - Contact page
- `/intro` - Introduction page (Lab 5)

## 🏃‍♂️ How to Run

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open browser: `http://localhost:5173`

## 🔑 Usage

1. Go to `/login` and sign in with Google
2. After login, go to `/dashboard` to manage orchids
3. You can Add, Edit, and Delete orchids
4. All data is stored in MockAPI
