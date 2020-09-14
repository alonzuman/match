import React, { useEffect } from 'react'
import { CircularProgress } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { validateUser } from '../../actions/auth'
import PageContainer from './PageContainer'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { loading, authenticated } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => { dispatch(validateUser()) }, [dispatch])

  return (
    <PageContainer>
    {loading && <CircularProgress />}
    {!loading && authenticated && <Route {...rest} render={props => <Component {...props} />} />}
    {!loading && !authenticated && <Redirect to='/' />}
    </PageContainer>
  )
}

export default ProtectedRoute
