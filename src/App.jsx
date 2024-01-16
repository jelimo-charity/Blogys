import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/blogs" element= {<Blogs />} />
        <Route path="/contact" element= { <Contact />} />
      </Routes>
      </BrowserRouter>

      
      
    </div>
  )
}

export default App
