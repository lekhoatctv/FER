# 🌺 Orchid Management App

A comprehensive React application for managing and showcasing orchid species. Built with modern web technologies including React, Redux Toolkit, and SCSS.

## 📚 Labs Completed

### Lab 1-4: Foundation & Features
- ✅ React Components
- ✅ React Hooks (useState, useEffect, custom hooks)
- ✅ React Router for navigation
- ✅ React Bootstrap UI integration
- ✅ Theme Context (Dark/Light mode)

### Lab 5: CSS Preprocessors (SCSS)
- ✅ SCSS variables and mixins
- ✅ Nested CSS structure
- ✅ Responsive design with media queries
- ✅ Introduction page with attractive UI

### Lab 6: Fetch API & State Management
- ✅ Redux Toolkit for state management
- ✅ MockAPI integration for REST API
- ✅ Formik & Yup for form validation
- ✅ Google OAuth authentication
- ✅ Full CRUD operations (Create, Read, Update, Delete)
- ✅ Axios for HTTP requests
- ✅ Data Seeder tool

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

## 🎯 Features

### 🔐 Authentication
- Google OAuth login
- Protected routes for CRUD operations
- User session management

### 📊 Dashboard
- View all orchids in a table
- Search functionality
- Add, Edit, Delete operations
- Real-time updates from API

### 📝 Form Management
- Formik for form handling
- Yup schema validation
- Image preview
- Error messages
- Field validation (required, min/max, URL format)

### 🎨 UI/UX
- Responsive design
- Dark/Light theme toggle
- Smooth transitions
- Loading states
- Error handling
- Bootstrap components

## 📁 Project Structure

```
src/
├── components/         # React components
│   ├── Orchids.jsx    # Main gallery
│   ├── Dashboard.jsx  # CRUD management
│   ├── OrchidForm.jsx # Add/Edit form
│   ├── Login.jsx      # Google OAuth
│   ├── DataSeeder.jsx # API data seeder
│   └── ...
├── redux/             # Redux store
│   ├── store.js       # Redux store config
│   ├── orchidsSlice.js # Orchids state
│   └── authSlice.js   # Auth state
├── scss/              # SCSS files
│   ├── _variables.scss
│   ├── _mixins.scss
│   └── Intro.scss
├── contexts/          # React contexts
│   └── ThemeContext.jsx
├── hooks/             # Custom hooks
│   └── useModal.js
└── data/              # Static data
    └── ListOfOrchids.js
```

## 🛠️ Tech Stack

- **React 18** - Frontend framework
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **Axios** - HTTP client
- **Formik** - Form management
- **Yup** - Schema validation
- **Google OAuth** - Authentication
- **MockAPI** - Backend API
- **SCSS** - CSS preprocessor
- **Bootstrap** - UI components
- **Vite** - Build tool

## 🌐 Pages & Routes

| Route | Description | Auth Required |
|-------|-------------|---------------|
| `/` | Home - Orchid Gallery | No |
| `/lab6` | Lab 6 Guide & Documentation | No |
| `/seeder` | Data Seeder Tool | No |
| `/login` | Google OAuth Login | No |
| `/dashboard` | CRUD Management Dashboard | Yes |
| `/add` | Add New Orchid | Yes |
| `/edit/:id` | Edit Orchid | Yes |
| `/detail/:id` | View Orchid Details | No |
| `/natural` | Natural Orchids Page | No |
| `/about` | About Page | No |
| `/contact` | Contact Page | No |
| `/intro` | Introduction (Lab 5) | No |

## 🔧 Configuration

### Environment Variables
Create a `.env` file:
```env
VITE_API_URL=your_mockapi_url
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

### MockAPI Setup
1. Visit [mockapi.io](https://mockapi.io/)
2. Create a project
3. Create an endpoint `/orchids`
4. Use the Data Seeder tool to populate data

### Google OAuth Setup
1. Visit [Google Cloud Console](https://console.cloud.google.com/)
2. Create OAuth 2.0 credentials
3. Add authorized origins: `http://localhost:5173`
4. Copy Client ID to `.env`

## 📖 Usage Guide

### 1. Seed Data
Visit `/seeder` to initialize the database with sample orchid data.

### 2. Login
Go to `/login` and sign in with Google to access CRUD features.

### 3. Manage Orchids
Use `/dashboard` to:
- View all orchids
- Search orchids
- Add new orchids
- Edit existing orchids
- Delete orchids

### 4. View Details
Browse the gallery at `/` and click on any orchid to see details.

## 🎓 Learning Outcomes

Through this project, you will learn:
- React component architecture
- State management with Redux
- Form handling and validation
- REST API integration
- Authentication flows
- SCSS preprocessing
- Responsive design
- Modern React patterns

## 📝 Assignment Requirements Met

### Lab 6 Requirements
✅ RESTful API server in mockapi.io  
✅ FETCH/AXIOS for API communication  
✅ Redux Toolkit configuration  
✅ Formik & Yup validation  
✅ Google OAuth login  
✅ POST, PUT, DELETE operations  
✅ Attractive UI design  

### Lab 5 Requirements
✅ SCSS folder structure in src/scss  
✅ SCSS features (variables, mixins, nesting)  
✅ Automatic SCSS to CSS conversion  
✅ Introduction page with attractive UI  

## 🤝 Contributing

This is a learning project for FER course. Feel free to use it as a reference.

## 📄 License

This project is created for educational purposes.

## 👨‍💻 Author

Created as part of FER course assignments.

---

🌺 Happy Coding!
