import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import toJS from 'await-to-js';

import { Content } from '../styled/Content';
import { ContentHeading } from '../styled/ContentHeading';
import { CountryList } from '../styled/CountryList';
import { Spinner } from '../styled/Spinner';

import { CountriesSortingComponent } from '../components/CountriesSortingComponent';
import { CountryListItem } from '../components/CountryListItem';

import { ISharedPageProps, ICountry, TParamsType, TSortField, TSortOrder } from '../types';
import { fetchRegionCountries } from '../service/fetchRegionCountries';



const sortedCountriesRenderer = (countries: ICountry[]) => (sortField: TSortField) => (sortOrder: TSortOrder) => {
    const primaryOrderValue = sortOrder === 'asc' ? -1 : 1;
    const oppositeOrderValue = primaryOrderValue * -1;

    return countries.sort((prev: ICountry, next: ICountry) => {
        return next[sortField] > prev[sortField] 
            ? primaryOrderValue
            : next[sortField] < prev[sortField]
                ? oppositeOrderValue
                : 0;

    }).map( country => <CountryListItem sortField={sortField} key={country.name} country={country} />);
}

export const RegionPage: React.FC<RouteComponentProps<{}> & ISharedPageProps> = (props: RouteComponentProps<{}> & ISharedPageProps) => {
    const { match } = props;
    const regionName = (match.params as TParamsType)['name'] || 'Unknown region';

    const [ countries, setCountries ] = React.useState<ICountry[]>([]);
    const [ sortField, setSortField ] = React.useState<TSortField>('name');
    const [ sortOrder, setSortOrder ] = React.useState<TSortOrder>('asc');
    const [ isLoadingFailed, setIsLoadingFailed ] = React.useState(false);
    const [ isLoading, setIsLoading ] = React.useState(true);

    // Effects
    React.useEffect( () => {
        const getRegionCountries = async () => {
            const [ err, countries ] = await toJS<ICountry[]>(
                fetchRegionCountries(regionName)
            );

            if (err) {
                setIsLoading(false);
                setIsLoadingFailed(true);
                return;
            }

            setIsLoading(false);
            setIsLoadingFailed(false);
            setCountries(countries || []);
        }

        getRegionCountries();
    }, [isLoadingFailed, regionName]);

    return (
        <Content>
            { isLoading 
                ? <Spinner /> 
                : <React.Fragment>
                    <ContentHeading>{regionName}</ContentHeading>
                    <CountriesSortingComponent 
                        sortingSchemas={[
                            {
                                field: 'name' as TSortField,
                                text: 'By name',
                                orders: [
                                    {
                                        text: 'Ascending',
                                        value: 'asc' as TSortOrder
                                    },
                                    {
                                        text: 'Descending',
                                        value: 'desc' as TSortOrder
                                    },
                                ]
                            },
                            {
                                field: 'population' as TSortField,
                                text: 'By population',
                                orders: [
                                    {
                                        text: 'MIN to MAX',
                                        value: 'asc' as TSortOrder
                                    },
                                    {
                                        text: 'MAX to MIN',
                                        value: 'desc' as TSortOrder
                                    }
                                ]
                            }
                        ]}
                        sortField={sortField}
                        sortOrder={sortOrder}
                        setSortField={setSortField}
                        setSortOrder={setSortOrder}
                    />
                    <CountryList>
                        { sortedCountriesRenderer(countries)(sortField)(sortOrder) }
                    </CountryList> 
                </React.Fragment>
        }
            
        </Content>
    );
}