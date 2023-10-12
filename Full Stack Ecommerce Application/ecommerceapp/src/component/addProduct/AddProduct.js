import styles from "./AddProduct.module.css"
import {useState} from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddProduct = ({addProduct}) =>{

    const navigate = useNavigate();

    const [name,setName] = useState("");
    const [discription,setDiscription] = useState("");
    const [rating,setRating] = useState("");
    const [price,setPrice] = useState("");
    const [image,setImage] = useState("");


    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:9000/addproduct",{name,discription,rating,price,image});
        navigate("/products");
    }
   

    return(
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2>Add Product Details</h2>
                <div className={styles.details}>
                    <div className={styles.name}>
                        <label for="name">Product Name : </label>
                        <input type="text" placeholder="Enter Product Name.. " id="name" onChange={e=>setName(e.target.value)}/>
                    </div>
                    <div className={styles.discription}>
                        <label for="name">Product Discription : </label>
                        <input type="text" placeholder="Enter Product Discription.. " onChange={e=>setDiscription(e.target.value)}/>
                    </div>
                    <div className={styles.rating}>
                        <label for="name">Product Rating : </label>
                        <input type="text" placeholder="Enter Product Rating.. " onChange={e=>setRating(e.target.value)}/>
                    </div>
                    <div className={styles.price}>
                        <label for="name">Product Price : </label>
                        <input type="text" placeholder="Enter Product Price.. " onChange={e=>setPrice(e.target.value)}/>
                    </div>
                    <div className={styles.image}>
                        <label for="name">Product Image : </label>  
                        <input type="text" placeholder="Enter Product Image url.. " onChange={e=>setImage(e.target.value)}/>
                    </div>
                    <button className={styles.button}>Add Product</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct;
