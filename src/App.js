import React from 'react';
import './index.css';
import './App.scss'
import { Routes, Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import NavBar from './components/Navbar/NavBar';
import Resume from './pages/Resume/Resume';
import HomeComponent from './components/Home/HomeComponent';
import PortfolioItems from './components/Portfolio/PortfolioItems';
import { Link } from 'react-router-dom'

function App() {
  return (
    < div className='App-main'>
<NavBar />
     <Routes>
      <Route path='/' element={<HomeComponent />}></Route> 
    <Route path='/resume' element={<Resume />} />
    <Route path='/portfolio' element={<PortfolioItems />} />
  </Routes>
  <div>
  </div>
    </div>
  );
}

export default App;
