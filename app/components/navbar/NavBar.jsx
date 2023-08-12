"use client";

import Container from "../Container";
import Logo from "./Logo";
import UseMenu from "./UseMenu";

function NavBar() {
  return (
    <div className="bg-gradient-to-b from-[#218698] to-[#c6c2f8] bg-cover z-10 fixed w-full shadow-xl">
      <div className="py-4">
        <Container>
          <div
            className="
        flex
        item-center
        flex-row
        justify-between
        gap-3
        md:gap-0
        "
          >
            <Logo />
            <UseMenu />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default NavBar;
