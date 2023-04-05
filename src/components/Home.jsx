import React, { useContext } from "react";
import { FcApproval } from "react-icons/fc";
import { MyContext } from "../contexts/theme-context";

import Card from "./Card";
import { group, page } from "./page";

function Home() {
  const { theme } = useContext(MyContext);
  return (
    <div className={`container ${theme === "light" && "light"}`}>
      <div className="header-wrapper">
        <h1 className="header">Welcome to Dad Joke App</h1>
        <FcApproval size={45} />
      </div>
      <h4 className="header-cat">Categories</h4>
      <div className="wrapper__card">
        {page.map((e, i) => (
          <Card title={e.title} Icon={e.icon} path={e.path} key={i} />
        ))}
      </div>
      <h4 className="header-cat">Type</h4>
      <div className="wrapper__card wrapper__card--type">
        {group.map((e, i) => (
          <Card title={e.title} Icon={e.icon} path={e.path} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Home;
