import React from 'react';
import styled, { keyframes } from 'styled-components';

const RingWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
`

const Ring = styled.div`
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
`

const RingKeyframes = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`

const RingChild = styled.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 51px;
    height: 51px;
    margin: 6px;
    border: 6px solid #fff;
    border-radius: 50%;
    animation: ${RingKeyframes} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;

    &:nth-child(1) {
        animation-delay: -0.45s;
    }

    &:nth-child(2) {
        animation-delay: -0.3s;
    }

    &:nth-child(3) {
        animation-delay: -0.15s;
    }
`
  

export const Spinner = () => <RingWrapper>
    <Ring>
        <RingChild></RingChild>
        <RingChild></RingChild>
        <RingChild></RingChild>
        <RingChild></RingChild>
    </Ring>
</RingWrapper>;