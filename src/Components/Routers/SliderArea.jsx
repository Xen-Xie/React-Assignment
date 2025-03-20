import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Slider() {
  const sliderData = [
    {
      image: "Group 9.svg",
      pg: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      name: "John Doe",
      occupation: "Chief Strategy Officer @ Company",
    },
    {
      image: "Group 9.svg",
      pg: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      name: "Rakib Hasnat",
      occupation: "CTO @ Startup",
    },
    {
      image: "Group 9.svg",
      pg: "I develop my website in My style.This is a logn time im learning web development",
      name: "Xen Xie",
      occupation: "Head of Web Development @ TechCorp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [clicked, setClicked] = useState(null); 

  // Function to move to the next slide
  const nextSlide = (isUserClick = false) => {
    setCurrentIndex((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));

    if (isUserClick) {
      setClicked("right");
      setTimeout(() => setClicked(null), 500); // Reset after 500ms
    }
  };

  // Function to move to the previous slide
  const prevSlide = (isUserClick = false) => {
    setCurrentIndex((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));

    if (isUserClick) {
      setClicked("left");
      setTimeout(() => setClicked(null), 300); // Reset after 300ms
    }
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); // No isUserClick argument here!
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="relative flex flex-col items-center text-center p-6 max-w-2xl mx-auto">
      <button
        onClick={() => prevSlide(true)}
        className={`hidden md:flex absolute left-0 md:-left-12 top-1/2 transform -translate-y-1/2 p-2 rounded-lg transition-all duration-300 ${
          clicked === "left" ? "bg-primary" : "bg-[#96ACAF]/20 hover:bg-gray-600"
        }`}
      >
        <ChevronLeft className="w-6 h-6 text-foreground" />
      </button>

      <button
        onClick={() => nextSlide(true)}
        className={`hidden md:flex absolute right-0 md:-right-12 top-1/2 transform -translate-y-1/2 p-2 rounded-lg transition-all duration-300 ${
          clicked === "right" ? "bg-primary" : "bg-[#96ACAF]/20 hover:bg-gray-600"
        }`}
      >
        <ChevronRight className="w-6 h-6 text-foreground" />
      </button>

      <div className="flex justify-center items-center mb-4 opacity-100 transition-opacity duration-700">
        <img src={sliderData[currentIndex].image} alt="Quote Icon" className="w-12" />
      </div>

      <p className="text-lg text-foreground max-w-2xl px-6 opacity-100 transition-opacity duration-700">
        {sliderData[currentIndex].pg}
      </p>

      <h3 className="text-lg font-semibold text-primary mt-4">
        {sliderData[currentIndex].name}
      </h3>
      <p className="text-[#96ACAF] text-sm">{sliderData[currentIndex].occupation}</p>

      <div className="flex gap-2 mt-6">
        {sliderData.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-primary" : "bg-[#394648]"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}

export default Slider;
