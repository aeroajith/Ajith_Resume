import React, { useState } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import "./Resume.css"
 

const Resume = (props) => {
  /* STATES */

  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {

 
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>

          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>

        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
           
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work-History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "Python", ratingPercentage: 85 },
    { skill: "JavaScript", ratingPercentage: 70 },
    { skill: "React Js", ratingPercentage: 80 },
    { skill: "Node Js", ratingPercentage: 25 },
    { skill: "SQLite", ratingPercentage: 80 },
    { skill: "Django", ratingPercentage: 90 },
    { skill: "HTML5", ratingPercentage: 80 },
    { skill: "CSS3", ratingPercentage: 80 },
    { skill: "PostgreSQL", ratingPercentage: 75 },
    { skill: "Pix4D", ratingPercentage: 80 },
  ];

  const projectDetails = [
    {
      title: "Medical Management System with Admin Dashboard",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "Admin site provides overall management of Medical sytem with includes bill generation and the data had been incoroprated with detailed in home dashboard page"
        ,
      subHeading: "Technologies Used: React Js, Django Rest API, PostgreSQL, Bootsrap, AWS-EC2, RDM, S3 Bucket",
    },
    
    {
      title: "Ecommerce Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Online ecommerce website for showcasing and selling products online with payment system integration, both Paypal and Stripe",
      subHeading:
        "Technologies Used: HTML5, CSS3, Javascript, J-quary & Ajax, Django, Bootstrap.",
    },{
      title: "Personal Portfolio Resume",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React Js, Bootsrap, EmailJs"
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Bachelor’s in Aeronautical Engineering"}
        subHeading={"Adhiyamaan College of Engineering, Hosur, Tamilnadu."}
        fromDate={"2017"}
        toDate={"2013"}
      />

      <ResumeHeading
        heading={"Higher Secondary School"}
        subHeading={"IVN Government Hr., Sec., School Kandhili, Tamilnadu."}
        fromDate={"2013"}
        toDate={"2012"}
      />

      <ResumeHeading
        heading={"High School "}
        subHeading={"IVN Government Hr., Sec., School Kandhili, Tamilnadu."}
        fromDate={"2011"}
        toDate={"2010"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Inoaura Technologies"}
          subHeading={"Software Testing Engineer"}
          fromDate={"2023"}
          toDate={"Present"}
        />

        <div className="experience-description">
          <span className="resume-description-text">
            Currently working as a software testing engineer for web and mobile application and also have an ability to transform as a full stack web developer.
          </span>
        </div>

        <div className="experience-description">
          <span className="resume-description-text">
            - Developing an ecommerce website with the help of Django rest API and React Js for 
            managing the products, cart, checkout, reviews, users, payment etc.
          </span>
          <br/><br/>
          <span className="resume-description-text">
            - I stretch my mental capacity to develope UI as per the given
            designs.{" "}
          </span>
          <br/><br/>
          <span className="resume-description-text">
            
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span> {skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      <h6>Full stack Medical Admin site Link :
      <a href="https://ragavimedical.online/" target="_blank"> https://ragavimedical.online/</a>
      </h6>
    
      {projectDetails.map((projectDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.duration.fromDate}
          toDate={projectDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      
      <ResumeHeading
        heading="Aeromodelling"
        description="Fabricating UAVs and drones having fun with flying with them, not only fun having a deep knowledge and getting some creting ideas to become professional outcome "
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    
    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="oops no internet connection"
        />
         <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div
      className="resume-container screen-container"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()} </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
