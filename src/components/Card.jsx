import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../contexts/theme-context";

function Card({ title, Icon, path }) {
  const { theme } = useContext(MyContext);
  return (
    <div className={`card ${theme === "light" && "card--light"}`}>
      <Link to={`/${path}`}>
        <h3
          className={`card__title ${theme === "light" && "card__title--light"}`}
        >
          {title}
        </h3>
        <div className="card__section">
          <p
            className={`card__content ${
              theme === "light" && "card__content--light"
            }`}
          >
            card content
          </p>
          {Icon}
        </div>
      </Link>
    </div>
  );
}

export default Card;
