import React from 'react';
import { ICountry } from '../types';

export const CountryListItem = (props: { country: ICountry }) => {
    const { country } = props;
    
    return (
        <div>
            {country.name}
        </div>
    );
}