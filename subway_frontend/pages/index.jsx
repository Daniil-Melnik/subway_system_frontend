import { useState, useEffect } from "react";

export default function IndexPage(){

    const[imgs,setImgs]=useState([])

    useEffect(()=>{
        fetch("http://localhost:8080/student/getPhotos")
        .then(res=>res.json())
        .then((result)=>{
          setImgs(result);
        }
      )
      },[])

    return (
        <div>
            {imgs.map(img => (
                <p>
                    <img src={img.src} />
                    <h3>{img.caption}</h3>
                </p>
                

            ))}
        </div>
    )
}