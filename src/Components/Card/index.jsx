import styles from "./style.module.css";
import Button from "../Button";

export default function Card({title, image, alt}){
    return (
        <div className={styles.container}>
            <img className={styles.poster} src={image} alt={alt} />
            <div>
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maxime voluptate atque ipsum qui corrupti tenetur aperiam a sunt dignissimos quisquam, modi doloremque! Blanditiis explicabo quam ipsam? Earum, ullam architecto.</p>
                <Button text="Comprar agora" />
            </div>
        </div>
    )
}