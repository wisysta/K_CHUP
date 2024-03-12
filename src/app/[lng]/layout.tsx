import { ReactNode } from "react";
import "../globals.css";
import { dir } from "i18next";
import { Poppins } from "next/font/google";
import NavMenuTop from "../_component/NavMenuTop";
import { LangEnum } from "../_component/LanguageProvider";
import RQProvider from "../_component/RQProvider";
import { QueryClient } from "@tanstack/react-query";
import Footer from "../_component/Footer";

export const languages = ["kr", "en"];
export const queryClient = new QueryClient();

export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }));
}

const poppins = Poppins({
    weight: ["400", "500", "600"],
    subsets: ["latin"],
});

type Props = {
    children: ReactNode;
    params: {
        lng: LangEnum;
    };
};

export default async function RootLayout({ children, params: { lng } }: Props) {
    return (
        <html lang={lng} dir={dir(lng)}>
            <head />
            <body className={poppins.className}>
                <RQProvider>
                    <NavMenuTop lng={lng} />
                    {children}
                    <Footer />
                </RQProvider>
            </body>
        </html>
    );
}
