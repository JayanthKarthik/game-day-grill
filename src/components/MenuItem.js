import { Stack } from "@mui/material";
import styles from "../styles/MenuItem.module.css";

export default function MenuItem({ className, image, description, name, price }) {
    return (
        <div className={className}>
            <Stack className={styles.MenuItem}>
                <img src={image} alt={description} width="350px"></img>
                <h1> {name} </h1>
                <desc>{description}</desc>
                <price> ${price} </price>
            </Stack >
        </div>
    );
}