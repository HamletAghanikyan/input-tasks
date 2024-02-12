import { useEffect, useState } from "react"
import './style.scss'
import axios from "axios"

export const Task6 = () => {
    const [toDoList, setToDoList] = useState([])
    const [loading, setLoading] = useState(false)

    const getToDoList = async () => {
        setLoading(true)
        const result = await axios.get('https://dummyjson.com/products')
        console.log(result);
        if (result.data) {
            setToDoList(result.data.products)
        }
        setLoading(false)
    }



    useEffect(() => {
        getToDoList()
    }, [])

    return <div>
        {!loading ? <>
            {toDoList.length ? <div>
                {toDoList.map((item, index) => {
                    return <ToDoCard item={item} />
                })}
            </div> : <div>
                <p>List was empty</p></div>}</> : <div>
            <p>Loading...</p></div>}
    </div>

}


function ToDoCard({ item }) {
    return <div className="container">
        <div className="back-image" style={{ backgroundImage: `url(${item.images[0]})` }}>
            <div className="up">
                <p>{item.id}.</p>
                <p>{item.title}</p>
            </div>
            <div className="down">
                <p>Description:</p>
                <p className="description">{item.description}</p>
                <p>Price: {item.price}</p>
                <p>Percentage: {item.discountPercentage}</p>
                <p>Rating: {item.rating}</p>
                <p>Stock: {item.stock}</p>
                <p>Brand: {item.brand}</p>
                <p>Category: {item.category}</p>
            </div>
        </div>
    </div>
}