import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Button } from 'antd/es/radio';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Students = () => {

    const [data, setdata] = useState([])
    const [isdelete, setisdeleted] = useState(false)
    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await axios.get("https://udemybackend-55dq.onrender.com/api/admin/getusers")
                if (res.data.status === "ok") {
                    setdata(res.data.user)
                } else {
                    toast.error(res.data.message)
                }
            } catch (error) {
                toast.error(error.response.data.message)
            }
        }
        getUsers()
    }, [isdelete])
    const deleteUser = async (id) => {
        try {
            const res = await axios.get(`https://udemybackend-55dq.onrender.com/api/admin/deleteUser/${id}`)
            if (res.data.status === "ok") {
                toast.success('user deleted successfully')
                setisdeleted(true)
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    return (
        <div>
            <ToastContainer />
            <div className='fw-bold'>
                <div className='d-flex align-items-center justify-content-center'>
                    <h1 style={{ fontSize: "24px" }}>Here is a list of all our current users/students</h1>
                </div>
                <div className='d-flex align-items-center justify-content-center m-3'>
                    <h1 style={{ fontSize: "18px", opacity: "0.5" }}><h1>You can also delete a user if he/she violates our Terms and conditions</h1></h1>
                </div>
                <div style={{ textAlign: "center" }} className='d-flex justify-content-around p-5 align-items-center'>
                    <table style={{ border: "2px solid black", borderCollapse: "collapse", padding: "15px" }}>
                        <thead>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse", padding: "15px" }}>Users</td>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse", padding: "15px" }}>Email</td>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse", padding: "15px" }}>Delete user</td>
                        </thead>
                        <tbody style={{ border: "2px solid black", padding: "15px" }}>
                            {data.map(data =>
                                <tr>
                                    <td style={{ border: "2px solid black", padding: "15px" }}>{data.name}</td>
                                    <td style={{ border: "2px solid black", padding: "15px" }}>{data.email}</td>
                                    <td style={{ border: "2px solid black", padding: "15px" }}><Button className='bg-danger mt-1 text-white' onClick={() => deleteUser(data._id)}>Delete</Button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Students