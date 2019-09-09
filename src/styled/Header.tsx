import styled from 'styled-components';
import { cssVars } from './vars';

export const Header = styled.div`
    height: ${cssVars.headerHeight};
    background-color: black;
    flex: 1 1 100%;
    display: flex;
    background-color: ${cssVars.color.dark};
    align-items: center;
    justify-content: flex-start;
    padding: 0 32px;
`