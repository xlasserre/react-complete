import React, { useState, useMemo } from 'react'

const SignIn = () => {
  const [user, setUser] = useState({ email: '', password: '', })

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = useMemo((e) => (e) => {
    const { value, name } = e.target
    setUser({ ...user, [name]: value })
  }, [user])

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <input
          name='email'
          type='email'
          value={user.email} 
          onChange={handleChange}
          required
        />
        <label>Email</label>

        <input
          name='password'
          type='password'
          value={user.password}
          required
          onChange={handleChange}
        />
        <label>Password</label>

        <input type='submit' value='Sign In' />
      </form>
    </div>
  )
}

export default SignIn
