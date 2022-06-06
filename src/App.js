import React from 'react';

import { Routes, Route } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/property/:id' element={<PropertyDetails />} />
    </Routes>
  );
};

export default App;
