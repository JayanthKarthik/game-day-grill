import { AppBar, Button, Typography } from "@mui/material";
import { Stack, } from "@mui/system";
import styles from "../styles/Footer.module.css";
const Footer = () => {
    return (
        <AppBar position="static" className={styles.footer}>

            <Stack direction="row" alignItems="center">

                <Stack direction="row" spacing={10} width='50%' justifyContent="flex-start">
                    <Stack direction="column" alignItems="center" >
                        <Typography className={styles.title}>Food and Reservations</Typography>
                        <Button className={styles.content} href="#/menu">Menu</Button>
                        <Button className={styles.content} href="#/reservation"> Reservation</Button >
                    </Stack>

                    <Stack direction="column" alignItems="center">
                        <Typography className={styles.title}>Contact and About Us</Typography>
                        <Button className={styles.content} href="#/contact">Contact</Button>
                        <Button className={styles.content} href="#/about"> About</Button >
                    </Stack>
                </Stack>

                <Stack direction="row" width='50%' justifyContent='flex-end'>
                    <Typography>&copy; 2023 Game Day Grill. All rights reserved.</Typography>
                </Stack>
            </Stack>
        </AppBar >
    );
};

export default Footer;