import styled from 'styled-components';
import { cssVars } from './vars';

export const HeaderHeading = styled.h1`
    color: white;
    font-size: 18px;
    line-height: 1.4;
    margin: 0;
    flex: 1 0 100%;
    max-width: 1440px;
    margin: auto;

    a {
        color: white;
        text-decoration: none;
        cursor: pointer;

        &:visited {
            color: white;
        }
    }

    @media ${cssVars.breakpoints.tablet} {
        font-size: 32px;
    }
`