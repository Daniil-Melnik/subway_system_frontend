import React from "react";
import css from "./NeedAuth.module.css"
import Link from "next/link";

export const NeedAuth = (props) => {
  return(
    <div className={css.main}>
        <h1 className={css.message}>{props.msg}</h1>
        <p className={css.linkp}><Link href={props.href} className={css.link}>{props.href_msg}</Link></p>
        <p className={css.linkp}><Link href={props.href_s} className={css.link_s}>{props.href_msg_s}</Link></p>
    </div>
  );
};