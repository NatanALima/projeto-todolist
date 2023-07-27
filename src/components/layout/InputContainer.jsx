import PropTypes from 'prop-types';
import ButtonCollection from "../Buttons/ButtonCollection";
import ButtonInfo from '../Buttons/ButtonInfo';


export default function InputContainer({type, value, placeholder, btnSelect, btnCollection}) {


    return(
      <section>
        <input type={type} value={value}  placeholder={placeholder}/>
        <ButtonInfo btnSelect={btnSelect} typeBtnSelect={btnCollection}/>
      </section>  
    )
}

InputContainer.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  btnSelect: PropTypes.string,
  btnCollection: PropTypes.string
}