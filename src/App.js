
import './App.css';
import Footer from './componets/Footer/Footer';
import Header from './componets/Header/Header';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import Home from './Pages/Home/Home';



function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/landing-page' element={<LandingPage />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
