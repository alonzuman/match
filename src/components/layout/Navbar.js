import React from 'react'
import { IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './Navbar.css'

// Icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';

export const Navbar = () => {
  return (
    <div className='navbar__container'>
      <ul className='navbar__menu'>
        <li className='navbar__item'>
          <Link to='/feed'>
            <IconButton>
              <FavoriteIcon />
            </IconButton>
          </Link>
        </li>
        <li className='navbar__item'>
          <Link to='/profile'>
            <IconButton>
              <AccountCircleIcon />
            </IconButton>
          </Link>
        </li>
      </ul>
    </div>
  )
}
