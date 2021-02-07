import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const ButtonBack = ({ color }) => {
  return (
    <div>
      <Link to='/'>
        <button className={`btn btn--${color}`} type='button'>
          <FaArrowLeft style={{ color: 'white' }} />
        </button>
      </Link>
    </div>
  )
}
ButtonBack.defaultProps = {
  color: 'green',
}
ButtonBack.propTypes = {
  color: PropTypes.string,
}
export default ButtonBack
