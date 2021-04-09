import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import validator from 'validator'
import { removeError, setError } from '../../actions/ui'
import { useForm } from '../../hooks/useForm'

const RegisterScreen = () => {

  const dispatch = useDispatch()
  //con useSelector nos traemos el estado en este caso :
  //auth - ui 
  const { msgError } = useSelector(state => state.ui)
  console.log(msgError)

  const [values, handleInputChange, reset] = useForm({
    name: 'anyname',
    email: 'anyname@gmail.com',
    password: '123456',
    password2: '123456'
  })

  const { name, email, password, password2 } = values

  const handleRegister = (e) => {
    e.preventDefault()
    if (isFormValid()) {
      console.log('formulario correcto')

    }

  }

  const isFormValid = () => {

    if (name.trim().length === 0) {

      dispatch(setError('Name is required'))

      return false
    } else if (!validator.isEmail(email)) {

      dispatch(setError('Email is not valid'))

      return false

    } else if (password !== password2 || password.length < 5) {

      dispatch(setError('Password must be at least 6 characters'))

      return false
    }

    dispatch(removeError())


    return true
  }





  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form action="" onSubmit={handleRegister}>

        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input mb-1"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          className="auth__input mb-1"
          autoComplete="off"
          value={password2}
          onChange={handleInputChange}
        />
        {
          msgError &&
          <div className="auth__alert-error mb-5">
            {msgError}
          </div>
        }

        <button
          className="btn btn-primary btn-block mb-5"
          type="submit"

        // disabled={true}
        >
          Register
        </button>

        {/* <div className="auth__social-networks">
          <p> Login social networks</p>
          <div className="google-btn" >
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>

        </div> */}
        <Link to="/auth/login" className="link mt-5">
          Already registered ?
        </Link>

      </form>
    </>
  )
}

export default RegisterScreen
