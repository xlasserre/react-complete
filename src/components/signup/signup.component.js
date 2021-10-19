import React, { useState } from 'react'
import FormInput from '../formInput'
import CustomButton from '../customButton'
import { auth, createUserProfileDoc } from '../../firebase/firebase.utils'

import './signup.styles.scss'

const Signup = () => {
  const [user, setUser] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const { displayName, email, password, confirmPassword } = user


  const handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = user

    if (password !== confirmPassword) {
      alert('Passwords don\'t match')
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDoc(user, { displayName })

      setUser({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({...user, [name]: value})
  }


  return (
    <div className='signup'>
      <h2 className='title'>I do not have an account</h2>
      <span> Sign up with your email and pwd</span>
      <form className='signup-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>Sign up</CustomButton>
      </form>
    </div>
  )
}

export default Signup
