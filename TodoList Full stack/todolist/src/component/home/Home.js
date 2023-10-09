import TodoInput from "../todoInput/TodoInput";
import styles from "./Home.module.css"
import trash from "../image/delete.png"
import correct from "../image/check-mark.png"
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () =>{
    const [todos,setTodos] = useState([]);
    useEffect(() =>{
        axios.get("http://localhost:8000/get").then((data)=>{setTodos(data.data)}).catch((err)=>console.log(err))
    },[todos])
    const [check,setCheck] = useState(false);

    const handleCheck = () =>{
        setCheck(!check);
    }

    const handleUpdate = (id,check) =>{
        axios.put("http://localhost:8000/update/"+id,{done:check})
    }

    const handleDelete = (id) =>{
        axios.delete("http://localhost:8000/delete/"+id)
    }
    return(
        <>
        <div className={styles.container}>
            <TodoInput />
            {todos.length===0? <h2>No Records</h2>:
            todos.map((todo)=>{
                return(
                    <div className={styles.todo} key={todo.id}>
                        <div className={styles.checkDiv} id={todo.done?styles.overline:null} onClick={handleCheck}>
                            <p className={styles.check} onClick={()=>handleUpdate(todo._id)}>{todo.done?<img src={correct} alt=""  className={styles.correct} />:null}</p>
                            <p>{todo.task}</p>
                        </div>
                        <img src={trash} alt="" className={styles.trash} onClick={()=>handleDelete(todo._id)}/>
                    </div>
                )})}
        </div>
        </>
    )
}

export default Home;