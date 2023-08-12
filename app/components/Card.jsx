import React from "react";
import getSlotsLeft from "../assets/utils";
import useRoomRegister from "../hooks/useRoomRegister";

function Card({ cardData }) {
  const roomModal = useRoomRegister();
  return (
    <div className="rounded bg-gradient-to-b from-[#c7e6f2] to-[skyblue] w-3/4 sm:w-[30%] py-5 grid items-center justify-center">
      <ul className="grid gap-y-4">
        <li>
          <b>Room Mode : </b>
          <span className="capitalize">{cardData.mode}</span>
        </li>
        <li>
          <b>Date : </b>
          <span>{cardData.date}</span>
        </li>
        <li>
          <b>Room Time : </b>
          <span>{cardData.time}</span>
        </li>
        <li>
          <b>Room Entrance Fee : </b>
          <span>{cardData.room_amount}</span>
        </li>
        <li>
          <b>Slots left : </b>
          <span>{getSlotsLeft(cardData.mode, cardData.totalRegistered)}</span>
        </li>
      </ul>
      <button
        onClick={()=>roomModal.onOpen(cardData.room_amount)}
        className="mt-[2vh] hover:shadow-xl shadow-lg rounded-lg bg-[#513df2ad] border-[2px] text-white p-2 "
      >
        Register
      </button>
    </div>
  );
}

export default Card;
