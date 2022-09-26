import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function RequireAuth({ children }: { children: JSX.Element }) {
  const { token } = useAuth();
  const location = useLocation();

  if (!token) {
    /* Save current location and then redirect to the login page,
    so the user can go back to where he was after the authentication  */
    return <Navigate to={'/login'} state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
