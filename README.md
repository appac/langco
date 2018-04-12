# Langco

Gets the language code for a given country, or vice versa.

Language code data sourced from [DataHub](https://datahub.io/core/language-codes).

## Getting Started

Install Langco via yarn or npm.

```sh
yarn add langco
```

Use it in your project.

```js
const langco = require('langco');
```

## Usage

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [getName](#getname)
-   [getCode](#getcode)
-   [getNames](#getnames)
-   [getCodes](#getcodes)
-   [getNameList](#getnamelist)
-   [getCodeList](#getcodelist)
-   [getData](#getdata)

### getName

Takes a language code and returns
the appropriate language name.

If no match is found, returns null;

**Parameters**

-   `languageCode` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

**Examples**

```javascript
langco.getName('ro'); // 'romanian; moldavian; moldovan'
```

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### getCode

Takes a language name and returns
the appropriate language code.

If no match is found, returns null.

**Parameters**

-   `languageName` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

**Examples**

```javascript
langco.getCode('romanian'); // 'ro'
```

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### getNames

Returns all language names as an array.

**Examples**

```javascript
langco.getNames(); // [ 'zulu', 'chinese', 'zhuang; chuang' ... ]
```

Returns **[array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** 

### getCodes

Returns all language codes as an array.

**Examples**

```javascript
langoco.getCodes(); // [ 'zu', 'zh', 'za' ... ]
```

Returns **[array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** 

### getNameList

Returns an object where language names
are keys, and language codes are values.

**Examples**

```javascript
langco.getNameList(); // { zulu: 'zu', chinese: 'zh','zhuang; chuang': 'za' ... }
```

Returns **[array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** 

### getCodeList

Returns an object where language codes
are keys, and language names are values.

**Examples**

```javascript
langco.getCodeList(); // { zu: 'zulu', zh: 'chinese', 'za': 'zhuang; chuang' ... }
```

Returns **[array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** 

### getData

Returns the raw ISO data.

Returns **[array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** 

## License

MIT