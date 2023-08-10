import PropTypes from 'prop-types';
import ButtonInfo from '../Buttons/ButtonInfo';
import { useState } from 'react';
import { styled } from 'styled-components';
import { fadeIn } from './Animation';

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
  ${props => props.$isTask && !props.disabled ? "border-bottom: 2px solid var(--fontColor)" : null}
  
`;

export default function InputContainer({type, value, name, placeholder, disabled, btnSelect, btnCollection, isChecked, indexValue, task, addTask, editTask, delTask, isTask}) {
  const [isDisabled, setIsDisabled] = useState(disabled || false);
  const [newTask , setNewTask] = useState(task || {});
  

  const handleTask = (e) => {
    setNewTask(oldTask => ({...oldTask, [e.target.name]: e.target.value}));

  }

  
  return(
    
    <InputContainerWrapper $marginDefine={btnSelect} $isChecked={isChecked} $delayValue={indexValue}>
      <InputWrapper type={type} name={name} defaultValue={value} placeholder={placeholder} disabled={isDisabled} onChange={handleTask} autoComplete='off' $isTask={isTask}/>
      <ButtonInfo btnSelect={btnSelect} typeBtnSelect={btnCollection} setIsDisabled={setIsDisabled} addTask={addTask} editTask={editTask} delTask={delTask} taskInfo={newTask}/>
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
  task: PropTypes.object,
  addTask: PropTypes.func,
  editTask: PropTypes.func,
  delTask: PropTypes.func,
  isTask: PropTypes.bool
}