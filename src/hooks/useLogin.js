import { useState } from "react";
import { message } from "antd";
import { useAuth } from "../contexts/AuthContext.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import Toast CSS

const useLogin = () => {
  const { login, setPurchasedCourses } = useAuth(); // Get setPurchasedCourses from context
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const loginUser = async (values) => {
    try {
      setError(null); // Reset any previous error
      setLoading(true); // Start loading spinner

      // Validate input fields
      if (!values?.email || !values?.password) {
        setError("Please provide both email and password.");
        toast.error("Please provide both email and password.");
        setLoading(false);
        return;
      }

      // API request to the login endpoint
      const res = await fetch('http://localhost:4000/api/auth/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        toast.error(data.message || "Login failed. Please try again.");
        setLoading(false);
        return;
      }

      if (!data.token || !data.user) {
        setError("Invalid response from the server.");
        toast.error("Invalid server response. Please try again.");
        setLoading(false);
        return;
      }

      // Save user data and token to localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('user_data', JSON.stringify({
        userId: data.user._id,
        email: data.user.email,
        purchasedCourses : data.user.purchasedCourses
      }));

      // Fetch purchased courses and store them in global state
      setPurchasedCourses(data.user.purchasedCourses || []); // Set purchased courses

      // Call the login function from AuthContext to set global user state
      login(data.token, data.user);

      // Display a success message
      toast.success('Login successful!');

      // Navigate to the home or dashboard page
      navigate("/home");
    } catch (error) {
      console.error(error);
      setError("An unexpected error occurred during login.");
      toast.error("Login failed, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, loginUser };
};

export default useLogin;
