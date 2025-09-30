import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./ImageSlider.css";
import img1 from "../../../assets/landing1.jpg";
import img2 from "../../../assets/landing2.jpg";
import img3 from "../../../assets/landing3.jpg";

const images = [img1, img2, img3];

const ImageSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-wrapper">
      <button className="slider-btn left" onClick={prevSlide}>
        <FaChevronLeft />
      </button>
      <img src={images[current]} alt="slide" className="slider-img" />
      <button className="slider-btn right" onClick={nextSlide}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ImageSlider;
