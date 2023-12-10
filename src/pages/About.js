import { Stack } from "@mui/system";
import styles from "../styles/AboutUs.module.css";

export default function About() {
    return (
        <div>
            <Stack direction="column" alignItems="center">
                <h1 className={styles.title}>
                    Our Culinary Journey
                    </h1>
                <p1 className={styles.text}>
                    Indulge in a culinary experience like no other at Game day Grill. Established in 2023, we
                        <br></br>
                        embarked on a gastronomic journey with a passion for creating memorable dining
                        <br></br>
                        moments. Our chefs, inspired by game day foods, are dedicated to delivering a symphony of
                        <br></br>
                        flavors that tantalize the taste buds and leave a lasting impression.
                    </p1>

                <h1 className={styles.title}>
                    Culinary Excellence
                    </h1>
                <p1 className={styles.text}>
                    At GameDay Grill we believe in the artistry of food. Each dish is a masterpiece, crafted
                        <br></br>
                        with precision and care using only the finest, locally-sourced ingredients.
                    </p1>
                <h1 className={styles.title}>
                    Ambiance and Hospitality
                    </h1>
                <p1 className={styles.text}>
                    Step into an inviting and cozy atmosphere that sets the stage for a delightful dining
                            <br></br>
                            experience. Our warm and attentive staff is committed to ensuring your comfort, making
                            <br></br>
                            every visit to Game day grill a memorable occasion.
                    </p1>
                <h1 className={styles.title}>
                    Locally Inspired, Globaly Infused
                    </h1>
                <p1 className={styles.text}>
                    We take pride in our roots and draw inspiration from the local and international flavors
                        <br></br>
                        that surround us. Our chefs infuse global influences to create a menu that celebrates
                        <br></br>
                        diversity, providing a unique fusion of tastes that tell a story with every bite. Our
                        <br></br>
                        menu reflects a blend of traditional game day foods and more modern dishes creating a whole
                        <br></br>
                        new cuisine.
                    </p1>
                <h1 className={styles.title}>
                    Join Us for a Culinary Adventure
                    </h1>
                <p1 className={styles.text}>
                    Whether you're a seasoned food enthusiast or someone just looking to eat game day foods,
                        <br></br>
                        Game day grill invites you to join us on a culinary adventure. Indulge in exquisite flavors,
                        <br></br>
                        immerse yourself in our warm ambiance, and create moments to cherish.
                        <br></br>
                        Thank you for considering [Your Restaurant Name] for your dining escapades. We look forward
                        <br></br>
                        to serving you soon!

                    </p1>

            </Stack>
        </div >
    )
}