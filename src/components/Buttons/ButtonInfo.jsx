import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from "../layout/Button"
import ButtonCollection from "./ButtonCollection";
import { FaPlus } from 'react-icons/fa';
import { FaEllipsis } from 'react-icons/fa6';

export default function ButtonInfo({btnSelect, typeBtnSelect}) {
    const [isClicked, setIsClicked] = useState(0);

    const handleClickAdd = () => {
        return console.log("Adicionei uma nova Info na lista")
  
    }

    const btnInfo = [{btnSelect: "add",
                      icon: <FaPlus/>,
                      handleClick: handleClickAdd
                    },
                    {btnSelect: "collection",
                     icon: <FaEllipsis/>,
                     handleClick: () => setIsClicked(prevClick => !prevClick)}]

    

    const getBtnInfo = () => {
      return btnInfo.filter(info => info.btnSelect === btnSelect)[0];

    }

    const selectedBtnInfo = getBtnInfo();
    console.log(selectedBtnInfo);

    return(
        <>
            <Button icone={selectedBtnInfo.icon} handleClick={selectedBtnInfo.handleClick}/>
            {isClicked ? <ButtonCollection typeBtnSelect={typeBtnSelect}/> : null}
            
        </>
    )
}

ButtonInfo.propTypes = {
    btnSelect: PropTypes.string,
    typeBtnSelect: PropTypes.string
}