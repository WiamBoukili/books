import { useState } from "react"
import data from "../../data.json"
import genre from "../../data_genre.json"
export default function Search() {
    const {books} = data
    const [input, setinput] = useState("") 
    const [book, setbook] = useState(null)
    function searchme(e){
        e.preventDefault()
        setbook(books.filter((b)=> b.title == input))
    }
  return (
    <>
    <form onSubmit={searchme}>
        <input type="search" onChange={(e)=>setinput(e.target.value)}/>
        <button>search</button>
    </form>
    {
    book?
        book.map(({id, title, author, year, genre})=>(
        <div key={id}>
            <p>{title}</p>
            <p>{author}</p>
            <p>{year}</p>
            <p>{genre}</p>
        </div>
        ))
    :<p>search first</p> 
    }
  </>
  )
}
