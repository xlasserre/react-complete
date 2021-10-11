import React from 'react'

import './customButton.styles.scss'

const CustomButton = ({ children, isGoogleSignIn = false, ...otherProps }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
)

export default CustomButton
