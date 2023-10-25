import React, { useState, useEffect } from "react";
import css from "./Head.module.css"
import Link from "next/link";
import Image from "next/image";

export const Head = (props) => {
  let [loch, setLoch] = useState("")
  let [locimg, setLocimg] = useState("")
  let [email, setEmail] = useState([])

  const handleClick=(e)=>{
    e.preventDefault()
    localStorage.setItem("isLogged", 0)
    localStorage.setItem("email", "")
}

  useEffect(() => {
    if (props.local == "en") {
      setLoch(`${props.hr}/ru`)
      setLocimg("/rus.png")
      setEmail([localStorage.getItem("email"), "logout"])
    }
    if (props.local == "ru") {
      setLoch(`${props.hr}/en`)
      setLocimg("/gb.png")
      setEmail([localStorage.getItem("email"), "выйти"])
    }
    
  }, [props.local])
  return(
    <div className={css.main}>
        <div className={css.menu}>
          <list className={css.menu_list}>
            <li><Link href={`/${props.local}`} className={css.linka} >{props.main}</Link></li>
            <li><img className={css.logoimg} width="100" height="100" src="https://img.icons8.com/external-others-inmotus-design/100/000000/external-Subway-metro-others-inmotus-design-18.png" alt="external-Subway-metro-others-inmotus-design-18"/></li>
            <li><Link href= {`/AllStations/${props.local}`} className={css.linka}>{props.stations}</Link></li>
          </list>
          
        </div>
        <h2 className={css.email}>{email[0]} (<button className={css.logout_btn} onClick={handleClick}>{email[1]}</button>)</h2>
        <div className={css.rightPan}>
            <Link href = {loch}><Image src={locimg} height={36} width={36}/></Link>
        </div>
        
    </div>
  );
};
