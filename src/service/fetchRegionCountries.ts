import { baseURL } from "./api";
import { ICountry } from "../types";

export const fetchRegionCountries = (region: string): Promise<ICountry[]> => {
    return fetch(`${baseURL}/region/${region}`).then( res => res.json())
}