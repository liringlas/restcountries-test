export interface ICountry {
    name: string;
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    region: string;
    subregion: string;
    population: number;
    latlng: [number, number];
    demonym: string;
    area: number;
    gini: number;
    timezones: string[];
    borders: string[];
    nativeName: string;
    numericCode: string;
    currencies: Array<{
        code: string;
        name: string;
        symbol: string;
    }>,
    languages: Array<{
        iso639_1: string;
        iso639_2: string;
        name: string;
        nativeName: string;
    }>,
    translations: {
        [key: string]: string;
    },
    flag: string;
    regionalBlocs: Array<{
        acronym: string;
        name: string;
        otherAcronyms: string[];
        otherNames: string[];
    }>,
    cioc: string;
}

export interface ISharedPageProps {
    regions: Array<string>;
    // setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export type TParamsType = { [key: string]: string };
export type TSortField = 'name' | 'population';
export type TSortOrder = 'asc' | 'desc';