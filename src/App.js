
import './App.css';
import Footer from './componets/Footer/Footer';
import Header from './componets/Header/Header';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import Home from './Pages/Home/Home';
import Page1 from './Pages/Page1/Page1';
import Page2 from './Pages/Page2/Page2';
import Page3 from './Pages/Page3/Page3';
import Page4 from './Pages/Page4/Page4';
import Page5 from './Pages/Page5/Page5';
import Page6 from './Pages/Page6/Page6';
import Page7 from './Pages/Page7/Page7';
import Page8 from './Pages/Page8/Page8';
import Page9 from './Pages/Page9/Page9';
import Page10 from './Pages/Page10/Page10';
import Page11 from './Pages/Page11/Page11';
import Page12 from './Pages/Page12/Page12';



function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/landing-page' element={<LandingPage />} />
        <Route path='/landing-page' element={<LandingPage />} />
        <Route path='/page-1' element={<Page1 />} />
        <Route path='/page-2' element={<Page2 />} />
        <Route path='/page-3' element={<Page3 />} />
        <Route path='/page-4' element={<Page4 />} />
        <Route path='/page-5' element={<Page5 />} />
        <Route path='/page-6' element={<Page6 />} />
        <Route path='/page-7' element={<Page7 />} />
        <Route path='/page-8' element={<Page8 />} />
        <Route path='/page-9' element={<Page9 />} />
        <Route path='/page-10' element={<Page10 />} />
        <Route path='/page-11' element={<Page11 />} />
        <Route path='/page-12' element={<Page12 />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
