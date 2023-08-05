import PropTypes from 'prop-types';
import {transitionBtn} from './Animation';
import { styled } from 'styled-components';
import { useEffect, useState } from 'react';

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
        animation: ${props => (transitionBtn(props.$yPosition+"%"))} ${props => props.$isFadeOut ? "reverse" : "normal"} .3s ease forwards;
        
    `;

    //console.log(ButtonWrapper);
export default function Button({icone, handleClick, isCollection, isActive, indexPosition, btnType, activeCollection}) {
    const yPosition = [-120, 0, 120];
    const [isFadeOut, setIsFadeOut] = useState(0);

    // useEffect(() => {
    //     if(!isActive) {
    //         console.log('achei');
    //         setIsFadeOut(true);
    //         setTimeout(handleClick, 3000);
    //     }
    //     return () => setIsFadeOut(0);
    // },[isActive]);

    return(
        <>
            {!isCollection ? <ButtonWrapper onClick={e => handleClick(e)}  ref={btnType === "collection" ? (isActive ? (e) => activeCollection.current[activeCollection.current.length] = e : null) : null }>{icone}</ButtonWrapper>:
                             <BtnCollectionWrapper onClick={handleClick} $yPosition={yPosition[indexPosition]} $isFadeOut={isFadeOut}>{icone}</BtnCollectionWrapper>}
            
        </>
    )
}


Button.propTypes = {
    icone: PropTypes.element,
    handleClick: PropTypes.func,
    isCollection: PropTypes.bool,
    isActive: PropTypes.bool,
    indexPosition: PropTypes.number,
    btnType: PropTypes.string,
    activeCollection: PropTypes.object
}
