import React from "react";
import Heading from "../Heading";

function Rules() {
  return (
    <div className="text-[16px]">
      <Heading title="Rules For Joining Room" />
      <div className=" grid gap-y-2">
        <p>Only registered players are permitted to enter the room.</p>
        <p>
          You can add two more IDs to act as substitutes for the Primary
          players.
        </p>
        <p>
          ID and slot information will be sent to registered email addresses,
          2hrs prior to the commencement of the match.
        </p>
        <p>
          Players are asked to stay in their assigned slots or they will be
          removed.
        </p>
        <p>
          Players are asked to arrive five to ten minutes before the room match
          begins.
        </p>
      </div>
    </div>
  );
}

export default Rules;
