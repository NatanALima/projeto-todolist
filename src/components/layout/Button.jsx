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
        z-index: ${props => console.log(props.$active)};
    `
export default function Button({icone, handleClick, isCollection, isActive}) {
    console.log(isActive);
    return(
        <ButtonWrapper onClick={handleClick} as={isCollection ? BtnCollectionWrapper : null}>{icone}</ButtonWrapper>
    )
}


Button.propTypes = {
    icone: PropTypes.element,
    handleClick: PropTypes.func,
    isCollection: PropTypes.bool,
    isActive: PropTypes.bool
}
