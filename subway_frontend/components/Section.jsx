import React from "react";

export const Section = (props) => {
  return(
    <div>
        <p>{props.text}</p>
        <img src={props.src} />
    </div>
  );
};

