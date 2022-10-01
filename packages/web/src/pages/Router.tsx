import React from 'react';

import { Route, Routes } from 'react-router-dom';
import RequireAuth from '../router/RequireAuth';
import SignedRouteBlocker from '../router/SignedRouteBlocker';
import Dashboard from './MyPosts/MyPosts';
import Home from './Home/Home';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import MyPost from './OnePost.tsx/OnePost';

function Router() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
      <Route
        path='/home'
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
      <Route
        path='/home/:recipeId'
        element={
          <RequireAuth>
            <MyPost />
          </RequireAuth>
        }
      />

      <Route
        path='/dashboard'
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />
      <Route
        path='/dashboard/:recipeId'
        element={
          <RequireAuth>
            <MyPost />
          </RequireAuth>
        }
      ></Route>
      <Route
        path='/login'
        element={
          <SignedRouteBlocker>
            <SignIn />
          </SignedRouteBlocker>
        }
      />
      <Route
        path='/sign-up'
        element={
          <SignedRouteBlocker>
            <SignUp />
          </SignedRouteBlocker>
        }
      />
    </Routes>
  );
}

export default Router;
