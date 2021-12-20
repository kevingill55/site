import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Design, Experience, Coffee, About, Playground } from './Screens';
import Navigation from './Navigation';

const Router = () => {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/coffee' element={<Coffee />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/playground' element={<Playground />} />
          <Route path='/design' element={<Design />} />
        </Routes>
        <Navigation />
      </BrowserRouter>
    </div>
  );
};

export default Router;
