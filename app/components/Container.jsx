"use client";

import PropTypes from "prop-types";
import React from "react";

function Container({ children }) {
  return (
    <div
      className="max-w-[2520px]
      md:px-10
      sm:px-2
      px-4
  "
    >
      {children}
    </div>
  );
}

export default Container;

Container.propTypes = {
  children: PropTypes.node,
};
