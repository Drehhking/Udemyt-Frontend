import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CoursesByCategory = () => {
  const { category } = useParams(); // Get the category from the URL
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/auth/categories/${category}/courses`);
        setCourses(response.data.courses); // Set the courses from the response
        setLoading(false);
      } catch (err) {
        setError('Error fetching courses');
        setLoading(false);
      }
    };

    fetchCourses();
  }, [category]);

  if (loading) return <div>Loading courses...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Courses in {category}</h1>
      <ul>
        {courses.length > 0 ? (
          courses.map((course) => (
            <li key={course._id}>
              <div>{course.courseName}</div>
            </li>
          ))
        ) : (
          <li>No courses available in this category.</li>
        )}
      </ul>
    </div>
  );
};

export default CoursesByCategory;
