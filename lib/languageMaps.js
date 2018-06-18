const data = require('./data.json');

const nameMap = new Map(data.reduce((acc, {English: lName, alpha2: lCode}) => {
    const name = cleanName(lName.toLowerCase());
    const hasMultipleNames = /; /.test(lName);
    if (hasMultipleNames) {
        const names = name.split('; ');
        for (const name of names) {
            acc.push([name, lCode]);
        }
    } else {
        const name = cleanName(lName);
        acc.push([name, lCode]);
    }
    return acc;
}, []));

const codeMap = new Map(data.reduce((acc, {English: lName, alpha2: lCode}) => {
    const name = cleanName(lName.toLowerCase());
    const hasMultipleNames = /; /.test(lName);
    if (hasMultipleNames) {
        const names = name.split('; ').join(', ');
        acc.push([lCode, names]);
    } else {
        acc.push([lCode, name]);
    }
    return acc;
}, []));

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

module.exports = {
    NAME_MAP: nameMap,
    CODE_MAP: codeMap,
};
