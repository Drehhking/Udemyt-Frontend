import React from 'react'
import python from "../Images/download222.png"
import web from "../assests/images/cat_web_development.jpg"
import data from "../Images/Data-Science-Google-Slides-Templates-Infographics-Diagrams.jpg"
import aws from "../Images/aws_shutterstock-1522399373_692x-675x380.jpg"
import design from "../Images/3ddesigntr.jpg"
import marketing from "../Images/1712894839246.png"
import "../App.css"

const CoursesDepartment = () => {
    return (
        <div>
            <div className='d-flex justify-content-center flex-column align-items-center'>
                <h1 className='fw-bold'>Courses Department</h1>
                <p className=' opacity-50'>Here are all the courses available in the Department</p>
            </div>
            <div className='image d-flex p-4'>
                <div>
                    <img className='python' src={web} alt="" />
                    <span>Web development</span>
                </div>
                <div>
                    <img className='python' src={data} alt="" />
                    <span>Data Science</span>
                </div>
            </div>
            <div className='image d-flex p-4'>
                <div>
                    <img className='python' src={design} alt="" />
                    <span>Graphic Design</span>
                </div>
                <div>
                    <img className='python1' src={marketing} alt="" />
                    <span>Marketing</span>
                </div>
            </div>
            <div className='image d-flex p-4'>
                <div>
                    <img className='python11' src={python} alt="" />
                    <span>Python</span>
                </div>
                <div>
                    <img className='python12' src={aws} alt="" />
                    <span>Python</span>
                </div>
            </div>
        </div>
    )
}

export default CoursesDepartment