"use client";

import { roomMatch } from "@/app/assets/data";
import BannerMsg from "@/app/components/banners/BannerMsg";
import Card from "@/app/components/Card";
import Image from "next/image";
import { notFound } from "next/navigation";

function Register({ params }) {
  const list = ["bgmi", "ff"];

  if (!list.includes(params.platform)) return notFound();

  const room = roomMatch.filter((item) => item.type === params.platform);


  const titleList = {
    ff: "Free Fire",
    bgmi: "Battle Ground Mobile India",
  };

  return (
    <div className="pt-[2vh]">
      <div className="w-[90%] flex ml-[5vw] items-center">
        <div className="hidden sm:block w-1/2 px-[1vw] py-[2vh] bg-contain flex items-center justify-center">
          <Image
            quality={100}
            src={
              "https://global-s3.s3.us-west-2.amazonaws.com/small_Group_6769_9e6e93b0db_050eb0f96d_58b12d2da9.png"
            }
            height={1000}
            width={1000}
            alt=""
            className="w-full"
          />
        </div>
        <div className="block mb-[3.5vh]">
          <h1 className="text-[skyblue] text-[25px] mb-[1.5vh] sm:text-[40px] font-[600]">
            Money Back Policies
          </h1>
          <ul className="dottedLi grid gap-y-3 text-[grey]">
            <li>If the room match is cancelled, your money will be repaid.</li>
            <li>
              If a hacker ruins a room match, you will be reimbursed half of
              your money.That match will be considered cancelled.
            </li>
          </ul>
        </div>
      </div>
      <h1 className="text-[skyblue] text-[25px] sm:text-[40px] font-[600] ml-[2vw]">
        Available {titleList[params.platform]} Room Matches
      </h1>
      {room.length ? (
        <div className="flex gap-y-8 p-5 flex-wrap justify-center sm:justify-between bg-[#e8f7fe] rounded-lg">
          {room.map((item, index) => (
            <Card key={index} cardData={item} />
          ))}
        </div>
      ) : (
        <BannerMsg msg={"No Room Matches Found. It will be updated soon."} />
      )}
    </div>
  );
}

export default Register;
