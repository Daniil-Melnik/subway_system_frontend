import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Head } from "@/components/Head/Head";
import css from "./index.module.css"

const LocaleIndex = ({data}) => {
    const router = useRouter();
    let [head, setHead] = useState([])
    let [loc, setLoc] = useState("")
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
        <Head main = {head[0]} stations = {head[1]} local = {head[2]} hr = "/AllStations"></Head>
        <div className={css.linkPan}>
            {data.map(s => (
                <div>
                    <p><Link href={`/Stations/${s.id}/${head[2]}`}>{s.name}</Link></p>
                </div>
            ))}
        </div>
        
    </div>
  );
};

export default LocaleIndex;

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