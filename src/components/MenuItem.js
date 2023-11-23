import styles from "../styles/MenuItem.module.css";

export default function MenuItem({ name, img, desc, price }) {
    return (
        <div>
            <p>{name}</p>
            <img src={img} width={600} ></img>
            <p className={styles.desc}> {desc}</p>
            <p className={styles.price}> {price}</p>
        </div>
    )
}
