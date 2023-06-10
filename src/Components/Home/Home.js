import React from "react";
import Profile from "./Profile";
import Footer from "./Footer";
import Header from "./Header";
import "./Home.css";

export default function Home(props) {
  return (
    <div className="home-container" id={props.id || ""}>
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}
