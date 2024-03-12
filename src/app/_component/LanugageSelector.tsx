"use client";
import { ReactElement, useState } from "react";
import { LangEnum, languages } from "./LanguageProvider";
import style from "./languageSelector.module.css";
import { useQuery } from "@tanstack/react-query";
import BTN_DOWN from "@/app/_assets/btn_down.svg";
import BTN_UP from "@/app/_assets/btn_up.svg";

export default function LanugageSelector(): ReactElement {
    const [click, setClick] = useState(false);

    const { data: lng } = useQuery<LangEnum, Object, LangEnum, [_1: string]>({
        queryKey: ["lang"],
    });

    const ChangeLanugage: () => void = (): void => {
        setClick((prev: boolean): boolean => !prev);
    };

    return (
        <>
            <button className={style.selector} onClick={ChangeLanugage}>
                <span>Language</span>
                <div className={style.btn_down}>
                    <div className={style.btn_down}>
                        <span className={style.main_lang}>
                            {lng?.toUpperCase()}
                        </span>
                        {click ? (
                            <BTN_UP width="14" />
                        ) : (
                            <BTN_DOWN width="14" />
                        )}
                    </div>
                    {click && (
                        <div className={style.lang_menu}>
                            <div className={style.upper_bar}></div>
                            {lng &&
                                languages
                                    .filter((item: LangEnum) => item !== lng)
                                    .map((item: LangEnum) => {
                                        return (
                                            <a
                                                key={item}
                                                href={`/${item.toLowerCase()}`}
                                            >
                                                {item.toUpperCase()}
                                            </a>
                                        );
                                    })}
                        </div>
                    )}
                </div>
            </button>
        </>
    );
}
