import { useState } from "react";
import styles from "./TodoInput.module.css";
import axios from "axios";


const TodoInput =() =>{
    const [task,setTask] = useState("");
    const handleAdd = () =>{
        axios.post("http://localhost:8000/add",{task:task}).then((result)=>console.log(result)).catch((err)=>console.log(err))
        setTask("");
    }
    return(
        
        <div className={styles.form}>
            <input type="text" placeholder="Enter Todo" value={task} onChange={(e)=>setTask(e.target.value)}/>
            <button onClick={handleAdd}>ADD</button>
        </div>
    )
}

export default TodoInput;