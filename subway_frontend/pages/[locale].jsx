import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Head } from "@/components/Head/Head";

const LocaleMainIndex = () => {
    const router = useRouter();
    let [head, setHead] = useState([])
    useEffect(() => {
            if (router.query.locale == "en"){
                setHead(["Main", "Stations", "en"])
            }
            if (router.query.locale == "ru"){
                setHead(["Главная", "Станции", "ru"])
            }
        }, router.query.locale
    )

  return (
    <div>
        <Head main = {head[0]} stations = {head[1]} local = {head[2]} hr = "/"></Head>       
    </div>
  );
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