import React, { useState, useEffect } from 'react';
import { Button, Card, Flex, Typography } from 'antd';
import { useAuth } from '../contexts/AuthContext.js';
import { UserOutlined } from '@ant-design/icons';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [profilePicture, setProfilePicture] = useState(null);

  // Load saved profile picture from localStorage
  useEffect(() => {
    const savedProfilePic = localStorage.getItem('profilePicture');
    if (savedProfilePic) {
      setProfilePicture(savedProfilePic);
    }
  }, []);

  const handleLogout = async () => {
    await logout();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);  // Base64 URL of the image
        localStorage.setItem('profilePicture', reader.result);  // Save image to localStorage
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInputClick = () => {
    document.getElementById('fileInput').click(); // Trigger hidden file input
  };

  return (
    <Card className='profile-card'>
      <Flex vertical gap="small" align='center'>
        {/* Display profile picture if uploaded, otherwise show default icon */}
        {profilePicture ? (
          <img src={profilePicture} alt="Profile" className='profile-picture' style={{ width: 150, height: 150, borderRadius: '50%' }} />
        ) : (
          <UserOutlined style={{ fontSize: '150px' }} />
        )}

        <Typography.Title level={2} strong className='username'>
          {user?.name}
        </Typography.Title>
        <Typography.Text type='secondary' strong>
          Email: {user?.email}
        </Typography.Text>
        <Typography.Text type='secondary'>
          Role: {user?.role}
        </Typography.Text>

        <div className='dashboard-main-div'>
          {/* Hidden file input */}
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            accept="image/*"
            onChange={handleImageChange}
          />
          {/* Custom button to trigger file input */}
          <Button type="primary" onClick={handleFileInputClick}>
            Upload Profile Picture
          </Button>

          <Button size='large' type='primary' className='profile-btn' onClick={handleLogout}>
            Log out
          </Button>
        </div>
      </Flex>
    </Card>
  );
};

export default Dashboard;
