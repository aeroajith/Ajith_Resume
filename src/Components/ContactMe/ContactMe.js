 
import Typical from "react-typical";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";

import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import Footer from "../Footer/Footer";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
      if (screen.fadeInScreen !== props.id) return;
      Animations.animations.fadeInScreen(props.id);
    };
  
  const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const handleName= (e) =>{
    setName(e.target.value)
  }
  const handleEmail= (e) =>{
    setEmail(e.target.value)
  }
  const handleMobile= (e) =>{
    setMobile(e.target.value)
  }
  const handleMessage= (e) =>{
    setMessage(e.target.value)
  }
  

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9suctbv', 'template_zf1gqdr', form.current, 'rYXx4H-cpOCY4YU_u')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      toast.success(' Message sent successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      
      setName("");
      setEmail("");
      setMobile("");
      setMessage("");
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ToastContainer/>
      <ScreenHeading title={"Contact Me"} subHeading={"Lets Keep In Touch"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            
           Send your query here 
          </h2>{""}
          <a href="#">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="#">
            <i className="fa fa-google-plus-square"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa fa-youtube-square"></i>
          </a>
          <a href="#">
            <i className="fa fa-twiter"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form ref={form} onSubmit={sendEmail}>
      

            <label htmlFor="name">Name</label>
            <input type="text" name="user_name" value={name} onChange={handleName} required  />

            <label htmlFor="email">Email</label>
            <input type="email" name="user_email" value={email} onChange={handleEmail} required   />

            <label htmlFor="mobile">Mobile No</label>
            <input type="number" name="contact_no" value={mobile} onChange={handleMobile} required />

            <label htmlFor="message">Message</label>
            <textarea type="text" name="message"required value={message} onChange={handleMessage} />
 
            <div className="send-btn">
              <button type="submit">
                Send
                <i className="fa fa-paper-plane" />
              </button> 
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
     
  );
}

