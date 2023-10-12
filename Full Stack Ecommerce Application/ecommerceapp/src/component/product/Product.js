import styles from "./Product.module.css";
import edit from "../image/writing.png";
import remove from "../image/trash.png"
import star from "../image/star.png"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Product = (product) =>{

    const navigate = useNavigate();

    const {name,discription,price,rating,_id,image} = product.product;

    const removeP = (id) => {
        axios.delete("http://localhost:9000/products/"+id).catch((err)=>console.log(err));
        window.location.reload();
    }

    const handleUpdate = (id) =>{
        navigate(`/updateproduct/${id}`)
    }
    

    return(
        <>
            <div className={styles.product}>
                    <div className={styles.image}>
                        <img src={image} alt="" />
                    </div>
                    <div className={styles.productDetails}>
                        <div className={styles.name}>
                            <p>{name}</p>
                        </div>
                        <div className={styles.discription}>
                            <p>{discription}</p>
                        </div>
                        <div className={styles.rating}>
                            <p>{rating}<img src={star} alt="" /></p>
                        </div>
                        <div className={styles.price}>
                            <div>₹ {price}</div>
                            <div className={styles.button}>
                                <img src={edit} alt="" onClick={()=>{handleUpdate(_id)}}/>
                                <img src={remove} alt="" onClick={()=>{removeP(_id)}}/>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Product;