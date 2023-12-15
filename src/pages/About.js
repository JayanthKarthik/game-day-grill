import { Stack } from "@mui/system";
import styles from "../styles/AboutUs.module.css";
import adventure from "../assets/Backgrounds/About/adventure.jpg";
import atmosphere from "../assets/Backgrounds/About/atmosphere.jpg";
import excellence from "../assets/Backgrounds/About/excellence.jpg";
import infused from "../assets/Backgrounds/About/infused.jpg";
import journey from "../assets/Backgrounds/About/journey.jpg";

export default function About() {
    return (
        <Stack className={styles.container} direction="column" alignItems='center' spacing={10}>

            <Stack direction="row" alignItems="center" spacing={10} width='70vw'>
                <Stack width='35%'>
                    <img src={adventure} alt="adventure" />
                </Stack>
                <Stack width='65%' alignItems='flex-start'>
                    <h1>
                        Our Culinary Journey
                    </h1>
                    <p>
                        Indulge in a culinary experience like no other at Game day Grill. Established in 2023, we
                        embarked on a gastronomic journey with a passion for creating memorable dining
                        moments. Our chefs, inspired by game day foods, are dedicated to delivering a symphony of
                        flavors that tantalize the taste buds and leave a lasting impression.
                    </p>
                </Stack>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={10} width='70vw'>
                <Stack width='35%'>
                    <img src={atmosphere} alt="atmosphere" />
                </Stack>
                <Stack width='65%' alignItems='flex-start'>
                    <h1>
                        Culinary Excellence
                    </h1>
                    <p>
                        At GameDay Grill we believe in the artistry of food. Each dish is a masterpiece, crafted
                        with precision and care using only the finest, locally-sourced ingredients.
                    </p>
                </Stack>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={10} width='70vw'>
                <Stack width='35%'>
                    <img src={excellence} alt="excellence" />
                </Stack>
                <Stack width='65%' alignItems='flex-start'>
                    <h1>
                        Ambiance and Hospitality
                    </h1>
                    <p>
                        Step into an inviting and cozy atmosphere that sets the stage for a delightful dining
                        experience. Our warm and attentive staff is committed to ensuring your comfort, making
                        every visit to Game day grill a memorable occasion.
                    </p>
                </Stack>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={10} width='70vw'>
                <Stack width='35%'>
                    <img src={infused} alt="infused" />
                </Stack>
                <Stack width='65%' alignItems='flex-start'>
                    <h1>
                        Locally Inspired, Globaly Infused
                    </h1>
                    <p>
                        We take pride in our roots and draw inspiration from the local and international flavors
                        that surround us. Our chefs infuse global influences to create a menu that celebrates
                        diversity, providing a unique fusion of tastes that tell a story with every bite. Our
                        menu reflects a blend of traditional game day foods and more modern dishes creating a whole
                        new cuisine.
                    </p>
                </Stack>
            </Stack>


            <Stack direction="row" alignItems="center" spacing={10} width='70vw'>
                <Stack width='35%'>
                    <img src={journey} alt="journey" />
                </Stack>
                <Stack width='65%' alignItems='flex-start'>
                    <h1>Join Us for a Culinary Adventure</h1>
                    <p>
                        Whether you're a seasoned food enthusiast or someone just looking to eat game day foods,
                        Game day grill invites you to join us on a culinary adventure. Indulge in exquisite flavors,
                        immerse yourself in our warm ambiance, and create moments to cherish.
                        Thank you for considering Game Day Grill for your dining escapades. We look forward
                        to serving you soon!
                    </p>
                </Stack>
            </Stack>

        </Stack>
    );
}