import { CgMail } from "react-icons/cg";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import React, { useState } from "react";
import alexLogo from "../assets/alex-logo-2.png";

const Nav = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="sticky top-0 bg-indigo-800 opacity-80">
      <div className="w-full flex items-center justify-between p-5">
        <div className="flex items-center">
          <img
            src={alexLogo}
            className="h-20 ml-10 lg:ml-20"
            alt="Alex Sison Logo"
          />
          <h3 className="font-rubik text-2xl text-white font-semibold ml-1">
            Alex Sison
          </h3>
        </div>
        <div className="hidden md:flex gap-2 text-white">
          <a href="https://www.instagram.com/alexmortelsison/" target="_blank">
            <AiOutlineInstagram size={24} />
          </a>
          <a href="https://github.com/alexmortelsison" target="_blank">
            <AiFillGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/alex-sison-38ab90295/"
            target="_blank"
          >
            <AiFillLinkedin size={24} />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/?view=cm&to=alexismsison@gmail.com"
            target="_blank"
          >
            <CgMail size={24} />
          </a>
          <a href="https://x.com/urmrdev" target="_blank">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.4538 4H17.8288L12.6402 9.93026L18.7442 18H13.9648L10.2214 13.1057L5.93812 18H3.56171L9.11145 11.6569L3.25586 4H8.15658L11.5403 8.47354L15.4538 4ZM14.6203 16.5785H15.9363L7.4415 5.34687H6.0293L14.6203 16.5785Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </div>
        <div className="hidden rounded-full bg-gray-900 p-4 lg:flex align-middle px-20 shadow-lg shadow-indigo-600 border">
          <ul className="hidden lg:flex space-x-4 font-rubik text-base text-white mr-20 z-10 items-center justify-center translate-x-10">
            <li className="hover:border-spacing-5 hover:rounded-2xl hover:bg-indigo-600 hover:py-1 hover:px-4">
              Home
            </li>
            <li className="hover:border-spacing-5 hover:rounded-2xl hover:bg-indigo-600 hover:py-1 hover:px-4">
              Works
            </li>
            <li className="hover:border-spacing-5 hover:rounded-2xl hover:bg-indigo-600 hover:py-1 hover:px-4">
              About
            </li>
            <li className="hover:border-spacing-5 hover:rounded-2xl hover:bg-indigo-600 hover:py-1 hover:px-4">
              Contact
            </li>
          </ul>
        </div>

        <AiOutlineMenu className="mr-10 text-white sm:hidden" size={24} />
        <div className="hidden mr-10 md:block">
          <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="sr-only"
            />
            <span className="label flex items-center text-sm font-medium text-white">
              Light
            </span>
            <span
              className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
                isChecked ? "bg-[#212b36]" : "bg-[#CCCCCE]"
              }`}
            >
              <span
                className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
                  isChecked ? "translate-x-[28px]" : ""
                }`}
              ></span>
            </span>
            <span className="label flex items-center text-sm font-medium text-white">
              Dark
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Nav;
