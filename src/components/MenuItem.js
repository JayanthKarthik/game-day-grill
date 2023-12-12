import styles from "../styles/MenuItem.module.css";

export default function MenuItem({ image, description, name, price }) {
    return (
        <div className={styles.MenuItem}>
            <img src={image} alt={description} width="350px"></img>
            <h1 class> {name} </h1>
            <p1>{description}</p1>
            <p> ${price} </p>
            <br></br>
            <p></p>
            <br></br>
            <p></p>
            <br></br>
            <p></p>
        </div>
    );
}