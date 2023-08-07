import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from "../layout/Button"
import ButtonCollection from "./ButtonCollection";
import { FaPlus } from 'react-icons/fa';
import { FaEllipsis } from 'react-icons/fa6';

export default function ButtonInfo({btnSelect, typeBtnSelect, setIsDisabled, addTask, editTask, taskInfo}) {
    const [isClicked, setIsClicked] = useState(0);

    const handleClickAdd = () => {
        if(Object.keys(taskInfo).length > 0) {
            addTask(taskInfo);
            alert('Task adicionada com sucesso!');
            

        } else {
            alert("É necessário escrever algo para adicionar!");
        }
  
    }

    const handleClickActive = () => {
        setIsClicked(prevClick => !prevClick);

    }


    const btnInfo = [{btnSelect: "add",
                      icon: <FaPlus/>,
                      handleClick: handleClickAdd
                    },
                    {btnSelect: "collection",
                     icon: <FaEllipsis/>,
                     handleClick: handleClickActive}]

    

    const getBtnInfo = (btnCategory) => {
      return btnInfo.filter(info => info.btnSelect === btnCategory)[0];

    }

    const selectedBtnInfo = getBtnInfo(btnSelect);

    return(
        <>
            <Button icone={selectedBtnInfo.icon} handleClick={selectedBtnInfo.handleClick} isCollection={false} btnType={selectedBtnInfo.btnSelect}/>
            {isClicked ? <ButtonCollection typeBtnSelect={typeBtnSelect} setIsDisabled={setIsDisabled} isActive={isClicked}/> : null}
            
        </>
    )
}

ButtonInfo.propTypes = {
    btnSelect: PropTypes.string,
    typeBtnSelect: PropTypes.string,
    setIsDisabled: PropTypes.func,
    addTask: PropTypes.func,
    editTask: PropTypes.func,
    taskInfo: PropTypes.object
}