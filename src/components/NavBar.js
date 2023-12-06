import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import logo from "../assets/logo.png";
import styles from "../styles/Navbar.module.css";

export default function NavBar() {
    return (
        <AppBar position="static" className={styles.main}>
            <Toolbar>
                <Stack width="50%" alignItems="center" direction="row" spacing={3}>
                    <a href="/" >
                        <img src={logo} width={40}></img>
                    </a>
                    <Typography className={styles.content} sx={{ flexGrow: 1 }}>
                        <h3> Game Day Grill </h3>
                    </Typography>
                </Stack>
                <Stack
                    width="50%"
                    justifyContent="flex-end"
                    direction="row"
                    spacing={2}
                >
                    <Button className={styles.content} href="/"> Home </Button>
                    <Button className={styles.content} href="/menu">Menu</Button>
                    <Button className={styles.content} href="/contact">Contact</Button>
                    <Button className={styles.content} href="/reservation"> Reservation</Button >
                </Stack >
            </Toolbar >
        </AppBar >
    );
}
