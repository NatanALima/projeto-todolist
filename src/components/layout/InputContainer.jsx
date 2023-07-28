import PropTypes from 'prop-types';
import ButtonInfo from '../Buttons/ButtonInfo';
import { useState } from 'react';


export default function InputContainer({type, value, placeholder, disabled, btnSelect, btnCollection}) {
  const [isDisabled, setIsDisabled] = useState(disabled || false);

  return(
    <section>
      <input type={type} value={value}  placeholder={placeholder} disabled={isDisabled}/>
      <ButtonInfo btnSelect={btnSelect} typeBtnSelect={btnCollection} setIsDisabled={setIsDisabled}/>
    </section>  
  )
}

InputContainer.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  btnSelect: PropTypes.string,
  btnCollection: PropTypes.string
}