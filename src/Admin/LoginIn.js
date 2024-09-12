import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginIn = () => {
  // const [adminName, setAdminName] = useState()
  const [adminEmail, setAdminEmail] = useState()
  const [adminPassword, setAdminPassword] = useState()
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:4000/adminLogin', {adminEmail, adminPassword})
    .then(result => {console.log(result)
      if (result.data === "Success") {
        navigate("/admin$3re")
        toast.success("Login Successful")
      }else{
        toast.error("failed")
      }
    })
    .catch(err => console.log(err))
}
  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
      <ToastContainer />
      <div className='bg-white p-3 rounded w-25'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input type="email" 
              placeholder='Enter Email'
              autoComplete='off'
              name='email'
              className='form-control rounded-0'
              onChange={(e) => setAdminEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input 
              type="password"
              placeholder='Enter Password'
              name="password"
              className='form-control rounded-0'
              onChange={(e) => setAdminPassword(e.target.value)}
             />
          </div>
          <button type='submit' className='btn btn-primary w-100 rounded-0'>
            Login
          </button>
        </form>
        <p>Don't have an account</p>
        <Link to="/Signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Signup</Link>
      </div>
    </div>
  )
}

export default LoginIn