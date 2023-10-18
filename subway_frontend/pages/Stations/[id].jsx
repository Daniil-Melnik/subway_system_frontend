import { Section } from "@/components/Section/Section";
import { useRouter } from "next/router";
import { Head } from "@/components/Head/Head";
import React from "react";
import css from "./index.module.css"

const StationItem = ({data, data_st}) => {
        const router = useRouter();
        console.log(router.query.id);
        return <div>
            <Head></Head>
            <div className={css.article_pan}>
                <h2 className={css.title_article}>Станция {data_st.name}</h2>
                {data.map(d => (
                    <Section text = {d.text} src = {d.src} caption = {d.caption}/>
                ))}
            </div>
        </div>;
}

export default StationItem;

export async function getStaticProps(context) {
    const st_article = await fetch(`http://localhost:8080/student/getArticle/${context.params.id}`).then(res=>res.json())
    const station = await fetch(`http://localhost:8080/student/getStation/${context.params.id}`).then(res=>res.json())
    return {
        props: {
            data: st_article,
            data_st: station,
        },
    };
}

export async function getStaticPaths(context) {
    return {
        paths: [{ params: {id: "1"}}, { params: {id: "2"}}],
        fallback: false,
    };
}