import { Avatar, Button } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearAlert } from '../../actions/alerts'
import { keepSwiping } from '../../actions/matches'
import './ItsAMatch.css'

const ItsAMatch = () => {
  const { id } = useSelector(state => state.auth)
  const { msg } = useSelector(state => state.alerts)
  const dispatch = useDispatch()

  const handleContinueClick = () => {
    dispatch(keepSwiping({ swipedUser: msg.users.find(user => user.id !== id) }))
    dispatch(clearAlert())
  }

  return (
    <div className='its_a_match__container'>
      <div className='its_a_match__content'>
        <h1>Its a match!</h1>
        <div className='its_a_match__avatars'>
          <Avatar src={msg.users[0].photoURL} />
          <Avatar src={msg.users[1].photoURL} />
        </div>
        <Button className='its_a_match__button' onClick={handleContinueClick}>Keep Swiping</Button>
      </div>
    </div>
  )
}

export default ItsAMatch
