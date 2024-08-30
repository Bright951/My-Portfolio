import React from 'react'
import './SpinnerStyles.scss'

const Spinner = () => {
  return (
    <div className='spinner-container'>
        <div className="spinner-modal">
            <div className='spinner'></div>
            Loading...
        </div>
    </div>
  )
}

export default Spinner