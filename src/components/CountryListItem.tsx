import React from 'react';
import styled from 'styled-components';

import { ICountry, TSortField } from '../types';
import { StyledLink } from '../styled/StyledLink';

const CountryWrapper = styled.div`
    flex-wrap: wrap;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    padding-right: 64px;
    position: relative;
`

const CountryHighlight = styled.h2`
    flex: 1 0 100%;
    margin: 0 0 16px 0;
    text-transform: capitalize;
`

const CountryFieldCell = styled.div`
    flex: 1 1 33%;
    margin-bottom: 24px;
`

const CountryFieldTitle = styled.div`
    font-size: 18px;
    margin: 0 0 12px 0;
    text-transform: capitalize;
`

const FlagImage = styled.img`
    width: 64px;
    height: auto;
    display: inline-block;
    margin-left: 16px;
    position: absolute;
    top: 0;
    right: 0;
`

export const CountryListItem = (props: { country: ICountry, sortField: TSortField }) => {
    const { country, sortField } = props;
    const { name, population } = country;
    const otherSortField = sortField === 'name' ? 'population' : 'name';
    
    return (
        <CountryWrapper>
            <FlagImage src={country.flag} />
            <CountryHighlight>
                {sortField !== 'name' ? `${sortField}: ` : ''}
                {sortField === 'name' ? <StyledLink to={`/country/${name}`}>{name}</StyledLink> : population}
            </CountryHighlight>

            <CountryFieldCell>
                <CountryFieldTitle>
                    {`${otherSortField}: `} 
                    {sortField === 'name' ? population : <StyledLink to={`/country/${name}`}>{name}</StyledLink> }
                </CountryFieldTitle>
            </CountryFieldCell>
        </CountryWrapper>
    );
}