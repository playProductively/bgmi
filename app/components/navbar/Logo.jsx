"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

function Logo() {
  const router = useRouter();
  return (
    <div className="w-35 flex flex-row items-center justify-around text-[white] font-[800] font-serif">
      Giggle Gamer
    </div>
  );
}

export default Logo;
