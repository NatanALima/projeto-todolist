import PropTypes from 'prop-types';
import ButtonInfo from '../Buttons/ButtonInfo';
import { useState } from 'react';
import { styled } from 'styled-components';


const InputContainerWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 50%;
  margin: ${props => props.$marginDefine == "add" ? "3em 0" : "1em 0"};
  padding: 20px 15px;
  background-color: ${props => props.$isChecked ? "var(--containerCheckedColor)" : "var(--containerColor)"};
  color: var(--fontColor); 
  border-radius: 5px;
  ${props => props.$isChecked ? `text-decoration: line-through;` : null};
`; 

const InputWrapper = styled.input`
  width: 100%;
  margin: 0 15px;
  color: var(--fontColor);
  font-size: 22px;
  font-family: var(--fontStyle);
  background-color: transparent;
  border: none;
  outline: none; 
`;

export default function InputContainer({type, value, placeholder, disabled, btnSelect, btnCollection, isChecked}) {
  const [isDisabled, setIsDisabled] = useState(disabled || false);


  
  return(
    <InputContainerWrapper $marginDefine={btnSelect} $isChecked={isChecked}>
      <InputWrapper type={type} value={value} placeholder={placeholder} disabled={isDisabled}/>
      <ButtonInfo btnSelect={btnSelect} typeBtnSelect={btnCollection} setIsDisabled={setIsDisabled}/>
    </InputContainerWrapper>  
  )
}

InputContainer.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  btnSelect: PropTypes.string,
  btnCollection: PropTypes.string,
  isChecked: PropTypes.bool
}