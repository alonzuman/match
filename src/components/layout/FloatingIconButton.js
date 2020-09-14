import React from 'react'
import './FloatingIconButton.css'

const FloatingIconButton = ({ children }) => {
  return (
    <div className='floating_icon_button__container'>
      {children}
    </div>
  )
}

export default FloatingIconButton
