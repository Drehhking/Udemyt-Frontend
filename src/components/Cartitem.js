import React from 'react'
import styled from 'styled-components'
import { FaTrashAlt } from 'react-icons/fa'
import { useCartContext } from '../contexts/Cart_context'

const Cartitem = ({cartItem}) => {
  const {removeFromCart} = useCartContext()

  return (
    <CartItemWrapper className='grid'>
      <div className="cart-item-img">
        <img src={cartItem.image} alt={cartItem.course_name} />
      </div>
      <div className="cart-item-info">
        <p className='fw-bold fs-15'>{cartItem.course_name}</p>
        <span className='cart-item-creator fs-14 opacity-09'>By {cartItem.creator}</span>
        <div className='fw-bold' style={{color: "rebeccapurple"}}>₦{cartItem.discounted_price}</div>
        <div style={{backgroundColor: "orange", fontWeight: 700}} className='cart-item-category fs-12 d-inline-block text-capitalize text-white'>
          {cartItem.category}
        </div>
        <br />
        <button type='button' className='remove-btn fs-13 text-dark fw-6 d-flex align-items-center' onClick={() => removeFromCart(cartItem.courseID)}>Remove<span><FaTrashAlt/></span></button>
      </div>
    </CartItemWrapper>
  )
}

const CartItemWrapper = styled.div`
  grid-template-columns: 110px auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;

  .cart-item-img{
    width: 100px;
    height: 100px;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .cart-item-category{
    margin-top: 16px;
    border-radius: 6px;
    padding: 3px;
  }
  .remove-btn{
    margin-top: 16px;
    transition: all 3s ease-in-out;
    &:hover{
      color: purple;
    }
  }

`

export default Cartitem