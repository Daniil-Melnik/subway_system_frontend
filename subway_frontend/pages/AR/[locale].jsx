import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Head } from "@/components/Head/Head";
import css from "./index.module.css"
import { NeedAuth } from "@/components/NeedAuth/NeedAuth";

const ARMainIndex = () => {
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
        }, [router.query.locale, store]
    )

        return (
            <div className={css.mainpan}>
                <Head main = {head[0]} stations = {head[1]} local = {head[2]} hr = {`/Authorization/`}></Head>
                <NeedAuth msg={auth[0]} href_msg={auth[1]} href_msg_s = {auth[2]} href={`/Authorization/${head[2]}`} href_s={`/Registration/${head[2]}`}/>   
            </div>
          );
};

export default ARMainIndex;

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