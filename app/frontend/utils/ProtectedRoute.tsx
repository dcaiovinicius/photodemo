import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { AuthContext } from '@app/contexts/AuthContext';

const ProtectedRoute: React.FC = () => {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? <Outlet /> : <Navigate to="/app/login" />;
};

export default ProtectedRoute;
