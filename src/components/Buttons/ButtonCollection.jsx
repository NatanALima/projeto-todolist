import { useState } from "react";
import { styled } from "styled-components";
import Button from "../layout/Button";
import PropTypes from 'prop-types';
import {FaCheck, FaCheckDouble, FaPen, FaTrash} from 'react-icons/fa';
import {FaArrowRotateLeft, FaX} from 'react-icons/fa6';

    const ContainerBtnWrapper = styled.div`
        position: relative;
        display: flex;
        align-items: center;
    `;
    console.log(ContainerBtnWrapper);

export default function ButtonCollection({typeBtnSelect, setIsDisabled, editTask, delTask, taskInfo, isFadeOut}) {
    const [typeSelect, setTypeSelect] = useState(typeBtnSelect || "default");

    const handleClickChecked = () => {
        setIsDisabled(true);
        taskInfo.isChecked = true;
        editTask(taskInfo);
        alert('Tarefa Concluída!');

    }

    const handleClickDel = () => {
        delTask(taskInfo);
        alert('Tarefa deletada Com Sucesso!')

    }

    const handleClickReturn = () => {
        setTypeSelect("default");
        setIsDisabled(true);

    }

    // Quase todos os botões da coleção de edições
    // Abre a coleção de Edição
    const handleClickEdit = () => {
        setTypeSelect("editList");
        setIsDisabled(false);

    }

    // Realiza a alteração do texto referente à tarefa
    const handleClickEditConfirm = () => {
        editTask(taskInfo);
        alert('Alteração Realizada com Sucesso!');

    }

    // Botão de remover a tarefa concluida
    const handleClickUnchecked = () => {
        taskInfo.isChecked = false;
        editTask(taskInfo);
        alert('Tarefa Desconcluída!');

    }

    // Nesta função eu verifico qual coleção será utilizada
    // Ela receberá o parâmetro com nome da coleção para ser utilizado no Filter
    const searchCollectionBtn = (btnSelect) => {
        const collectionList = [{typeBtn: "default", 
                                collectionBtn: {
                                        confirm: {icone: <FaCheck/>, handleClick: handleClickChecked},
                                        edit: {icone: <FaPen/>, handleClick: handleClickEdit},
                                        del: {icone: <FaTrash/>, handleClick: handleClickDel}
                                    },
                                },
                                {typeBtn: "editList",
                                    collectionBtn: {
                                        editConfirm: {icone: <FaCheckDouble/>, handleClick: handleClickEditConfirm},
                                        editCancel : {icone: <FaX/>, handleClick: handleClickReturn}
                                    },
                                },
                                {typeBtn: "checkedList",
                                    collectionBtn: {
                                        unchecked : {icone: <FaArrowRotateLeft/>, handleClick: handleClickUnchecked},
                                        del : {icone: <FaTrash/>, handleClick: handleClickDel}
                                    },
                                }];
        const collectionFilter = collectionList.filter(item => item.typeBtn === btnSelect);
        return collectionFilter;

    }

    // Aqui será retornado as informações da coleção de botões (icones e suas respectivas funções)
    const getInfoCollectionBtn = (btnSelect) => {
        const collection = searchCollectionBtn(btnSelect);
        return collection ? collection.map(({collectionBtn}) => ({...collectionBtn})) : null;

    }

    // Pegando as informações dos botões e passando-as para um array para que seja percorrido, posteriormente, por um map
    const getPropsCollection = (btnSelect) => {
        const propsCollect = getInfoCollectionBtn(btnSelect);
        if(propsCollect.length) {
            const propsValue = Object.values(propsCollect[0]);
            return propsValue;
        
        } else {
            return [];
        }
    }

    const PropsCollection = getPropsCollection(typeSelect);

    

    return (
        <ContainerBtnWrapper>
            {PropsCollection.length ? PropsCollection.map((info, index) => (<Button key={index} {...info} isCollection={true} indexPosition={index} isFadeOut={isFadeOut}/>)) :
                console.log("Não foi possível encontrar a coleção")
            }
            
        </ContainerBtnWrapper>
        
    )
}

ButtonCollection.propTypes = {
    typeBtnSelect: PropTypes.string,
    setIsDisabled: PropTypes.func,
    editTask: PropTypes.func,
    delTask: PropTypes.func,
    taskInfo: PropTypes.object,
    isFadeOut: PropTypes.bool
}