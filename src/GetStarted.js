import React,{useState} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Modal from "./Modal";
import GetStartedImage from './images/GetStartedImage.png';
import { useGlobalContext } from "./context";


const GetStarted = ()=>{
  const [inputs, setInputs] = useState({
    title: "", Name: "", number: "", email:"", designation:"", institution:"", website:"", country:"", state:"", city:"", students:""
  })

  const handleChange=(e)=>{
    const name= e.target.name;
    const value = e.target.value;
    setInputs({...inputs, [name]: value})
  }
  const { OpenModal} = useGlobalContext();

  const handleSubmit =(e)=>{
    e.preventDefault()
  }
    return (
      <section>
        <Navbar />
        <div className="get-started-section">
          <div className="getstarted-form">
            <h1>Get started</h1>
            <p>To get our amazing offers we’ve got to know you.</p>
            <h3>Personal Information</h3>
            <form action="" className="form" onSubmit={handleSubmit}>
              <div className="get-started-input">
                <input
                  type="text"
                  name="title"
                  value={inputs.title}
                  onChange={handleChange}
                  placeholder="Title*"
                  required
                />
                <input
                  type="text"
                  name="Name"
                  value={inputs.Name}
                  onChange={handleChange}
                  placeholder="Name*"
                  required
                />
              </div>
              <div className="get-started-input">
                <input
                  type="text"
                  name="number"
                  value={inputs.number}
                  onChange={handleChange}
                  placeholder="Mobile number*"
                  required
                />
                <input
                  type="text"
                  name="email"
                  value={inputs.email}
                  onChange={handleChange}
                  placeholder="Email address*"
                  required
                />
              </div>
              <div className="get-started-input">
                <input
                  type="text"
                  name="designation"
                  value={inputs.designation}
                  onChange={handleChange}
                  placeholder="Designation (optional)"
                  required
                />
              </div>
              <h3>Institution Information</h3>
              <div className="get-started-input">
                <input
                  type="text"
                  name="institution"
                  value={inputs.institution}
                  onChange={handleChange}
                  placeholder="Name of institution*"
                  required
                />
                <input
                  type="text"
                  name="website"
                  value={inputs.website}
                  onChange={handleChange}
                  placeholder="Website (optional)"
                  required
                />
              </div>
              <div className="get-started-input">
                <input
                  type="text"
                  name="country"
                  value={inputs.country}
                  onChange={handleChange}
                  placeholder="Country*"
                  required
                />
                <input
                  type="text"
                  name="state"
                  value={inputs.state}
                  onChange={handleChange}
                  placeholder="State*"
                  required
                />
              </div>
              <div className="get-started-input">
                <input
                  type="text"
                  name="city"
                  value={inputs.city}
                  onChange={handleChange}
                  placeholder="City*"
                  required
                />
                <input
                  type="number"
                  name="students"
                  value={inputs.students}
                  onChange={handleChange}
                  placeholder="Number of students*"
                  required
                />
              </div>
              <button
                className="get-started-button"
                onClick={() => OpenModal()}
              >
                Get Started
              </button>
            </form>
            {/* <button className="get-started-button" onClick={() => OpenModal()}>
              Get Started
            </button> */}
          </div>
          <div className="get-started-img-box">
            <img src={GetStartedImage} alt="" className="get-started-img" />
          </div>
        </div>
        <Modal />
        <Footer />
      </section>
    );
}

export default GetStarted;