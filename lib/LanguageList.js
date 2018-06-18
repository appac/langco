const MAPS = require('./languageMaps');
const NAME_MAP = MAPS.NAME_MAP;
const CODE_MAP = MAPS.CODE_MAP;
/**
 * Represents language list.
 * @private
 */
class LanguageList {
    /**
     * Takes a language code and returns
     * the appropriate language name.
     *
     * If no match is found, returns undefined;
     * @name getName
     * @public
     * @param {string} languageCode
     * @return {string | undefined}
     * @example
     * langco.getName('ro'); // 'romanian, moldavian, moldovan'
     */
    getName(languageCode) {
        return CODE_MAP.get(languageCode.toLowerCase());
    }
    /**
     * Takes a language name and returns
     * the appropriate language code.
     *
     * If no match is found, returns undefined.
     * @name getCode
     * @public
     * @param {string} languageName
     * @return {string | undefined}
     * @example
     * langco.getCode('romanian'); // 'ro'
     */
    getCode(languageName) {
        return NAME_MAP.get(languageName.toLowerCase());
    }
    /**
     * Returns an iterator object containing all
     * language names
     *
     * You can turn this Iterator into an Array via the
     * `Array.from` method, or using the spread operator.
     * @name getNames
     * @public
     * @return {Object}
     * @example
     * langco.getNames; // MapIterator { 'afar','abkhazian','avestan', ... }
     */
    get getNames() {
        return NAME_MAP.keys();
    }
    /**
     * Returns an iterator object containing all
     * language codes.
     *
     * You can turn this Iterator into an Array via the
     * `Array.from` method or using the spread operator.
     * @name getCodes
     * @public
     * @return {Object}
     * @example
     * langco.getCodes; // MapIterator { 'aa','ab','ae', ... }
     */
    get getCodes() {
        return CODE_MAP.keys();
    }
    /**
     * Returns an iterator object containing
     * all map entires in [name, code] format
     * @name getNameList
     * @public
     * @return {Object}
     * @example
     * langco.getNameList; // MapIterator { [ 'afar', 'aa' ], [ 'abkhazian', 'ab' ], ... }
     */
    get getNameList() {
        return NAME_MAP.entries();
    }
    /**
     * Returns an iterator object containing
     * all map entires in [code, name] format
     * @name getCodeList
     * @public
     * @return {Object}
     * @example
     * langco.getCodeList; // MapIterator { [ 'aa', 'afar' ], [ 'ab', 'abkhazian' ], ... }
     */
    get getCodeList() {
        return CODE_MAP.entries();
    }
    /**
     * Returns the raw ISO data.
     * @name getData
     * @public
     * @return {array}
     */
    get getData() {
        return data;
    }
}

module.exports = LanguageList;
