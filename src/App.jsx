import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Orchids from './components/Orchids'
import DetailPage from './components/DetailPage'
import Contact from './components/Contact'
import Natural from './components/Natural'
import About from './components/About'
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
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
