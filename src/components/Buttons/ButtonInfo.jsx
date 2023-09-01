import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from "../layout/Button"
import ButtonCollection from "./ButtonCollection";
import { FaPlus } from 'react-icons/fa';
import { FaEllipsis } from 'react-icons/fa6';

export default function ButtonInfo({btnSelect, typeBtnSelect, setIsDisabled, addTask, editTask, delTask, taskInfo, setInfoModal}) {
    const [isClicked, setIsClicked] = useState(0);
    const [isFadeOut, setIsFadeOut] = useState(false);

    const handleClickAdd = () => {
        if(Object.keys(taskInfo).length > 0) {
            setInfoModal({type: "success", info: "Nova Lista Adicionada com Sucesso!"});
            addTask(taskInfo); 
            

        } else {
            setInfoModal({type: "error", info: "É necessário escrever algo para adicionar!"});
        }
  
    }

    // Ativa e desativa a coleção de botões de uma lista
    const handleClickActive = () => {
        // Verifica se a lista está ativa e, caso o usuário decida desativá-la, ou seja, fechá-la, é setado um timer para que essa ação ocorra, para que haja tempo da animação de FadeOut ser realizada
        if(isClicked) {
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
            {isClicked ? <ButtonCollection typeBtnSelect={typeBtnSelect} setIsDisabled={setIsDisabled} editTask={editTask} delTask={delTask} taskInfo={taskInfo} isFadeOut={isFadeOut} setInfoModal={setInfoModal}/> : null}
            
        </>
    )
}

ButtonInfo.propTypes = {
    btnSelect: PropTypes.string,
    typeBtnSelect: PropTypes.string,
    setIsDisabled: PropTypes.func,
    addTask: PropTypes.func,
    editTask: PropTypes.func,
    delTask: PropTypes.func,
    taskInfo: PropTypes.object,
    setInfoModal: PropTypes.func
}