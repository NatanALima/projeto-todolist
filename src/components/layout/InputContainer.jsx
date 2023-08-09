import PropTypes from 'prop-types';
import ButtonInfo from '../Buttons/ButtonInfo';
import { useState } from 'react';
import { styled } from 'styled-components';
import { fadeIn } from './Animation';

const FormWrapper = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
`

const InputContainerWrapper = styled.div`
  opacity: 0;
  position: relative;
  display: flex;
  align-items: center;
  width: 50%;
  margin: ${props => props.$marginDefine == "add" ? "3em 0" : "2em 0"};
  padding: 20px 15px;
  background-color: ${props => props.$isChecked ? "var(--containerCheckedColor)" : "var(--containerColor)"};
  color: var(--fontColor); 
  border-radius: 5px;
  ${props => props.$isChecked ? `text-decoration: line-through;` : null};
  transition: .3s;
  animation: ${fadeIn} .4s ease ${props => props.$delayValue ? '.'+props.$delayValue+'s' : null} forwards;
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

export default function InputContainer({type, value, name, placeholder, disabled, btnSelect, btnCollection, isChecked, indexValue, addTask, editTask}) {
  const [isDisabled, setIsDisabled] = useState(disabled || false);
  const [newTask , setNewTask] = useState({});

  const handleTask = (e) => {
    setNewTask({...newTask, [e.target.name]: e.target.value});

  }

  
  return(
    
    <InputContainerWrapper $marginDefine={btnSelect} $isChecked={isChecked} $delayValue={indexValue}>
      <InputWrapper type={type} name={name} defaultValue={value} placeholder={placeholder} disabled={isDisabled} onChange={handleTask} autoComplete='off'/>
      <ButtonInfo btnSelect={btnSelect} typeBtnSelect={btnCollection} setIsDisabled={setIsDisabled} addTask={addTask} editTask={editTask} taskInfo={newTask}/>
    </InputContainerWrapper>

  )
}

InputContainer.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  btnSelect: PropTypes.string,
  btnCollection: PropTypes.string,
  isChecked: PropTypes.bool,
  indexValue: PropTypes.number,
  addTask: PropTypes.func,
  editTask: PropTypes.func
}