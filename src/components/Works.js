import React from "react";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.jpg";

const Works = () => {
  return (
    <div className="">
      <h1 className="font-rubik text-center text-6xl text-white font-semibold mt-36">
        WORKS
      </h1>
      <div className="p-20 flex space-x-60">
        <div className=" mt-52 ">
          <img
            src={s1}
            className="rounded-3xl mb-24 hover:scale-105 duration-200"
          ></img>
          <img
            src={s2}
            className="rounded-3xl hover:scale-105 duration-200"
          ></img>
        </div>
        <div className="mt-20">
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
