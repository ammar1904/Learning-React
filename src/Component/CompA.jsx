import React from 'react'
import CompB from './CompB'

const CompA = ({value}) => {
  return (
    <div>
        <CompB value={value}/>
    </div>
  )
}

export default CompA