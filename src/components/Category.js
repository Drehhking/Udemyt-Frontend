import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Spin, Modal, Button } from 'antd'; // Ant Design components
import 'antd/dist/reset.css'; // Import Ant Design CSS

// Styled Components
const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`;

const CategoryItem = styled.div`
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  flex: 1;
  max-width: 200px;
  cursor: pointer;

  &:hover {
    background-color: #e7e7e7;
  }
`;

const CourseContainer = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

const CourseItem = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  margin: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const NoCategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-size: 1.5rem;
  font-weight: bold;
  color: #666;
`;

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [courses, setCourses] = useState([]);
  const [courseLoading, setCourseLoading] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [paidCourses, setPaidCourses] = useState([]); // Array to store paid course IDs

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://udemybackend-55dq.onrender.com/api/auth/categories');
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error.response ? error.response.data : error.message);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }
    };

    fetchCategories();
  }, []);

  // Fetch courses for the selected category
  const fetchCoursesByCategory = async (category) => {
    setSelectedCategory(category);
    setCourseLoading(true);
    try {
      const response = await axios.get(`https://udemybackend-55dq.onrender.com/courses?category=${category}`);
      setCourses(response.data.courses);
      // Check if all courses are purchased
      checkPurchasedCourses(response.data.courses);
    } catch (error) {
      console.error("Error fetching courses:", error.response ? error.response.data : error.message);
    } finally {
      setCourseLoading(false);
    }
  };

  // Check if the user has purchased all courses
  const checkPurchasedCourses = (courses) => {
    const purchased = courses.filter(course => paidCourses.includes(course.id));
    if (purchased.length === courses.length) {
      setShowCertificate(true);
    } else {
      setShowCertificate(false);
    }
  };

  // Modal for showing certificate
  const CertificateModal = () => (
    <Modal
      title="Certificate Unlocked!"
      visible={showCertificate}
      onCancel={() => setShowCertificate(false)}
      footer={[
        <Button key="ok" type="primary" onClick={() => setShowCertificate(false)}>
          OK
        </Button>
      ]}
    >
      <p>Congratulations! You've completed all courses under {selectedCategory}. Here's your certificate!</p>
    </Modal>
  );

  if (loading) {
    return (
      <SpinnerContainer>
        <Spin size="large" />
      </SpinnerContainer>
    );
  }

  return (
    <div>
      <CategoryContainer>
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <CategoryItem key={index} onClick={() => fetchCoursesByCategory(category)}>
              {category}
            </CategoryItem>
          ))
        ) : (
          <NoCategoriesContainer>No categories found</NoCategoriesContainer>
        )}
      </CategoryContainer>

      {courseLoading ? (
        <SpinnerContainer>
          <Spin size="large" />
        </SpinnerContainer>
      ) : (
        <CourseContainer>
          <h2>Courses under {selectedCategory}</h2>
          {courses.length > 0 ? (
            courses.map((course) => (
              <CourseItem key={course.id}>
                {course.title}
              </CourseItem>
            ))
          ) : (
            <p>No courses found for this category</p>
          )}
        </CourseContainer>
      )}

      {showCertificate && <CertificateModal />}
    </div>
  );
};

export default CategoryPage;
