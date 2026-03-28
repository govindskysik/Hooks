import React, { useState } from "react";
import { RiHome3Fill } from "@react-icons/all-files/ri/RiHome3Fill";
import { useNavigate } from "react-router-dom";

const BgChanger = () => {
  const [bgColor, setBgColor] = useState("emerald");

  const navigate = useNavigate();

  const colors = [
    { name: "emerald", bg: "bg-emerald-800" },
    { name: "indigo", bg: "bg-indigo-800" },
    { name: "rose", bg: "bg-rose-800" },
    { name: "cyan", bg: "bg-cyan-800" },
    { name: "amber", bg: "bg-amber-800" },
  ];

  const currentBg = colors.find((c) => c.name === bgColor)?.bg;

  return (
    <div
      className={`relative w-full h-screen overflow-hidden p-10 ${currentBg} flex justify-center transition-colors duration-500`}
    >
      <div className="w-[80%] h-16 p-4 rounded-xs bg-emerald-900 text-3xl font-bold flex items-center justify-between gap-3">
        <RiHome3Fill
          className="cursor-pointer text-emerald-100  hover:scale-85 transition duration-500 "
          onClick={() => navigate("/")}
        />
        Background Changer
      </div>
      <div className="absolute w-[70%] h-20 rounded-xs flex items-center gap-4 p-4 bottom-10 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-900">
        <ul className="flex gap-4 items-center justify-between w-full">
          {colors.map((color) => (
            <li
              key={color.name}
              onClick={() => setBgColor(color.name)}
              className={`px-4 py-2 w-40 text-center rounded-xs cursor-pointer text-white-950 ${color.bg}`}
            >
              {color.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BgChanger;
