import {React, useEffect, useState} from 'react'

const CoursesByCategory = ({ match }) => {
    const { category } = match.params;
    const [courses, setCourses] = useState([]);
  
    useEffect(() => {
      fetch(`/api/courses/category/${category}`)
        .then((res) => res.json())
        .then((data) => setCourses(data.courses));
    }, [category]);
  
    return (
      <div>
        {courses.map((course) => (
          <div key={course._id}>{course.courseName}</div>
        ))}
      </div>
    );
  };
  

export default CoursesByCategory