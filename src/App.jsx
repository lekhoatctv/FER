import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Orchids from './components/Orchids'
import DetailPage from './components/DetailPage'
import Contact from './components/Contact'
import Natural from './components/Natural'
import About from './components/About'
import Intro from './components/Intro'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import OrchidForm from './components/OrchidForm'
import DataSeeder from './components/DataSeeder'
import Lab6Guide from './components/Lab6Guide'
import TestAPI from './components/TestAPI'
import { ThemeProvider } from './contexts/ThemeContext'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Orchids />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/natural" element={<Natural />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add" element={<OrchidForm />} />
            <Route path="/edit/:id" element={<OrchidForm />} />
            <Route path="/seeder" element={<DataSeeder />} />
            <Route path="/lab6" element={<Lab6Guide />} />
            <Route path="/test-api" element={<TestAPI />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
