import React, { useContext } from 'react'
import { AuthContext } from "../contexts/AuthContext"
import styled from "styled-components"
import { MdClose } from 'react-icons/md'
import { useAuth } from '../contexts/AuthContext.js'
import { Link as Link1 } from 'react-router-dom'
import { useSidebarContext } from '../contexts/Sidebar_context'
import { useCoursesContext } from '../contexts/courses_context'
import { TbWorld } from 'react-icons/tb'
import {Button}  from "antd"
// import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const { categories } = useCoursesContext()
  const { closeSidebar, isSidebarOpen } = useSidebarContext();
  const {  logout } = useAuth()
  // const navigate = useNavigate()

  const handleLogout = async () => {
     logout()
  }
  const switchToCategory = async () => {
    window.location.href = "/generateCertificate"
  }

  // console.log(categories)
  return (
    <SidebarWrapper className={`bg-white`} isSidebarOpen={isSidebarOpen}>
      <button type='button' className='sidebar-close-btn' onClick={() => closeSidebar()}><MdClose /> </button>
      <div className='sidebar-content'>
        <h5 style={{ fontWeight: 700 }} className='fs-18'>Top Categories</h5>
        <div className='sidebar-category'>
          {/* <span className='sidebar-link-item' type="secondary">Email: {userData.email}</span className='sidebar-link-item'> */}
          <div>

          </div>
          <hr />
          <div className='d-flex flex-column sidebar-div1 p-2'>
            <span className='sidebar-link-item' onClick={switchToCategory}>My learning</span>
            <span className='sidebar-link-item'>My cart</span>
            <span className='sidebar-link-item'>Wishlist</span>
            <span className='sidebar-link-item'>Teach on udemy</span>
          </div>
          <hr />
          <div className='d-flex flex-column sidebar-div1 p-2'>
            <span className='sidebar-link-item'>Notifications</span>
            <span className='sidebar-link-item'>Messages</span>
          </div>
          <hr />
          <div className='d-flex flex-column sidebar-div1 p-2'>
            <span className='sidebar-link-item'>Account settings</span>
            <span className='sidebar-link-item'>Payment methods</span>
            <span className='sidebar-link-item'>Subscriptions</span>
            <span className='sidebar-link-item'>Udemy credits</span>
            <span className='sidebar-link-item'>Purchase history</span>
          </div>
          <hr className='w-100' />
          <div className='d-flex justify-content-between align-items-center sidebar-div1 p-2'>
            <span className='sidebar-link-item'>Language</span>
            <div style={{ gap: "5px" }} className='d-flex align-items-center'>
              <span className='sidebar-link-item'>English</span>
              <span className='sidebar-link-item'><TbWorld /></span>
            </div>
          </div>
          <hr />
          <div className='dashboard-main-div'>
            {/* <h1>Dashboard</h1> */}
            <Button  type='primary' className='profile-btn1'onClick={handleLogout} >Log out</Button>
          </div>
        </div>
      </div>
    </SidebarWrapper>
  )
}

const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  z-index: 10;
  height: 100%;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 8px; 
  transform: ${({ isSidebarOpen }) => (isSidebarOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: all 400ms ease-in-out;

  .show-sidebar{
    transform: translateX(0); 
  }
    .sidebar-close-btn{
      position: absolute;
      right: 20px;
      top: 20px;
      border: 2px solid black;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      transition: all 300ms ease-in-out;
    }
      .sidebar-close-btn:hover{
        background-color: black;
        color: white;
      }
      .sidebar-content{
        margin-top: 50px;
        h5{
          margin-bottom: 16px;
        }
      .sidebar-link-item{
        font-size: 10px
        margin-bottom: 12px;
        // line-height:30px;
        transition: all 200ms ease-in-out;
        &:hover{
          transform: translateX(6px);
          // text-decoration: underline;
          color: #3B198F;
        }
      }
      }
      .sidebar-div1{
        gap: 10px;
        cursor: pointer;
      }
      .profile-btn1 {
        margin-top: 5px;
        // width: 100%;
      }
      .sidebar-link-item :hover{
        color: purple;
      }
`

export default Sidebar