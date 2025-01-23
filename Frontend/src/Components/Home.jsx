import React, { useState, useEffect } from "react";
import kitchen from "../assets/images/kitchen.jpg";
import LivingRoom from "../assets/images/Living room.jpg";
import Bedroom from "../assets/images/Master Bedroom.avif";
import Services from "./Services.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Project from "./Project.jsx";
import { NavLink, Link } from "react-router-dom";
const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const showcaseImages = [
    {
      url: kitchen,
      title: "Luxury Kitchen",
      description: "Cooking space with elegance and style",
    },

    {
      url: LivingRoom,
      title: "Modern Living Room",
      description: "Sleek design for everyday living",
    },

    {
      url: Bedroom,
      title: "Master Bedroom",
      description: "Comfort and luxury in harmony",
    },
  ];

  useEffect(() => {
    const transitionTimer = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
        setNextImageIndex((nextImageIndex + 1) % showcaseImages.length);
        setIsTransitioning(false);
      }, 1000);
    }, 4000);

    return () => {
      clearInterval(transitionTimer);
    };
  }, [nextImageIndex]);

  // Hero Section Component
  const HeroSection = () => (
    <div className="relative h-screen overflow-hidden">
      {/* Current Image */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <img
          src={showcaseImages[currentImageIndex].url}
          alt={showcaseImages[currentImageIndex].title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Next Image (preloaded) */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={showcaseImages[nextImageIndex].url}
          alt={showcaseImages[nextImageIndex].title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay and Content */}
      <div className="absolute inset-0 bg-black bg-opacity-30">
        <div className="container mx-auto px-6 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-6xl font-bold mb-4 drop-shadow-lg">
              Malhotra Architects
            </h1>
            <p className="text-2xl mb-8 drop-shadow-md">
              {showcaseImages[currentImageIndex].description}
            </p>
            <Link
              to="/project"
              className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-300 transition-colors text-lg font-semibold"
            >
              Explore Our Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {showcaseImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentImageIndex(index);
                setNextImageIndex((index + 1) % showcaseImages.length);
                setIsTransitioning(false);
              }, 1000);
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              currentImageIndex === index ? "bg-white scale-110" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );

  // Rest of the components...
  return (
    <div className="min-h-screen bg-gray-50 ">
      <HeroSection />

      {/* Services Section */}

      <section className="py-2 bg-white">
        <About />
      </section>

      <section className=" bg-white">
        <Services />
      </section>

      <section className="py-2 bg-white">
        <Project />
      </section>

      <section className=" bg-white">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
