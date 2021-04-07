import React from 'react'

const LoginScreen = () => {
  return (
    <>
      <h3>Login</h3>
      <form action="">
        <input
          type="text"
          placeholder="email"
          name="email"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
        />
        <button type="submit">
          Login
        </button>
        <hr />
        Google

      </form>
    </>
  )
}

export default LoginScreen
