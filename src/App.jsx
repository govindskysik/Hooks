import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PassGenerator from "./pages/PassGenerator";
import BgChanger from "./pages/BgChanger";
import CurrencyConvertor from "./pages/CurrencyConvertor";

const App = () => {
  return (
    <div className="h-full w-full overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pass-generator" element={<PassGenerator />} />
        <Route path="/bg-changer" element={<BgChanger />} />
        <Route path="/currency-convertor" element={<CurrencyConvertor />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
