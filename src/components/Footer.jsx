import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    // <footer>
    //   <p>Copyright &copy; 2021</p>
    //   <Link to='/about'>About</Link>
    // </footer>
    <footer>
      <div className='footer footer--1'>
        <Link to='/login' className='btn footer__login'>
          {' '}
          LogIn
        </Link>
        <Link to='/Signup' className='btn footer__signup'>
          {' '}
          Create an Account
        </Link>
      </div>

      <div className='footer footer--2'>
        <div className='footer__name'>
          <Link to='/about'>
            <h4>About Developer</h4>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
