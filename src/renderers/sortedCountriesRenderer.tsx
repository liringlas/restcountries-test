import React from 'react';

import { CountryListItem } from '../components/CountryListItem';
import { ICountry, TSortField, TSortOrder } from '../types';
import { CountryList } from '../styled/CountryList';

export const sortedCountriesRenderer = (countries: ICountry[]) => (sortField: TSortField) => (sortOrder: TSortOrder) => {
    const primaryOrderValue = sortOrder === 'asc' ? -1 : 1;
    const oppositeOrderValue = primaryOrderValue * -1;

    return (
        <CountryList>
            {
                countries.sort((prev: ICountry, next: ICountry) => {
                    return next[sortField] > prev[sortField] 
                        ? primaryOrderValue
                        : next[sortField] < prev[sortField]
                            ? oppositeOrderValue
                            : 0;
            
                }).map( country => <CountryListItem sortField={sortField} key={country.name} country={country} />)
            }
        </CountryList>
    );
}