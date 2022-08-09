import React from 'react'
import Game from './components/Game'
import './App.css'
import Header from './components/Header'
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Game2 from './pages/Game2';
import Rules from './pages/Rules';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
export default function App() {
  
  return (
    <div className='container'>
    
        <BrowserRouter>
        <Header />
            <Routes>
              <Route exact path="/" element={<Game />} />
              <Route path="/game" element={<Game2 />} />
              <Route path="/rules" element={<Rules />} />
            </Routes>
        </BrowserRouter>
        
        <ToastContainer />
    </div>
  )
}
