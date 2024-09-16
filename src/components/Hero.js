import { AiOutlineConsoleSql } from "react-icons/ai";
import { SiDjango } from "react-icons/si";
import { DiPython } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { DiReact } from "react-icons/di";
import React from "react";
import alex from "../assets/alex.jpg";
import RotatingText from "./RotatingText";

const Hero = () => {
  return (
    <div className="flex">
      <div className="items-center w-full justify-center text-center mt-20 md:w-1/2 md:text-left md:ml-24 md:space-y-20">
        <h1 className="font-rubik text-7xl font-bold text-white pt-20">
          Hi, I'm Alex.
        </h1>
        <h2 className="font-rubik text-3xl font-bold text-gray-400 mt-10 mx-10 md:w-2/3 md:text-left md:mx-0 md:flex-row">
          I’m a skilled <RotatingText /> Engineer dedicated to crafting seamless and efficient web
          applications.
        </h2>
        <div className="w-full space-x-2 px-10 mb-20 md:space-x-5 md:px-0">
          <button
            title="React"
            className="bg-indigo-700 px-7 py-2 text-black z-10 mt-10 rounded-xl border border-indigo-300"
          >
            <DiReact size={20} className="text-white" />
          </button>
          <button
            title="Javascript"
            className="bg-indigo-700 px-7 py-2 text-black z-10 mt-10 rounded-xl border border-indigo-300"
          >
            <DiJavascript size={20} className="text-white" />
          </button>
          <button
            title="Tailwind CSS"
            className="bg-indigo-700 px-7 py-2 text-black z-10 mt-10 rounded-xl border border-indigo-300"
          >
            <SiTailwindcss size={20} className="text-white" />
          </button>
          <button
            title="Python"
            className="bg-indigo-700 px-7 py-2 text-black z-10 mt-10 rounded-xl border border-indigo-300"
          >
            <DiPython size={20} className="text-white" />
          </button>
          <button
            title="Django"
            className="bg-indigo-700 px-7 py-2 text-black z-10 mt-10 rounded-xl border border-indigo-300"
          >
            <SiDjango size={20} className="text-white" />
          </button>
          <button
            title="NoSQL"
            className="bg-indigo-700 px-7 py-2 text-black z-10 mt-10 rounded-xl border border-indigo-300"
          >
            <AiOutlineConsoleSql size={20} className="text-white" />
          </button>
        </div>
      </div>
      <button className="hidden pt-10 md:block md:pb-10">
        <img
          src={alex}
          className="h-4/5 max-h-full rounded-3xl border border-indigo-700 shadow-lg shadow-indigo-700"
        ></img>
      </button>
    </div>
  );
};

export default Hero;
