import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import toJS from 'await-to-js';

import { Content } from '../styled/Content';
import { ContentHeading } from '../styled/ContentHeading';
import { RegionsList } from '../styled/RegionsList';
import { RegionsListItem } from '../styled/RegionsListItem';

import { CountriesSortingComponent } from '../components/CountriesSortingComponent';
import { CountryListItem } from '../components/CountryListItem';

import { ISharedPageProps, ICountry, TParamsType, TSortField, TSortOrder } from '../types';
import { fetchRegionCountries } from '../service/fetchRegionCountries';

const sortCountries = (countries: ICountry[]) => (sortField: TSortField) => (sortOrder: TSortOrder) => {
    return countries.sort((prev: ICountry, next: ICountry) => {
        console.log('sortOrder: ', sortOrder);
        console.log('sortField: ', sortField);

        return 0;
    }).map( country => <CountryListItem key={country.name} country={country} />);
}

export const RegionPage: React.FC<RouteComponentProps<{}> & ISharedPageProps> = (props: RouteComponentProps<{}> & ISharedPageProps) => {
    const { match } = props;
    const regionName = (match.params as TParamsType)['name'] || 'Unknown region';

    const [ isLoadingFailed, setIsLoadingFailed ] = React.useState(false);
    const [ countries, setCountries ] = React.useState<ICountry[]>([]);
    const [ sortField, setSortField ] = React.useState<TSortField>('name');
    const [ sortOrder, setSortOrder ] = React.useState<TSortOrder>('asc');

    React.useEffect( () => {
        const getRegionCountries = async () => {
            const [ err, countries ] = await toJS<ICountry[]>(fetchRegionCountries(regionName));
            if (err) {
                setIsLoadingFailed(true);
                return;
            }

            setIsLoadingFailed(false);
            setCountries(countries || []);
        }

        getRegionCountries();
    }, [isLoadingFailed, regionName]);

    return (
        <Content>
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
            <RegionsList>
                <RegionsListItem>
                    { sortCountries(countries)(sortField)(sortOrder) }
                </RegionsListItem>
            </RegionsList>
        </Content>
    );
}