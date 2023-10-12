import styles from "./Home.module.css"
import home from "../image/site_design_12.jpg"

const Home = () =>{
    return(
        <div className={styles.container}>
            <h1 className={styles.homeHead}>Welcome to My Ecommerce Website</h1>
            <p className={styles.homeContent}>Hai My Name is Neeraj Kumar This is my React Project using Redux..</p>
            <div className={styles.homeImage}>
                <img src={home} alt="" />
            </div>
        </div>
    )
}

export default Home;