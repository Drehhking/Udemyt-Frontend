import React from 'react'
import styled from 'styled-components'
import { MdMenu, MdShoppingCart, MdOutlineAccountCircle } from "react-icons/md"
import { Link } from "react-router-dom"
import { useSidebarContext } from '../contexts/Sidebar_context'
import { useCartContext } from '../contexts/Cart_context'
// import { useProfileSidebarContext } from '../contexts/profileSidebar_context'

const Nav = () => {
  const { total_items } = useCartContext()
  const { openSidebar } = useSidebarContext();
  // const { openProfile } = useProfileSidebarContext()
  ;
  return (
    <NavbarWrapper classname="bg-white d-flex  ">
      <div className='container w-100 '>
        <div className='brand-and-toggler d-flex justify-content-between w-100 '>
          <Link to="" className='navbar-brand text-uppercase ls-1 fw-bold'>
            <span className='blue'>udemy</span>
          </Link>

          {/* <div className='d-flex justify-content-around'> */}
          {/* <span>Categories</span> */}
          {/* <input style={{border: "2px solid black"}} type="text" placeholder='Search for anything' /> */}
          {/* </div> */}

          <div className='navbar-btns'>
            <Link to="/profile">
              <button type='button' className='sidebar-open-btn2' >
                <MdOutlineAccountCircle />
              </button>
            </Link>
            <Link to="/cart" className='cart-btn'>
              <MdShoppingCart />
              <span className='item-count-badge'>{total_items}</span>
            </Link>
            <button type='button' className='sidebar-open-btn' onClick={() => openSidebar()}>
              <MdMenu />
            </button>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`
height: 50px;
box-shadow: rgba(50, 50, 93, 0.15) 0px 16px 12px -2px, rgba(0,0,0,0.2) 0px 3px 7px -3px;

.navbar-brand{
  font-size: 23px;
}
  .cart-btn{
    margin-right: 18px;
    font-size: 19px;
    position: relative;
    color: black;
      .item-count-badge{
    background-color: orange;
    position: absolute;
    right: -10px;
    top: -10px;
    font-size: 12px;
    font-weight: 700;
    display: block;
    width: 19px;
    height: 19px;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  }
  .sidebar-open-btn{
    transition: all 300ms ease-in-out;
     :hover{
      opacity: 0.7;
     }
  }
     .sidebar-open-btn2{
        font-size: 20px;
        margin-right: 10px;
        display: flex;
        // align-items: center;
     }
`;

export default Nav