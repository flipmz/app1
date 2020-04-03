import React from "react";

export const MyCoolButton = props => {
  const clickHandler = () => alert("Коммент:" + props.comment);
  return (
    <div>
      <span>{props.tovchNer ? props.tovchNer : "Hello button"}</span>
      <br />
      <input
        className="MyCoolButton"
        type="button"
        onClick={clickHandler}
        value={props.text ? props.text : "redundant button"}
      />
    </div>
  );
};
