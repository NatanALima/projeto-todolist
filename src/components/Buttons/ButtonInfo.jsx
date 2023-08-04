import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from "../layout/Button"
import ButtonCollection from "./ButtonCollection";
import { FaPlus } from 'react-icons/fa';
import { FaEllipsis } from 'react-icons/fa6';

export default function ButtonInfo({btnSelect, typeBtnSelect, setIsDisabled}) {
    const [isClicked, setIsClicked] = useState(0);
    const activeCollection = useRef([]);

    const handleClickAdd = () => {
        return console.log("Adicionei uma nova Info na lista")
  
    }

    const handleClickActive = () => {
        setIsClicked(prevClick => !prevClick);
        // console.log(activeCollection);
        // activeCollection.current.map(item => item.click());
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
            <Button icone={selectedBtnInfo.icon} handleClick={selectedBtnInfo.handleClick} isCollection={false} btnType={selectedBtnInfo.btnSelect} activeCollection={activeCollection}/>
            {isClicked ? <ButtonCollection typeBtnSelect={typeBtnSelect} setIsDisabled={setIsDisabled} isActive={isClicked} activeCollection={activeCollection}/> : null}
            
        </>
    )
}

ButtonInfo.propTypes = {
    btnSelect: PropTypes.string,
    typeBtnSelect: PropTypes.string,
    setIsDisabled: PropTypes.func
}