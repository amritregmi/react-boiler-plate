import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onShow, showAdd }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        handleClick={onShow}
        text={showAdd ? 'Close' : 'Add'}
        color={showAdd ? 'red' : 'green'}
      />
    </header>
  )
}
Header.defaultProps = {
  title: 'Shopping Cart',
}
Header.propTypes = {
  title: PropTypes.string,
}
export default Header
