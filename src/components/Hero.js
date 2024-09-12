import React from 'react'
import styled from 'styled-components'
import { other_images } from '../utils/images'

const Hero = () => {
  return (
    <HeroWrapper className='bg-black'>
      <div className='container h-100 '>
        <div className='hero-content'>
          <h1>Prepare for your IT certificate</h1>
          <p>Explore a future in IT. Start learning
            toward AWS certification, CompTIA A+ certification, and more.</p>
        </div>
      </div>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.div`
  background: url(${other_images.main_picture}) center/cover no-repeat;
  height: 300px;
  .container{
     display: flex;
    align-items: center;
    // margin-top: 3px;
  .hero-content{
      background-color: white;
      max-width: 400px;
      width: 100%;
      margin-left: 0px;
      padding: 20px;

      h1{
        font-size: 32px,
        margin-bottom: 5px;
        white-space: wrap;
        font-weight: 600;
        font-family: Georgia, 'Times New Roman', Times, serif;
      }
        p{
          font-size: 15px;
        }
    }
  }
`

export default Hero