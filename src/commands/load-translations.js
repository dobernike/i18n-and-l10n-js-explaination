const { localeCodes } = require('../constants/locales')
const { writeFileSync } = require('fs');
const { mergeDeepRight } = require('ramda');

const { l10n, brandsLanguages } = require('../l10n');
const RwcBranding = l10n;

const brand = process.env.BRAND || 'rc_us';

const brandedLang = RwcBranding[brand];

// let devLocales = {};
// 
// const OVERLOAD_SIZE = 3;
// const asteriskReplacement = sentence => sentence.replace(/\w/g, '*');
// const overloadReplacement = sentence =>
//     Array(OVERLOAD_SIZE)
//         .fill(sentence)
//         .join(' ');

const iterateOver = (target, replacement) => {
    return Object.keys(target).reduce((memo, key) => {
        const value = target[key];
        if (typeof value === 'string') {
            memo[key] = replacement(value);
        } else if (Array.isArray(value)) {
            memo[key] = value.map(item => replacement(item));
        } else {
            memo[key] = iterateOver(value, replacement);
        }
        return memo;
    }, {});
};

const getMergedLocale = (brandedLang, locale) => {
    const toMerge = [brandedLang[locale].commonDatetime, brandedLang[locale].branded];

    // Merge translation layers one by one.
    return toMerge.reduce((acc, item) => mergeDeepRight(acc, item), brandedLang[locale].common);
};

// const enLocale = getMergedLocale(brandedLang, 'en-US');

// const asteriskLocale = iterateOver(enLocale, asteriskReplacement);
// const overloadLocale = iterateOver(enLocale, overloadReplacement);

// devLocales = {
    // asterisk: asteriskLocale,
    // overload: overloadLocale,
// };

const locales = {
    [localeCodes.enUS]: getMergedLocale(brandedLang, localeCodes.enUS),
    [localeCodes.frCA]: getMergedLocale(brandedLang, localeCodes.frCA),
    // ...devLocales,
};

const writeLocale = (lang, locale) => {
    writeFileSync(`src/locales/locale-${lang}.json`, JSON.stringify(locale), 'utf8');
};

Object.keys(locales).forEach(lang => {
    writeLocale(lang, locales[lang]);
});

// Save available languages for each brand, to read it through webpack later.
writeFileSync('src/locales/brands-languages.json', JSON.stringify(brandsLanguages), 'utf8');
