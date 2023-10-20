import React from "react";
import css from "./Head.module.css"
import Link from "next/link";

export const Head = (props) => {
  return(
    <div className={css.main}>
        <div className={css.menu}>
            <Link href="/" className={css.linka} >{props.main}</Link>
            <img className={css.logoimg} width="100" height="100" src="https://img.icons8.com/external-others-inmotus-design/100/000000/external-Subway-metro-others-inmotus-design-18.png" alt="external-Subway-metro-others-inmotus-design-18"/>
            <Link href="/Stations" className={css.linka}>{props.stations}</Link>
        </div>
    </div>
  );
};
