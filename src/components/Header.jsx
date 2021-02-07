import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'
import ButtonBack from './ButtonBack'

const Header = ({ title, onShow, showAdd }) => {
  const location = useLocation()

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' ? (
        <Button
          handleClick={onShow}
          text={showAdd ? 'Close' : 'Add'}
          color={showAdd ? 'red' : 'green'}
        />
      ) : (
        <ButtonBack color='green' link='/' />
      )}
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
