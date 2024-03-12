// "use client";

// import {
//     Context,
//     ReactNode,
//     SetStateAction,
//     createContext,
//     useState,
// } from "react";

export enum LangEnum {
    KO = "ko",
    EN = "en",
}

export const languages: LangEnum[] = [LangEnum.KO, LangEnum.EN];

// interface LanguageContextValue {
//     lang: LangEnum | null;
//     setLang: React.Dispatch<React.SetStateAction<LangEnum | null>>;
// }

// export const LanguageContext: Context<LanguageContextValue> =
//     createContext<LanguageContextValue>({
//         lang: null,
//         setLang: (value: SetStateAction<LangEnum | null>): void => {},
//     });

// type Props = { children: ReactNode };

// export default function LanguageProvider({ children }: Props) {
//     const [lang, setLang] = useState<LangEnum | null>(null);
//     return { children };
// }
