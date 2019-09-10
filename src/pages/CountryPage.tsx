import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import toJS from 'await-to-js';

import { Content } from '../styled/Content';
import { CountryPageWrapper } from '../styled/CountryPageWrapper';
import { CountryPageName } from '../styled/CountryPageName';

import { countryPageFieldsRenderer } from '../renderers/countryPageFieldsRenderer';

import { fetchCountry } from '../service/fetchCountry';

import { ISharedPageProps, TParamsType, ICountry } from '../types';
import { Spinner } from '../styled/Spinner';

export const CountryPage: React.FC<RouteComponentProps<{}> & ISharedPageProps> = (props: RouteComponentProps<{}> & ISharedPageProps) => {
    const { match } = props;
    const countryName = (match.params as TParamsType)['name'] || 'Unknown region';

    const [ country, setCountry ] = React.useState<ICountry>();
    const [ isLoading, setIsLoading ] = React.useState(true);

    // Effects
    React.useEffect( () => {
        setIsLoading(true);

        const getCountry = async () => {
            const [ err, countries ] = await toJS<ICountry[]>(
                fetchCountry(countryName)
            );

            if (err) {
                setIsLoading(false);
                return;
            }

            setIsLoading(false);
            setCountry(countries && countries.length > 0 ? countries[0] : undefined);
        }

        getCountry();
    }, [countryName]);
    
    return (
        <Content>
            {
                isLoading || !country 
                    ? <Spinner />
                    : (
                        <CountryPageWrapper>
                            <CountryPageName>{`${country.name} (${country.nativeName})`}</CountryPageName>
                            { countryPageFieldsRenderer(country) }
                        </CountryPageWrapper>
                    )
                }
        </Content>
    );
}