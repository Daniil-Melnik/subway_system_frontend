import { Section } from "@/components/Section/Section";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Head } from "@/components/Head/Head";



export default function IndexPage(){

    const[imgs,setImgs] = useState([])
    const[paras, setParas] = useState([])

    const[section, setSection] = useState([])

      return (
        <div>
          <Head></Head>
        </div>
      )
    
}