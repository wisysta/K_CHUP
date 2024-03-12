import style from "../product.module.css";
import Image from "next/image";
import cx from "classnames";
import Main from "@/app/_assets/prod_01_main.jpg";
import Sub1 from "@/app/_assets/prod01_main_01.jpg";
import Sub2 from "@/app/_assets/prod01_main_02.jpg";

export default function Page() {
    return (
        <main className={style.container}>
            <section className={style.main}>
                <div className={cx(style.text_over_image, style.story)}>
                    <div className={style.main_title}>HOT K-CHUP</div>
                    <div className={style.sub_title}>
                        Innovation of Korean hot sauce “Gochujang”
                        <br />
                        Once K-CHUP placed on your table, your meal will be just
                        perfect!
                    </div>
                </div>
                <Image src={Main} alt="main story thumbnail" />
            </section>
            <section>
                <div className={style.wrapper}>
                    <div className={style.left}>
                        <Image src={Sub1} alt="image" />
                    </div>
                    <div className={style.right}>
                        <div className={style.text_with_section}>
                            <h2>
                                식탁 위로 올라온
                                <br />
                                한국 고추장 핫 소스
                            </h2>
                            <p>"나의 첫 고추장은 케이첩!"</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className={style.wrapper}>
                    <div className={style.left}>
                        <div
                            className={cx(
                                style.text_with_section,
                                style.half_height
                            )}
                        >
                            <p>
                                숟가락으로 뜨는 고추장의 시대는 이젠 안녕!
                                <br />
                                샐러드 드레싱, 채소 무침, 다양한 디핑 소스로
                                활용이 가능한
                                <br />
                                완벽한 고추장 핫소스 케이첩
                                <br />
                                스리라차, 타바스코, 칠리, 케찹 앞에
                                <br />
                                케이첩이 놓여지면 나의 식탁은 완벽하다.
                                <br />
                                한국 고추장 음식인 비빔밥, 떡볶이, 비빔국수,
                                낙지 볶음, 제육 볶음
                                <br />
                                모든 한식 구이에 어울리는 고추장의 혁신! 케이첩
                            </p>
                        </div>
                    </div>
                    <div className={style.right}>
                        <Image src={Sub2} alt="image" />
                    </div>
                </div>
            </section>
        </main>
    );
}
