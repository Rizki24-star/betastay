import React from "react";
import "./home.scss";

const Home = () => {
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
        </div>
      </div>
      <div className="img-container">
        <img src="/img/bg.png" alt="home-bg" />
      </div>
    </div>
  );
};

export default Home;
