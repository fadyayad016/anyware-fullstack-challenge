import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import type { RootState } from '../../store'; 
import type { JSX } from 'react';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  const location = useLocation();

  if (!isLoggedIn) {
   
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;