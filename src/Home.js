import React from 'react';
import Navbar from './Navbar'
import {NavLink} from 'react-router-dom'
import AestheticDesign from "./images/AestheticDesign.png";
import Aestheticdesign2 from "./images/Aestheticdesign2.png";
import StylishFeel from "./images/StylishFeel.png";
import hero_1 from "./images/hero_1.png"
import hero_2 from "./images/hero_2.png";
import hero_3 from "./images/hero_3.png";
import hero4 from "./images/hero4.png";
import Footer from './Footer'
import Review from './Review';
import Underline from "./images/Underline.png";

const Home = ()=>{
    return (
      <section>
        <Navbar />
        <div className="banner">
          <img src={AestheticDesign} alt="" className="aesthetic" />
          <div className="banner-text">
            <h3>You can turn back the hands of time!</h3>
            <p>
              Have all your classes recorded and brought back to your Students
              on request
            </p>
            <NavLink to="/getstarted">
              <button className="banner-btn">Get started</button>
            </NavLink>
          </div>
          <div className="banner-img">
            <img src={hero_1} className="hero_1" alt="hero-1" />
          </div>
        </div>
        {/* /////////////////////////////// */}
        <div className="banner hero-2">
          <div className="banner-img img-left">
            <img src={hero_2} className="hero_2" alt="hero-1" />
          </div>
          <div className="banner-text">
            <img src={Aestheticdesign2} alt="" className="aesthetic2" />
            <h3>Go Live to teach your Students with ease</h3>
            <p>
              Our Platform gives you the ability to live stream lectures to your
              students, also the videos would be made avialiable on the platform
              for reference later
            </p>
            <NavLink to="/getstarted">
              <button className="banner-btn">Get started</button>
            </NavLink>
          </div>
        </div>
        {/* ================== */}
        <div className="banner">
          <div
            className="banner-text"
            style={{
              background: `url(${AestheticDesign})no-repeat`,
              marginTop: "20px",
            }}
          >
            <h3>Improve the grades of your students with technology</h3>
            <p>
              Reatent has proven through our research to help students perform
              better, in their assesments.
            </p>
            <NavLink to="/getstarted">
              <button className="banner-btn">Get started</button>
            </NavLink>
          </div>
          <div className="banner-img">
            <img src={hero_3} className="hero_1" alt="hero-1" />
          </div>
        </div>
        {/* ================================== */}
        <section className="container">
          <div className="title">
            <h2 className="client-say">What Our Client Say</h2>
            <img
              src={Underline}
              alt=""
              className="img-underline"
              style={{ width: "50%" }}
            />
            <p className="our-word">
              Our word we keep and our word speak for us.
            </p>
          </div>
          <Review />
        </section>
        <div
          className="hero4 banner"
          style={{ background: `url(${StylishFeel})` }}
        >
          <div className="banner-img img-left">
            <img src={hero4} className="hero_2" alt="hero-1" />
          </div>
          <div className="banner-text">
            <h3>Let’s Build Something Great Together</h3>
            <p>
              The Success of your students is your Success, and your Success is
              our Success.
              <br /> Join Reatent and lets win together
            </p>
            <NavLink to="/getstarted">
              <button className="banner-btn">Get started</button>
            </NavLink>
          </div>
        </div>
        <Footer />
      </section>
    );
}

export default Home;
