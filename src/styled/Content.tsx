import styled from 'styled-components';
import { cssVars } from './vars';

export const Content = styled.div`
    display: flex;
    flex: 1 1 100%;
    flex-direction: column;
    min-height: calc(100vh - ${cssVars.headerHeight});
    background-color: ${cssVars.color.main};
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 32px;
    max-width: 1440px;
    margin: auto;
`