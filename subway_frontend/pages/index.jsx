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
      for (let i = 0; i < paras.length; i++)
      {
        arr.push({src : imgs[i].src, text : paras[i].text})
      }
      console.log(arr)
      setPage(arr)
      },[])

      // useEffect(()=>{
      //   fetch("http://localhost:8080/student/getParas")
      //   .then(res=>res.json())
      //   .then((result)=>{
      //     setParas(result);
      //   }
      // )
      // },[])
      return (
        <div>
          {page.map( p => (
            <div>
            <Section src = {p.src} text = {p.text} />
            </div>
          ))}
          <p>qqв</p>
        </div>
      )
    
}