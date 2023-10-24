import { Section } from "@/components/Section/Section";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Head } from "@/components/Head/Head";



export default function IndexPage(){

    let [email, setEmail] = useState("")
    let [psw, setPsw] = useState("")

    const handleClick=(e)=>{
        e.preventDefault()
        const user={email, psw}
        console.log(user)
        fetch("http://localhost:8080/student/add",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(user)
    
      }).then(()=>{
        console.log("New User added")
      })
    }

      return (
        <div>
          {/* <Head main = "Главная" stations = "Станции" local = "ru" hr = "/"></Head> */}
          <div>
            <form noValidate autoComplete="off">
                <input type="text" label="User E-mail" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type="text" label="User password" value={psw} onChange={(e)=>setPsw(e.target.value)} />
                <button variant="contained" color="red" onClick={handleClick}>Submit</button>
            </form>
          </div>
        </div>
      )
}
