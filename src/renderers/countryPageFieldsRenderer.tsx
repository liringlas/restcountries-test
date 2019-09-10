import React from 'react';

import { CountryPageFieldsWrapper } from '../styled/CountryPageFieldsWrapper';
import { CountryPageFieldCell } from '../styled/CountryPageFieldCell';
import { CountryPageFieldTitle } from '../styled/CountryPageFieldTitle';
import { CountryPageFieldText } from '../styled/CountryPageFieldText';

import { ICountry } from "../types";
import { ExternalLink } from '../styled/ExternalLink';
import styled from 'styled-components';
import { StyledLink } from '../styled/StyledLink';

const FlagImg = styled.img`
    width: 100%;
    max-width: 128px;
    height: auto;
    display: block;
    margin: 0 0 16px 0;
`

const getGoogleMapsLinkFromLatLng = (lat: number, lng: number): string => 
    `https://www.google.com/maps/place/${Math.abs(lat)}°00'00.0"${lat > 0 ? "N" : "S"}+${Math.abs(lng)}°00'00.0"${lng > 0 ? "E" : "W"}`


export const countryPageFieldsRenderer = (country: ICountry) => {
    const { 
        altSpellings, borders, 
        callingCodes, currencies,
        flag, languages, latlng, 
        region, regionalBlocs, 
        timezones, topLevelDomain, translations
    } = country;

    // No need for country names here
    const sortedCountryFields = (Object.keys(country) as Array<keyof ICountry>)
        .sort()
        .filter( field => field !== 'name' && field !== 'nativeName' && field !== 'flag' );

    return (
        <CountryPageFieldsWrapper>
            <CountryPageFieldCell>
                <CountryPageFieldTitle>Flag</CountryPageFieldTitle>
                <CountryPageFieldText>
                    <FlagImg src={flag} />
                    <div>
                        <ExternalLink href={flag} target={"_blank"}>Link</ExternalLink>
                    </div>
                </CountryPageFieldText>
            </CountryPageFieldCell>

            { sortedCountryFields.map( (field: keyof ICountry) => {
                switch(field as keyof ICountry) {
                    case 'alpha2Code': {
                        return (
                            <CountryPageFieldCell key={field}>
                                <CountryPageFieldTitle>2-letters code</CountryPageFieldTitle>
                                <CountryPageFieldText>{country[field]}</CountryPageFieldText>
                            </CountryPageFieldCell>
                        )
                    }

                    case 'alpha3Code': {
                        return (
                            <CountryPageFieldCell key={field}>
                                <CountryPageFieldTitle>3-letters code</CountryPageFieldTitle>
                                <CountryPageFieldText>{country[field]}</CountryPageFieldText>
                            </CountryPageFieldCell>
                        )
                    }

                    case 'altSpellings': {
                        return (
                            <CountryPageFieldCell key={field}>
                                <CountryPageFieldTitle>Alternative Spellings</CountryPageFieldTitle>
                                <CountryPageFieldText>{altSpellings.join(', ')}</CountryPageFieldText>
                            </CountryPageFieldCell>
                        )
                    }

                    case 'area': {
                        return (
                            <CountryPageFieldCell key={field}>
                                <CountryPageFieldTitle>Area Number</CountryPageFieldTitle>
                                <CountryPageFieldText>{country[field]}</CountryPageFieldText>
                            </CountryPageFieldCell>
                        )
                    }

                    case 'borders': {
                        return (
                            <CountryPageFieldCell key={field}>
                                <CountryPageFieldTitle>Borders with</CountryPageFieldTitle>
                                <CountryPageFieldText>{borders.join(', ')}</CountryPageFieldText>
                            </CountryPageFieldCell>
                        )
                    }

                    case 'callingCodes': {
                        return (
                            <CountryPageFieldCell key={field}>
                                <CountryPageFieldTitle>Calling Codes</CountryPageFieldTitle>
                                <CountryPageFieldText>{callingCodes.map(c => `+${c}`).join(', ')}</CountryPageFieldText>
                            </CountryPageFieldCell>
                        )
                    }

                    case 'capital': {
                        return (
                            <CountryPageFieldCell key={field}>
                                <CountryPageFieldTitle>Capital</CountryPageFieldTitle>
                                <CountryPageFieldText>{country[field]}</CountryPageFieldText>
                            </CountryPageFieldCell>
                        )
                    }

                    case 'cioc': {
                        return (
                            <CountryPageFieldCell key={field}>
                                <CountryPageFieldTitle>CIOC</CountryPageFieldTitle>
                                <CountryPageFieldText>{country[field]}</CountryPageFieldText>
                            </CountryPageFieldCell>
                        )
                    }

                    case 'currencies': {
                        return (
                            <CountryPageFieldCell key={field}>
                                <CountryPageFieldTitle>Currencies</CountryPageFieldTitle>
                                <CountryPageFieldText>{currencies.map( c => `${c.name}: ${c.symbol}` )}</CountryPageFieldText>
                            </CountryPageFieldCell>
                        )
                    }

                    case 'demonym': {
                        return (
                            <CountryPageFieldCell key={field}>
                                <CountryPageFieldTitle>Demonym</CountryPageFieldTitle>
                                <CountryPageFieldText>{country[field]}</CountryPageFieldText>
                            </CountryPageFieldCell>
                        )
                    }

                    case 'gini': {
                        return (
                            <CountryPageFieldCell key={field}>
                                <CountryPageFieldTitle>GINI</CountryPageFieldTitle>
                                <CountryPageFieldText>{country[field]}</CountryPageFieldText>
                            </CountryPageFieldCell>
                        )
                    }

                    case 'languages': {
                        return (
                            <CountryPageFieldCell key={field}>
                                <CountryPageFieldTitle>Languages</CountryPageFieldTitle>
                                <CountryPageFieldText>
                                    {languages.map( l => `${l.name} (${l.nativeName})` )}
                                </CountryPageFieldText>
                            </CountryPageFieldCell>
                        )
                    }

                    case 'latlng': {
                        const [ latitude, longitude ] = latlng;
                        
                        return (
                            <CountryPageFieldCell key={field}>
                                <CountryPageFieldTitle>Coordinates</CountryPageFieldTitle>
                                <CountryPageFieldText>
                                    <ExternalLink 
                                        href={getGoogleMapsLinkFromLatLng(latitude, longitude)}
                                        target={"_blank"}
                                    >
                                        Google Maps
                                        </ExternalLink>
                                </CountryPageFieldText>
                            </CountryPageFieldCell>
                        )
                    }

                    case 'numericCode': {
                        return (
                            <CountryPageFieldCell key={field}>
                                <CountryPageFieldTitle>Numeric Code</CountryPageFieldTitle>
                                <CountryPageFieldText>
                                    {country[field]}
                                </CountryPageFieldText>
                            </CountryPageFieldCell>
                        )
                    }

                    case 'population': {
                        return (
                            <CountryPageFieldCell key={field}>
                                <CountryPageFieldTitle>Population</CountryPageFieldTitle>
                                <CountryPageFieldText>
                                    {country[field]}
                                </CountryPageFieldText>
                            </CountryPageFieldCell>
                        )
                    }

                    case 'region': {
                        return (
                            <CountryPageFieldCell key={field}>
                                <CountryPageFieldTitle>Region</CountryPageFieldTitle>
                                <CountryPageFieldText>
                                    <StyledLink to={`/region/${region}`}>{region}</StyledLink>
                                </CountryPageFieldText>
                            </CountryPageFieldCell>
                        )
                    }

                    case 'regionalBlocs': {
                        return (
                            <CountryPageFieldCell key={field}>
                                <CountryPageFieldTitle>Regional Blocs</CountryPageFieldTitle>
                                <CountryPageFieldText>
                                    { regionalBlocs.map(b => `${b.name}`).join(', ') }
                                </CountryPageFieldText>
                            </CountryPageFieldCell>
                        )
                    }

                    case 'subregion': {
                        return (
                            <CountryPageFieldCell key={field}>
                                <CountryPageFieldTitle>Subregion</CountryPageFieldTitle>
                                <CountryPageFieldText>
                                    {country[field]}
                                </CountryPageFieldText>
                            </CountryPageFieldCell>
                        )
                    }

                    case 'timezones': {
                        return (
                            <CountryPageFieldCell key={field}>
                                <CountryPageFieldTitle>Timezones</CountryPageFieldTitle>
                                <CountryPageFieldText>
                                    { timezones.join(', ') }
                                </CountryPageFieldText>
                            </CountryPageFieldCell>
                        )
                    }

                    case 'topLevelDomain': {
                        return (
                            <CountryPageFieldCell key={field}>
                                <CountryPageFieldTitle>Top Level Domain</CountryPageFieldTitle>
                                <CountryPageFieldText>
                                    { topLevelDomain.join(', ') }
                                </CountryPageFieldText>
                            </CountryPageFieldCell>
                        )
                    }

                    case 'translations': {
                        return (
                            <CountryPageFieldCell key={field}>
                                <CountryPageFieldTitle>Translations</CountryPageFieldTitle>
                                <CountryPageFieldText>
                                    { Object.values(translations).join(', ') }
                                </CountryPageFieldText>
                            </CountryPageFieldCell>
                        )
                    }

                    default: {
                        return (
                            <CountryPageFieldCell key={field}>
                                <CountryPageFieldTitle>{field}</CountryPageFieldTitle>
                                <CountryPageFieldText>{JSON.stringify(country[field])}</CountryPageFieldText>
                            </CountryPageFieldCell>
                        )
                    }
                }
            }) }
        </CountryPageFieldsWrapper>
    );
}