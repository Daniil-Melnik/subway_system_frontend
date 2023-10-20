import { Section } from "@/components/Section/Section";
import { useRouter } from "next/router";
import { Head } from "@/components/Head/Head";
import React, { useEffect, useState } from "react";
import css from "../index.module.css"
import { compile } from "vue";
import Link from "next/link";

const StationItem = ({data, data_st}) => {
    const router = useRouter();
    let [stName, setStName] = useState("")
    let [head, setHead] = useState([])
    let [loch, setLoch] = useState("")
    useEffect(() => {
            if (router.query.locale == "en"){
                setStName(data_st.nameEn + " station")
            }
            if (router.query.locale == "ru"){
                setStName("Станция " + data_st.name)
            }
        }, router.query.locale, router.query.id
    )

    useEffect(() => {
        if (router.query.locale == "en"){
            setHead(["Main", "Stations", "en"])
            setLoch(`${router.query.id}/ru`)
        }
        if (router.query.locale == "ru"){
            setHead(["Главная", "Станции", "ru"])
            setLoch(`${router.query.id}/en`)
        }
        
    }, router.query.locale
    )

    // useEffect(() => {
    //     if (router.query.locale == "en"){
    //         setLoch([`/Stations/${router.query.id}/ru`, "Русский"])
    //     }
    //     if (router.query.locale == "ru"){
    //         setLoch([`/Stations/${router.query.id}/en`, "Английский"])
    //     }
    //     console.log(loch[1])
    // }, []
    // )
        console.log(router.query.locale);
        return <div>
            <Head main = {head[0]} stations = {head[1]} local = {head[2]}></Head>
            <div className={css.article_pan}>
            <Link href = {`/Stations/${loch}`}>qqq</Link>
                <h2 className={css.title_article}>{stName}</h2>
                {data.map(d => (
                    <Section text = {d.text} src = {d.src} caption = {d.caption}/>
                ))}
            </div>
        </div>;
}

export default StationItem;

export async function getStaticProps(context) {
    const st_article = await fetch(`http://localhost:8080/student/getArticle/${context.params.id}/${context.params.locale}`).then(res=>res.json())
    const station = await fetch(`http://localhost:8080/student/getStation/${context.params.id}`).then(res=>res.json())
    const locs = context.params.locale
    return {
        props: {
            data: st_article,
            data_st: station,
            loc: locs,
        },
    };
}

export async function getStaticPaths(context) {
    return {
        paths: [
            { params: {id: "1", locale: "ru"}},
            { params: {id: "2", locale: "ru"}},
            { params: {id: "3", locale: "ru"}},
            { params: {id: "4", locale: "ru"}},
        
            { params: {id: "1", locale: "en"}},
            { params: {id: "2", locale: "en"}},
            { params: {id: "3", locale: "en"}},
            { params: {id: "4", locale: "en"}}],
        fallback: false,
    };
}