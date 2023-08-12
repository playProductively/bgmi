import React from "react";
import Heading from "../Heading";

function Register({ PlayerData, fee, sPlayer }) {
  console.log(PlayerData);
  return (
    <div className="pl-[2vw]">
      <Heading title="Players" />
      <div className="flex justify-around">
        <ul className="text-[16px]">
          <li>
            <b>Player 1 : </b>
            {"Default Name"}
          </li>
          <li>
            <b>Player 2 : </b>
            {Object.values(PlayerData)[0]}
          </li>
          <li>
            <b>Player 3 : </b>
            {Object.values(PlayerData)[1]}
          </li>
          <li>
            <b>Player 4 : </b>
            {Object.values(PlayerData)[2]}
          </li>
        </ul>
        <ul className="text-[16px]">
          {Object.values(sPlayer)[0] && <li>
            <b>Sub Player 1 : </b>
            {Object.values(sPlayer)[0]}
          </li>}
          {Object.values(sPlayer)[1] && <li>
            <b>Sub Player 2 : </b>
            {Object.values(sPlayer)[1]}
          </li>}
        </ul>
      </div>
      <p className="text-[18px] mt-3">
        <b>Room Entrance : </b> Rs. {fee || 0}
      </p>
    </div>
  );
}

export default Register;
