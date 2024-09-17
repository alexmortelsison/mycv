import { AiFillGithub, AiFillLinkedin, AiOutlineCopyright, AiOutlineInstagram } from "react-icons/ai"; 
import React from "react";
import alexLogo from "../assets/alex-logo-2.png";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <div className="flex my-24 ">
      <div className="flex items-center">
        <img
          src={alexLogo}
          className="h-10 ml-10 lg:ml-20"
          alt="Alex Sison Logo"
        />
        <h3 className="font-rubik flex items-center text-xl text-gray-500 font-semibold ml-1">
          Alex Sison
        </h3>
        <div className="flex items-center ml-2 text-gray-500">
          <AiOutlineCopyright />
          <p>2024</p>
        </div>

        <div className="hidden md:flex gap-2 text-white ml-7">
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
      </div>
    </div>
  );
};

export default Footer;
