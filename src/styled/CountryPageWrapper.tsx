import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const CountryPageWrapper = styled.div`
    animation: ${fadeIn} 0.25s;
`