import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { toast } from "react-toastify";
import { firestore } from "../Firebase";
import sideImage from "../assets/Backgrounds/contact-background-1.png";
import styles from "../styles/Contact.module.css";

export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {

        event.preventDefault();

        try {
            await addDoc(collection(firestore, "contact-us-messages"), {
                name: name,
                email: email,
                message: message,
                time: new Date().toISOString()
            });

            setName("");
            setEmail("");
            setMessage("");

            toast("We got your message, we'll reach out soon!");

        } catch {
            return;
        }
    }

    return (
        <div className={styles.contact}>
            <img className={styles.leftSide} src={sideImage} alt="sideImage" />
            <div className={styles.rightSide}>
                <h1> Contact Us</h1>
                <form className={styles.form} onSubmit={handleSubmit}>
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