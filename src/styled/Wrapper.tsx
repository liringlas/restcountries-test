import styled from 'styled-components';
import { cssVars } from './vars'

export const Wrapper = styled.div`
    margin: auto;
    max-width: 100%;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: ${cssVars.color.main};
    flex-wrap: wrap;
`