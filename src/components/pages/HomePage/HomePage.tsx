import React from "react";
import "./HomePage.css";
import { HeroVideo } from "./HeroVideo";

const HomePage: React.FC = () => {
  return (
    <div className="homepage-container">
      <HeroVideo />
    </div>
  );
};

export default HomePage;
