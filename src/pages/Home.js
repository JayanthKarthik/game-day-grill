import styles from "../styles/Home.module.css";
import background from "../assets/Backgrounds/home-background-1.png";
export default function Home() {
    return (
        <div className={styles.container}>
            <img src={background} alt="background" className={styles.backgroundImg} />
            <div className={styles.backgroundContent}>
                <h1 className={styles.headingPrimary}>
                    |<strong> welcome</strong> to game day grill|
                </h1>
                <p className={styles.specialWord}> Call <strong>(123)-456-7890</strong> to make a reservation or book through our website</p>
            </div>
        </div>
    )
}
