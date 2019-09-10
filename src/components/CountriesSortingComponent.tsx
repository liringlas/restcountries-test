import React from 'react';
import styled, { css } from 'styled-components';

import { TSortField, TSortOrder } from '../types';
import { cssVars } from '../styled/vars';

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

const SortingItem = styled.div<{ isActive?: boolean }>`
    display: inline-block;
    cursor: pointer;
    transition: background-color 0.25s ease-out, border 0.25s ease-out, color 0.25s;
    font-size: 18px;
    padding: 12px;
    border-radius: 4px;

    &:not(:last-child) {
        margin-right: 16px;
    }
    

    ${ ({isActive}) => isActive ? css`
        background-color: white;
        color: ${cssVars.color.main};
    ` : css`
        background-color: ${cssVars.color.dark};
        color: white;
    ` }
`

const SortingWrapper = styled.div`
    display: flex;
    flex: 1 0 100%;
    margin-bottom: 48px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`

const SortingFields = styled.div`
    flex: 0 0 auto;
`

const SortingOrders = styled.div`
    flex: 0 0 auto;
`

const SortingHeading = styled.h2`
    margin: 0 0 16px 0;
`


export const CountriesSortingComponent = (props: ICountriesSortingProps) => {
    const { sortingSchemas, sortField, sortOrder, setSortField, setSortOrder } = props;
    const activeSortingSchema = sortingSchemas.find( s => s.field === sortField );

    return (
        <>
            <SortingHeading>Sorting</SortingHeading>
            <SortingWrapper>
                <SortingFields>
                    {
                        sortingSchemas.map( ({field, orders, text}) => (
                            <SortingItem key={field} isActive={sortField === field} onClick={() => setSortField(field)}>{text}</SortingItem>
                        ))
                    }
                </SortingFields>

                <SortingOrders>
                    {
                        activeSortingSchema 
                            ? activeSortingSchema.orders.map(
                                ({text, value}) => 
                                    <SortingItem key={text} isActive={sortOrder === value} onClick={() => setSortOrder(value)}>{text}</SortingItem> 
                            )
                            : null
                    }
                </SortingOrders>

            </SortingWrapper>
        </>
    );
}