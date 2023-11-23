import { Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import img1 from "../assets/Menu Dishes/poutine.png";
import MenuItem from "../components/MenuItem";
import styles from "../styles/Menu.module.css";

const dishes = [
    {
        name: 'test 1',
        img: img1,
        desc: 'test description',
        price: 10.15
    },
    {
        name: 'test 2',
        img: img1,
        desc: 'test description',
        price: 10.15
    },
    {
        name: 'test 3',
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
                {dishes.map(dish => <MenuItem name={dish.name} img={dish.img} desc={dish.desc} price={dish.price} />)}
            </Stack>

        </div >
    )
}
