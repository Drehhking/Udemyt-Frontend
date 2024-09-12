import React, { useEffect, useState } from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';
import { Button } from 'antd/es/radio';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
const AdminDashboard = () => {
  const [data, setdata] = useState([])
  const [isdelete, setisdeleted] = useState(false)
  const [admin, setAdmin] = useState(null)

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/admin/getusers")
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
      const res = await axios.get(`http://localhost:4000/api/admin/deleteUser/${id}`)
      if (res.data.status === "okay") {
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
    <AdminWrapper>
      <div>
        <div className=' w-100 bb'>
          <div className='fw-bold main1 d-flex align-items-center'>
            <span> Udemy Admin Dashboard</span>
            <span>Analytics</span>
            <span>Library</span>
            <span>Teachers</span>
            <Link to="/courses001"><span>Courses</span></Link>
            <button className='btn-students'><Link to="/student@232">View students</Link></button>
          </div>
        </div>
        <div className='admin-name'>
          <h1 className='welcome'>Welcome back, {admin ? admin.adminName : 'Admin'} </h1>
          <div className='admin-btns'>
            <Link to="/terms$45"><Button>Terms and Conditions</Button></Link>
            <Link to="/courses$105"><Button className='bg-primary text-white'>Create/Add courses</Button></Link>
            <Link to="/postedCourses20$"><Button className='bg-primary text-white'>View available courses</Button></Link>
          </div>
        </div>
        <ToastContainer />
      </div>
    </AdminWrapper>
  )
}

const AdminWrapper = styled.div`
.bb{
height: 40px;
box-shadow: rgba(50, 50, 93, 0.15) 0px 12px 12px -2px, rgba(0,0,0,0.2) 0px 3px 7px -3px;
}

.main1{
  background-color: white;
  display: flex;
  justify-content: space-between;
  text-align: center;
}
.btn-students{
  border: 0;
  background-color: #800080;
  color: white;
  padding: 2px;
  border-radius: 5px;
}
.welcome{
  font-size: 30px;
  font-weight: 700;
}
.admin-name{
  margin-top: 0px;
  background-color: #c0c0c0;
  padding: 6px;
  display: flex;
  justify-content: space-between;
}
// .admin-btns{
  // padding: 0px 2px 0px 2px
// }
`

export default AdminDashboard