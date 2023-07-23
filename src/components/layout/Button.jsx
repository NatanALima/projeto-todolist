import PropTypes from 'prop-types';

export default function Button({iconBtn, handleAction}) {
    console.log(handleAction);
    return(
        <button>{iconBtn}</button>
    )
}


Button.propTypes = {
    iconBtn: PropTypes.element,
    handleAction: PropTypes.func
}
