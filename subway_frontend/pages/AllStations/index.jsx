import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Head } from "@/components/Head/Head";
import css from "./index.module.css"

const IndexPage = () => {
  let [stations, setStations] = useState([])

  useEffect(()=>{
        fetch("http://localhost:8080/student/getStations/ru")
        .then(res=>res.json())
        .then((result)=>{
          setStations(result);
        }
      )
      },[])

  return (
    <div>
        <Head></Head>
        <div className={css.linkPan}>
            {stations.map(s => (
                <div>
                    <p><Link href={`/Stations/${s.id}`}>{s.name}</Link></p>
                </div>
            ))}
        </div>
        
    </div>
  );
};

export default IndexPage;