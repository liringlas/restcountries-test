// import { SetStateAction, Dispatch } from "react";

export interface ICountry {
    name: string;
}

export interface ISharedPageProps {
    regions: Array<string>;
    // setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export type TParamsType = { [key: string]: string };
export type TSortField = 'name' | 'population';
export type TSortOrder = 'asc' | 'desc';