import React from 'react'
import SignIn from '../../components/signIn'
import Signup from '../../components/signup'

import './auth.styles.scss'

const Auth = () => {
  return (
    <div className='auth'>
      <SignIn />
      <Signup />
    </div>
  )
}

export default Auth
