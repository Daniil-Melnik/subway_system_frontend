import { Section } from "@/components/Section/Section";
import Link from "next/link";
import { useState, useEffect } from "react";



export default function IndexPage(){

    const[imgs,setImgs] = useState([])
    const[paras, setParas] = useState([])

    const[section, setSection] = useState([])

    // useEffect(()=>{
    //   let arr = [];
    //     fetch("http://localhost:8080/student//getArticle/1")
    //     .then(res=>res.json())
    //     .then((result)=>{
    //       setSection(result);
    //     }
    //   )
    //   },[])
      return (
        <div>
          <Link href={"1"}>Электросила</Link>
          <p></p>
          <Link href={"2"}>Фрунзенская</Link>
        </div>
      )
    
}