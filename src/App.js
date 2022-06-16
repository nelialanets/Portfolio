import React from 'react';
import './index.css';
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import NavBar from './components/Navbar/NavBar';
import Resume from './pages/Resume/Resume';
import Contact from './pages/ContactPage/Contact';
import Projects from './pages/ProjectPage/Projects';
import HomeComponent from './components/Home/HomeComponent';
import Footer from './components/Footer/Footer';

function App() {
  return (
    < div className='App-main'>
<NavBar />
     <Routes>
       <Route path='/' element={<Layout />}></Route>
    <Route path='/resume' element={<Resume />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/projects' element={<Projects />} />
  </Routes>
 <Footer />
    </div>
  );
}

export default App;
