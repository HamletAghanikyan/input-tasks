import { useEffect, useState } from "react"
import './style.scss'

export const Task5 = () => {
    const [toDoList, setToDoList] = useState([])
    
    const getToDoList = ()=>{
        fetch('https://jsonplaceholder.typicode.com/todos').then((data)=>{
            return data.json()
        }).then((result)=>{
            setToDoList(result) 
        })
        
    }

    useEffect(()=>{
        getToDoList()
    })

    return <div>
        {toDoList.length? <div>
            {toDoList.map((item, index) => {
                return <ToDoCard item={item} />
            })}
        </div>: <div>
            <p>Loading...</p></div>}
    </div>
}


function ToDoCard({ item }) {
    return <div className={`to-do-card ${item.completed? `completed`:``}`}>
        <p>{item.title}</p>
    </div>
}