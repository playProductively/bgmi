"use client";

import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

function Avatar({ src = "/images/avatar.jpg" }) {
  return (
    <Image
      height="30"
      width="30"
      src={src}
      alt="avatar"
      className="rounded-full"
    />
  );
}

export default Avatar;

// Avatar.defaultProps = {
//   src : "/images/avatar.jpg"
// };

Avatar.propTypes = {
  src: PropTypes.string,
};
