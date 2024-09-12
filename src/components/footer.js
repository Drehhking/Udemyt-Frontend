import React from 'react'
import styled from 'styled-components'
import box101 from "../Images/box101.png"
import eventbrite from "../Images/event.png"
import nasdaq from "../Images/nasdaq.png"
import netapp101 from "../Images/netapp101.png"
import volkswagen from "../Images/vokswagen100.png"

const footer = () => {
    return (
        <FooterWrapper>
            <div style={{ backgroundColor: "#2D2F31", color: "white" }} className='main'>
                <div className="teach-online">
                    <div className="teach d-flex justify-content-between">
                        <span className='fw-bold'>Teach the world online</span>
                        <div>
                            <button className="foot-button fw-bold">Teach on Udemy</button>
                        </div>
                    </div>
                    <div className="online">
                        <span>Create an online video course, reach students across the globe, and earn money</span>
                    </div>
                </div>
                <hr />
                <div className='company d-flex justify-content-between align-items-center p-3'>
                    <div>
                        <span className='fw-bold'>Top companies choose Udemy Business to build in-demand career skills.</span>
                    </div>
                    <div style={{ gap: "10px" }} className='d-flex justify-content-around'>
                        <img className='imgg' src={nasdaq} alt="" />
                        <img className='imgg11' src={volkswagen} alt="" />
                        <img className='imgg11' src={box101} alt="" />
                        <img className='imgg' src={netapp101} alt="" />
                        <img className='imgg' src={eventbrite} alt="" />
                    </div>
                </div>
                <hr />
                <div className="link d-flex justify-content-between p-3">
                    <div className=' dlx grid'>
                        <a href="/home">Udemy Business</a>
                        <a href="/home">Teach on Udemy</a>
                        <a href="/home">Get the app</a>
                        <a href="/home">About us</a>
                        <a href=".home">Contact us</a>
                    </div>
                    <div className='  dlx grid'>
                        <a href="/home">Careers</a>
                        <a href="/home">Blog</a>
                        <a href="/home">Help and Support</a>
                        <a href="/home">Affliate</a>
                        <a href="/home">Investors</a>
                    </div>
                    <div className='  dlx grid'>
                        <a href="/home">Terms</a>
                        <a href="/home">Privacy policy</a>
                        <a href="/home">Cookie settings</a>
                        <a href="/home">Sitemap</a>
                        <a href="/home">Accessibility statement</a>
                    </div>
                    <div className=''>
                        <button className='foot-button1'>English</button>
                    </div>
                </div>
            </div>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div`
    .main{
         padding: 10px 20px 0 20px;
         width: 100%;
    }
    .foot-button{
        border: 2px solid white;
        padding: 5px;
    }
     .foot-button1{
     border: 2px solid white;
     padding: 5px;
 }
    .company{
        span{
            font-size: 19px;
        }
    }
    .imgg{
        filter: brightness(0) invert(1);
        height: 50px;
    }
    .imgg11{
    filter: brightness(0) invert(1);
    height: 30px;
    margin-top: 5px;
    }
    .link{
        font-size: 14px;
    }
    .dlx{
        gap: 8px;
    }

`

export default footer