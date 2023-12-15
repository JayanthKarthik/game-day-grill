import { initializeApp } from "firebase/app"
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

const firebaseConfig = {
  apiKey: "AIzaSyBxagc3Ny-54WgfvMqZfKC19_KRGK64hXY",
  authDomain: "gamedaygrill-bb3f1.firebaseapp.com",
  projectId: "gamedaygrill-bb3f1",
  storageBucket: "gamedaygrill-bb3f1.appspot.com",
  messagingSenderId: "896745156124",
  appId: "1:896745156124:web:0cd5e0e0ad83c46a8b79d9"
};

initializeApp(firebaseConfig)

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
