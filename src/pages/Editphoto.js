import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
  flex: 1;
  padding: 5px;
`;

const UploadButton = styled.button`
  background-color: #0073e6;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #005bb5;
  }
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
`;

const EditPhoto = () => {
  const [image, setImage] = useState(null); // For storing the selected image
  const [preview, setPreview] = useState(''); // For previewing the image

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); // Generate a preview URL for the selected image
    }
  };

  const handleUpload = async () => {
    if (!image) {
      alert('Please select an image first.');
      return;
    }

    const formData = new FormData();
    formData.append('profilePicture', image);

    try {
      const response = await axios.post(
        'https://udemybackend-55dq.onrender.com/api/upload-profile-photo',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      alert('Image uploaded successfully!');
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Please try again.');
    }
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
          <UploadButton onClick={handleUpload}>Upload image</UploadButton>
        </InputContainer>
        <SaveButton>Save</SaveButton>
      </Form>
    </Container>
  );
};

export default EditPhoto;
