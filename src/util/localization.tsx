import i18n from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";

import * as langEn from "../lang/en.json";
import { ReactNode } from "react";

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            en: {
                translation: langEn,
            },
        },
        lng: "en", // if you're using a language detector, do not define the lng option
        fallbackLng: "en",

        interpolation: {
            escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
    });

export function Localization({
    children,
}: {
    children?: ReactNode | ReactNode[];
}) {
    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
