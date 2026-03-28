import { useState } from "react";
import { RiHome3Fill } from "@react-icons/all-files/ri/RiHome3Fill";
import { useNavigate } from "react-router-dom";

const PassGenerator = () => {
  const navigate = useNavigate();

  const [length, setLength] = useState(8);

  return (
    <div className="relative w-full h-full flex flex-col items-center">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-emerald-900 w-150 h-100 rounded-xs shadow-lg px-12 py-4">
        <div className="w-full h-16 text-xl font-bold flex items-center justify-between">
          <RiHome3Fill
            className="cursor-pointer text-4xl text-emerald-100  hover:scale-85 transition duration-500 "
            onClick={() => navigate("/")}
          />
          Password Generator
        </div>
        <form action="submit" className="mt-10">
          <input
            type="text"
            placeholder="Password"
            className="w-full h-10 p-4 text-white placeholder:text-white bg-emerald-700 focus:outline-none rounded-xs"
          />
          <div className="mt-8 w-4/5 flex items-center gap-4">
            <input
              id="password-length"
              type="range"
              value={length}
              min={7}
              max={100}
              step={1}
              className="flex-1 cursor-pointer accent-emerald-400 focus:outline-none"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label
              htmlFor="password-length"
              className="text-emerald-100 font-medium whitespace-nowrap"
            >
              Length: {length}
            </label>
          </div>
          <div className="flex items-center gap-10 mt-5">
            <div className="flex items-center gap-1 ">
              <input
                className="w-6 h-6 cursor-pointer accent-emerald-400 focus:outline-none"
                type="checkbox"
                name="Characters"
                id="characters"
              />
              <label
                htmlFor="characters"
                className="text-emerald-100 font-medium whitespace-nowrap"
              >
                Characters
              </label>
            </div>
            <div className="flex items-center gap-1 accent-emerald-400">
              <input
                className="w-6 h-6 cursor-pointer accent-emerald-400 focus:outline-none"
                type="checkbox"
                name="Numbers"
                id="numbers"
              />
              <label
                htmlFor="numbers"
                className="text-emerald-100 font-medium whitespace-nowrap"
              >
                Numbers
              </label>
            </div>
          </div>
          <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-emerald-400 text-emerald-950 font-bold py-2 px-8 rounded-xs shadow-lg cursor-pointer hover:scale-95  transition duration-500">
            Generate Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default PassGenerator;
