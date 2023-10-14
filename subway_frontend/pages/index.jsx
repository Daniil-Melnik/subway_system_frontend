import { Section } from "@/components/Section";
import { useState, useEffect } from "react";

export default function IndexPage(){

    const[imgs,setImgs] = useState([])
    const[paras, setParas] = useState([])

    const[page, setPage] = useState([])

    useEffect(()=>{
      let arr = [];
        fetch("http://localhost:8080/student/getPhotos")
        .then(res=>res.json())
        .then((result)=>{
          setImgs(result);
        }
      )
      fetch("http://localhost:8080/student/getParas")
        .then(res=>res.json())
        .then((result)=>{
          setParas(result);
        }
      )
      },[])
      return (
        <div>
          {imgs.map(p => (
            <p>{p.src}</p>
          ))}
          {paras.map(p => (
            <p>{p.text}</p>
          ))}
          <p>qqв</p>
        </div>
      )
    
}