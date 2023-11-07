import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Head } from "@/components/Head/Head";
import { StCard } from "@/components/StCard/StCard";
import css from "./index.module.css"

const LocaleIndex = ({data, l_data}) => {
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
                <div key={s.id} className={css.cards}>
                    <StCard img1 = {s.img1} img2 = {s.img2} img3 = {s.img3} linka = {`/Stations/${s.id}/${head[2]}`} year = {s.year} name = {s.name} line = {l_data[s.line_id - 1].name}></StCard>
                    {/* <p><Link href={`/Stations/${s.id}/${head[2]}`}>{s.name}</Link></p> */}
                </div>
            ))}
        </div>
        
    </div>
  );
};

export default LocaleIndex;

export async function getStaticProps(context) {
    const stations = await fetch(`http://localhost:8080/student/getStations/${context.params.locale}`).then(res=>res.json())
    const lines = await fetch(`http://localhost:8080/student/getLines`).then(res=>res.json())
    return {
        props: {
            data: stations,
            l_data: lines,
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