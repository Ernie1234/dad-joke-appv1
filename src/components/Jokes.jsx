import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MyContext } from "../contexts/theme-context";
import axios from "axios";
import { IoIosArrowBack } from "react-icons/io";

import Spinner from "./Spinner";
import JokesCard from "./JokesCard";

function Jokes() {
  const [jokeData, setJokeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const { theme } = useContext(MyContext);

  useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  let url;

  if (id === "single") {
    url = `https://v2.jokeapi.dev/joke/any?blacklistFlags=religious,political,racist,sexist&type=${id}&amount=10`;
  } else if (id === "twopart") {
    url = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist&type=${id}&amount=10`;
  } else {
    url = `https://v2.jokeapi.dev/joke/${id}?blacklistFlags=religious,political,racist,sexist&amount=10`;
  }

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(url);
      const { jokes } = await res.data;
      setJokeData(jokes);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  if (loading) return <Spinner />;
  return (
    <div
      className={`jokes__container ${
        theme === "light" && "jokes__container--light"
      }`}
    >
      <Link to={"/"}>
        <IoIosArrowBack
          size={35}
          className={`jokes__header--icon ${
            theme === "light" && "jokes__header--icon-light"
          }`}
        />
      </Link>
      <h1
        className={`jokes__header--title ${
          theme === "light" && "jokes__header--title-light"
        }`}
      >
        {id}
      </h1>
      <div className="jokes__wrapper">
        {jokeData?.map((e) => (
          <JokesCard
            key={e.id}
            joke={e.joke}
            type={e.type}
            cat={e.category}
            safe={e.safe}
            setup={e.setup}
            delivery={e.delivery}
          />
        ))}
      </div>
    </div>
  );
}

export default Jokes;
