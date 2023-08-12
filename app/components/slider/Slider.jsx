"use client";

import { useCallback, useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
import Slides from "./Slides";

function Slider({ slides, dur = 300 }) {
  const min = 0;
  const max = slides.length - 1;

  const [currentSlide, setCurrentSlide] = useState(min);

  const changeSlide = useCallback(
    (action) => {
      if (action === "next") {
        if (currentSlide === max) {
          setCurrentSlide(min);
          return;
        }
        setCurrentSlide((prev) => prev + 1);
      }
      if (action === "prev") {
        if (currentSlide === min) {
          setCurrentSlide(max);
          return;
        }
        setCurrentSlide((prev) => prev - 1);
      }
    },
    [min, max, currentSlide]
  );
  return (
    <div className="relative">
      <button
        className="p-2 rounded bg-[orange] absolute top-[50%] left-[2vw] z-10"
        onClick={() => changeSlide("prev")}
      >
        <FcPrevious fill="white"/>
      </button>
      <button
        className="p-2 bg-[orange] rounded absolute top-[50%] right-[2vw] z-10"
        onClick={() => changeSlide("next")}
      >
        <FcNext fill="white"/>
      </button>
      <Slides cur={slides[currentSlide]} />
    </div>
  );
}

export default Slider;
