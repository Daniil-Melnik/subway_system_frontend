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
    let [liTab, setLiTab] = useState(1)
    let [dataM, setDataM] = useState(data)
    let [stName, setStName] = useState("")
    let [btnTxt, setBtnTxt] = useState("Список")
    useEffect(() => {
        let k = []
        console.log(data)
            if (router.query.locale == "en"){
                setHead(["Main", "Stations", "en"])
            }
            if (router.query.locale == "ru"){
                setHead(["Главная", "Станции", "ru"])
            }
            for (let i = 0; i < data.length; i++){
                    if (data[i].name.toUpperCase().includes(stName.toUpperCase())){
                        k.push(data[i])
                    }
            }
            setDataM(k)
        }, [router.query.locale, stName]
    )
    const handleClick_1=(e)=>{
        setLiTab(0)
        setBtnTxt("Таблица")
    }
    const handleClick_2=(e)=>{
        setLiTab(1)
        setBtnTxt("Список")
    }

    if (liTab == 1){
        return (
            <div>
                <Head main = {head[0]} stations = {head[1]} local = {head[2]} hr = "/AllStations"></Head>
                <button className={css.btn} onClick={handleClick_1}>{btnTxt}</button>
                <p className={css.main_title}>Станции</p>
                <input type="text" label="Название станции" value={stName} onChange={(e)=>setStName(e.target.value)} placeholder="Название станции" className={css.input}/>
                <div className={css.linkPan}>
                    {dataM.map(s => (
                        <div key={s.id} className={css.cards}>
                            <StCard img1 = {s.img1} img2 = {s.img2} img3 = {s.img3} linka = {`/Stations/${s.id}/${head[2]}`} year = {s.year} name = {s.name} line = {l_data[s.line_id - 1].name} line_id = {s.line_id}></StCard>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    if (liTab == 0){
        return (
            <div>
                <Head main = {head[0]} stations = {head[1]} local = {head[2]} hr = "/AllStations"></Head>
                <button className={css.btn} onClick={handleClick_2}>{btnTxt}</button>
                <p className={css.main_title}>Станции</p>
                <input type="text" label="Название станции" value={stName} onChange={(e)=>setStName(e.target.value)} placeholder="Название станции" className={css.input}/>
                <div className={css.linkPan}>
                    <table className={css.table}>
                        <tr className={css.tr}>
                            <th className={css.td_1}>Название</th>
                            <th className={css.td_2}>Год</th>
                            <th className={css.td_3}>Линия</th>
                            <th className={css.td_4}>№ линии</th>
                        </tr>
                        {dataM.map(s => (
                            <tr className={css.tr}>
                                <td className={css.td_1}><Link className={css.tb_link} href={`/Stations/${s.id}/${head[2]}`}>{s.name}</Link></td>
                                <td className={css.td_2}>{s.year}</td>
                                <td className={css.td_3}>{l_data[s.line_id - 1].name}</td>
                                <td className={css.td_4}>{s.line_id}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        );
    }
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