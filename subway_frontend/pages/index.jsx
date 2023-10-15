import { Section } from "@/components/Section";
import { useState, useEffect } from "react";

export default function IndexPage(){

    const[imgs,setImgs] = useState([])
    const[paras, setParas] = useState([])

    const[section, setSection] = useState([])

    useEffect(()=>{
      let arr = [];
        fetch("http://localhost:8080/student//getArticle/1")
        .then(res=>res.json())
        .then((result)=>{
          setSection(result);
        }
      )
      },[])
      return (
        <div>
          {section.map(s => (
            <Section text = {s.text} src = {s.src} />
          ))

          }
          <p>qqв</p>
        </div>
      )
    
}