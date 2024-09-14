import React from "react";
import "./home.scss";
import { SearchBar } from "../../components";

const HomePage = () => {
  return (
    <div className="home">
      <div className="text-container">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sed in
            ab veniam excepturi. Nihil nulla quis dolore ea! Autem iste tempore
            velit ab ratione, magnam inventore ipsam sunt repudiandae.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experiences</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Properties Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="img-container">
        <img src="/img/bg.png" alt="home-bg" />
      </div>
    </div>
  );
};

export default HomePage;
