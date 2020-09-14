import { CircularProgress } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMyMatches } from '../actions'
import MatchCard from '../components/cards/MatchCard'
import MatchCardsList from '../components/lists/MatchCardsList'

const Profile = () => {
  const { id } = useSelector(state => state.auth)
  const { loading, matches } = useSelector(state => state.matches)
  const dispatch = useDispatch()

  useEffect(() => { dispatch(getMyMatches()) }, [])

  if (loading) {
    return <CircularProgress />
  } else {
    return (
      <div>
        {/* Matches */}
        <MatchCardsList matches={matches} />
        {/* Chats */}
      </div>
    )
  }
}

export default Profile
