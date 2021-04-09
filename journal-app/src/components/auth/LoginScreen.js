import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import login from '../../actions/auth'

const LoginScreen = () => {

  const dispatch = useDispatch()

  const [values, handleInputChange, reset] = useForm({
    email: 'amaury@amaury.com',
    password: '12345',
  })

  const { email, password } = values

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(email, password)
    //primer dispatch
    dispatch(login(email, password))


  }


  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form action="" onSubmit={handleLogin}>
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
          className="auth__input"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
        <button
          className="btn btn-primary btn-block"
          type="submit"
        // disabled={true}
        >
          Login
        </button>

        <div className="auth__social-networks">
          <p> Login social networks</p>
          <div className="google-btn" >
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>

        </div>
        <Link to="/auth/register" className="link">
          Create new account
        </Link>

      </form>
    </>
  )
}

export default LoginScreen
