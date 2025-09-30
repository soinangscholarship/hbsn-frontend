import React from "react";
import "./HomePage.css";
import ImageSlider from "../../organism/ImageSlider/ImageSlider";

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="homepage-slider-shadow">
        <ImageSlider />
      </div>
      <div className="homepage-mission">
        <h2>Mission statement</h2>
        <p>
          The Soi Nang scholarship program is dedicated to identifying,
          nurturing, and empowering resilient young talents through providing
          financial aid to cultivate an ecosystem for holistic growth, where
          scholars are fortified by unwavering mentorship and support.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
