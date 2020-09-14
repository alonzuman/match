import React, { useEffect } from 'react'
import { Button, CircularProgress } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { signInWithProvider } from '../actions/auth'
import { Redirect } from 'react-router-dom'

const SignIn = () => {
  const { authenticated, loading } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  useEffect(() => { dispatch({type: 'AUTH/STOP_LOADING'}) }, [])
  const handleClick = provider => dispatch(signInWithProvider(provider))

  return (
    <div>
      {loading && <CircularProgress />}
      {authenticated && <Redirect to='/feed' />}
      {!loading && !authenticated &&
      <>
      <Button onClick={() => handleClick('google')}>Google</Button>
      <Button onClick={() => handleClick('facebook')}>Facebook</Button>
      </>}
    </div>
  )
}

export default SignIn
