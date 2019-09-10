import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Content } from '../styled/Content';
import { ContentHeading } from '../styled/ContentHeading';
import { ISharedPageProps } from '../types';

export const CountryPage: React.FC<RouteComponentProps<{}> & ISharedPageProps> = (props: RouteComponentProps<{}> & ISharedPageProps) => {
    console.log('props: ', props);

    return (
        <Content>
            <ContentHeading>Country</ContentHeading>
        </Content>
    );
}


// const CountryWrapper = styled.div`
//     flex-wrap: wrap;
//     display: flex;
//     justify-content: flex-start;
//     align-items: stretch;
// `

// const CountryHighlight = styled.h3`
//     flex: 1 0 100%;
//     margin: 0 0 32px 0;
// `

// const CountryFieldCell = styled.div`
//     flex: 1 1 33%;
// `

// const CountryFieldTitle = styled.h4`
//     font-size: 18px;
//     margin: 0 0 12px 0;
// `

// const CountryFieldText = styled.div``

// export const CountryListItem = (props: { country: ICountry, sortField: TSortField }) => {
//     const { country, sortField } = props;
//     const { 
//         alpha2Code, alpha3Code, altSpellings, area, borders, 
//         callingCodes, capital, cioc, currencies, demonym, 
//         flag, gini, languages, latlng, name, 
//         nativeName, numericCode, population, region, regionalBlocs, 
//         subregion, timezones, topLevelDomain, translations
//     } = country;
//     const sortedCountryFields = (Object.keys(country) as Array<keyof ICountry>).sort();
    
//     return (
//         <CountryWrapper>
//             <CountryHighlight>
//                 {String(sortField).toUpperCase()}: {sortField === 'name' ? name : population}
//             </CountryHighlight>

//             { sortedCountryFields.map( (field: keyof ICountry) => {

//                 switch(field as keyof ICountry) {
//                     case 'name': {
//                         return (
//                             <CountryFieldCell key={field}>
//                                 <CountryFieldTitle>Name</CountryFieldTitle>
//                                 <CountryFieldText>{country[field]}</CountryFieldText>
//                             </CountryFieldCell>
//                         )
//                     }
//                     default: {
//                         return (
//                             <CountryFieldCell key={field}>
//                                 <CountryFieldTitle>{String(field).toUpperCase()}</CountryFieldTitle>
//                                 <CountryFieldText>{JSON.stringify(country[field])}</CountryFieldText>
//                             </CountryFieldCell>
//                         )
//                     }
//                 }
//             }) }
//         </CountryWrapper>
//     );
// }