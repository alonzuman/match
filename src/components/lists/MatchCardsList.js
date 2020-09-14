import React from 'react'
import { useSelector } from 'react-redux'
import MatchCard from '../cards/MatchCard'
import './MatchCardsList.css'

const MatchCardsList = ({ matches }) => {
  const { id } = useSelector(state => state.auth)

  return (
    <div className='match_cards_list__container'>
      {matches?.map((match, index) => <MatchCard key={index} matchId={match.id} matchedUser={match.users.find(user => user.id !== id)} />)}
    </div>
  )
}

export default MatchCardsList
