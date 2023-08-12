"use client";

function Banner() {

  return (
    <div
      className="
        relative
        bg-center
        sm:bg-top
        bg-[url('/images/mobileBanner.jpg')]
        sm:bg-[url('/images/banner.jpg')]
        h-[88vh]
        bg-cover
        bg-no-repeat
        w-full
        flex
        flex-col
        justify-center
        items-center
        text-center
        pt-[45vh]
        sm:pt-0
        overflow-x-hidden
    "
    >
      <p className="text-[orange] sm:text-[#3c3c3c9c] relative font-bold text-[30px] sm:text-[4vw] typing">
        Welcome To Our
      </p>
      <span className="text-[white] sm:text-[#f5deb3a8] relative font-bold text-[30px] sm:text-[5vw] glitch">
        Gaming Community
      </span>
      {/* <a
        href="#bannertwo"
        className="bg-[orange] opacity-90 sm:opacity-60 text-[25px] sm:text-lg text-white text-bold px-4 py-2 mt-[15vh] rounded-full"
      >
        Get Started
      </a> */}
    </div>
  );
}

export default Banner;
