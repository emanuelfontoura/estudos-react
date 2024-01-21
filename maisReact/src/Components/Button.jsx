import React from "react";
import PropTypes from 'prop-types'

const Button = (props) => {
    return <button style={{
        margin: props.margin,
        width: `${props.width}px`,
        height: `${props.width/3}px`
    }} disabled={props.disabled}>
        {props.text}
    </button>
}

Button.defaultProps = {
    margin: '10px',
    width: '200px',
    disabled: false,
    text: 'TEXT'
}

Button.PropTypes = {
    margin: PropTypes.string.isRequired,
    width: PropTypes.number,
    disabled: PropTypes.bool
}

export default Button