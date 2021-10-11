import React, { useState, useMemo } from 'react'
import FormInput from '../formInput'
import CustomButton from '../customButton'

import { signInWithGoogle } from '../../firebase/firebase.utils'

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
        <div className='buttons'>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
        </div>
        
      </form>
    </div>
  )
}

export default SignIn
