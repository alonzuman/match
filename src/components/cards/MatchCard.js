import React from 'react'
import { Link } from 'react-router-dom'
import './MatchCard.css'

const MatchCard = ({ matchedUser, matchId }) => {
  const { displayName, photoURL } = matchedUser

  return (
    <Link to={`/matches/${matchId}`}>
      <div className='match_card__container'>
        <img className='match_card__image' alt={displayName} src={photoURL} />
      </div>
    </Link>
  )
}

export default MatchCard
