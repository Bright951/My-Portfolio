import React ,{useState}from 'react'
import './ModalStyles.scss'
import {MdCancel} from 'react-icons/md'

const ErrorModal = () => {
    const [hidden, setHidden] = useState(false)
  return (
    <div className={hidden ? 'closed-modal' : 'modal-container'}>
        <div className="icon-container">
            <MdCancel 
                size={22} 
                style={{
                    cursor:'pointer',
                }}
                onClick={()=>{
                    setHidden(true)
                }}
            />
        </div>
        <div className="inner-modal">
            <h1>Your Request was Successful.</h1>
            <p>You have successfully sent a message across to Bethel.</p>
            <p>You will be contacted as soon as possible.</p>
            <h2>Thank You.</h2>
        </div>
    </div>
  )
}

export default ErrorModal