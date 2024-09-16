import { AiOutlineTrophy } from "react-icons/ai";
import { AiFillTrophy } from "react-icons/ai";
import React from "react";

const Functions = () => {
  return (
    <div>
      <div className="border rounded-3xl border-white flex md:flex-row mx-20 text-left mb-20">
        <div className="p-5 w-full m-7">
          <AiOutlineTrophy size={60} className="text-indigo-600" />
          <h1 className="text-white text-3xl font-semibold mt-2">
            Develop Both Ends
          </h1>
          <p className="text-2xl mt-2 text-gray-500">
            Building and optimizing user interfaces and server-side applications
            to ensure seamless functionality and performance across the entire
            stack.
          </p>
          <AiOutlineTrophy size={60} className="text-indigo-600 mt-20" />
          <h1 className="text-white text-3xl font-semibold ">
            Database Management
          </h1>
          <p className="text-2xl mt-2 text-gray-500">
            Designing, implementing, and managing databases, including schema
            design, query optimization, and data integrity.
          </p>
          <AiOutlineTrophy size={60} className="text-indigo-600 mt-20" />
          <h1 className="text-white text-3xl font-semibold ">
            End-to-End Project Management
          </h1>
          <p className="text-2xl mt-2 text-gray-500">
            Overseeing the full development lifecycle, from initial requirements
            gathering and design through to deployment, testing, and
            maintenance, ensuring that all components work together effectively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Functions;
