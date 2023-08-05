import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from "../layout/Button"
import ButtonCollection from "./ButtonCollection";
import { FaPlus } from 'react-icons/fa';
import { FaEllipsis } from 'react-icons/fa6';

export default function ButtonInfo({btnSelect, typeBtnSelect, setIsDisabled, activeCollection}) {
    const [isClicked, setIsClicked] = useState(false);

    const filterArray = (arr) => {
        const notRepeatArray = Array.from(new Set(arr));
        const filteredArr = notRepeatArray.filter(item => item !== null);
        return filteredArr;

    }

    const removeTargetButton = (btnTarget, arr) => {
        return arr.filter(item => item !== btnTarget);
    }
    
    const disabledClick = () => {
        setIsClicked(false)
    }

    const handleClickAdd = () => {
        return console.log("Adicionei uma nova Info na lista")
  
    }

    const handleClickActive = (e) => {
        setIsClicked(prevClick => !prevClick);
        let newActiveCollection = filterArray(activeCollection.current);
        console.log(newActiveCollection);
        newActiveCollection = removeTargetButton(e.target, newActiveCollection);
        console.log(newActiveCollection);
        newActiveCollection.map(item => item.addEventListener('click', disabledClick));
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
            <Button icone={selectedBtnInfo.icon} handleClick={selectedBtnInfo.handleClick} isCollection={false} btnType={selectedBtnInfo.btnSelect} isActive={isClicked} activeCollection={activeCollection}/>
            {isClicked ? <ButtonCollection typeBtnSelect={typeBtnSelect} setIsDisabled={setIsDisabled} isActive={isClicked} activeCollection={activeCollection}/> : null}
            
        </>
    )
}

ButtonInfo.propTypes = {
    btnSelect: PropTypes.string,
    typeBtnSelect: PropTypes.string,
    setIsDisabled: PropTypes.func,
    activeCollection: PropTypes.object
}