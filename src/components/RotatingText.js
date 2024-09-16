// RotatingText.js
import React, { useState, useEffect } from "react";

const roles = ["Frontend", "Backend", "Full Stack"];

const RotatingText = () => {
  const [currentRole, setCurrentRole] = useState(roles[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => {
        const currentIndex = roles.indexOf(prevRole);
        const nextIndex = (currentIndex + 1) % roles.length;
        return roles[nextIndex];
      });
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return <span className="text-indigo-500 font-extrabold">{currentRole}</span>;
};

export default RotatingText;
