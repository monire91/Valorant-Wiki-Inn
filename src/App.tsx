import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import SingleAgent from './pages/SingleAgent';
import WeaponsPage from './pages/WeaponsPage';
import SingleWeapon from "./pages/SingleWeapon"


const App = () => {
  return (
    <div className='App '>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='weapons' element={<WeaponsPage />} />
        <Route path='about' element={<About />} />
        <Route path=':agentId' element={<SingleAgent />} />
        <Route path=':weaponId' element={<SingleWeapon />} />
      </Routes>
      <Footer />
    </div>
  );

};

export default App;
