const data = require('./data.json');

class LanguageList {
    constructor() {
        this.nameDict = (function buildNameDictionary() {
            return data.reduce((dict, {English: lName, alpha2: lCode}) => {
                const name = cleanName(lName);
                return Object.assign({[name]: lCode}, dict);
            }, {});
        })();
        this.codeDict = (function buildCodeDictionary() {
            return data.reduce((dict, {English: lName, alpha2: lCode}) => {
                const name = cleanName(lName);
                return Object.assign({[lCode]: name}, dict);
            }, {});
        })();

        function cleanName(languageName) {
            const hasParens = /\(/.test(languageName);
            const hasCommas = /,/.test(languageName);
            let cleanedName = '';
            if (hasParens && hasCommas) {
                let n = stripParens(languageName);
                cleanedName = truncate(n);
            } else if (hasParens) {
                cleanedName = stripParens(languageName);
            } else if (hasCommas) {
                cleanedName = truncate(languageName);
            } else {
                cleanedName = languageName;
            }

            function stripParens(n) {
                return n.split(' (')[0];
            }
            function truncate(n) {
                return n.split(', ')[0];
            }

            return cleanedName.toLowerCase();
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
        return data;
    }
}

module.exports = LanguageList;
