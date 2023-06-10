import React from "react";
import Typical from "react-typical";
import Resume from "../../Components/Ajith Kumar.pdf"
import "./Profile.css";
import ScrollService from "../../Utilities/ScrollService";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const FadeUp = batch(Fade(), Move())
function Profile() {
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={FadeUp}>
        <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
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
          </div>
          <div className="profile-details-name">
            <sapn className="primary-text">
              {""}
              Hello, I'm <span className="highlighted-text">Ajith Kumar</span>
            </sapn>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h2>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Web Developer",
                    4000,
                    "Software Testing",
                    4000,
                    "UAV Integration Engineer",
                    4000,
                    "Drone Pilot ",
                    4000,
                  ]}
                />
              </h2>
              <span className="profile-role-tagline">
                Creativity Creates Opportunity
              </span>
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
              {""}
              Hire Me{""}
            </button>
            <a href={Resume} download={"Ajith Resume"}>
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>

        </Animator>
      </ScrollPage>

    </ScrollContainer>
    
  );
}

export default Profile;
