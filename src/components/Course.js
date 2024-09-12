import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import StarRating from "../components/StarRating"
import { useCartContext } from '../contexts/Cart_context'
import "../App.css"

const Course = (props) => {
    const { id, image, course_name, creator, actual_price, discounted_price, rating_count, rating_star, category, updated_date, description, what_you_will_learn: learnItems, content } = props;
    const { addToCart } = useCartContext()
    // console.log(id, image, course_name);
    return (
        <CourseCard>
            <div className='item-img'>
                <img src={image} alt={course_name} />
            </div>
            <div className='item-body'>
                <h5 className='item-name'>{course_name}</h5>
                <span className='item-creator'>{creator}</span>
                <div className="item-rating d-flex">
                    <span className='rating-star-val'>{rating_star}</span>
                    <StarRating rating_star={rating_star} />
                    <span className='rating-count'>({rating_count})</span>
                </div>
                <div className='item-price'>
                    <span className='item-price-new'>₦{discounted_price}</span>
                    <span className="item-price-old">₦{actual_price}</span>
                </div>
                <div className='hover-block'>
                    <div className="hover-display d-flex flex-column flex-wrap">
                        <h5 style={{ fontSize: "17px" }} className='item-name1 fw-bold'>{course_name}</h5>
                        <span style={{ opacity: "0.5" }} className='item-name1'>updated Date: {updated_date}</span>
                        <span className='item-name1'>{description}</span>
                        <div className="restrict-learn grid flex-wrap">
                            <span>{learnItems} <br /></span>
                            <span>Read more...</span>
                        </div>
                        <div>
                            <Link to={`/courses/${id}`} style={{ backgroundColor: "purple", color: "white", textDecoration: "none", padding: "10px" }}
                                className='add-to-cart-btn fw-7 d-inline-flex'>See details</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item-btns d-flex">
                <Link to={`/courses/${id}`} className='item-btn see-details-btn'>See details</Link>
                <Link to="/cart" className='item-btn add-to-cart-btn' onClick={() => addToCart(id, image, course_name, creator, discounted_price, category)}>Add to cart</Link>
            </div>
        </CourseCard>
    )
}

const CourseCard = styled.div`
    margin-bottom: 20px;
    border: 4px solid rgba(0,0,0,0.1)
    // box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
    display: flex;
    flex-direction: column;

    .hover-display{
        // height: 300px;
        position: absolute;
        margin-top: -300px;
        // margin-left: 20px;
        width: 30%;
        padding: 17px;
        gap: 8px;
        background-color: white;
          transition: all 5s ease-in-out;
        box-shadow: rgba(50, 50, 93, 0.15) 0px 16px 12px -2px, rgba(0,0,0,0.2) 0px 3px 7px -3px;
    }
    .item-name1{
        font-size: 13px;
        line-height: 1;
    }
    .restrict-learn: {
        width: 10px;
    }
    .hover-block{
        display: none;
    }

    .item-body{
        margin: 14px 0;
        padding: 4px 18px;
    }
     .item-name{
        font-size: 15px;
        line-height: 1.4;
        font-weight: 800;
     }
    .item-creator{
        font-size: 12.5px;
        fon-weight: 500;
        color: rgba(0, 0, 0, 0.6);
    }
    .rating-star-val{
        margin-bottom; 5px;
        font-size: 14px;
        font-weight: 800;
        color: #b4690e;
        margin-right: 6px;
    }
    .rating-count{
        font-size: 12.5px;
        margin-left: 3px;
        font-weight: 500;
        opacity: 0.8;
    }
    .item-price-new{
        font-weight: 700;
        font-size: 15px;
    }
    .item-price-old{
        opacity: 0.8;
        font-weight: 500;
        text-decoration: line-through;
        font-size: 15px;
        margin-left: 8px;
    }
    .item-btns{
        justify-self: flex-start;
        padding: 4px 8px 30px 18px;
        margin-top: auto;
        .item-btn{
            font-size: 15px;
            display: inline-block;
            padding: 6px 16px;
            font-weight: 700;
            transition: all 300ms ease-in-out;
            white-space: nowrap;
            color: black;
            text-decoration: none;

            &.see-details-btn{
                background-color: transparent;
                border: 1px solid black;
                margin-right: 5px;

                &:hover{
                    background-color: rgba(0, 0, 0, 0.9);
                    color: white
                }
            }
            &.add-to-cart-btn{
                background: rgba(0, 0, 0, 0.9);
                color: white;
                border: 1px solid rgba(0, 0, 0, 0.9)

                &:hover{
                    background-color: white;
                    color: rgba(0, 0, 0, 0.9)
                }
            }
        }
    }

`

export default Course