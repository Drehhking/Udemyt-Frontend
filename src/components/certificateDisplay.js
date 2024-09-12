import React from 'react';
import { useParams } from 'react-router-dom';

const CertificateDisplay = () => {
  const { categoryId } = useParams();

  return (
    <div>
      <h1>Your Certificate</h1>
      <div style={{ border: '5px solid black', padding: '20px', width: '600px', margin: '0 auto' }}>
        <h2>Certificate of Completion</h2>
        <p>Congratulations! You've successfully completed all courses in category: {categoryId}</p>
        <p>Name: [User's Name]</p>
        <p>Date: [Generated Date]</p>
        <p>Certificate ID: [Certificate ID]</p>
      </div>
    </div>
  );
};

export default CertificateDisplay;
