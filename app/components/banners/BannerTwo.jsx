"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import featureList from "../../assets/data";

function BannerTwo() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      id="bannertwo"
      className="flex flex-col-reverse sm:flex-row gap-0 w-100 p-3 bg-[url('/images/war.jpg')] bg-right-bottom bg-cover overflow-hidden"
    >
      <div className="w-[95vw] sm:w-[55vw] p-2 text-white pt-[3vh] sm:pt-[6vh]">
        <h1 className=" text-[6vw] sm:text-[2vw] opacity-50 text-[500]">
          Join the Ultimate Battleground!
        </h1>
        <ul className="mt-[4vh] w-full sm:w-3/4 list-disc ml-[3vw] sm:ml-[1vw] text-[16px] sm:text-[18px] grid gap-y-4">
          {featureList.map((item, index) => (
            <li
              style={{ opacity: 0.4 }}
              data-aos="fade-left"
              className="font-serif font-[500] drop-shadow-sm"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div
        className="text-white rounded drop-shadow-3xl w-[95vw] sm:w-[40vw] h-[35vh] sm:h-[80vh]
        bg-[url('/images/b2Whole.jpg')] bg-cover p-4 flex flex-col
        justify-center bg-[red] gap-y-[5vh] sm:gap-y-[10vh] sm:items-baseline items-center"
      >
        <p
          style={{ opacity: 0.5 }}
          data-aos="fade-up"
          className="w-[90vw] sm:w-[35vw] text-[37px] text-center backdrop-opacity-10 backdrop-invert font-[800] opacity-70 sm:text-[3.5vw]"
        >
          Play Productively
        </p>
        <p
          style={{ opacity: 0.5 }}
          data-aos="fade-left"
          data-aos-duration="1000"
          className="text-[25px] text-center opacity-90 font-[500] sm:text-[2.5vw] font-serif"
        >
          Follow through on less and win significant Prices
        </p>
      </div>
    </div>
  );
}

export default BannerTwo;
