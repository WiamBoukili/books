import React, { useState } from 'react'

export default function State() {
    const[n1, setn1] = useState (0);
    const[n2, setn2] = useState (0);
    const [opr, setop] = useState ('');
    let [res,setres]  = useState(0);
   function resultat(e){
        e.preventDefault();
        console.log(n1, n2, opr)
        switch(opr){
            case "+":
                res = n1 + n2;
                break;
            case "-" :
                res = n1 - n2;
                break;
            case "x" :
                res = n1 * n2;
                break;
            default:
                "choose an operation..."
                break;
        }
        setres(res);
    }
  return (
    <>
        <form onSubmit={resultat}>
            <input type="number" onChange={e=>setn1(e.target.value)}/><br/>
            <input type="number" onChange={e=>setn2(e.target.value)}/><br/>
            <select onChange={e=>setop(e.target.value)}>
                <option value="------"></option>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="x">x</option>
            </select><br/>
            <button>=</button>
        </form>
        <p>{res}</p>
    </>
  )
}
