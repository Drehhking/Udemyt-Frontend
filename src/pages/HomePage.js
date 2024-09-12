import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spin } from 'antd';
import { toast, ToastContainer } from 'react-toastify';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import CoursesList from '../components/CourseList';
import Footer from '../components/footer';
import AuthGuard from '../Auth/AuthGuard'; // Import guard component if needed

const HomePage = () => {
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();

  // Check for token on initial load
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      // If no token is found, redirect to login
      navigate('/login');
    }
    //  else {
      // setLoading(false); // Set loading to false if token exists
    // }
  // }, [navigate]);

  const timer = setTimeout(() => {
    setLoading(false); // Set loading to false after 5 seconds
  }, 3000);

  // Clear timeout when component unmounts
  return () => {
    clearTimeout(timer);
  };
}, [navigate]);

  // Handle window/tab close or navigating away
  useEffect(() => {
    const handleTabClose = () => {
      // You could save any unsaved data here or perform a cleanup if needed
      // Don't remove token unless you really want to log the user out on close
    };

    // Detect when the user closes the tab or navigates away
    window.addEventListener('beforeunload', handleTabClose);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener('beforeunload', handleTabClose);
    };
  }, []);

  if (loading) {
    return (
      <div className="spinner-container" style={{ textAlign: 'center', marginTop: '20%' }}>
        <Spin size="large" tip="Loading..." />
      </div>
    );
  }

  return (
    <div className="holder">
      <ToastContainer />
      <Nav />
      <Hero />
      <CoursesList />
      <Footer />
    </div>
  );
};

export default HomePage;
