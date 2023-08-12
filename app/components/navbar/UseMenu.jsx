"use client";

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";

import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";

function UseMenu() {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className="relative flex flex-row items-center">
      <div>
        <div
          onClick={toggle}
          className="
        flex
        flex-row
        rounded-full
        border-[1.5px]
        border-neutral-200
        md:py-1
        md:px-2
        py-1
        px-3
        gap-3
        items-center
        hover:shadow-md
        cursor-pointer"
        >
          <AiOutlineMenu color="white" />
          <Avatar />
        </div>
      </div>
      {isOpen && (
        <div className="absolute shadow-xl rounded-xl w-[40vw] md:w-[10vw] right-0 bg-white overflow-hidden top-[3.15rem] text-sm">
          <div className="flex flex-col ">
            <MenuItem
              label="Login"
              onclick={() => {
                loginModal.onOpen();
                toggle();
              }}
            />
            <MenuItem
              label="Sign Up"
              onclick={() => {
                registerModal.onOpen();
                toggle();
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default UseMenu;
