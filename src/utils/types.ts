export interface CountryTypes {
    "name": string,
    "topLevelDomain": object,
    "alpha2Code": string,
    "alpha3Code": string,
    "callingCodes": object,
    "capital": string,
    "altSpellings": object,
    "subregion": string,
    "region": string,
    "population": number,
    "latlng": object,
    "demonym": string,
    "area": number,
    "timezones": object,
    "borders": string[],
    "nativeName": string,
    "numericCode": string,
    "flags": Flags
    "currencies": Currencies[],
    "languages": Language[],
    "translations": object,
    "flag": string,
    "regionalBlocs": object,
    "cioc": string,
    "independent": boolean
}

interface Flags {
    "svg": string,
    "png": string
}

interface Currencies {
    "code": string,
    "name": string,
    "symbol": string
}

interface Language {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}


// "name": "Afghanistan",
//     "topLevelDomain": [".af"],
//     "alpha2Code": "AF",
//     "alpha3Code": "AFG",
//     "callingCodes": ["93"],
//     "capital": "Kabul",
//     "altSpellings": ["AF", "Afġānistān"],
//     "subregion": "Southern Asia",
//     "region": "Asia",
//     "population": 40218234,
//     "latlng": [33, 65],
//     "demonym": "Afghan",
//     "area": 652230,
//     "timezones": ["UTC+04:30"],
//     "borders": ["IRN", "PAK", "TKM", "UZB", "TJK", "CHN"],
//     "nativeName": "افغانستان",
//     "numericCode": "004",
//     "flags": {
//       "svg": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
//       "png": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png"
//     },
//     "currencies": [
//       {
//         "code": "AFN",
//         "name": "Afghan afghani",
//         "symbol": "؋"
//       }
//     ],
//     "languages": [
//       {
//         "iso639_1": "ps",
//         "iso639_2": "pus",
//         "name": "Pashto",
//         "nativeName": "پښتو"
//       },
//       {
//         "iso639_1": "uz",
//         "iso639_2": "uzb",
//         "name": "Uzbek",
//         "nativeName": "Oʻzbek"
//       },
//       {
//         "iso639_1": "tk",
//         "iso639_2": "tuk",
//         "name": "Turkmen",
//         "nativeName": "Türkmen"
//       }
//     ],
//     "translations": {
//       "br": "Afghanistan",
//       "pt": "Afeganistão",
//       "nl": "Afghanistan",
//       "hr": "Afganistan",
//       "fa": "افغانستان",
//       "de": "Afghanistan",
//       "es": "Afganistán",
//       "fr": "Afghanistan",
//       "ja": "アフガニスタン",
//       "it": "Afghanistan",
//       "hu": "Afganisztán"
//     },
//     "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
//     "regionalBlocs": [
//       {
//         "acronym": "SAARC",
//         "name": "South Asian Association for Regional Cooperation"
//       }
//     ],
//     "cioc": "AFG",
//     "independent": true