"use client";

import { useState, useEffect } from "react";
import "./stylebutton.css";
import { BiArrowToTop } from "react-icons/bi";

const Upbutton = () => {
  const [to_top, setto_top] = useState(false);

  useEffect(() => {
    // Ensure this code only runs in the browser
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setto_top(true);
      } else {
        setto_top(false);
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once

  const topHandelar = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={topHandelar}
      className={to_top ? "button_up active" : "button_up"}
    >
      <BiArrowToTop />
    </button>
  );
};

export default Upbutton;
