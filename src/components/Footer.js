import React from "react";
import { Typography } from "@material-tailwind/react";

const Footer = () => {
  return (
    <div className="flex items-center justify-center mx-24">
      <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
        <Typography color="blue-gray" className="font-normal">
          &copy; 2023 Lic. Cintya Menendez
        </Typography>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=59892815557&text&type=phone_number&app_absent=0"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              SOBRE MI
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="https://www.instagram.com/cin.nutri/"
              target="_blank"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              CONTACTAME
            </Typography>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
