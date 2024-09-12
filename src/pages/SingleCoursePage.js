import React, { act, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useCoursesContext } from '../contexts/courses_context'
import StarRating from '../components/StarRating'
import { MdInfo } from 'react-icons/md'
import { TbWorld } from 'react-icons/tb'
import { FaShoppingCart } from 'react-icons/fa'
import {RiClosedCaptioningFill} from 'react-icons/ri'
import { BiCheck } from "react-icons/bi"
import { Link } from "react-router-dom"
import Nav from '../components/Nav'
import { useCartContext } from '../contexts/Cart_context'

const SingleCoursePage = () => {
  const { id } = useParams()
  const { fetchSingleCourse, single_course } = useCoursesContext();
  const {addToCart} = useCartContext();

  useEffect(() => {
    fetchSingleCourse(id)
  }, [])

  const { id: courseID, category, image, course_name, description, rating_count, rating_star, students, creator, updated_date, lang, actual_price, discounted_price, what_you_will_learn: learnItems, content } = single_course;
  console.log(single_course);
  return (
    <div>
      <Nav/>
      <SingleCourseWrapper>
  <div className='course-intro mx-auto grid'>
    <div className='course-img'>
      <img src={image} alt={course_name} />
    </div>
    <div className='course-details'>
      <div className='course-category bg-white text-dark text-capitalize fw-6 fs-12 d-inline-block'>
        {category}
      </div>
      <div className="course-head">
        <h5 style={{fontWeight: 800, fontSize: "25px"}}>{course_name}</h5>
      </div>
      <div className="course-body">
        <p className='course-para fs-18'>{description}</p>
        <div className="course-rating d-flex align-items-center">
          <span className='rating-star-val fw-8 fs-16'>{rating_star}</span>
          <StarRating rating_star={rating_star}/>
          <span className='rating-count fw-5 fs-14'>({rating_count})</span>
          <span className="students-count fs-14">{students}</span>
        </div>
        <div className='course-info'>
          <li>
            <span className="fs-1"><span className='fw-6 opacity-08  brb'> Created by {creator}</span></span>
          </li>
          <li className="d-flex">
            <span><MdInfo /></span>
            <span className="fs-14 course-info-txt fw-5">Last updated {updated_date} </span>
          </li>
          <li className="d-flex">
            <span><TbWorld/></span>
            <span className="fs-14 course-info-txt fw-5">{lang}</span>
          </li>
          <li className="d-flex">
            <span><RiClosedCaptioningFill /></span>
            <span className="fs-14 course-info-txt fw-5">{lang}[Auto]</span>
          </li>
        </div>
      </div>
      <div className='course-foot'>
        <div className='course-price'>
          <span className='new-price fs-26 fw-8'>₦{discounted_price}</span>
          <span className='old-price fs-26 fw-6'>₦{actual_price}</span>
        </div>
      </div>
      <div className="course-btn">
        <Link to ="/cart" style={{backgroundColor: "purple", color: "white", textDecoration: "none"}} className='add-to-cart-btn fw-7 d-inline-flex' onClick={() => addToCart (courseID, image, course_name, creator, discounted_price, category)}><FaShoppingCart/>Add to cart</Link>
      </div>
    </div>
  </div>
    
<div className='course-full bg-white text-dark'>
  <div className='course-learn mx-auto'>
    <div className='course-sc-title'>What you'll learn</div>
    <div className='course-learn-list grid'>
      {
        learnItems && learnItems.map((learnItem, idx) => {
          return(
            <li style={{lineHeight: "2"}} className='d-flex align-items-center' key={idx}>
              <span><BiCheck/></span>
              <span className='fs-14 fw-5 opacity-09'>{learnItem}</span>
            </li>
          )
        })
      }
    </div>
  </div>
  <div style={{border: "1px solid rgba(0, 0, 0, 0.3)", lineHeight: "2"}} className="course-content mx-auto">
    <div className="course-sc-title">Course content</div>
    <div className="course-content-list">
      {
        content && content.map((contentItem, idx) => {
          return(
            <li className='d-flex' key={idx}>
              <span style={{fontWeight: 800}}>{contentItem}</span>
            </li>
          )
        })
      }
    </div>
  </div>
</div>
</SingleCourseWrapper>
    </div>
  )
}

const SingleCourseWrapper = styled.div`
  background: black;
  color: white;

    .brb {
  font-size: 15px;
}

  .course-intro {
    padding: 40px 16px;
    max-width: 992px;

     .course-details{
   padding-top: 20px;
 }
   .course-category{
     padding: 0px 8px;
     border-radius: 6px;
   }
   .course-head{
     font-size: 38px;
     line-height: 1.2;
     padding: 12px 0 0 0;
   }
   .course-para{
     padding: 12px 0
   }
   .rating-star-val{
     margin-right: 7px;
     padding-bottom: 5px;
     color: orange;
     font-size: 17px;
   }
   .students-count{
     margin-left: 8px;
   }
   .rating-count{
     margin-left: 6px;
     color: #C0C4FC;
   }
   .course-info{
     li{
       margin-bottom: 2px;
       &:nth-child(2){
         margin-top: 10px;
       }
     }
   .course-info-txt{
     text-transform: capitalize;
     margin-left: 8px;
     margin-bottom: 4px;
   }
   }
   .course-price{
     margin-top: 12px;
     .old-price{
       color: #eceb98;
       text-decoration: line-through;
       margin-left: 10px;
     }
   }
  .course-btn{
    margin-top: 16px;
    .add-to-cart-btn{
      padding: 12px 28px;
      span{
        margin-left: 12px;
      }
    }
  }
    @media screen and (min-width: 880px){
      grid-template-columns: repeat(2, 1fr);
      column-gap: 40px;
      .course-details{
        padding-top: 0;
      }
      .course-img{
        order: 2;
      }
    }
    @media screen and (min-width: 1400px){
     grid-template-columns: 60% 40%;
    }
}
    .course-full{
      padding: 40px 16px;
      .course-sc-title{
        font-size: 22px;
        font-weight: 700;
        margin: 12px 0;
      }
      .course-learn{
        max-width: 992px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        padding: 12px 28px 22px 28px;

        .course-learn-list{
          li{
            margin: 5px 0;
            display: flex;
            span{
              &:nth-child(){
                opacity: 0.95;
                margin-right: 12px;
              }
            }
          }

          @media screen and (min-width: 992px){
            grid-template-columns: repeat (2, 1fr)
          }
        }
      }

      .course-content{
        max-width: 992px;
        margin-top: 30px;
        padding: 12px 0px 22px 0px;

        .course-content-list{
          li{
            background-color: #f7f9fa;
            padding: 12px 18px;
            border: 1px solid rgba(0, 0, 0, 0.2)
            // margin-bottom: 10px;
            // font-size: 15px;
          }
        }
      }
    }

`

export default SingleCoursePage
