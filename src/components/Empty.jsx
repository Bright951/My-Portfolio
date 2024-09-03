import React, {useState} from 'react'
import './SpinnerStyles.scss'
import {MdCancel} from 'react-icons/md'

const Empty = () => {
 const [hidden, setHidden] = useState(false)

  return (
    <div className={hidden ? 'closed-modal' : 'Empty-container'}>
            <MdCancel 
                size={22} 
                style={{
                    cursor:'pointer',
                    position:'absolute',
                    top:'20px',
                    right:'20px'
                }}
                onClick={()=>{
                    setHidden(true)
                }}
            />
        <div className="Empty-modal">
           <h2>Please Fill Out All Fields.</h2> 
            <p>Please ensure you fill out all the fields in the form.</p>
            <p className=''>Thank You.</p>
        </div>
    </div>
  )
}

export default Empty