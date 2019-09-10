import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    color: white;

    &:visited {
        color: white;
    }

    &:not(:only-child) {
        margin: 0 12px;
    }
`