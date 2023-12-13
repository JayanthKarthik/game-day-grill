import styles from "../styles/Contact.module.css";
import sideImage from "../assets/Backgrounds/contact-background-1.png";
export default function Contact() {
    return (
        <div className={styles.contact}>
            <img className={styles.leftSide} src={sideImage} alt="sideImage"/>
            <div className={styles.rightSide}>
                <h1> Contact Us</h1>
                <form>
                    <input name="name" placeholder="Name" type="text" required/>
                    <input name="email" placeholder="Email" type="email" required/>
                    <textarea
                        rows="6"
                        placeholder="Enter message"
                        name="message"
                        required
                    ></textarea>
                    <button type="submit"> Send Message</button>
                </form>
            </div>
        </div>
    );
}