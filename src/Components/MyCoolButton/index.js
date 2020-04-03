import React, { useState } from "react";

export const MyCoolButton = props => {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    alert("Коммент:" + props.comment);
  };
  return (
    <div>
      <span>{props.tovchNer ? props.tovchNer : "Hello button"}</span>
      <br />
      <input
        className="MyCoolButton"
        type="button"
        onClick={clickHandler}
        value={props.text ? `${count}] ${props.text}` : "clickmu"}
      />
    </div>
  );
};
