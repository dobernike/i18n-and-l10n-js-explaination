const { localeCodes } = require('../constants/locales');

const fs = require('fs');
const path = require('path');

const languages = Object.values(localeCodes);
const fallbackLang = localeCodes.enUS;
const brands = [
    { name: 'rc_us', path: 'rc_us' },
    { name: 'rc_us_canary', path: 'rc_us' },
    { name: 'avaya', path: 'avaya' },
    { name: 'atos', path: 'atos' },
    { name: 'att', path: 'att' },
    { name: 'rainbow', path: 'rainbow' },
    { name: 'vodafone', path: 'vodafone' },
    { name: 'verizon', path: 'verizon' },
    { name: 'bt', path: 'bt' },
    { name: 'telus', path: 'telus' },
];

const brandsLanguages = {};

const l10n = brands.reduce((acc, cur) => {
    return languages.reduce((lac, lcu) => {
        if (!lac[cur.name]) {
            lac[cur.name] = {};
        }

        const brandedFilePath = path.resolve(__dirname, `./locales/${lcu}/translation.${cur.path}.json`);
        const brandedExists = fs.existsSync(brandedFilePath);
        const loadLang = brandedExists ? lcu : fallbackLang;

        lac[cur.name][lcu] = {
            common: require(`./locales/${loadLang}/translation.common.json`),
            commonDatetime: require(`./locales/${loadLang}/translation.common.datetime.json`),
            branded: require(`./locales/${loadLang}/translation.${cur.path}.json`)
        };

        // Fill available languages for each brand.
        brandsLanguages[cur.name] = brandsLanguages[cur.name] || {};
        brandsLanguages[cur.name][loadLang] = loadLang;

        return lac;
    }, acc);
}, {});

module.exports = {
    l10n,
    brandsLanguages
};
