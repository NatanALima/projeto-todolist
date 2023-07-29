import PropTypes from 'prop-types';
import {rotate, fadeInBtn} from './Animation';
import { styled } from 'styled-components';
import { useState } from 'react';

    const ButtonWrapper = styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--fontColor);
        border-radius: 50px;
        color: var(--fontColor);
        font-size: 15px;
        cursor: pointer;
        background: transparent;
        padding: 10px;
        transition: .2s ease;

        &:hover {
            background-color: var(--fontColor);
            color: var(--containerColor)
        }
    `

    // PENDENTE
    const BtnCollectionWrapper = styled(ButtonWrapper)`
        margin: 10px 0;
        position: absolute;
        transition: .3s ease;
        animation: ${props => fadeInBtn(props.$yPosition+"%")} .3s ease forwards;
        
    `;

    //console.log(ButtonWrapper);
export default function Button({icone, handleClick, isCollection, isActive, cssPosition}) {
    const [yPosition, setYPosition] = useState(-120);

    return(
        <>
            {!isCollection ? <ButtonWrapper onClick={handleClick}>{icone}</ButtonWrapper>:
                             <BtnCollectionWrapper onClick={handleClick} $yPosition={-120}>{icone}</BtnCollectionWrapper>}
            
        </>
    )
}


Button.propTypes = {
    icone: PropTypes.element,
    handleClick: PropTypes.func,
    isCollection: PropTypes.bool,
    isActive: PropTypes.bool
}
