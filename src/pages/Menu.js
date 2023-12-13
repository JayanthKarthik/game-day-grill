import MenuItem from "../components/MenuItem.js";
import { MenuList } from "../components/MenuList.js";
import styles from "../styles/Menu.module.css";

export default function Menu() {
    return (
        <div className={styles.menu}>
            <h1 className={styles.menuTitle}>Our Menu</h1>
            <div className={styles.menuList}>
                {MenuList.map((menuItem, key) => {
                    return (
                        <MenuItem
                            className={styles.menuItem}
                            key={key}
                            image={menuItem.image}
                            name={menuItem.name}
                            description={menuItem.description}
                            price={menuItem.price} />
                    );
                })}
            </div>
        </div>
    );
}