import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import "./Testimonial.css";

 

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options={
      loop:true,
      margin:0,
      nav:true,
      animateIn:"bounceInRight",
      animateOut:"bounceInLeft",
      dots:true,
      autoplay:true,
      smartSpeed:1000,

      responsive:{
          0:{
              items:1,
          },
          680:{
              items:1,
          },

          768:{
              items:1,
          },
          920:{
              items:1,
          },
          1200:{
              items:3,
          },
      },
  };

  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What My Client Say About Me"}
      />
      <section className="testimonial-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel 
            className="owl-carousal" 
            id="testimonial-carousal" 
            {...options}>

            <div className="col-lg-12">
              <div className="testi-item">
                <div className="testi-comment">
                  <p>
                    <i className="fa fa-quote-left" />
                    During his tenure with us, he ably handled major responsibilities as a
                    Systems Engineer, His major responsibilities lncluded System, support on our
                    Unmanned AerialVehicles (UAV) division and Media works edting.
                    <i className="fa fa-quote-right" />
                  </p>
                  <ul className="stars list-unstyled">
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                </div>
                <div className="client-info">
                  <img
                    src= "img/Testimonial/nethan.png"
                    alt="no internet connection"
                  ></img>
                  <h5> Nethan P </h5>
                  <p>CEO in Mellosys</p>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="testi-item">
                <div className="testi-comment">
                  <p>
                    <i className="fa fa-quote-left" />
                    His contribution for the testing and developement for web & mobile apps are done well, 
                    he had worked seamlessly with both our development group and with product management.
                    <i className="fa fa-quote-right" />
                  </p>
                  <ul className="stars list-unstyled">
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                </div>
                <div className="client-info">
                  <img
                    src="img/Testimonial/sathia.png"
                    alt="no internet connection"
                  ></img>
                  <h5> Sathia Jay</h5>
                  <p>Director of Inoaura Technologies</p>
                </div>
              </div>
            </div>
             
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src="img/Testimonial/shape-bg.png" alt="Photo not responding" />
        </div>
    </div>
  );
}
