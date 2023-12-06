import './App.css';
import "react-multi-carousel/lib/styles.css";
import './components/socialIcon/socialIcons.css';
import { BrowserRouter as Router, Route, Routes,   } from 'react-router-dom';
import Home from './components/pages/home/home';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import About from './components/pages/about/About';
import Services from './components/pages/services/Services';
import Contact from './components/pages/contact/Contact';
import Login from './components/pages/login/Login';
import Booking from './components/pages/booking/Booking';

function App() {
  return (
    <div>
      
      <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/booking' element={<Booking />} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
