const data = require('./data.json');

/**
 * Represents language list.
 * @private
 */
class LanguageList {
    /**
     * Initialise with objects representing
     * language names and codes.
     */
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

        /**
         * Removes parenthesis text and commas from
         * language names.
         * @private
         * @param {string} languageName
         * @return {string}
         */
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

            /**
             * Splits a string at the first seen
             * parenthesis.
             *
             * Returns only the first item from the
             * resulting array.
             * @private
             * @param {string} n
             * @return {string}
             */
            function stripParens(n) {
                return n.split(' (')[0];
            }
            /**
             * Splits a string at the first seen comma.
             *
             * Returns only the first item from the
             * resulting array.
             * @private
             * @param {string} n
             * @return {string}
             */
            function truncate(n) {
                return n.split(', ')[0];
            }

            return cleanedName.toLowerCase();
        }
    }
    /**
     * Takes a language code and returns
     * the appropriate language name.
     *
     * If no match is found, returns null;
     * @public
     * @param {string} languageCode
     * @return {string}
     */
    getName(languageCode) {
        const keys = Object.keys(this.codeDict);
        const code = languageCode.toLowerCase();
        if (keys.includes(code)) {
            return this.codeDict[code];
        } else {
            return null;
        }
    }
    /**
     * Takes a language name and returns
     * the appropriate language code.
     *
     * If no match is found, returns null.
     * @public
     * @param {string} languageName
     * @return {string}
     */
    getCode(languageName) {
        const keys = Object.keys(this.nameDict);
        const name = languageName.toLowerCase();

        for (let i = 0, l = keys.length; i < l; i++) {
            const key = keys[i];
            const hasMultipleNames = /;\s/.test(key);
            if (hasMultipleNames) {
                const keyNames = key.split('; ');
                if (keyNames.includes(name)) {
                    return this.nameDict[key];
                }
            } else if (key === name) {
                return this.nameDict[key];
            }
        }
    }
    /**
     * Returns all language names as an array.
     * @public
     * @return {array}
     */
    getNames() {
        return Object.keys(this.nameDict);
    }
    /**
     * Returns all language codes as an array.
     * @public
     * @return {array}
     */
    getCodes() {
        return Object.keys(this.codeDict);
    }
    /**
     * Returns an object where language names
     * are keys, and language codes are values.
     * @public
     * @return {array}
     */
    getNameList() {
        return this.nameDict;
    }
    /**
     * Returns an object where language codes
     * are keys, and language names are values.
     * @public
     * @return {array}
     */
    getCodeList() {
        return this.codeDict;
    }
    /**
     * Returns the raw ISO data.
     * @public
     * @return {array}
     */
    getData() {
        return data;
    }
}

module.exports = LanguageList;
