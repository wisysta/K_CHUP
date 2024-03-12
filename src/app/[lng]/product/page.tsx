import Image from "next/image";
import P0101 from "@/app/_assets/prod_0101.jpg";
import P0201 from "@/app/_assets/prod_0201.jpg";
import P0202 from "@/app/_assets/prod_0202.jpg";
import styles from "./product.module.css";
import Link from "next/link";

export default async function Page() {
    return (
        <main className={styles.container}>
            <section>
                <article>
                    <Link href={"/product/hot-kchup"}>
                        <Image src={P0101} alt="product1" />
                    </Link>
                </article>
                <article>
                    <Link href={"/product/ssamssara"}>
                        <Image src={P0201} alt="product2" />
                    </Link>
                </article>
                <article>
                    <Link href={"/product/hot-kchup"}>
                        <Image src={P0202} alt="product2" />{" "}
                    </Link>
                </article>
            </section>
        </main>
    );
}
