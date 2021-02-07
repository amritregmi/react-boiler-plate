import React, { useState } from 'react'
import GridLoader from 'react-spinners/GridLoader'

const SignupForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [validEmail, setValidEmail] = useState(true)
  const [validPassword, setValidPassword] = useState(true)
  const [validPasswordConfirm, setValidPasswordConfirm] = useState(true)

  const [loading, setLoading] = useState(true)

  const onSubmit = (e) => {
    e.preventDefault()

    // email field cannot be empty and no spaces
    if (!email || email.trim() === '') {
      setValidEmail(false)
      return
    }
    // email field cannot be empty and no spaces
    if (!password || password.trim() === '') {
      setValidPassword(false)
      return
    }
    // passwordConfirm field cannot be empty and no spaces
    if (!passwordConfirm || passwordConfirm.trim() === '') {
      setValidPasswordConfirm(false)
      return
    }

    // show spinner
    setLoading(false)
    setTimeout(() => {
      setLoading(true)
    }, 2000)
    //clear the form
    setEmail('')
    setPassword('')
    setPasswordConfirm('')
    setValidEmail(true)
  }
  // watch email
  const onTypingEmail = (e) => {
    if (email.length === 0) {
      setValidEmail(true)
    }
    setEmail(e.target.value)
  }
  // watch password
  const onTypingPassword = (e) => {
    if (password.length === 0) {
      setValidPassword(true)
    }
    setPassword(e.target.value)
  }
  // watch passwordConfirm
  const onTypingPasswordConfirm = (e) => {
    if (passwordConfirm.length === 0) {
      setValidPasswordConfirm(true)
    }
    setPasswordConfirm(e.target.value)
  }

  return (
    <div className='signup'>
      {loading ? (
        <form className='add-form' onSubmit={onSubmit}>
          <div className='form-control'>
            <label htmlFor='email'>
              Email
              <input
                type='text'
                id='email'
                placeholder='Email Address'
                value={email}
                onChange={(e) => {
                  onTypingEmail(e)
                }}
                className={
                  validEmail ? 'form-control--valid' : 'form-control--notvalid'
                }
              />
              <span
                className={`message ${
                  validEmail ? 'message--hidden' : 'message--show'
                }`}
              >
                Invalid - Email must be provided
              </span>
            </label>
          </div>
          <div className='form-control'>
            <label htmlFor='time'>
              Password
              <input
                type='password'
                id='password'
                placeholder='password'
                autoComplete='on'
                value={password}
                onChange={(e) => {
                  onTypingPassword(e)
                }}
                className={
                  validPassword
                    ? 'form-control--valid'
                    : 'form-control--notvalid'
                }
              />
              <span
                className={`message ${
                  validPassword ? 'message--hidden' : 'message--show'
                }`}
              >
                Invalid - Password must be provided
              </span>
            </label>
          </div>
          <div className='form-control'>
            <label htmlFor='passwordConfirm'>
              Password
              <input
                type='password'
                id='passwordConfirm'
                placeholder='confirm password'
                autoComplete='on'
                value={passwordConfirm}
                onChange={(e) => {
                  onTypingPasswordConfirm(e)
                }}
                className={
                  validPasswordConfirm
                    ? 'form-control--valid'
                    : 'form-control--notvalid'
                }
              />
              <span
                className={`message ${
                  validPasswordConfirm ? 'message--hidden' : 'message--show'
                }`}
              >
                Invalid - Password must be provided
              </span>
            </label>
          </div>

          <input
            className='btn btn--block'
            type='submit'
            value='Create Account'
          />
        </form>
      ) : (
        <GridLoader color='#36D7B7' size={15} />
      )}
    </div>
  )
}

export default SignupForm
