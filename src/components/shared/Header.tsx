import React from "react";
import Container from "../container";
import Link from "next/link";

import HeaderProfileDropdown from "../custom-ui/HeaderProfileDropdown";

function Header() {
  return (
    <header className="py-5 border-b ">
      <Container>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <h1 className="text-4xl font-medium ">
              <span className="text-primary   font-semibold">Ai</span>Hub
            </h1>
          </Link>
   <HeaderProfileDropdown/>
        </div>
      </Container>
    </header>
  );
}

export default Header;
