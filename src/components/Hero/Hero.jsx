import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import Heart from '../../../src/assets/heart.png'
import hero_image from '../../../src/assets/hero_image.png'
import hero_image_back from '../../../src/assets/hero_image_back.png'
import Calories from '../../../src/assets/calories.png'

import {motion} from 'framer-motion'

const Hero = () => {
  const transition = {type: 'spring', duration: 3}
  return (
    <div className="Hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
          initial={{left:'238px'}}
          whileInView={{left: '8px'}}
          transition={transition}
          
          
          ></motion.div>
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
          <img src={Heart} alt="" />
          <span>Heart Rate </span>
            <span>116 bpm</span>
        </div>
        {/* ====hero section===== */}
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />
        {/* ====caloride===== */}
        <div className="calories">
          <img src={Calories} alt="" />
          <div>
          <span>Calories Burned</span>
          <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;