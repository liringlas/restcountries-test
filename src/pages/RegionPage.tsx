import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import toJS from 'await-to-js';

import { Content } from '../styled/Content';
import { ContentHeading } from '../styled/ContentHeading';
import { Spinner } from '../styled/Spinner';
import { StyledLink } from '../styled/StyledLink';
import { OtherRegionsRow } from '../styled/OtherRegionsRow';

import { CountriesSortingComponent } from '../components/CountriesSortingComponent';
import { sortedCountriesRenderer } from '../renderers/sortedCountriesRenderer';

import { ISharedPageProps, ICountry, TParamsType, TSortField, TSortOrder } from '../types';
import { fetchRegionCountries } from '../service/fetchRegionCountries';

export const RegionPage: React.FC<RouteComponentProps<{}> & ISharedPageProps> = (props: RouteComponentProps<{}> & ISharedPageProps) => {
    const { match, regions } = props;
    const regionName = (match.params as TParamsType)['name'] || 'Unknown region';

    const [ countries, setCountries ] = React.useState<ICountry[]>([]);
    const [ sortField, setSortField ] = React.useState<TSortField>('name');
    const [ sortOrder, setSortOrder ] = React.useState<TSortOrder>('asc');
    const [ isLoading, setIsLoading ] = React.useState(true);

    // Effects
    React.useEffect( () => {
        setIsLoading(true);

        const getRegionCountries = async () => {
            const [ err, countries ] = await toJS<ICountry[]>(
                fetchRegionCountries(regionName)
            );

            if (err) {
                setIsLoading(false);
                return;
            }

            setIsLoading(false);
            setCountries(countries || []);
        }

        getRegionCountries();
    }, [regionName]);

    return (
        <Content>
            { isLoading 
                ? <Spinner /> 
                : <React.Fragment>
                    <ContentHeading>{regionName}</ContentHeading>
                    <OtherRegionsRow>Other regions:
                        { regions.filter( region => region !== regionName )
                            .map( region => 
                                <React.Fragment key={region}>
                                    <StyledLink to={`/region/${region}`}>{region}</StyledLink>
                                    &nbsp;&nbsp;
                                </React.Fragment>
                            )
                        }
                    </OtherRegionsRow>
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
                    { sortedCountriesRenderer(countries)(sortField)(sortOrder) }
                </React.Fragment>
        }
            
        </Content>
    );
}