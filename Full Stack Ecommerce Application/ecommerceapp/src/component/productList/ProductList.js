import Navbar from "../navbar/Navbar";
import Product from "../product/Product";
import styles from "./ProductList.module.css"
import { useEffect, useState } from "react";
import axios  from "axios";
import loading from "..//../component/image/giphy.gif";


const ProductList = ({sort}) =>{

    const [isLoading,setIsLoading] = useState(false);
    const [Products,setProducts] = useState([]);

    useEffect(()=>{
        setIsLoading(true);
        axios.get("http://localhost:9000/products").then((res)=>{setProducts(res.data.products);setIsLoading(false)}).catch((err)=>console.log(err));
    },[])

    const sortProducts = () =>{
        setIsLoading(true);
        axios.put("http://localhost:9000/products/sort").then((res)=>{setProducts(res.data.products);setIsLoading(false)});
    }


    return(
        <>
            <div className={styles.sort}>
                <button onClick={()=>sortProducts()}>Sort By Price</button>
            </div>
            <div className={styles.container}>
                {isLoading?
                <img src={loading} alt="" className={styles.loading}/>
                :
                Products.map((product)=>{
                    // console.log(product);
                    return(
                        <Product product={product} key={product._id}/>
                    )
                })}
                
            </div>
        </>
    )
}

export default ProductList;