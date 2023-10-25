import React from "react";
import css from "./NeedAuth.module.css"
import Link from "next/link";

export const NeedAuth = (props) => {
  return(
    <div className={css.main}>
        <p className={css.message}>{props.msg}</p>
        <Link href={props.href} className={css.link}>{props.href_msg}</Link>
    </div>
  );
};