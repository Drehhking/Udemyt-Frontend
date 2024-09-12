import React from 'react'
import { StarIcon } from '@heroicons/react/outline'
import img1 from "../Images/javascript 4.jpg"
import img2 from "../Images/javascript1.jpg"
import img3 from "../Images/javascript 2.jpg"
import img4 from "../Images/javascript3.jpg"
import StarRating from "../components/StarRating"
const CourseLandingPage = ( {item}, {rating_star} ) => {
  // const { id, image, course_name, creator, actual_price, discounted_price, rating_count, rating_star, category, updated_date, description, what_you_will_learn: learnItems, content} = 
  return (
    <div className='flex flex-col items-start space-y-[1px]'>
      
      <img src={img1} className='h-32 w-full ' alt="" />
      <h2 className='font-bold text-md pt-1'>{item.title}</h2>
      <h2 className='text-xs text-gray-700'>{item.username}</h2>
      <div className='flex space-x-1'>
        <h3 className='text-orange-800 font-bold text-sm'>{item.vote}</h3>
        <div className='flex items-center'>
        <span className='rating-star-val'>{rating_star}</span>
        <StarRating rating_star={rating_star} />
        </div>
        <h3 className='text-xs '>{item.students}</h3>
      </div>
      <div className='flex space-x-4 items-center'>
          <h3 className='text-black font-bold'>{item.price}</h3>
          <h3 className='text-gray-800 text-sm line-through'>{item.oldPrice}</h3>
          <h3 className='text-black  font-bold bg-yellow-200'>{item.status}</h3>
      </div>
      </div>
  )
}

export default CourseLandingPage