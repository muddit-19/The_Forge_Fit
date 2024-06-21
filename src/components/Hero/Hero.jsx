import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_img from "../../assets/hero_image.png";
import hero_img_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import NumberCounter from "number-counter";

const Hero = () => {
  const transition = { type: "spring", duration: 3 }; //spring is a type of react library used for adding animations
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>

      <div className="left-h">
        <Header />

        {/* Best-ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "145px" : "238px" }} //Animated div
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>

          <span>The Best Fitness Club in the Town</span>
        </div>

        {/* Hero-Text */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>

          <div>
            <span>Ideal Body</span>
          </div>

          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* Figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="3" preFix="+" />
            </span>

            <span>EXPERT COACHES</span>
          </div>

          <div>
            <span>
              <NumberCounter end={978} start={800} delay="3" preFix="+" />
            </span>

            <span>MEMBERS JOINED</span>
          </div>

          <div>
            <span>
              <NumberCounter end={50} start={20} delay="3" preFix="+" />
            </span>
            
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>

        {/* Hero-Buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">
          <Link to="join-us" span={true} smooth={true}>
            Join Now
          </Link>
        </button>

        {/* Heart Rate */}
        <motion.div
          className="heart-rate"
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
        >
          <img src={Heart} alt="Heart img" />
          <span>Heart Rate</span>
          <span>116 bpm</span> {/* Animated div */}
        </motion.div>

        {/* Hero Images */}
        <img src={hero_img} alt="This is Hero img" className="hero-img" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_img_back}
          alt="This is Hero Back img"
          className="hero-img-back"
        />

        {/* Calories */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="This is Calories Chart" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
