import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import styles from "../styles/Menu.module.css"
import img1 from "../assets/Menu Dishes/poutine.png";
export default function Menu() {
    return (
        <div>
            <Typography className={styles.title}>
                <h1> Menu Of The Day</h1>
            </Typography>
            <Stack direction="column" className={styles.name} alignItems="center">
                Poutine
                <img src={img1} width={600} ></img>
                <p1 className={styles.desc}> - a dish prepared in Quebe, taking  fries to a new level</p1>
            </Stack>

        </div>
    )
}

