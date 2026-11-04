import data from "./pro.json"

export default function Show_product(){
    console.log(data)
    let {products} = data
    
    return (<>
        <h1>MAP()</h1>
        <table>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>description</th>
                <th>price</th>
            </tr>
         {
            products.map((e,i)=> (
            <tr>
                <td>{e.id}</td>
                <td>{e.title}</td>
                <td>{e.description}</td>
                <td>{e.price}</td>
            </tr>
         ))
         }
        </table>

        {/* <H1>FILTER()</H1>

        <table>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>description</th>
                <th>price</th>
            </tr>
         
            {
            products.filter((e)=> e.stock >= 10).map((e)=> (
            <tr>
                <td>{e.id}</td>
                <td>{e.title}</td>
                <td>{e.description}</td>
                <td>{e.price}</td>
            </tr>

            ))}
        </table> */}
    </>)
}