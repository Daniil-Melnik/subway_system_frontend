import { Section } from "@/components/Section/Section";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Head } from "@/components/Head/Head";



export default function IndexPage(){

    let [email, setEmail] = useState("")
    let [psw, setPsw] = useState("")
    let [user, setUser] = useState()
    let [username, setUsername] = useState("")


    useEffect(()=>{
        if (email != ""){
            if (psw != ""){
                fetch(`http://localhost:8080/student/getUser/${email}/${psw}`)
                .then(res=>res.json()).then((result)=>{
                    setUser(result);
                },
                console.log(user)   
                ) 
            }
        }
      },[psw, email])

    const handleClick=(e)=>{
        e.preventDefault()
        if (user.email != "no_email") {
            setUsername(user.email)
            localStorage.setItem("email", user.email)
            localStorage.setItem("isLogged", 1)
        }
        else {
            setUsername("no_user")
            localStorage.setItem("email", "")
            localStorage.setItem("isLogged", 0)
        }
    }

    
    
      return (
        <div>
          {/* <Head main = "Главная" stations = "Станции" local = "ru" hr = "/"></Head> */}
          <div>
            <p>{username}</p>
            <form noValidate autoComplete="off">
                <input type="text" label="User E-mail" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type="text" label="User password" value={psw} onChange={(e)=>setPsw(e.target.value)} />
                <button variant="contained" color="red" onClick={handleClick}>Submit</button>
            </form>
          </div>
        </div>
      )
}
