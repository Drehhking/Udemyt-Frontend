import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CertificateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-family: "Georgia", serif;
  padding: 20px;
  background-color: #f9f9f9;
`;

const CertificateWrapper = styled.div`
  width: 80%;
  border: 10px solid #4caf50;
  padding: 20px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #4caf50;
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  margin: 20px 0;
`;

const UserDetails = styled.p`
  font-size: 1.2rem;
  margin: 10px 0;
`;

const PrintButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  text-align: center;
`;

const PopupMessage = styled.p`
  font-size: 1.2rem;
  color: #ff0000;
`;

const CloseButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #0073e6;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const CertificatePage = () => {
  const [isEligible, setIsEligible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    completionDate: "",
  });

  useEffect(() => {
    // Fetch eligibility
    const fetchEligibility = async () => {
      const response = await fetch("https://udemybackend-55dq.onrender.com/api/admin/certificate-eligibility", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const data = await response.json();

      if (data.isEligible) {
        setIsEligible(true);
        setUserDetails(data.userDetails);
      } else {
        setIsEligible(false);
        setShowPopup(true);
      }
    };

    fetchEligibility();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <CertificateContainer>
      {isEligible ? (
        <CertificateWrapper>
          <Title>Certificate of Achievement</Title>
          <Subtitle>This is to certify that</Subtitle>
          <UserDetails><strong>{userDetails.name}</strong></UserDetails>
          <UserDetails>has completed all required courses to obtain a universal IT certificate</UserDetails>
          <UserDetails>on {userDetails.completionDate}</UserDetails>
          <PrintButton onClick={handlePrint}>Print Certificate</PrintButton>
        </CertificateWrapper>
      ) : (
        <>
          {showPopup && (
            <Popup>
              <PopupMessage>
                You’re not eligible to obtain a certificate until after
                purchasing all the courses.
              </PopupMessage>
              <CloseButton onClick={closePopup}>Close</CloseButton>
            </Popup>
          )}
        </>
      )}
    </CertificateContainer>
  );
};

export default CertificatePage;
