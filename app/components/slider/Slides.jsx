"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Slides({ cur }) {
  const [block, setBlock] = useState(false);
  const [src, setSrc] = useState('');

  useEffect(() => {
    setBlock(false);
    setTimeout(() => {
      setBlock(true);
      setSrc(cur.bgLink)
    }, 300);
  }, [cur]);

  return (
    <div
      style={{
        opacity: `${block ? 1 : 0}`,
      }}
      className={`slomo w-full relative flex justify-center overflow-hidden items-end h-[50vh] sm:h-[90vh] z-1`}
    >
      <Image
        src={`/images/${src}`}
        loading="lazy"
        fill={true}
        alt=""
        className="object-cover object-center sm:object-top"
      />
      <Link
        className="bgtransition hover:bg-gradient-to-r from-[purple] to-[blue] px-4 py-2 relative bottom-[3vh] rounded-lg text-[600] bg-[orange] text-white"
        href={cur.link}
      >
        Click Here to Join <span className="font-bold">{cur.title}</span> Room Match
      </Link>
    </div>
  );
}

export default Slides;
