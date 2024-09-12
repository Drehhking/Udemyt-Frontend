// import React from 'react';
// import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs"
// import styled from 'styled-components';

// const StarRating = ({rating_star}) => {
  
//   // console.log(rating_star);
//   const stars = Array.from({ length: 5 }, (_, idx) => {
//     const val = idx + 0.5
//     return (
//       <Star Key={idx}>
//         {
//           rating_star > idx + 1 ? (<BsStarFill />) : rating_star > val ? (<BsStarHalf />) : (<BsStar />)
//         }
//       </Star>
//     )
//   })
//   return (
//     <div className="d-flex">{stars}</div>
//   )
// }

// const Star = styled.span`
//   color: #e59819;
//   margin-right: 2px;
//   font-size: 13px;
//   margin-bottom: -5px!important;
// `

// export default StarRating



import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import styled from 'styled-components';

const StarRating = ({ rating }) => {
    // Function to render stars based on rating
    const renderStars = () => {
        const fullStars = Math.floor(rating); // Number of full stars
        const hasHalfStar = rating % 1 !== 0; // Check if there's a half star
        const emptyStars = 5 - Math.ceil(rating); // Remaining empty stars

        const stars = [];

        // Push full stars
        for (let i = 0; i < fullStars; i++) {
            stars.push(<BsStarFill key={`full-${i}`} />);
        }

        // Push half star if needed
        if (hasHalfStar) {
            stars.push(<BsStarHalf key="half" />);
        }

        // Push empty stars
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<BsStar key={`empty-${i}`} />);
        }

        return stars;
    };

    return <StarContainer>{renderStars()}</StarContainer>;
};

// Styled component for star container
const StarContainer = styled.div`
    display: flex;
    align-items: center;
    color: #f4b400; /* Customize the star color */
    font-size: 15px; /* Size of the stars */
`;

export default StarRating;
