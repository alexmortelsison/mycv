import React from "react";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.jpg";
import { Divider } from "@mui/material";

const Works = () => {
  return (
    <div className="">
      <h1 className="font-rubik text-center md:text-left md:ml-20 text-6xl text-white font-semibold mt-36">
        WORKS
      </h1>
      <p className="text-center md:text-left md:ml-20 text-3xl text-gray-500 font-semibold m-2">
        Here are my most recent projects, which will give you an insight into my
        past experience.
      </p>
      <div className="mx-10 md:p-20 md:flex md:space-x-60">
        <div className=" mt-52 ">
          <img
            src={s1}
            className="rounded-3xl mb-24 hover:scale-105 duration-200"
          ></img>
          <img
            src={s2}
            className=" mb-24 rounded-3xl hover:scale-105 duration-200"
          ></img>
        </div>
        <div className="mb-24 md:mt-20">
          <img
            src={s3}
            className="rounded-3xl mb-24 hover:scale-105 duration-200"
          ></img>
          <img
            src={s4}
            className="rounded-3xl hover:scale-105 duration-200"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Works;
