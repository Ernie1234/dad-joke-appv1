import React, { useContext } from "react";
import { MyContext } from "../contexts/theme-context";

export default function Spinner() {
  const { theme } = useContext(MyContext);
  return (
    <div
      className={`spinner-container ${
        theme === "light" && "spinner-container--light"
      }`}
    >
      <div className="loading-spinner"></div>
      <h1
        className={`spinner__title ${
          theme === "light" && "spinner__title--light"
        }`}
      >
        Loading...
      </h1>
    </div>
  );
}
