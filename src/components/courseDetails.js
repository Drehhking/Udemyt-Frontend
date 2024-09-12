import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import StarRating from './StarRating';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

const CourseDetails = (props) => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`https://udemybackend-55dq.onrender.com/api/admin/courses/${id}`);
        const fetchedCourse = response.data.course;

        const userData = JSON.parse(localStorage.getItem('user_data')) || {};

        // Check if the course is already purchased
        const isPurchased = userData.purchasedCourses?.includes(fetchedCourse._id) || false;
        setCourse({ ...fetchedCourse, isPurchased });
        setUser(userData);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching course details:', error);
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  const handlePaymentSuccess = async (paymentDetails) => {
    try {
      const userId = user?.userId;

      // Update the purchase status on the server
      await axios.post('https://udemybackend-55dq.onrender.com/api/auth/update-purchase-status', {
        courseId: course._id,
        userId: userId,
      });

      // Update the localStorage to include the newly purchased course
      const updatedPurchasedCourses = user.purchasedCourses || [];
      if (!updatedPurchasedCourses.includes(course._id)) {
        updatedPurchasedCourses.push(course._id);
      }

      const updatedUserData = { ...user, purchasedCourses: updatedPurchasedCourses };
      localStorage.setItem('user_data', JSON.stringify(updatedUserData));

      // Update the state to reflect the purchase
      setCourse({ ...course, isPurchased: true });
    } catch (error) {
      console.error('Error updating purchase status:', error);
    }
  };

  // Flutterwave config setup
  const config = {
    public_key: 'FLWPUBK_TEST-3938a81fcaa711634c73f14797c7da01-X', // Your Flutterwave test key
    tx_ref: Date.now(),
    amount: course?.discountedPrice || 0, // Use discounted price for payment amount
    currency: 'NGN',
    payment_options: 'card',
    customer: {
      email: user?.email || 'defaultemail@example.com', // Fetch user email from localStorage or set default
      phonenumber: user?.phone || '0000000000', // Fetch user phone from localStorage or set default
      name: `${user?.name || ''}`, // Fetch user's full name from localStorage
    },
    customizations: {
      title: 'Purchase Course',
      description: `Payment for course: ${course?.courseName}`,
    },
  };

  // Initialize Flutterwave payment hook
  const handleFlutterwavePayment = useFlutterwave(config);

  // Trigger payment process
  const onBuyNow = () => {
    handleFlutterwavePayment({
      callback: handlePaymentSuccess, // Call handlePaymentSuccess when payment is successful
      onClose: () => {
        console.log('Payment window closed');
      },
    });
  };




  if (loading) return <LoadingContainer>Loading course details...</LoadingContainer>;

  if (!course) return <LoadingContainer>No course details found.</LoadingContainer>;

  return (
    <DetailsContainer>
      <LeftContainer>
        <BlackContainer>
          <Breadcrumbs>Business &gt; Business Analytics & Intelligence &gt; Data Modeling</Breadcrumbs>
          <CourseTitle>{course.courseName}</CourseTitle>
          <Description>{course.description}</Description>
          <RatingContainer>
            <BestsellerBadge>Bestseller</BestsellerBadge>
            <RatingValue>
              <StarRating rating={course.stars} />
              <RatingText>({course.ratings} ratings)</RatingText>
              <Students>{course.students} students</Students>
            </RatingValue>
            <Creator>
              Created by <a href="#">{course.creator}</a>
            </Creator>
          </RatingContainer>
          <UpdateInfo>
            <span>Last updated 5/2024</span>
            <span>English</span>
          </UpdateInfo>
        </BlackContainer>
        <SectionTitle>What you'll learn:</SectionTitle>
        <LearnList>
          {course.what_you_will_learn.split(',').map((point, index) => (
            <LearnItem key={index}>{point}</LearnItem>
          ))}
          {course.what_you_will_learn2.split(',').map((point, index) => (
            <LearnItem key={index}>{point}</LearnItem>
          ))}
          {course.what_you_will_learn3.split(',').map((point, index) => (
            <LearnItem key={index}>{point}</LearnItem>
          ))}
          {course.what_you_will_learn4.split(',').map((point, index) => (
            <LearnItem key={index}>{point}</LearnItem>
          ))}
          {course.what_you_will_learn5.split(',').map((point, index) => (
            <LearnItem key={index}>{point}</LearnItem>
          ))}
        </LearnList>
        <SectionTitle>Course Content:</SectionTitle>
        <ContentBox>
          <ContentItem>{course.content}</ContentItem>
          <ContentItem>{course.content2}</ContentItem>
          <ContentItem>{course.content3}</ContentItem>
          <ContentItem>{course.content4}</ContentItem>
          <ContentItem>{course.content5}</ContentItem>
        </ContentBox>
      </LeftContainer>

      <RightContainer>
        <VideoContainer>
          {course.isPurchased ? (
            <video controls width='100%'>
              <p>Video unlocked!</p>
              <source src={course.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <p>This video is locked. Please purchase the course to access.</p>
          )}
        </VideoContainer>
        <Price>₦{course.discountedPrice} <span>₦{course.actualPrice}</span></Price>
        <BuyButton>Add to Cart</BuyButton>
        <BuyNowButton onClick={onBuyNow} disabled={course.isPurchased}>
          {course.isPurchased ? 'Already Purchased' : 'Buy Now'}
        </BuyNowButton>
      </RightContainer>
    </DetailsContainer>
  );
};

