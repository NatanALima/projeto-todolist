import PropTypes from 'prop-types';
import {transitionBtn, reverseTransitionBtn} from './Animation';
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

    //utilizar o ${props => props.$isFadeOut ? "reverse" : "normal" não funcionou, haja vista que quando a animação passava a ser Reverse ela não agia como deveria}
    const BtnCollectionWrapper = styled(ButtonWrapper)`
        margin: 10px 0;
        position: absolute;
        transition: .3s ease;
        animation: ${props => (props.$isFadeOut ? reverseTransitionBtn(props.$yPosition+"%") : transitionBtn(props.$yPosition+"%"))} normal .3s ease forwards;
        
    `;

    //console.log(ButtonWrapper);
export default function Button({icone, handleClick, isCollection, indexPosition, isFadeOut}) {
    const yPosition = [-120, 0, 120];

    return(
        <>
            {!isCollection ? <ButtonWrapper onClick={handleClick}>{icone}</ButtonWrapper>:
                             <BtnCollectionWrapper onClick={handleClick} $yPosition={yPosition[indexPosition]} $isFadeOut={isFadeOut}>{icone}</BtnCollectionWrapper>}
            
        </>
    )
}


Button.propTypes = {
    icone: PropTypes.element,
    handleClick: PropTypes.func,
    isCollection: PropTypes.bool,
    indexPosition: PropTypes.number,
    isFadeOut: PropTypes.bool
}
