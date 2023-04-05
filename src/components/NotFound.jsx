import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <h3 className="not-found__content">page not found</h3>
      <p className="not-found__message">
        I tried to catch some fog but I missed it!
      </p>
      <Link to={"/"}>
        <button className="not-found__btn">Back to Home</button>
      </Link>
    </div>
  );
}

export default NotFound;
