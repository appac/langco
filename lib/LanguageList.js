const data = require('./data.json');

class LanguageList {
    constructor() {
        this.nameDict = (function buildNameDictionary() {
            return data.reduce((dict, language) => {
                const name = cleanName(language.English);
                return Object.assign({[name]: language.alpha2}, dict);
            }, {});
        })();
        this.codeDict = (function buildCodeDictionary() {
            return data.reduce((dict, language) => {
                const name = cleanName(language.English);
                return Object.assign({[language.alpha2]: name}, dict);
            }, {});
        })();

        function cleanName(languageName) {
            const hasParens = /\(/.test(languageName);
            const hasCommas = /,/.test(languageName);
            if (hasParens && hasCommas) {
                let name = stripParens(languageName);
                return truncate(name);
            } else if (hasParens) {
                return stripParens(languageName);
            } else if (hasCommas) {
                return truncate(languageName);
            } else {
                return languageName;
            }

            function stripParens(n) {
                return n.split(' (')[0];
            }
            function truncate(n) {
                return n.split(', ')[0];
            }
        }

    }
    getName() {

    }
    getCode() {

    }
    getNames() {

    }
    getCodes() {

    }
    getNameList() {

    }
    getCodeList() {

    }
    getData() {

    }
    getRaw() {

    }
}

module.exports = LanguageList;
