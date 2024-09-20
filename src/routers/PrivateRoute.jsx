import React from 'react';

import LoadingSpinner from '../components/Shared/LoadingSpinner';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const {user,loading}=useAuth();
    console.log(user,'userlig')
    const location=useLocation();
    if (loading) {
        return <LoadingSpinner/>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace/>
};

export default PrivateRoute;