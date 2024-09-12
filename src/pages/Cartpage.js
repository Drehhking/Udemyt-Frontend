import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../contexts/Cart_context'
import CartItem from "../components/Cartitem"
import { MdClear } from 'react-icons/md'
import Nav from '../components/Nav'

const Cartpage = () => {
  const { cart: cartItems, total_items, total_amount, clearCart } = useCartContext();

  if (!cartItems || cartItems.length < 1) {
    return (
      <NotFoundWrapper>
        <div className='container'>No items found in the cart</div>
      </NotFoundWrapper>
    )
  }

  return (
    <CartWrapper>
      {/* <Nav /> */}
      <div className='container'>
        <div className="cart-pg-title">
          <h3>Shopping Cart</h3>
        </div>
        <div className="cart-grid grid">
          {/* {card grid left} */}
          <div className="cart-grid-left">
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <div className='cart-count-info'>
                <span className="fw-bold fs-18">{total_items}</span>
                Course in Cart
              </div>
              <button type='button' className='cart-clear-btn d-flex align-items-center fs-15 fw-6 text' onClick={() => clearCart()}>
                <MdClear className='text-danger'/>
                <span className="d-inline-block align-items-center text-danger">Clear All</span>
              </button>
            </div>

            <div className='cart-items-list grid'>
              {
               cartItems && cartItems.map(cartItem => {
                  return(
                    <CartItem key={cartItem.courseID} cartItem = {cartItem}/>
                  )
                })
              }
            </div>
          </div>
          {/* end of grid left */}
          {/* cart grid right */}
          <div className='cart-grid-right'>
            <div className="cart-total">
              <span className="d-block fs-18 fw-bold">Total:</span>
              <div className='cart-total-value fw-bold'>₦{total_amount}</div>
              <button type='button' className='checkout-btn' style={{backgroundColor: "rebeccapurple", color: 'white', fontWeight: 600}}>Checkout</button>
            </div>
          </div>
          {/* end of cart grid right */}
        </div>
      </div>
    </CartWrapper>
  )
}

const NotFoundWrapper = styled.div`
  padding: 30px 0;
  font-weight: 600;
`
const CartWrapper = styled.div`
  .card-pg-title{
    padding: 20px 0 6px 0;
  }
  .cart-grid{
    row-gap: 40px;
    .cart-grid-left{
      margin-bottom: 30px;
    }

    .cart-clear-btn{
      span{
        margin-left: 6px;
      }
    }

    .cart-items-list{
      margin-top: 20px;
      row-gap: 12px;
    }
    .cart-total-value{
      font-size: 34px;
    }
    .checkout-btn{
      padding: 14px 28px;
      letter-spacing: 1px;
      margin-top: 12px;
      transition: all 300ms ease in out;

      &:hover{
        background-color: black;
      }
    }
    .cart-total{
      padding-bottom: 50px;
    }

    @media screen and (min-width: 992px){
      grid-template-columns: 70% 30%;
      column-gap: 32px;
    }
  }
`

export default Cartpage