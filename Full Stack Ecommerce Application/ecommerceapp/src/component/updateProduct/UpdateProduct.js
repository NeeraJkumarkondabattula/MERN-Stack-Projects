import styles from "./UpdateProduct.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () =>{

    var pname,prating,pprice,pdiscription,pimage;

    const navigate = useNavigate();

    const id = window.location.href.substring(36);

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:9000/products").then((res)=>setProducts(res.data.products))
    },[])


    products.map((product)=>{
        if(product._id===id){
            pname=product.name;
            prating=product.rating;
            pprice=product.price;
            pdiscription=product.discription;
            pimage=product.image;
        }
    })

    const [name,setName] = useState(pname);
    const [discription,setDiscription] = useState(pdiscription);
    const [rating,setRating] = useState(prating);
    const [price,setPrice] = useState(pprice);
    const [image,setImage] = useState(pimage);

    console.log(name,discription,rating,price,image);


    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.put("http://localhost:9000/updateproduct/"+id,{name,discription,price,rating,id,image})
        navigate("/products");
    }
    return(
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2>Update Product Details</h2>
                <div className={styles.details}>
                    <div className={styles.name}>
                        <label for="name">Product Name : </label>
                        <input type="text" placeholder={pname} onChange={e=>setName(e.target.value)}/>
                    </div>
                    <div className={styles.discription}>
                        <label for="name">Product Discription : </label>
                        <input type="text" placeholder={pdiscription} onChange={e=>setDiscription(e.target.value)}/>
                    </div>
                    <div className={styles.rating}>
                        <label for="name">Product Rating : </label>
                        <input type="text" placeholder={prating}  onChange={e=>setRating(e.target.value)}/>
                    </div>
                    <div className={styles.price}>
                        <label for="name">Product Price : </label>
                        <input type="text" placeholder={pprice} onChange={e=>setPrice(e.target.value)}/>
                    </div>
                    <div className={styles.image}>
                        <label for="name">Product Image : </label>  
                        <input type="text" placeholder={pimage} onChange={e=>setImage(e.target.value)}/>
                    </div>
                    <button className={styles.button}>Update Product</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateProduct