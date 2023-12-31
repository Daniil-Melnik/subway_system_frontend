import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Head } from "@/components/Head/Head";
import css from "./index.module.css"
import { NeedAuth } from "@/components/NeedAuth/NeedAuth";

const LocaleMainIndex = () => {
    const router = useRouter();
    let [head, setHead] = useState([])
    let [auth, setAuth] = useState([])
    let [store, setStore] = useState(0)
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
            if (localStorage.getItem("isLogged") == 0) {
                window.location.replace(`/AR/${head[2]}`);
            }
        }, [router.query.locale, store]
    )
    if (store == 1){
        return (
            <div className={css.mainpan}>
                <Head main = {head[0]} stations = {head[1]} local = {head[2]} hr = "/"></Head>       
            </div>
          );
    } 
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