import styled from 'styled-components';
import { cssVars } from './vars';

export const Content = styled.div`
    display: flex;
    flex: 1 1 100%;
    flex-direction: column;
    min-height: calc(100vh - ${cssVars.headerHeight} - 32px);
    background-color: ${cssVars.color.main};
    padding: 32px;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
`