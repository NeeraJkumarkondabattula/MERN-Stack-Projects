import styles from "./NotFound.module.css"

const NotFound = () =>{
    return(
        <div className={styles.notfound}>
            <img src="https://w3.onera.fr/sites/default/files/404-error-not-found-page-lost-1024x788.png" alt="" />
        </div>
    )
}

export default NotFound;