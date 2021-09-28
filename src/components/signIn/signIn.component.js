import React, { useState, useMemo } from 'react'
import FormInput from '../formInput'
import CustomButton from '../customButton'

import './signIn.styles.scss'

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
        <FormInput
          name='email'
          type='email'
          label='Email'
          value={user.email} 
          handleChange={handleChange}
          required
        />

        <FormInput
          name='password'
          type='password'
          label='Password'
          value={user.password}
          required
          handleChange={handleChange}
        />

        <CustomButton type='submit'>Sign In</CustomButton>
      </form>
    </div>
  )
}

export default SignIn
