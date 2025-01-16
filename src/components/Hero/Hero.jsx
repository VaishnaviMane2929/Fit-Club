import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
// import Heart from "../../assects/heart.png";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="left-h">
        <Header />

        {/* the best ad */}
        <div className="the-best-ad">
          <div></div>
          <span> the best fitness club in the town</span>
        </div>
        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your </span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
        </div>
        {/* end the hero text */}

        {/* figures */}

        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coches</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>{" "}
          <div>
            <span>+50</span>
            <span>fitness programs </span>
          </div>
        </div>

        {/* hero btn  */}

        <div className="hero-buttons">
          <button className="btn">Get Strted </button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      {/*  right side */}
      <div className="right-h">
        <button className="btn">Join Now</button>

        <div className="heart-rate">
          {/* <img src={Heart} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;