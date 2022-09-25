import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home/Home';
import SignIn from './SignIn/SignIn';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/login' element={<SignIn />} />
    </Routes>
  );
}

export default Router;
