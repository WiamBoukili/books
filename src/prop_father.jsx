import { useState } from "react";
import Son from "./props_son.jsx"
export default function Prop_father() {
    const [email, setmail] = useState("")
    const [password, setpass] = useState("");
    let donne = [email, password];
    function show (e){
        e.preventDefault();
        <Son data = {donne}/>
    }
   return(
    <form onSubmit={show}>
        <input type="email" placeholder="email@gmail.com" onChange={e=>setmail(e.target.value)} />
        <input type="password" placeholder="*****" onChange={e=>setpass(e.target.value)}/>
        <button>click me</button>
    </form>
   )
}
