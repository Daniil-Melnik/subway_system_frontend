import React, { useEffect, useState } from "react";
import css from "./StCard.module.css"
import Link from "next/link";

export const StCard = (props) => {
    let [lc, setLc] = useState("")
    useEffect(() => {
        if (props.line_id == 1){
            setLc(css.line_1)
        }
        if (props.line_id == 2){
            setLc(css.line_2)
        }
        if (props.line_id == 3){
            setLc(css.line_3)
        }
        if (props.line_id == 4){
            setLc(css.line_4)
        }
        if (props.line_id == 5){
            setLc(css.line_5)
        }        
    }, [])
    
  return(
    <div className={css.main_section} key={props.src}>
        <div className={css.photo_list}>
            <ul className={css.listik}>
                <li><img className={css.small_img} src={props.img1} /></li>
                <li><img className={css.small_img} src={props.img2}/></li>
                <li><img className={css.small_img} src={props.img3}/></li>
            </ul>
        </div>
        <div className={css.info}>
            <p className={css.name}>{props.name}</p>
            <p className={`${lc}`}>{props.line} линия</p>
            <p>{props.year} год</p>
        </div>
        <div>
            <Link href={props.linka}>Перейти</Link>
        </div>
    </div>
  );
};