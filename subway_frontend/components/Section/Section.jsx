import React from "react";
import css from "./Section.module.css"

export const Section = (props) => {
  return(
    <div className={css.main_section}>
        <p className={css.art_text}>{props.text}</p>
        <img className={css.image} src={props.src} />
        <p className={css.caption}>{props.caption}</p>
    </div>
  );
};

