import React from "react";
import img1 from "../Images/pexels-photo-4050319.webp";
import img2 from "../Images/front-display-picture.jpg";
import Navbar from "./Navbar";
import Courses from "./Courses"
const Main1 = () => {
  return (
    <div className="">
        <Navbar />
        <img src={img2} className="img1" alt="" />
        <div className="small-modal">
          <h1 className="text-1">The latest in learning</h1>
          <h2>Stay on top of the skills you need. Courses as low as ₦4,900 through July 4.</h2>
        </div>

        <div className="second-div">
          <Courses/>
        </div>
    </div>
  );
};

export default Main1;
