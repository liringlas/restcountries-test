import styled from 'styled-components';
import { cssVars } from './vars';

export const CountryPageFieldCell = styled.div`
    flex: 1 1 calc(320px - 16px);
    margin-bottom: 48px;
    padding-right: 16px;

    @media ${cssVars.breakpoints.tablet} {
        flex: 1 1 calc(33% - 16px);
    }
`