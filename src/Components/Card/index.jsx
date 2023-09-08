import styles from "./style.module.css";
import posterImg from "../../assets/star-wars.webp";

export default function Card(){
    return (
        <div className={styles.container}>
            <img className={styles.poster} src={posterImg} alt="Start Wars Poster" />
            <div>
                <h2>Poster do filme Star Wars</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maxime voluptate atque ipsum qui corrupti tenetur aperiam a sunt dignissimos quisquam, modi doloremque! Blanditiis explicabo quam ipsam? Earum, ullam architecto.</p>
                <Button />
            </div>
        </div>
    )
}