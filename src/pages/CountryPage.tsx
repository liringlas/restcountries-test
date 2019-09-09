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