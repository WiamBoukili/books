import { useState } from "react"
import data from "../../data.json"
import data_genre from "../../data_genre.json"
export default function Select() {
    const [genre, setgenre] = useState('')
    const {genres} = data_genre
    const [book, setbook] = useState(null)
    const {books} = data
    function showbooks(e){
        e.preventDefault()
        if (genre == "") {
            setbook(books)
        }
        else{
            setbook(books.filter((b)=> b.genre == genre))
        }
    }
  return (
    <>
        <form onSubmit={showbooks}>
            <select onChange={(e)=> setgenre(e.target.value)}>
                <option value="">----</option>
                {
                    genres.map((gen,i)=>(
                        <option key={i} value={gen}>{gen}</option>
                    )
                    )
                }
            </select>
            <button>show books</button>
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
            : <p>select an genre.</p>
        }
    </>
  )
}
