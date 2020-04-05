import React, { useState } from "react";
import "./style.css";

export const MyCoolButton = (props) => {
  const [commentHistory, setCommentHistory] = useState([]);
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(count + 1);
    setCommentHistory([...commentHistory, props.comment]);
  };
  return (
    <div>
      <span style={css}>
        {props.tovchNer ? props.tovchNer : "Hello button"}
      </span>
      <br />
      <input
        className="MyCoolButton"
        type="button"
        onClick={clickHandler}
        value={props.text ? `${count}) ${props.text}` : "clickmu"}
      />
      <div>
        {commentHistory.map((el) => (
          <div>{el}</div>
        ))}
      </div>
    </div>
  );
};
const css = {
  color: "red",
};
