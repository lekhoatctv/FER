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

## 🔐 Google OAuth Setup

### Step 1: Create Google OAuth Client ID
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable "Google+ API"
4. Go to "Credentials" → "Create Credentials" → "OAuth client ID"
5. Select "Web application"
6. Add authorized JavaScript origins: `http://localhost:5173`
7. Copy the Client ID

### Step 2: Update Google Client ID
Open `src/main.jsx` and replace:
```javascript
const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID_HERE'
```

## 📦 Features Implemented

✅ **Redux Toolkit** - State management
✅ **Formik & Yup** - Form handling and validation
✅ **Axios** - HTTP requests
✅ **Google OAuth** - Authentication
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
