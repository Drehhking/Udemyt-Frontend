import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Styled components
const ProfileContainer = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: Arial, sans-serif;
`;

const Sidebar = styled.div`
  width: 25%;
  background-color: #f7f7f7;
  padding: 20px;
  box-shadow: 1px 0 5px rgba(0, 0, 0, 0.1);
`;

const SidebarItem = styled.div`
  font-size: 1rem;
  color: #333;
  padding: 10px 0;
  cursor: pointer;
  &:hover {
    color: #0073e6;
  }
`;

const SidebarHeader = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #333;
`;

const ContentContainer = styled.div`
  width: 75%;
  padding: 20px 40px;
`;

const Header = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  margin: 20px 0;
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 0.9rem;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  resize: none;
`;

const Dropdown = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const Profile = () => {
  const [userName, setUserName] = useState(''); // State for user's name
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // Simulate fetching the user's account data (replace with real API call or context)
  useEffect(() => {
    const fetchUserData = () => {
      // Example: Replace this with your actual data fetching logic
      const userData = JSON.parse(localStorage.getItem('user_data')) || {
        firstName: 'Ahmed',
        lastName: 'Richard',
      };

      setUserName(`${userData.firstName} ${userData.lastName}`);
      setFirstName(userData.firstName);
      setLastName(userData.lastName);
    };

    fetchUserData();
  }, []);

  return (
    <ProfileContainer>
      <Sidebar>
        <SidebarHeader>{userName}</SidebarHeader>
        <SidebarItem>View public profile</SidebarItem>
        <SidebarItem>Profile</SidebarItem>
        <SidebarItem>Photo</SidebarItem>
        <SidebarItem>Account Security</SidebarItem>
        <SidebarItem>Subscriptions</SidebarItem>
        <SidebarItem>Payment methods</SidebarItem>
        <SidebarItem>Privacy</SidebarItem>
        <SidebarItem>Notifications</SidebarItem>
        <SidebarItem>API clients</SidebarItem>
        <SidebarItem>Close account</SidebarItem>
      </Sidebar>
      <ContentContainer>
        <Header>Public profile</Header>
        <p>Add information about yourself</p>
        <SectionTitle>Basics:</SectionTitle>
        <InputContainer>
          <Label>First Name</Label>
          <Input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <Label>Last Name</Label>
          <Input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <Label>Headline</Label>
          <Input type="text" placeholder="Add a professional headline like 'Instructor at Udemy' or 'Architect'" />
        </InputContainer>
        <InputContainer>
          <Label>About</Label>
          <TextArea rows="4" placeholder="Write about yourself here..." />
        </InputContainer>
        <InputContainer>
          <Label>Language</Label>
          <Dropdown>
            <option value="en">English (US)</option>
            <option value="en-uk">English (UK)</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
          </Dropdown>
        </InputContainer>
      </ContentContainer>
    </ProfileContainer>
  );
};

export default Profile;
