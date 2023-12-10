import "../styles/Contact.Module.css";
import sideImage from "../assets/Backgrounds/contact-background-1.png";

export default function Contact() {
    return (
        <div className="contact">
            <div
                className="leftSide"
                style={{ backgroundImage: `url(${sideImage})` }}
            ></div>
            <div className="rightSide">
                <h1> Contact Us</h1>

                <form id="contact-form" method="POST">
                    <label htmlFor="name">Full Name</label>
                    <input name="name" placeholder="Enter full name..." type="text" />
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="Enter email..." type="email" />
                    <label htmlFor="message">Message</label>
                    <textarea
                        rows="6"
                        placeholder="Enter message..."
                        name="message"
                        required
                    ></textarea>
                    <button type="submit"> Send Message</button>
                </form>
            </div>
        </div>
    );
}