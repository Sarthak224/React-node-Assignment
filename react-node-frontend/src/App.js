import logo from './logo.svg';
import './App.css';
import Loader from './components/Loader';
import { useMemo, useState } from 'react';
import RouteList from './route'
import { BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="App">
    <RouteList />
   {/* <button onClick={()=>setRtx(!rtx)}>Reset pAGE</button> */}

    </div>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
