import { useTranslation } from "../i18n";
import style from "./main.module.css";
import MainStory from "@/app/_assets/main_story.jpg";
import MainProduct from "@/app/_assets/main_product.jpg";
import Image from "next/image";
import cx from "classnames";
import Link from "next/link";

type Props = {
    params: {
        lng: string;
    };
};

export default async function Page({ params: { lng } }: Props) {
    const { t } = await useTranslation(lng, "translation");
    return (
        <main className={style.container}>
            <section className={style.video}>
                <video
                    autoPlay
                    muted
                    loop
                    src="https://player.vimeo.com/progressive_redirect/playback/922285274/rendition/1080p/file.mp4?loc=external&signature=c554f42669a08092d3c786cbd22f8817c0562aa7d206e126e780dae4bb68ca98"
                ></video>
                <div className={style.background_video}></div>
            </section>
            <section>
                <Link href={"/about/our-story"}>
                    <div className={cx(style.text_over_image, style.story)}>
                        <div className={style.sub_title}>BRAND STORY</div>
                        <div className={style.main_title}>WHO WE ARE?</div>
                    </div>
                    <Image src={MainStory} alt="main story thumbnail" />
                </Link>
            </section>
            <section>
                <Link href={"/product/kchup"}>
                    <div className={cx(style.text_over_image, style.product)}>
                        <div className={style.main_title}>OUR PRODUCT</div>
                    </div>
                    <Image src={MainProduct} alt="main product thumbnail" />
                </Link>
            </section>
        </main>
    );
}
