import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import login, { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'

const LoginScreen = () => {

  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.ui)
  console.log(loading)



  const [values, handleInputChange, reset] = useForm({
    email: 'amaury@amaury.com',
    password: '123456',
  })

  const { email, password } = values

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(email, password)
    //primer dispatch
    dispatch(startLoginEmailPassword(email, password))


  }

  //funcion validacion con google 
  const handleLoginGoogle = () => {
    dispatch(startGoogleLogin())
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
        {<button
          className="btn btn-primary btn-block mb-5"
          type="submit"
          disabled={loading}
        >
          Login
        </button>}

        <div className="auth__social-networks">
          {/* <p> Login social networks</p> */}
          <div className="google-btn" onClick={handleLoginGoogle} >
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        {/* <div className="auth__social-networks">
    
          <div className="google-btn" >
            <div className="google-icon-wrapper">
              <img className="google-icon" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt="google button" />
            </div>
            <p className="btn-text">
              <b>Sign in with Twitter</b>
            </p>
          </div>
        </div> */}
        <Link to="/auth/register" className="link">
          Create new account
        </Link>

      </form>
    </>
  )
}

export default LoginScreen
