import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { MdLightMode, MdModeNight } from "react-icons/md";

import Home from "./components/Home";
import Jokes from "./components/Jokes";
import NotFound from "./components/NotFound";
import { MyContext } from "./contexts/theme-context";

function App() {
  const [theme, setTheme] = useState("dark");
  const handleThemeChange = () => {
    const isCurrentDark = theme === "dark";
    setTheme(isCurrentDark ? "light" : "dark");
    console.log(theme);
  };
  return (
    <MyContext.Provider value={{ theme, setTheme }}>
      <div style={{ position: "relative", width: "100%" }}>
        <div
          className={`theme__container ${theme === "light" && "theme-light"}`}
          onClick={handleThemeChange}
        >
          {theme === "dark" ? (
            <MdLightMode size={30} />
          ) : (
            <MdModeNight size={30} />
          )}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Jokes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </MyContext.Provider>
  );
}

export default App;
