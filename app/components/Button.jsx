import React from "react";

function Button({ disabled, onClick, outline, small, icon: Icon, label }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
      relative
      disabled:opacity-70
      disabled:cursor-not-allowed
      rounded-lg
      hover:opacity-80
      transition
      w-full
      ${outline ? "bg-white" : "bg-gradient-to-r from-indigo-500 to-blue-300"}
      ${outline ? "border-black" : "border-indigo-100"}
      ${outline ? "text-black" : "text-white"}
      ${small ? "text-sm" : "text-md"}
      ${small ? "py-1" : "py-3"}
      ${small ? "font-light" : "font-semibold"}
      ${small ? "border-[1px]" : "border-2"}
    `}
    >
      {Icon && (
        <Icon
          size={24}
          className="
          absolute
          left-4
          top-3
        "
        />
      )}
      {label}
    </button>
  );
}

export default Button;
