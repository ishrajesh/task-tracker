import PropTypes from 'prop-types'
import React from 'react'

const Button = ({text,color,onClick}) => {
  return (
    <button
        className='btn'
        style={{
            backgroundColor: color,
        }}
        onClick={onClick}
    >
        {text}
    </button>
  )
}

Button.defaultProps = {
    text: 'No text Found',
    color: 'red',
    onClick: {},
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    
}

export default Button