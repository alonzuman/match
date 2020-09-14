import React from 'react'
import { useSelector } from 'react-redux'
import ItsAMatch from './ItsAMatch'

const Alerts = () => {
  const { isOn, msg, type } = useSelector(state => state.alerts)

  switch (type) {
    case 'match':
      return (
        <ItsAMatch />
      )
    default: return false;
  }
}

export default Alerts
