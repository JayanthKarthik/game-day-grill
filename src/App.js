import { Route, Routes } from 'react-router'
import { HashRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Reservation from './pages/Reservation'

export default function App() {
  return (
    <HashRouter>
      <NavBar />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        draggable
        pauseOnHover
        theme="light"
      />
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
