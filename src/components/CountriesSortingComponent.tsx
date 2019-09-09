import React, { Dispatch } from 'react';

import {TSortField, TSortOrder} from '../types';

interface ICountriesSortingProps {
    sortingSchemas: {
        field: TSortField,
        text: string,
        orders: {
            text: string,
            value: TSortOrder
        }[]
    }[];
    sortField: TSortField;
    sortOrder: TSortOrder;
    setSortField: React.Dispatch<React.SetStateAction<TSortField>>;
    setSortOrder: React.Dispatch<React.SetStateAction<TSortOrder>>;
}

export const CountriesSortingComponent = (props: ICountriesSortingProps) => {
    return <div>Here will be sorting</div>
}