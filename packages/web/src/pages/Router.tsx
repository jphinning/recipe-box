import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  );
}

export default Router;
