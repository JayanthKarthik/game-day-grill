import styles from "../styles/AboutUs.module.css";
import { Stack } from "@mui/system";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import style from "../styles/Navbar.module.css";

export default function home() {
    return (
        <div>
            <Stack>
                <div className={styles.backgroundImg}>
                    <div className={styles.backgroundContent}>
                        <h1 className={styles.headingPrimary}>
                            <span>welcome</span> to game day grill
                    </h1>
                    </div>
                    <AppBar position="static" className={styles.main}>
                        <Toolbar>
                            <Stack
                                width="50%"
                                justifyContent="flex-end"
                                direction="row"
                                spacing={2}
                            >
                                <Button className={style.content} href="/"> Home </Button>
                                <Button className={style.content} href="/menu">Menu</Button>
                                <Button className={style.content} href="/contact">Contact</Button>
                                <Button className={style.content} href="/reservation"> Reservation</Button >
                                <Button className={style.content} href="/about"> About</Button >
                            </Stack >
                        </Toolbar >
                    </AppBar >
                </div>
            </Stack>
        </div >

    )
}
