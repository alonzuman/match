import React from 'react'
import './PageContainer.css'
import { Container } from '@material-ui/core'

const PageContainer = ({ children, style }) => {
  return (
    <Container className='page__container' style={{ ...style }}>
      {children}
    </Container>
  )
}

export default PageContainer
