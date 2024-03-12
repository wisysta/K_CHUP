import Link from "next/link";
import Insta from "@/app/_assets/Icon_Ista.svg";
import Face from "@/app/_assets/Icon_Face.svg";
import Kakao from "@/app/_assets/Icon_Kakao.svg";
import style from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={style.container}>
            <div className={style.wrapper}>
                <div className={style.left}>
                    <div className={style.nav}>
                        <div>
                            <p>ABOUT US</p>
                            <ul>
                                <li>
                                    <Link href={"/about/our-story"}>
                                        OUR STORY
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/about/our-partner"}>
                                        OUR PARTNER
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p>OUR PRODUCT</p>
                            <ul>
                                <li>
                                    <Link href={"/product"}>K-CHUP</Link>
                                </li>
                                <li>
                                    <Link href={"/product/hot-kchup"}>
                                        HOT K-CHUP
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/product/ssamssara"}>
                                        SSAMSSARA
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p>
                                <Link href={"/store"}>FIND US OUR STORE</Link>
                            </p>
                        </div>
                        <div>
                            <p>SHOP</p>
                            <ul>
                                <li>
                                    <Link
                                        href={
                                            "https://smartstore.naver.com/kchupkorea"
                                        }
                                    >
                                        OFFICIAL MALL
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p className={style.copy}>
                            Copyright 2023 K-CHUP. All rights reserved.
                        </p>
                    </div>
                </div>
                <div className={style.right}>
                    <div className={style.contact}>
                        <p>CONTACT US</p>
                        <ul>
                            <li>
                                <a href="mailto:kchupkorea@gmail.com">
                                    kchupkorea@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:025535032">+82.02-535-5023</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className={style.icons}>
                            <li>
                                <Link
                                    href={
                                        "https://www.instagram.com/k_chupkorea/"
                                    }
                                >
                                    <Insta width="52" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={
                                        "https://www.instagram.com/k_chupkorea/"
                                    }
                                >
                                    <Face width="52" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={
                                        "https://www.instagram.com/k_chupkorea/"
                                    }
                                >
                                    <Kakao width="52" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
