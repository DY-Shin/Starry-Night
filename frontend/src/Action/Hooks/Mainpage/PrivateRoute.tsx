import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserStore } from '../../../store';

interface PrivateRouteProps {
  isMypage: boolean;
}

function PrivateRoute({ isMypage }: PrivateRouteProps) {
  const { name, profileImageUrl, setUser } = UserStore();

  return name === 'null' ? <Navigate to="/" /> : <Outlet />;
}

export default PrivateRoute;
