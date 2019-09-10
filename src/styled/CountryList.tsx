import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const CountryList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0 0 24px 0;
    width: calc(100% - 64px);
    animation: ${fadeIn} 0.2s ease-in;
`