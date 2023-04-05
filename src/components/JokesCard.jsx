import { useContext } from "react";
import { MyContext } from "../contexts/theme-context";

function JokesCard({ joke, type, cat, safe, setup, delivery }) {
  const { theme } = useContext(MyContext);
  let color, backgroundColor;
  switch (cat) {
    case "Programming":
      color = "#845EC2";
      backgroundColor = "#845EC22";
      break;
    case "Misc":
      color = "#FF9671";
      backgroundColor = "#FF967122";

      break;
    case "Spooky":
      color = "#F3C5FF";
      backgroundColor = "#F3C5FF22";
      break;
    case "Christmas":
      color = "#FF525B";
      backgroundColor = "#FF525B22";
      break;
    case "Dark":
      color = "#00BEFC";
      backgroundColor = "#00BEFC22";
      break;
    case "Any":
      color = "#FBE281";
      backgroundColor = "#FBE28122";
      break;
    case "Pun":
      color = "#C0AB4D";
      backgroundColor = "#C0AB4D22";
      break;
    default:
      color = "#00C9A7";
      backgroundColor = "#00C9A722";
  }

  return (
    <div
      className={`joke-card__container ${
        theme === "light" && "joke-card__container--light"
      }`}
    >
      <h4 className="joke-card__category" style={{ color, backgroundColor }}>
        {cat}
      </h4>
      {type === "single" ? (
        <p
          className={`joke-card__content ${
            theme === "light" && "joke-card__content--light"
          }`}
        >
          {joke}
        </p>
      ) : null}
      {type === "twopart" ? (
        <p
          className={`joke-card__content joke-card__content--setup ${
            theme === "light" && "joke-card__content--light"
          }`}
        >
          {setup}
        </p>
      ) : null}
      {type === "twopart" ? (
        <p
          className={`joke-card__content joke-card__content--delivery ${
            theme === "light" && "joke-card__content--light"
          }`}
        >
          {delivery}
        </p>
      ) : null}
      <div className="joke-card__type-group">
        {safe ? (
          <p
            className="joke-card__type"
            style={{ color: "#00DC6A", backgroundColor: "#00DC6A22" }}
          >
            Safe
          </p>
        ) : null}
        {type ? (
          <p
            className="joke-card__type"
            style={{
              color: type === "single" ? "#009143" : "orangered",
              backgroundColor: type === "single" ? "#00914322" : "#ff450022",
            }}
          >
            {type}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default JokesCard;
