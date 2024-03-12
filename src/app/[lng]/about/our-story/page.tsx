import AboutStory from "@/app/_assets/about_story.jpg";
import Image from "next/image";
import styles from "./our-story.module.css";

export default async function Page() {
    return (
        <main className={styles.container}>
            <section>
                <Image src={AboutStory} alt="about history thumbnail" />
            </section>
            <section className={styles.history}>
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <h1>
                            K-CHUP
                            <br />
                            HISTORY
                        </h1>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.row}>
                            <h4>2023</h4>
                            <p>
                                kchup gochujang hot sauce launched
                                <br />K food Festival in Hangzhou
                                <br /> Pop up at Lotte Department Store
                            </p>
                        </div>
                        <div className={styles.row}>
                            <h4>2024</h4>
                            <p>
                                Ssamssara ssamjang launched
                                <br />
                                Kchup gochujang hot sauce Re-designed & Launched
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
