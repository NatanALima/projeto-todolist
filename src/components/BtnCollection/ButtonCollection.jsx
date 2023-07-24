import { useState } from "react";
import Button from "../layout/Button";
import PropTypes from 'prop-types';
import {FaPlus, FaCheck, FaCheckDouble, FaPen, FaTrash} from 'react-icons/fa';
import {FaArrowRotateLeft, FaX} from 'react-icons/fa6';

export default function ButtonCollection({typeBtnSelect}) {
    const [typeSelect, setTypeSelect] = useState(typeBtnSelect || "default");
    const [isClicked, setIsClicked] = useState(0);

    const handleClickAdd = () => {
        return "Cliquei no ADD";
    }

    const handleClickDel = () => {
        return "VIXI! Deletei o conteudo ali!";

    }

    const handleClickReturn = () => {
        setTypeSelect("default");
        return "Retornando para a coleção selecionada"

    }

    // Quase todos os botões da coleção de edições
    const handleClickEdit = () => {
        setTypeSelect("editList");
        return "Cliquei no Edit. Agora um novo menu se abriu";

    }

    const handleClickEditConfirm = () => {
        return "Confirmei a minha edição :)";

    }

    // Botão de remover a tarefa concluida
    const handleClickUnchecked = () => {
        return "Desfazendo a tarefa";
    }

    
    

    



    // Nesta função eu verifico qual coleção será utilizada
    // Ela receberá o parâmetro com nome da coleção para ser utilizado no Filter
    const searchCollectionBtn = (btnSelect) => {
        const collectionList = [{typeBtn: "default", 
                                collectionBtn: {
                                    confirm: {icone: <FaCheck/>, handleClick: handleClickAdd},
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
        return collection.map(({collectionBtn}) => ({...collectionBtn}));
    }

    // Pegando as informações dos botões e passando-as para um array para que seja percorrido, posteriormente, por um map
    const getPropsCollection = (btnSelect) => {
        const propsCollect = getInfoCollectionBtn(btnSelect);
        const propsValue = Object.values(propsCollect[0]);
        return propsValue;
    }

    const PropsCollection = getPropsCollection(typeSelect);

    

    return (
        <>
            <button onClick={() => setIsClicked((prevVal) => !prevVal)}><p>Aqui vai o ModeIcon</p></button>
            {isClicked ? 
                PropsCollection.map((info, index) => (<Button key={index} {...info}/>))
            : null}
            
        </>
        
    )
}

ButtonCollection.propTypes = {
    typeBtnSelect: PropTypes.string
}