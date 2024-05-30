import React from "react";
import Image from "next/image";
import banner from "@../assets/header/banner-landing.png"

const Header = () => {
  return (
  <div>
    <Image src={banner} className="mb-12 h-100% w-100%"/>
  </div>
  )
};

export default Header;
