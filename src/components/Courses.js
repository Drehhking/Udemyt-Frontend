

import React from 'react';
import Course from './CourseLandingPage';
import styled from 'styled-components';
import '../App.css';
import img1 from '../Images/designHome.jpg';
import img2 from '../Images/DevelopmentHome.jpg';
import img3 from '../Images/marketingHome.jpg';
import img4 from '../Images/softwareHome.jpg';
import img5 from '../Images/personalDevelopment.jpg';
import img6 from '../Images/Business.jpg';
import img7 from '../Images/Phtography.jpg';
import img8 from '../Images/Music.jpg';
import img9 from '../Images/UB_Promo_1200x1200.jpg';
import img10 from '../Images/instructor-2x-v3.jpg';
import data from '../data.json';
import Footer from './footer';

const Courses = () => {
  return (
    <div className='container mt-5 mb-5'>
      {/* Course Categories Header */}
      <div className='mb-5'>
        <h2 className='display-4 fw-bold'>A broad selection of courses</h2>
        <h3 className='h4'>Choose from 220,000 online video courses with new additions published every month.</h3>
        <div className='d-flex flex-wrap gap-2 mt-2'>
          <span className='badge bg-secondary'>Python</span>
          <span className='badge bg-secondary'>Excel</span>
          <span className='badge bg-secondary'>Web Development</span>
          <span className='badge bg-dark text-white'>JavaScript</span>
          <span className='badge bg-secondary'>Data Science</span>
          <span className='badge bg-secondary'>AWS Certification</span>
          <span className='badge bg-secondary'>Drawing</span>
        </div>
      </div>

      {/* JavaScript Skill Development Section */}
      <div className='p-4 mb-5 border border-secondary rounded'>
        <h2 className='h4 fw-bold mb-2'>Grow your software development skills with JavaScript</h2>
        <p>
          JavaScript is a text-based computer programming language used to make dynamic web pages. A must-learn for aspiring web developers or programmers, JavaScript can be used for features like image carousels, displaying countdowns and timers, and playing media on a webpage.
        </p>
        <button className='btn btn-outline-dark mt-3 mb-3'>Explore JavaScript</button>
        
        {/* Course Grid */}
        <div className='row'>
          {data.map((item) => (
            <div className='col-6 col-md-4 col-lg-3 mb-4' key={item.id}>
              <Course item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Top Categories Section */}
      <div>
        <h1 className='fw-bold p-4'>Top categories</h1>
        <div className='d-flex flex-wrap justify-content-between'>
          {[img1, img2, img3, img4].map((img, index) => (
            <div className='text-center' key={index}>
              <img src={img} className='img-fluid rounded mb-2' style={{ width: '200px' }} alt="Category" />
              <span className='d-block fw-bold'>{["Design", "Development", "Marketing", "IT and Software"][index]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* More Categories */}
      <div className='d-flex flex-wrap justify-content-between mt-4'>
        {[img5, img6, img7, img8].map((img, index) => (
          <div className='text-center' key={index}>
            <img src={img} className='img-fluid rounded mb-2' style={{ width: '200px' }} alt="Category" />
            <span className='d-block fw-bold'>
              {["Personal Development", "Business", "Photography", "Music"][index]}
            </span>
          </div>
        ))}
      </div>

      {/* Featured Topics */}
      <div className='mt-5'>
        <h1 className='fw-bold p-4'>Featured topics by category</h1>
        <div className='row'>
          <div className='col-6 col-md-3'>
            <h3>Development</h3>
            <a href="/home">Python</a><br />
            <a href="/home">Web development</a><br />
            <a href="/home">Machine Learning</a>
          </div>
          <div className='col-6 col-md-3'>
            <h3>Business</h3>
            <a href="/home">Financial Analysis</a><br />
            <a href="/home">SQL</a><br />
            <a href="/home">PMP</a>
          </div>
          <div className='col-6 col-md-3'>
            <h3>IT and Software</h3>
            <a href="/home">Amazon AWS</a><br />
            <a href="/home">Ethical Hacking</a><br />
            <a href="/home">Cyber Security</a>
          </div>
          <div className='col-6 col-md-3'>
            <h3>Design</h3>
            <a href="/home">Photoshop</a><br />
            <a href="/home">Graphic Design</a><br />
            <a href="/home">Drawing</a>
          </div>
        </div>
        <button className='btn btn-dark mt-3'>Explore more topics</button>
      </div>

      {/* Udemy Business Section */}
      <div className='row mt-5 p-4 bg-light'>
        <div className='col-md-6'>
          <h1 className='fw-bold'>Udemy <span style={{ color: 'rebeccapurple' }}>Business</span></h1>
          <p className='lead'>Upskill your team with Udemy Business</p>
          <ul>
            <li>Unlimited access to 27,000+ top Udemy courses, anytime, anywhere</li>
            <li>International course collection in 14 languages</li>
            <li>Top certifications in tech and business</li>
          </ul>
          <button className='btn btn-dark mt-3'>Get Udemy Business</button>
          <button className='btn btn-outline-dark mt-3'>Learn more</button>
        </div>
        <div className='col-md-6 text-center'>
          <img src={img9} className='img-fluid rounded' alt="Udemy Business" />
        </div>
      </div>

      {/* Become an Instructor Section */}
      <div className='row mt-5 p-4'>
        <div className='col-md-6 text-center'>
          <img src={img10} className='img-fluid rounded mb-3' alt="Become an Instructor" />
        </div>
        <div className='col-md-6'>
          <h2 className='fw-bold'>Become an Instructor</h2>
          <p>Instructors from around the world teach millions of learners on Udemy. We provide the tools and skills to teach what you love.</p>
          <button className='btn btn-dark'>Start teaching today</button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Courses;
