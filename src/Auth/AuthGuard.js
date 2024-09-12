import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // Get token from localStorage

  if (!token) {
    // If no token, redirect to login page
    return <Navigate to="/login" replace />;
  }

  return children; // Render the children (dashboard) if token is present
};

export default ProtectedRoute;
