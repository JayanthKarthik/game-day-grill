import styles from "../styles/Home.module.css";
export default function Home() {
    return (
        <div>
            <div className={styles.backgroundImg}>
                <div className={styles.backgroundContent}>
                    <h1 className={styles.headingPrimary}>
                        |<span> welcome</span> to game day grill |
                    </h1>
                    <p1 className={styles.specialWord}>Call <p3 className={styles.text}>(123)-456-7890</p3> in order to make a reservation</p1>
                    <br></br>
                    <p2 className={styles.specialWord}>or book through our website</p2>
                </div>
            </div>
        </div >
    )
}
