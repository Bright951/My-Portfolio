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
            <h1>An Error Occured</h1>
            <p>Please there was an error while trying to send the message across.</p>
            <p>Please Check your internet connection and try again later.</p>
            <h2>Thank You.</h2>
        </div>
    </div>
  )
}

export default ErrorModal