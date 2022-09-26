import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function SignedRouteBlocker({ children }: { children: JSX.Element }) {
  const { token } = useAuth();

  if (token) {
    return <Navigate to={'/'} replace />;
  }

  return children;
}

export default SignedRouteBlocker;
