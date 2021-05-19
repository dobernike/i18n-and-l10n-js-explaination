// import i18n from 'i18next';

// export const initI18n = (defaultLocale = 'en-US') =>
//     // TODO Now i18n works in such way that if user uses FR language for example, but we don't have FR translations
//     //  for this brand - for each translated phrase translate function will use fallback language (en-US in our app).
//     //  I think this way is not optimal. Because we know initially - do we have translation for current language or not,
//     //  better to set default language according it.
//     //  If user uses french, but we have only english, need to set english for i18n.
//     i18n
//         // .use(initReactI18next)
//         // .use(HttpApi)
//         .init({
//             lng: defaultLocale,
//             fallbackLng: 'en-US',
//             load: 'currentOnly',
//             joinArrays: '\n',
//             // interpolation: {
//                 // format: format,
//                 // formatSeparator: ',',
//                 // escapeValue: false,
//             // },
//             debug: process.env.NODE_ENV === 'development',
//             // backend: {
//             //     loadPath: getLoadPath,
//             // },
//         });
// first step

import i18next from 'i18next';

// export const initI18n = (defaultLocale = 'en') => 
//     i18next.init({
//         lng: defaultLocale,
//         resources: {
//             en: {
//                 translation: {
//                     "header": "hello world"
//                 }
//             }
//         }
//     })

// second step

// const translationEN = {
//     "header": "hello world from locale 2"
// }

// const resources = { 
//     en: {
//         translation: translationEN
//     },
// }

// export const initI18n = (defaultLocale = 'en') => 
//     i18next.init({
//         lng: defaultLocale,
//         resources,
//     })

    // third step

// const translationRU = {
//     header: 'Привет мир!',
//     ONE: 'Первый вариант',
//     TWO: 'Второй вариант',
//     THREE: 'Третий вариант',
//     BRAND_NAME: 'Andersen' 
// }

// const translationEN = {
//     header: 'hello world',
//     ONE: 'First option',
//     TWO: 'Second option',
//     THREE: 'Third option',
//     BRAND_NAME: 'Andersen' 
// }

// const resources = { 
//     en: {
//         translation: translationEN
//     },
//     ru: {
//         translation: translationRU
//     }
// }

// export const initI18n = (defaultLocale = 'en') => 
//     i18next.init({
//         lng: defaultLocale,
//         resources,
//     })

// 4

// const brands = {
//     common: {
//         ONE: 'First option',
//         TWO: 'Second option',
//         THREE: 'Third option',
//     },
//     andersen: {
//         header: 'hello from andersen!',
//         BRAND_NAME: 'Andersen',
//     }
// }

// const getLocalesFromBrand = (brand = 'andersen') => {
//     return {...brands['common'], ...brands[brand]}
// }

// const resources = { 
//     en: {
//         translation: getLocalesFromBrand()
//     },
// }

// export const initI18n = (defaultLocale = 'en') => 
//     i18next.init({
//         lng: defaultLocale,
//         resources,
//     })

// 5
const brands = {
    common: {
        "global": {
            "SAVE": "Save",
            "OK": "Ok",
            "CANCEL": "Cancel",
            "SIGN_OUT": "Sign out",
            "CLOSE": "Done",
            "CONTINUE": "Continue",
            "START": "Start",
            "YES": "Yes",
            "NO": "No",
            "OR": "or",
            "HIGH": "high",
            "Copy": "Copy",
            "GO": "Go"
        },
        ONE: 'First option',
        TWO: 'Second option',
        THREE: 'Third option',
    },
    andersen: {
        header: 'hello from andersen!',
        BRAND_NAME: 'Andersen',
    }
}

const getLocalesFromBrand = (brand = 'andersen') => {
    return {...brands['common'], ...brands[brand]}
}

const resources = { 
    en: {
        translation: getLocalesFromBrand()
    },
}

export const initI18n = (defaultLocale = 'en') => 
    i18next.init({
        lng: defaultLocale,
        resources,
    })