// Add your styled components here as in your original code

// const LoadingContainer = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// height: 100vh;
// font-size: 24px;
// color: #333;
// `;
// 
// Continue with the rest of your styled components...
// Add your styled components here as in your original code


const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f8f9fa;
  gap: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    @media (max-width: 768px) {
    display: flex;
    flex-direction: column; // Stack the left and right containers on top of each other
    padding: 10px;
  }
`;

const LeftContainer = styled.div`
  flex: 1;
`;

const RightContainer = styled.div`
  width: 35%;
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 30%;
   @media (max-width: 768px) {
    width: 100%; // Make it take up the full width on smaller screens
    margin-top: 20px; // Add margin to space out from the left container
  }
`;

const BlackContainer = styled.div`
  background-color: #1c1e21;
  color: white;
  padding: 30px;
  border-radius: 8px;
  margin-bottom: 20px;
  width: 100%;

`;

const Breadcrumbs = styled.div`
  color: #adb5bd;
  font-size: 14px;
  margin-bottom: 20px;
`;

const CourseTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const RatingContainer = styled.div`
  margin: 10px 0;
`;

const BestsellerBadge = styled.span`
  background-color: #f5c518;
  color: #212529;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  margin-right: 10px;
`;

const RatingValue = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  color: #f4b400;
`;

const RatingText = styled.span`
  color: #C0C4FC;
  font-size: 13px;
`;

const Students = styled.span`
  font-size: 16px;
  color: #ccc;
`;

const Creator = styled.p`
  color: #ccc;
  margin-top: 10px;

  a {
    color: #C0C4FC;
    text-decoration: underline;
    margin-right: 10px;
  }
`;

const UpdateInfo = styled.div`
  display: flex;
//   justify-content: space-between;
  gap: 8px;
  margin-top: 20px;
  font-size: 14px;
  color: #adb5bd;
`;

const SectionTitle = styled.h3`
  font-size: 22px;
  margin-top: 20px;
  margin-bottom: 15px;
  font-weight: bold;
`;

const LearnList = styled.ul`
   background-color: #f7f9fa;
  padding: 20px;
  border-radius: 10px;
  max-width: 800px;
  margin: 20px auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const LearnItem = styled.li`
 font-size: 18px;
  padding: 10px 0;
  color: #333;
  border-bottom: 1px solid #e0e0e0;
  position: relative;
  padding-left: 30px;

  &:last-child {
    border-bottom: none;
  }

  &::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #0f7c90;
    font-size: 18px;
    font-weight: bold;
  }
`;

const ContentBox = styled.div`
  background-color: #f1f3f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 20px;
  padding: 15px;
`;

const ContentItem = styled.div`
  padding: 15px;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #eef2f6;
  }
`;

const VideoContainer = styled.div`
  margin-bottom: 20px;

   video {
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    width: 100%;  // Default full width
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }

  @media (max-width: 414px) {
    video {
      width: 100vw;  // Take up full viewport width on smaller screens
      height: 100vh; // Take up full viewport height
      border-radius: 0; // Remove border radius for fullscreen effect
      box-shadow: none; // Remove shadow to make it more seamless
    }

`;

const Price = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;

  span {
    text-decoration: line-through;
    color: #888;
    font-size: 18px;
    margin-left: 10px;
  }
`;

const BuyButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #8710D8;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4b47cc;
  }
`;

const BuyNowButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${(props) => (props.disabled ? '#ccc' : '#fff')};
  color: ${(props) => (props.disabled ? '#888' : 'black')};
  border: ${(props) => (props.disabled ? '2px solid #ccc' : '2px solid black')};
  border-radius: 8px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#ccc' : '#f8f9fa')};
  }
`;


const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 24px;
  color: #333;
`;

export default CourseDetails;
