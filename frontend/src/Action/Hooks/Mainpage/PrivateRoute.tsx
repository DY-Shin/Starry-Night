import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserStore } from '../../../store';

function PrivateRoute() {
  const { name, profileImageUrl, setUser } = UserStore();

  return name === 'null' ? <Navigate to="/" /> : <Outlet />;
}

export default PrivateRoute;
