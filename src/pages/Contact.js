import { useState } from "react";
import { toast } from "react-toastify";
import sideImage from "../assets/Backgrounds/contact-background-1.png";
import styles from "../styles/Contact.module.css";

export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        
        event.preventDefault()
        
        setName("");
        setEmail("");
        setMessage("");

        
        
        toast("Your message has been sent, we'll reach out soon!");
    }

    return (
        <div className={styles.contact}>
            <img className={styles.leftSide} src={sideImage} alt="sideImage" />
            <div className={styles.rightSide}>
                <h1> Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        name="name"
                        placeholder="Name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required />
                    <input
                        name="email"
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                    <textarea
                        rows="6"
                        placeholder="Enter message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <button type="submit"> Send Message</button>
                </form>
            </div>
        </div>
    );
}