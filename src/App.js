import React, { useEffect } from 'react'
import Game from './components/Game'
import './App.css'
import Header from './components/Header'
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Game2 from './pages/Game2';
import Rules from './pages/Rules';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';
import Footer from './components/Footer';
export default function App() {
  
  useEffect(()=>{
    toast.info('ようこそゲストさん！', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  },[])

  return (
    <div className='container mainapp'>
    
        <BrowserRouter>
        <Header />
            <Routes>
              <Route exact path="/" element={<Game />} />
              <Route path="/game" element={<Game2 />} />
              <Route path="/rules" element={<Rules />} />
            </Routes>
        </BrowserRouter>
          <Footer/>
        <ToastContainer />
    </div>
  )
}
