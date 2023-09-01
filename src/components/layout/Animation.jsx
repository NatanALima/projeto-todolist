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

export const reverseTransitionBtn = (yPosition) => keyframes`
    from {
        opacity: 1;
        left: 2em;
        transform: translateY(${yPosition});
    }
    to {
        z-index: -1;
        opacity: 0;
        left: -2em;
    }
`

export const fadeIn = keyframes`
    from {
        transform: translate(20%, 20%);
        opacity: 0;
    
    } 
    to {
        transform: translate(0, 0);
        opacity: 1;
    }

`

export const upDownAnim = keyframes`
    from {
        top: -50%;
    
    } to {
        top: 5%;
    }
`
