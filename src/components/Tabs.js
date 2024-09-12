import React, { useState } from 'react'
import styled from 'styled-components'
import Course from "./Course"
import { PYTHON, WEB_DEVELOPMENT, DATA_SCIENCE, AWS, DESIGN, MARKETING } from "../utils/constant"
import courses from '../utils/data'
// import { useState } from 'react'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(PYTHON)
  const tabHandler = (category) => {
    setActiveTab(category)
  }

  // console.log(activeTab)

  return (
    <TabsWrapper>
      <div className='tabs'>
        <ul className="d-flex flex-wrap">
          <li className='tabs-head-item'>
            <button type='button' className={`tab-btn ${activeTab === PYTHON}`} onClick={() => tabHandler(PYTHON)}>Python</button>
          </li>
          <li className='tabs-head-item'>
            <button type='button' className={`tab-btn ${activeTab === WEB_DEVELOPMENT}`} onClick={() => tabHandler(WEB_DEVELOPMENT)}>Web Development</button>
          </li>
          <li className='tabs-head-item'>
            <button type='button' className={`tab-btn ${activeTab === DATA_SCIENCE}`} onClick={() => tabHandler(DATA_SCIENCE)}>Data Science</button>
          </li>
          <li className='tabs-head-item'>
            <button type='button' className={`tab-btn ${activeTab === AWS}`} onClick={() => tabHandler(AWS)}>AWS Certification</button>
          </li>
          <li className='tabs-head-item'>
            <button type='button' className={`tab-btn ${activeTab === DESIGN}`} onClick={() => tabHandler(DESIGN)}>Design</button>
          </li>
          <li className='tabs-head-item'>
            <button type='button' className={`tab-btn ${activeTab === MARKETING}`} onClick={() => tabHandler(MARKETING)}>Marketing</button>
          </li>
        </ul>
        <div className='tabs-body'>
          {
            courses.filter(course => course.category === activeTab)
            .map((course)=> (
              <Course Key = {course.id} {...course}/>
            ))
          }
        </div>
      </div>
    </TabsWrapper>
  )
}

const TabsWrapper = styled.div`
  .tabs{
  .tabs-head-item button{
    border: 1px solid rgba(0,0,0,0.7);
    padding: 10px 16px;
    margin-right: 7px;
    transition : all 300ms ease-in-out;
    font-size: 16px;
    margin-bottom: 12px;

    &:hover{
      background-color: black;
      color: white;
    }
  }

  .tabs-body{
    margin-top: 32px
  }
      @media screen and (min-width : 600px){
    .tabs-body {
      display: grid;
      gap: 26px;
      grid-template-columns: repeat(2, 1fr)
    }
  }
  @media screen and (min-width: 992px){
    .tabs-body{
        grid-template-columns: repeat(3, 1fr)
      }
    }

    @media screen and (min-width: 1400px){
      .tabs-body{
        grid-template-columns: repeat(4, 1fr);
      }
    }
}
`

export default Tabs