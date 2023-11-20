import { Route, Routes } from 'react-router'
import NavBar from './components/NavBar'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Reservation from './pages/Reservation'

export default function App() {
  return (
    <body>

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>

    </body>
  );
}
