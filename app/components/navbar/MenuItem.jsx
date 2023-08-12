"use client";

import PropTypes from "prop-types";

function MenuItem({ label = "Login", onclick = null }) {
  return (
    <div
      onClick={onclick}
      className="
    cursor-pointer 
    py-3
    px-3
    hover:bg-neutral-100
    transition
    font-semibold
    "
    >
      {label}
    </div>
  );
}

export default MenuItem;

MenuItem.propTypes = {
  label: PropTypes.string,
  onclick: PropTypes.func,
};
