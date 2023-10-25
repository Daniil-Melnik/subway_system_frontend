import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Head } from "@/components/Head/Head";
import Link from "next/link";
import { NeedAuth } from "@/components/NeedAuth/NeedAuth";

const LocaleMainIndex = () => {
    const router = useRouter();
    let [head, setHead] = useState([])
    let [store, setStore] = useState(0)
    useEffect(() => {
            if (router.query.locale == "en"){
                setHead(["Main", "Stations", "en"])
            }
            if (router.query.locale == "ru"){
                setHead(["Главная", "Станции", "ru"])
            }
            setStore(localStorage.getItem("isLogged"))
        }, [router.query.locale, store]
    )
    if (store == 1){
        return (
            <div>
                <Head main = {head[0]} stations = {head[1]} local = {head[2]} hr = "/"></Head>       
            </div>
          );
    }
    else{
        return (
            <div>
                 <NeedAuth msg="Авторизуйтсь" href_msg="Авторизоваться" href="/Authorization"/>
                <p></p>
                <Link href="/Authorization">go</Link>    
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