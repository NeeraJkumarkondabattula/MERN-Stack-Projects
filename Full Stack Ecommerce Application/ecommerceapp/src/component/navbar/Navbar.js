import styles from "./Navbar.module.css"
import product from "../image/package.png"
import addProduct from "../image/add-product.png";

const Navbar = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.logo}>
                <h2><a href="/" >Ecommerce App</a></h2>
                <div className={styles.links}>
                    <a href="/products" >Products</a><img src={product} alt="" />
                    <a href="/addproduct" >Add products</a><img src={addProduct} alt="" />
                </div>
            </div>
            <div className={styles.profile}>
                <div className={styles.profilename}>
                    <p>Trafalgar D Law</p>
                </div>
                <div className={styles.profileimage}>
                    <img src="https://th.bing.com/th/id/OIP.e07oS9_crPxA0_xKLvdGagHaHa?pid=ImgDet&rs=1" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar;