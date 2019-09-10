import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Content } from '../styled/Content';
import { ContentHeading } from '../styled/ContentHeading';
import { RegionsList } from '../styled/RegionsList';
import { RegionsListItem } from '../styled/RegionsListItem';
import { StyledLink } from '../styled/StyledLink';

import { ISharedPageProps } from '../types';

export const MainPage: React.FC<RouteComponentProps<{}> & ISharedPageProps> = (props: RouteComponentProps<{}> & ISharedPageProps) => {
    return (
        <Content>
            <ContentHeading>Please select region</ContentHeading>
            <RegionsList>
                { props.regions.map(region => <RegionsListItem key={region}>
                    <StyledLink to={`/region/${region}`}>{region}</StyledLink>
                </RegionsListItem>) }
            </RegionsList>
        </Content>
    );
}