import React from 'react'
import { IconButton } from '@material-ui/core'
import './UserCard.css'
import { useDispatch } from 'react-redux'
import { swipeUser } from '../../actions'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CloseIcon from '@material-ui/icons/Close';
import FloatingIconButton from '../layout/FloatingIconButton'

const UserCard = ({ user }) => {
  const { id, photoURL, displayName, gender } = user
  const dispatch = useDispatch()
  const handleSwipe = (direction) => dispatch(swipeUser({ swipedUser: user, direction, swipedUserSwipes: user.swipes }))

  return (
    <div className='user_card__container'>
      <h1 className='user_card__display_name'>{displayName}</h1>
      <img className='user_card__image' src={photoURL} alt={`${displayName}'s mainImage`} />
      <div className='user_card__section'>
        <p>{}</p>
      </div>
      <div className='user_card__controls'>
        <FloatingIconButton>
          <IconButton className='user_card__btn' onClick={() => handleSwipe('left')}><CloseIcon /></IconButton>
        </FloatingIconButton>
        <FloatingIconButton>
          <IconButton className='user_card__btn' onClick={() => handleSwipe('right')}><FavoriteBorderIcon /></IconButton>
        </FloatingIconButton>
      </div>
    </div>
  )
}

export default UserCard
