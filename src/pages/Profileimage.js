import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  color: #555;
  margin-bottom: 20px;
`;

const ImagePreviewContainer = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid #ddd;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  overflow: hidden;
  background-color: #f9f9f9;
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PlaceholderIcon = styled.div`
  font-size: 5rem;
  color: #ccc;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
`;

const FileInput = styled.input`
  padding: 5px;
`;

const SaveButton = styled.button`
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }

  &:disabled {
    background-color: #555;
    cursor: not-allowed;
  }
`;

const EditPhoto = () => {
  const [image, setImage] = useState(null); // Stores the selected image as a Base64 string
  const [preview, setPreview] = useState(""); // For previewing the image

  // Load saved image from localStorage on mount
  useEffect(() => {
    const savedImage = localStorage.getItem("profilePhoto");
    if (savedImage) {
      setImage(savedImage);
      setPreview(savedImage);
    }
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result; // Convert file to Base64 string
        setImage(base64Image);
        setPreview(base64Image); // Preview the selected image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (image) {
      localStorage.setItem("profilePhoto", image); // Save the image in localStorage
      alert("Profile photo saved successfully!");
    } else {
      alert("Please select an image first.");
    }
  };

  const handleLogout = () => {
    // Simulate logout (optional, no action required here if token is not involved)
    alert("Logged out. The profile photo will persist.");
  };

  return (
    <Container>
      <Title>Photo</Title>
      <Subtitle>Add a nice photo of yourself for your profile.</Subtitle>
      <ImagePreviewContainer>
        {preview ? (
          <ImagePreview src={preview} alt="Profile Preview" />
        ) : (
          <PlaceholderIcon>👤</PlaceholderIcon>
        )}
      </ImagePreviewContainer>
      <Form>
        <InputContainer>
          <FileInput type="file" accept="image/*" onChange={handleFileChange} />
        </InputContainer>
        <SaveButton onClick={handleSave}>Save</SaveButton>
      </Form>
      <SaveButton onClick={handleLogout}>Logout</SaveButton>
    </Container>
  );
};

export default EditPhoto;
