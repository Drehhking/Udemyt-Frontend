import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import "../App.css";
import StarRating from '../components/StarRating';

const CoursesDisplay = () => {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/admin/courses');
                setCourses(response.data.courses);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

    const handleSeeDetails = (courseId) => {
        navigate(`/course/${courseId}`);
    };

    return (
        <CoursesContainer>
            {courses.length > 0 ? (
                courses.map(course => (
                    <CourseCard key={course._id}>
                        <CourseImage src={course.image} alt={course.courseName} />
                        <CourseInfo>
                            <CourseTitle>{course.courseName}</CourseTitle>
                            <CourseCreator>by {course.creator}</CourseCreator>
                            <RatingValue>
                                <StarRating rating={course.stars} />
                                <RatingText>({course.ratings})</RatingText>
                            </RatingValue>
                            <CoursePrice>
                                <DiscountedPrice>₦{course.discountedPrice}</DiscountedPrice>{' '}
                                {course.actualPrice && (
                                    <OriginalPrice>₦{course.actualPrice}</OriginalPrice>
                                )}
                            </CoursePrice>
                            {course.bestseller && <BestsellerBadge>Bestseller</BestsellerBadge>}
                            <ButtonContainer>
                                <DetailsButton onClick={() => handleSeeDetails(course._id)}>
                                    See Details
                                </DetailsButton>
                            </ButtonContainer>
                        </CourseInfo>
                    </CourseCard>
                ))
            ) : (
                <p>No courses available or failed to load courses</p>
            )}
        </CoursesContainer>
    );
};

const CoursesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
//   justify-content: space-between;
  gap: 5px;
  padding: 20px;
`;

const CourseCard = styled.div`
  width: 300px;
  background-color: white;
//   border: 1px solid #ddd;
//   border-radius: 8px;
  overflow: hidden;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   transition: transform 0.2s ease-in-out;

//   &:hover {
    // transform: translateY(-10px);
//   }
`;

const CourseImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
`;

const CourseInfo = styled.div`
  padding: 16px;
`;

const CourseTitle = styled.h3`
  font-size: 14px;
  margin: 0;
  color: #333;
  font-weight: bold;
  line-height: 1.2;
`;

const CourseCreator = styled.p`
  font-size: 12px;
  color: #666;
  margin: 8px 0;
`;

const RatingValue = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const RatingText = styled.span`
  font-size: 14px;
  color: #6A6F73;
`;

const CoursePrice = styled.div`
  font-size: 16px;
  color: #333;
  font-weight: bold;
  margin: 10px 0;
`;

const DiscountedPrice = styled.span`
  color: black;
  font-weight: bold;
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #888;
  font-size: 14px;
  margin-left: 8px;
`;

const BestsellerBadge = styled.span`
  background-color: #f5c518;
  color: #212529;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 4px;
  margin-top: 10px;
  display: inline-block;
`;

const ButtonContainer = styled.div`
  margin-top: 15px;
`;

const DetailsButton = styled.button`
  background-color: transparent;
  color: black;
  border: 1px solid black;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: black;
    color: white;
    transition: all 0.2s ease-in-out;
  }
`;

export default CoursesDisplay;
