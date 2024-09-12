import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import { Result } from 'antd'

const Signup = () => {
    const [adminName, setAdminName] = useState()
    const [adminEmail, setAdminEmail] = useState()
    const [adminPassword, setAdminPassword] = useState()
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://udemybackend-55dq.onrender.com/adminSignup', {adminName, adminEmail, adminPassword})
        .then(result => {console.log(result)
            navigate("/Loginin")
        })
        .catch(err => console.log(err))
    }
    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h1 style={{fontSize: "18px", fontWeight: 700}}>Admin Registration</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label>
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder='Enter Name'
                            autoComplete='off'
                            name='email'
                            className='form-control rounded-0'
                            onChange={(e) => setAdminName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder='Enter Email'
                            autoCapitalize='off'
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
                            placeholder='Enter password'
                            name='password'
                            className='form-control rounded-0'
                            onChange={(e) => setAdminPassword(e.target.value)}
                        />
                    </div>
                    <button type='' className='btn btn-primary w-100 rounded-0'>
                        Register
                    </button>
                    </form>
                    <p>Already Have an Account</p>
                    <Link to="/Loginin" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
                        Login
                    </Link>
            </div>
        </div>
    )
}

export default Signup