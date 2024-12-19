import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography } from "antd";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SidebarHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const ProfileImageContainer = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid #ddd;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PlaceholderIcon = styled(UserOutlined)`
  font-size: 100px;
  color: #ccc;
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
  const { user } = useAuth();
  const [profilePhoto, setProfilePhoto] = useState(""); // State to store profile photo

  // Load profile photo from localStorage on mount
  useEffect(() => {
    const savedPhoto = localStorage.getItem("profilePhoto");
    if (savedPhoto) {
      setProfilePhoto(savedPhoto);
    }
  }, []);

  return (
    <ProfileContainer>
      <Sidebar>
        <ProfileImageContainer>
          {profilePhoto ? (
            <ProfileImage src={profilePhoto} alt="Profile" />
          ) : (
            <PlaceholderIcon />
          )}
        </ProfileImageContainer>
        <SidebarHeader>
          <Typography.Title level={2} strong className="username">
            {user?.name || "Username"}
          </Typography.Title>
        </SidebarHeader>
        <SidebarItem>View public profile</SidebarItem>
        <SidebarItem>Profile</SidebarItem>
        <SidebarItem>
          <Link to="/image">Photo</Link>
        </SidebarItem>
        <SidebarItem>Account Security</SidebarItem>
        <SidebarItem>
          <Link to="/purchased-courses">Subscriptions</Link>
        </SidebarItem>
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
          <Input type="text" placeholder={user?.name || "Enter your name"} />
        </InputContainer>
        <InputContainer>
          <Label>Headline</Label>
          <Input
            type="text"
            placeholder="Add a professional headline like 'Instructor at Udemy' or 'Architect'"
          />
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
