import React from 'react';
import './App.scss';
import Header from './components/Header/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
      <BrowserRouter>
      
             <Routes>
                  <Route path='/' element={<Header/>}/> 

            </Routes>
      
       </BrowserRouter>
  );
}

export default App;
