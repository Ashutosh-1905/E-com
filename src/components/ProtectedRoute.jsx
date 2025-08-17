import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const ProtectedRoute = ({ children }) => {
    
    const navigate = useNavigate();
    let { isLoggedIn } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/");
            return;
        }
    }, []);
    return children;
}

export default ProtectedRoute