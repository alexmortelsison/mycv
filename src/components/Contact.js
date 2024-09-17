import { AiOutlineMail } from "react-icons/ai"; 
import { AiOutlinePhone } from "react-icons/ai";
import React from "react";

const Contact = () => {
  return (
    <div className="text-center">
      <div className="rounded-3xl border border-indigo-500 shadow-2xl shadow-teal-600 px-10 pt-10 m-10 text-center">
        <h1 className="font-rubik text-6xl text-white font-bold">
          Wanna talk?
        </h1>
        <div className="flex mt-10 items-center text-center">
          <AiOutlinePhone size={60} className="text-white" />
          <h2 className="font-rubik text-2xl text-white font-bold ml-8">
            +8170 3363 2542
          </h2>
        </div>
        <div className="flex mt-10 items-center text-center mb-10">
          <AiOutlineMail size={60} className="text-white" />
          <h2 className="font-rubik text-2xl text-white font-bold ml-8">
            alexismsison@gmail.com
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
