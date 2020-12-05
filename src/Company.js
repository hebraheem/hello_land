import React from "react";
import Navbar from './Navbar'
import Footer from "./Footer";
import StylishFeel from "./images/StylishFeel.png";
import companyImg from "./images/companyImg.png";

const Company = () => {
  return (
    <section>
      <Navbar />
      <div className="contact-hero">
        <img src={companyImg} alt="company design" />
      </div>
      <div className="about-us">
        <h1>About Us</h1>
        <p className="about-text">
          Reatent was developed by Franciseth Nigeria Ltd. with the vision of
          providing a smart solution that meets the demand of students thereby
          aiding their retention level. Reatent is an Indigenous and simplified
          technological web application which allows students to retrieve and
          watch recorded videos of their lecturers at their convenience anywhere
          and anytime. <br /> <br />
          Our Features <br />
          On Reatent, you have the access to;
          <br />
          1. Video on Demand (Watch recorded videos of your lectures) <br />
          2. Livestreaming of lectures (Go live with your lecturer/tutor) <br />
          <br />
          Our Goal <br />
          Reatent aims to ensure the delivery of quality education and promote
          continuous learning for all students in various educational
          institution by providing the essential resources for retention in
          their learning process.
        </p>
      </div>
      <div className="unique">
        <h1>What makes us Unique</h1>
        <p className="unique-text">
          “A friend in need is Reatent Indeed”, Reatent is not just an
          application but a friend to students because it creates an avenue to
          solve the problem of retention for past lectures and granting them
          access to watch them over and over again.
          <br />
          <br /> It was discovered that majority of students are only able to
          recall 5% of lectures received in their lecture halls and this has
          made Reatent a solution provider which encompasses unique features for
          delivery of past lectures to aid retention to students at their
          fingertips. <br />
          Our unique feature of Video on Demand would help consolidate
          institutions effort in delivering quality education which would be
          reflective on students’ performance and our Livestreaming feature
          would aid real time broadcast of lecturers to disperse locations for
          distant learning students.
          <br />
          <br /> With our unique features, it helps to also bridge the barrier
          of distance to the part time students who are not usually fully
          present for the normal academic calendar of an institution.
          <br /> Our target is to ensure that the quality of education through
          Reatent is brought to the door step of every student studying in any
          institution across the globe and with our unique resources and
          features, academic excellence will be optimally attained by students
          learning in every institution.
        </p>
      </div>
      <div className="why-plat">
        <h1>Why should you use our platform?</h1>
        <p className="why-plat-text">
          Are you tired of trying to recall every of your lectures? <br />
          With Reatent, rather than lurking around to get notes from previous
          lectures, students have an easy access to retrieve and watch recorded
          videos of their lecturers at their convenience. So what are you
          waiting for? Start Reading and be Retentive!!
        </p>
      </div>
      <div className="careers">
        <h1>Careers</h1>
        <p className="careers-text">
          We would be working with some amazing people who would be Admins in
          each institution and the institution will be charged with the function
          of selecting these admins based on some certain criteria with few
          listed below: <br />• They must be passionate about education. <br />•
          They must be computer literates <br />
          <br />
          You can email info@reatent.net for opportunity that arise from time to
          time.
        </p>
      </div>
      <div className="team">
        <h1>Our Team</h1>
        <div className="team-img" style={{ background: `url(${StylishFeel})` }}>
          <img src={{}} alt="hero 1"  className="contact-avatar"/>
          <img src={{}} alt="hero 2"  className="contact-avatar"/>
          <img src={{}} alt="hero 3"  className="contact-avatar"/>
          <img src={{}} alt="hero 4"  className="contact-avatar"/>
          <img src={{}} alt="hero 5"  className="contact-avatar"/>
          <img src={{}} alt="hero 6"  className="contact-avatar"/>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Company;
