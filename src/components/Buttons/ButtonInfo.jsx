import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from "../layout/Button"
import ButtonCollection from "./ButtonCollection";
import { FaPlus } from 'react-icons/fa';
import { FaEllipsis } from 'react-icons/fa6';

export default function ButtonInfo({btnSelect, typeBtnSelect, setIsDisabled, addTask, editTask, taskInfo}) {
    const [isClicked, setIsClicked] = useState(0);
    const [isFadeOut, setIsFadeOut] = useState(false);

    const handleClickAdd = () => {
        if(Object.keys(taskInfo).length > 0) {
            addTask(taskInfo);
            alert('Task adicionada com sucesso!');
            

        } else {
            alert("É necessário escrever algo para adicionar!");
        }
  
    }

    const handleClickEdit = () => {
        editTask(taskInfo);
        alert('Alteração Realizada com Sucesso!');
    }

    // PENDENTE
    const handleClickActive = () => {
        if(isClicked) {
            console.log('Entrou aqui ein !');
            setIsFadeOut(true);
            setTimeout(() => {
                setIsFadeOut(false);
                setIsClicked(prevClick => !prevClick);
            }, 100);

        } else {
            setIsClicked(true);
        }

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
            <Button icone={selectedBtnInfo.icon} handleClick={selectedBtnInfo.handleClick} isCollection={false}/>
            {isClicked ? <ButtonCollection typeBtnSelect={typeBtnSelect} setIsDisabled={setIsDisabled} handleEdit={handleClickEdit} isFadeOut={isFadeOut}/> : null}
            
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