import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ color, text, handleClick }) => {
  return (
    <div>
      <button
        onClick={handleClick}
        className={`btn btn--${color}`}
        type='button'
      >
        {text}
      </button>
    </div>
  )
}
Button.defaultProps = {
  color: 'green',
  text: 'Add',
}
Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
}
export default Button
