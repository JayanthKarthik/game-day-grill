import { Route, Routes } from 'react-router'
import { HashRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Reservation from './pages/Reservation'
import About from './pages/About'


export default function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
