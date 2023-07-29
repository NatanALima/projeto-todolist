import PropTypes from 'prop-types';
import { styled } from 'styled-components';

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
        position: absolute;
        top: -19px;
        left: -52px;

        ${props => props.$isActive &&
          `
          left: 0;
          transform: rotate(calc(360deg / 8 * ${props.$cssPosition}));
          transform-origin: 80px;
          opacity: 1;`};
    `

    //console.log(ButtonWrapper);
export default function Button({icone, handleClick, isCollection, isActive, cssPosition}) {
    return(
        <>
            {!isCollection ? <ButtonWrapper onClick={handleClick}>{icone}</ButtonWrapper>:
                             <BtnCollectionWrapper onClick={handleClick} $isActive={isActive} $cssPosition={cssPosition}>{icone}</BtnCollectionWrapper>}
            
        </>
    )
}


Button.propTypes = {
    icone: PropTypes.element,
    handleClick: PropTypes.func,
    isCollection: PropTypes.bool,
    isActive: PropTypes.bool,
    cssPosition: PropTypes.number
}
