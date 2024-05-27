import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/MainPage';


function App() {
  return (
      <BrowserRouter>
      
             <Routes>
             <Route path='/' element={<Main/>}/> 

            </Routes>
      
       </BrowserRouter>
  );
}

export default App;
