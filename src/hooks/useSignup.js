import { useState } from "react";
import { message } from "antd";
import { useAuth } from "../contexts/AuthContext.js";
import { useSidebarContext } from "../contexts/Sidebar_context.js";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";



const useSignup = () => { 
const {login} = useAuth()
const [error, setError] = useState(null);
const [loading, setLoading] = useState(null)
const navigate = useNavigate()



  const registeruser = async (values) =>{
    if (values.password !== values.passwordConfirm) {
      return setError("Passwords don't match");
    }

    // if (isAuthenticated) {
      // navigate('/login');
      // return;
    // }
    // if (isAuthenticated === true) {
      // navigate('/login')
    // }else{
      // return setError("failed to register");
      // navigate('/register')
    // }

    try {
      setError(null)
      setLoading(true)
      const res = await fetch('https://udemybackend-55dq.onrender.com/api/auth/signup', {
        method : "POST",
        headers: {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(values),
      });

      const data = await res.json();
      if (res.status===201) {
        message.success(data.message)
        login(data.token, data.user);
        navigate("/login")
      }
      else if (res.status === 400) {
        setError(data.message)
      }
      else{
        message.error('Registration failed')
      }
    } catch (error) {
      message.error(error)
    }finally{
      setLoading(false)
    }
  }
  return {loading, error, registeruser};
};

export default useSignup;