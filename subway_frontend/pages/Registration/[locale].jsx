import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Head } from "@/components/Head/Head";
import css from "./index.module.css"

const LocaleMainIndex = () => {
    const router = useRouter();
    let [head, setHead] = useState([])
    let [auth, setAuth] = useState([])
    let [store, setStore] = useState(0)
    let [msg, setMsg] = useState("")

    let [email, setEmail] = useState("")
    let [psw, setPsw] = useState("")
    let [repsw, setRePsw] = useState("")
    let [user, setUser] = useState()

    let [msg_cln, setMsg_cln] = useState("")

    useEffect(() => {
            if (router.query.locale == "en"){
                setHead(["Main", "Stations", "en"])
                setAuth(["Please, log in", "log in", "registration", "e-mail", "password", "submit", "logout", "Repeat psw", "Success", "Error"])
            }
            if (router.query.locale == "ru"){
                setHead(["Главная", "Станции", "ru"])
                setAuth(["Авторизуйтесь", "авторизация", "регистрация", "Эл. почта", "Пароль", "принять", "выйти", "Повторите пароль", "Успешно", "Ошибка"])
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
        if (psw == repsw) {
            const user={email, psw}
            console.log(user)
            fetch("http://localhost:8080/student/add",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(user)
            })
            localStorage.setItem("email", email)
            localStorage.setItem("isLogged", 1)
            window.location.replace(`/${head[2]}`);

        }
        else {
            setMsg(auth[9])
            setMsg_cln(css.err_msg)
        }
    }

      return (
        <div>
          <Head main = {head[0]} stations = {head[1]} local = {head[2]} hr = {`/Authorization/`} logout = {auth[6]}></Head>
          <div className= {css.main}>
            <form noValidate autoComplete="off">
                <ul className={css.list}>
                    <li><input type="text" label="User E-mail" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder={auth[3]} className={css.input}/></li>
                    <li><input type="password" label="User password" value={psw} onChange={(e)=>setPsw(e.target.value)} placeholder={auth[4]} className={css.input}/></li>
                    <li><input type="password" label="User password" value={repsw} onChange={(e)=>setRePsw(e.target.value)} placeholder={auth[7]} className={css.input}/></li>
                    <li><button variant="contained" color="red" onClick={handleClick} className={css.btn}>{auth[5]}</button></li>
                </ul>
            </form>
            <p className={msg_cln}>{msg}</p>
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