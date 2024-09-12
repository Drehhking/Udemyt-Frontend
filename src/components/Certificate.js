import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CertificatePage = ({ userId }) => {
  const [categoryCertificates, setCategoryCertificates] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch available categories that user completed
    const fetchCertificates = async () => {
      try {
        const response = await axios.post('https://udemybackend-55dq.onrender.com/api/auth/generateCertificate', { userId });
        setCategoryCertificates(response.data.certificates); // Assuming this returns certificate details
      } catch (err) {
        setError('Error fetching certificates');
      }
    };
    fetchCertificates();
  }, [userId]);

  const handleGetCertificate = (categoryId) => {
    navigate(`/certificate/${categoryId}`);
  };

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Available Certificates</h1>
      {categoryCertificates.length > 0 ? (
        categoryCertificates.map((certificate) => (
          <div key={certificate.categoryId}>
            <h2>{certificate.categoryName}</h2>
            <button onClick={() => handleGetCertificate(certificate.categoryId)}>
              Get Certificate
            </button>
          </div>
        ))
      ) : (
        <p>No certificates available.</p>
      )}
    </div>
  );
};

export default CertificatePage;
