import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Head } from "@/components/Head/Head";
import css from "./index.module.css"

import { CookiesProvider, useCookies } from "react-cookie";

const LocaleMainIndex = () => {
    const router = useRouter();
    let [head, setHead] = useState([])
    let [auth, setAuth] = useState([])
    let [store, setStore] = useState(0)

    let [email, setEmail] = useState("")
    let [psw, setPsw] = useState("")
    let [user, setUser] = useState()
    let [username, setUsername] = useState("")
    const [cookies, setCookie] = useCookies(["user_email"]);


    
    useEffect(() => {
        setEmail(cookies.user_email)
    }, [])
    useEffect(() => {
            if (router.query.locale == "en"){
                setHead(["Main", "Stations", "en"])
                setAuth(["Please, log in", "log in", "registration", "e-mail", "password", "submit", "logout"])
            }
            if (router.query.locale == "ru"){
                setHead(["Главная", "Станции", "ru"])
                setAuth(["Авторизуйтесь", "авторизация", "регистрация", "Эл. почта", "Пароль", "принять", "выйти"])
            }
            setStore(localStorage.getItem("isLogged"))
            if (email != ""){
                if (psw != ""){
                    fetch(`http://localhost:8080/student/getUser/${email}/${psw}`)
                    .then(res=>res.json()).then((result)=>{
                        setUser(result);
                    },
                    console.log(user)   
                    ) 
                }
            }
        }, [router.query.locale, store, psw, email]
    )

    const handleClick=(e)=>{
        e.preventDefault()
        if (user.email != "no_email") {
            setUsername(user.email)
            localStorage.setItem("email", user.email)
            localStorage.setItem("isLogged", 1)
            window.location.replace(`/${head[2]}`);
        }
        else {
            setUsername("no_user")
            localStorage.setItem("email", "")
            localStorage.setItem("isLogged", 0)
        }
        setCookie("user_email", email, { path: "/" });
    }
    return (
        <div>
          <Head main = {head[0]} stations = {head[1]} local = {head[2]} hr = {`/Authorization`} logout = {auth[6]}></Head>
          <div className= {css.main}>
            <form noValidate autoComplete="off">
                <ul className={css.list}>
                    <li><input type="text" label="User E-mail" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder={auth[3]} className={css.input}/></li>
                    <li><input type="password" label="User password" value={psw} onChange={(e)=>setPsw(e.target.value)} placeholder={auth[4]} className={css.input}/></li>
                    <li><button variant="contained" color="red" onClick={handleClick} className={css.btn}>{auth[5]}</button></li>
                </ul>
            </form>
          </div>
        </div>
      ) 
};

export default LocaleMainIndex;

export async function getStaticProps(context) {
    const stations = await fetch(`http://localhost:8080/student/getStations/${context.params.locale}`).then(res=>res.json())
    return {
        props: {
            data: stations,
        },
    };
}

export async function getStaticPaths(context) {
    return {
        paths: [
            { params: {locale: "ru"}},
            { params: {locale: "en"}}
        ],
        fallback: false,
    };
}