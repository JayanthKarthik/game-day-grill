import { Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import img1 from "../assets/Menu Dishes/dish1.png";
import img2 from "../assets/Menu Dishes/dish2.png";
import MenuItem from "../components/MenuItem";
import styles from "../styles/Menu.module.css";

const dishes = [
    {
        name: 'Spicy Guacamole',
        img: img1,
        desc: 'Paired with bluecorn tortilla chips made in house',
        price: 10.15
    },
    {
        name: 'Loaded Nachos',
        img: img2,
        desc: 'Spicy nachos plated with fresh tomato salsa and sour cream.',
        price: 10.15
    },
    {
        name: 'Garlic Bread',
        img: img1,
        desc: 'test description',
        price: 10.15
    },
    {
        name: 'test 4',
        img: img1,
        desc: 'test description',
        price: 10.15
    },
    {
        name: 'test 5',
        img: img1,
        desc: 'test description',
        price: 10.15
    },
];


export default function Menu() {

    return (
        <div>

            <Typography className={styles.title}>
                <h1> Menu Of The Day</h1>
            </Typography>
            <Stack direction="column" className={styles.name} alignItems="center" divider={<Divider color='red' flexItem />}>
                <h1 className={styles.title}>
                    Appetiser
                </h1>
                {dishes.map(dish => <MenuItem name={dish.name} img={dish.img} desc={dish.desc} price={dish.price} />)}
            </Stack>

        </div >
    )
}
