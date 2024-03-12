import style from "../product.module.css";
import Image from "next/image";
import cx from "classnames";
import Main from "@/app/_assets/prod_02_main.jpg";
import Sub1 from "@/app/_assets/prod02_main_01.jpg";
import Sub2 from "@/app/_assets/prod02_main_02.jpg";

export default function Page() {
    return (
        <main className={style.container}>
            <section className={style.main}>
                <div className={cx(style.text_over_image, style.story)}>
                    <div className={style.main_title}>SSAMSSARA</div>
                    <div className={style.sub_title}>
                        The world’s new powerhouse, ssamjang
                        <br />
                        Which amplified the original taste of food
                    </div>
                </div>
                <Image src={Main} alt="main story thumbnail" />
            </section>
            <section>
                <div className={style.wrapper}>
                    <div className={style.left}>
                        <Image src={Sub1} alt="image" />
                    </div>
                    <div className={cx(style.right, style.bg_orange)}>
                        <div className={style.text_with_section}>
                            <h2>
                                음식의 숨겨졌던 본연의 맛이
                                <br />
                                증폭되는 소스!
                                <br />
                                찍어먹는 세계의 새로운 강자
                            </h2>
                            <p>“쌈장은 쌈싸라 쌈장!”</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className={style.wrapper}>
                    <div className={cx(style.left, style.bg_orange)}>
                        <div
                            className={cx(
                                style.text_with_section,
                                style.half_height
                            )}
                        >
                            <p>
                                다양한 재료들을 채소에 모아서 새로운 맛으로
                                재탄생
                                <br /> 한국인만의 기질을 나타내는 음식 문화중에
                                하나인 식사 방법
                                <br /> 쌈은 새롭게 제안되는 건강한 식생활
                                <br /> 쌈을 싸라, 지금!
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
