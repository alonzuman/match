import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../actions/users'
import './UsersList.css'
import UserCard from '../cards/UserCard'
import { CircularProgress } from '@material-ui/core'

const UsersList = () => {
  const { loading, users, filters } = useSelector(state => state.users)
  useEffect(() => { dispatch(getUsers(filters)) }, [filters])

  const dispatch = useDispatch()
  if (loading) {
    return <CircularProgress />
  } else {
    return (
      <div className='users_list__container'>
        {users?.map((user, index) => <UserCard key={index} user={user.user} />)}
      </div>
    )
  }
}

export default UsersList
