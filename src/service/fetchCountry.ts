import { baseURL } from "./api";
import { ICountry } from "../types";

export const fetchCountry = (countryName: string): Promise<ICountry[]> => {
    return fetch(`${baseURL}/name/${countryName}?fullText=true`).then( res => res.json())
}