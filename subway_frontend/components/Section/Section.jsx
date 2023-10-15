import React from "react";
import css from "./Section.module.css"

export const Section = (props) => {
  return(
    <div>
        <p>{props.text}</p>
        <img className={css.image} src={props.src} />
    </div>
  );
};

