import Link from "next/link";
import style from "./navMenuTop.module.css";

import LanugageSelector from "./LanugageSelector";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { toggleLanguage } from "../_lib/toggleLanguage";
import { LangEnum } from "./LanguageProvider";
import { queryClient } from "@/app/[lng]/layout";
import Logo from "@/app/_assets/Logo.svg";

type Props = {
    lng: LangEnum;
};
export default async function NavMenuTop({ lng }: Props) {
    await queryClient.prefetchQuery({
        queryKey: ["lang"],
        queryFn: () => toggleLanguage(lng),
    });

    const dehydratedState = dehydrate(queryClient);

    return (
        <HydrationBoundary state={dehydratedState}>
            <nav className={style.container}>
                <ul>
                    <li>
                        <Link href={"/"}>
                            <Logo width="118" alt="logo" />
                        </Link>
                    </li>
                    <div className={style.menu}>
                        <li>
                            <Link href={"/about/our-story"}>ABOUT</Link>
                        </li>
                        <li>
                            <Link href={"/product/kchup"}>OUR PRODUCT</Link>
                        </li>
                        <li>
                            <Link href={"/store"}>FIND US OUR STORE</Link>
                        </li>
                        <li>
                            <Link
                                href={"https://smartstore.naver.com/kchupkorea"}
                            >
                                SHOP
                            </Link>
                        </li>
                    </div>
                    <li>
                        <LanugageSelector />
                    </li>
                </ul>
            </nav>
        </HydrationBoundary>
    );
}
