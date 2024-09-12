import React from 'react'
import { Avatar, Button, Card, Flex, Typography } from 'antd'
import { useAuth } from '../contexts/AuthContext.js'
import { useSidebarContext } from '../contexts/Sidebar_context.js'
// import { userOutlined } from "@ant-design/icons";
import {UserOutlined} from "@ant-design/icons"

const Dashboard = () => {
  const { userData, logout } = useAuth()

  const handleLogout = async () => {
    await logout()
  }
  return (
    <Card className='profile-card'>
      <Flex vertical gap="small"  align='center'>
        <Avatar size={150} icon={<UserOutlined />} className='avatar' />
        <Typography.Title level={2} strong className='username'>
          {userData?.name}
        </Typography.Title>
        <Typography.Text type='secondary' strong>
          Email: {userData?.email}
        </Typography.Text>
        <Typography.Text type='secondary'>
          Role: {userData?.role}
        </Typography.Text>
        <Typography.Text type='secondary'>
   {/* Role: {userData.role} */}
 </Typography.Text>
        <div className='dashboard-main-div'>
          {/* <h1>Dashboard</h1> */}
          <Button size='large' type='primary' className='profile-btn' onClick={handleLogout}>Log out</Button>
        </div>
      </Flex>


    </Card>
  )
}

export default Dashboard