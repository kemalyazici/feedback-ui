import PropTypes from 'prop-types';

function Button({type,children,version,isDisabled}) {
    return (
        <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
            {children}
        </button>
    );
}

Button.defaultProps = {
    isDisabled : false,
    type: 'button',
    version: 'primary'
}

Button.propTypes = {
    isDisabled: PropTypes.bool,
    version: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default Button;