import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import styles from "../styles/Navbar.module.css";
const Footer = () => {
    return (
        <footer style={footerStyle}>
            <Stack width="50%" justifyContent="flex-end" direction="row" spacing={10}>
                <div>
                    <h1>FOOD</h1>
                    <Button className={styles.content} href="#/reservation"> Reservation</Button >
                    <br></br>
                    <Button className={styles.content} href="#/menu">Menu</Button>
                </div>
                <div>
                    <h1>ABOUT</h1>
                    <Button className={styles.content} href="#/about"> About</Button >
                    <br></br>
                    <Button className={styles.content} href="#/contact">Contact</Button>
                </div>
                <div>
                    <p></p>
                    <br></br>
                    <p>&copy; 2023 Game Day Grill. All rights reserved.</p>
                </div>

            </Stack>
        </footer>
    );
};

const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem',
    position: 'fixed',
    bottom: 0,
    width: '100%',
};

export default Footer;