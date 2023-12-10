import styles from "../styles/MenuItem.module.css";

export default function MenuItem({ image, name, price }) {
    return (
        <div className={styles.MenuItem}>
            <img src={image} width="350px"></img>
            <h1> {name} </h1>
            <p> ${price} </p>
        </div>
    );
}