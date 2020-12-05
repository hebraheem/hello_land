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

const Home = ()=>{
    return (
      <section>
        <Navbar />
        <div className="banner grid">
          <div
            style={{
              background: `url(${AestheticDesign})no-repeat`,
              marginTop: "20px",
            }}
          >
            <h3 className="turn">You can turn back the hands of time!</h3>
            <p className="turn-paragraph">
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
        <div className="hero-2 grid">
          <div className="banner-img">
            <img src={hero_2} className="hero_1 hero_2" alt="hero-1" />
          </div>
          <div
            className="banner-text"
            style={{
              background: `url(${Aestheticdesign2})no-repeat`,
              marginTop: "20px",
            }}
          >
            <h3 className="turn">Go Live to teach your Students with ease</h3>
            <p className="turn-paragraph">
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
        <div className="banner grid">
          <div
            style={{
              background: `url(${AestheticDesign})no-repeat`,
              marginTop: "20px",
            }}
          >
            <h3 className="turn">
              Improve the grades of your students with technology
            </h3>
            <p className="turn-paragraph">
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
        <div
          className="hero4 grid"
          style={{ background: `url(${StylishFeel})` }}
        >
          <div className="banner-img">
            <img src={hero4} className="hero_1 hero_2" alt="hero-1" />
          </div>
          <div
            className="banner-text"
            style={{
              background: `url(${Aestheticdesign2})no-repeat`,
              marginTop: "20px",
            }}
          >
            <h3 className="turn">Let’s Build Something Great Together</h3>
            <p className="turn-paragraph">
              The Success of your students is your Success, and your Success is
              our Success. Join Reatent and lets win together
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
