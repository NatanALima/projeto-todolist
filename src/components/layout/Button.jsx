import PropTypes from 'prop-types';

export default function Button({icone, handleClick}) {
    return(
        <button onClick={handleClick}>{icone}</button>
    )
}


Button.propTypes = {
    icone: PropTypes.element,
    handleClick: PropTypes.func
}
