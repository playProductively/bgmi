import React from "react";

function BannerMsg({ msg }) {
  return (
    <div className="flex items-center justify-center p-2">
      <div className="flex items-center justify-center bg-[#e8f7fe] w-3/4 min-h-[25vh] rounded-lg text-center min-w-1/2 font-[500]">
        {msg}
      </div>
    </div>
  );
}

export default BannerMsg;
