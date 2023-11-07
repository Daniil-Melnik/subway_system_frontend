import React from "react";
import css from "./StCard.module.css"
import Link from "next/link";

export const StCard = (props) => {
  return(
    <div className={css.main_section} key={props.src}>
        <div className={css.photo_list}>
            <ul>
                <li><img className={css.small_img} src={props.img1} /></li>
                <li><img className={css.small_img} src={props.img2}/></li>
                <li><img className={css.small_img} src={props.img3}/></li>
            </ul>
        </div>
        <div className={css.info}>
            <p>{props.name}</p>
            <p>{props.line}</p>
            <p>{props.year}</p>
        </div>
        <div>
            <Link href={props.linka}>Перейти</Link>
        </div>
    </div>
  );
};