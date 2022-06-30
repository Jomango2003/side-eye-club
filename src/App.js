import './App.css';
import { Link, Route, Routes } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import EnterancePage from './components/EnterancePage';
import Main from './components/Main';
import Gallery from './components/Gallery';
import Wallet from './components/Wallet';



function App() {
  return (
    <div className='app'>
       <div className='header'> 
        <Header />
       </div>
       <div className='main'> 
        <div className='routes'> 
          <Routes>
            <Route path = '/' element ={<EnterancePage/>}/>
            <Route path = '/home' element ={<Main/>}/>
            <Route path = '/buy' element ={<Main/>}/>
            <Route path = '/gallery' element ={<Gallery/>}/>
            <Route path = '/wallet' element ={<Wallet/>}/>
          </Routes>
        </div>
       </div>
       <div className='footer'>
        <Footer />
       </div>

    </div>
  ) 
}

export default App;
