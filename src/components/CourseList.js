import React from 'react'
import styled from 'styled-components';
import Tabs from "./Tabs";
import { useCoursesContext } from '../contexts/courses_context';
// import PostedCourses from '../Admin/postedCourses'
import AllCourses from './AllCourses'

const CourseList = () => {
  const {courses} = useCoursesContext();
  console.log(courses);

  return (
    <CoursesListWrapper>
      <div className='container'>
        <div className='courses-list-top'>
          <h1>What to learn next</h1>
          <p>Recommended for you</p>
        </div>

        <AllCourses/>
      </div>
    </CoursesListWrapper>
  )
}

const CoursesListWrapper = styled.div`
  padding: 40px 0;
  .courses-list-top p{
    font-size: 1.8rem;
  }
`

export default CourseList