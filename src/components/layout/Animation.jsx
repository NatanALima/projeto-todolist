import { keyframes } from 'styled-components';

export const rotate = keyframes`
    from {
    transform: rotate(0deg);
    }

    to {
    transform: rotate(360deg);
    }
`;

export const transitionBtn = (yPosition) =>  keyframes`
    from {
        z-index: -1;
        opacity: 0;
        left: -2em;

    }
    to {
        opacity: 1;
        left: 2em;
        transform: translateY(${yPosition});
    }   
    
`
