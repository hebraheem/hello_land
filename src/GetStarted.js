import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const GetStarted = ()=>{
    return (
      <section>
        <Navbar />
        <div className="get-started-section">
          <div className="getstarted-form">
            <h1>get started</h1>
            <p>To get our amazing offers we’ve got to know you.</p>
            <h3>Personal Information</h3>
          </div>
        </div>

        <Footer />
      </section>
    );
}

export default GetStarted;