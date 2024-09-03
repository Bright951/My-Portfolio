import React , {useState, useRef} from 'react'
import './index.scss'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser';
import ErrorModal from '../../components/ErrorModal';
import SuccessModal from '../../components/SucessModal';
import Spinner from '../../components/Spinner';
import Empty from '../../components/Empty'

const Contaact = () => {

  const [failed, setFailed] = useState(false)
  const [Suceeded, setSuceeded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [empty, setEmpty] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const FormRef = useRef()

  const Reset=()=>{
    setName('')
    setEmail('')
    setMessage('')
  }

  const sendEmail = (e)=>{
      e.preventDefault();
      setFailed(false);
      setSuceeded(false);
      setLoading(true)
        emailjs
          .sendForm('service_xkohrez', 'template_zhk6f5l', FormRef.current,{
          publicKey:'wCkrwm7pqjeX4KQyB',
        // process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      })
      .then(()=>{
        console.log('success')
        setSuceeded(true)
        setLoading(false)
        Reset()
      })
      .catch((err)=>{
        console.log('failed', err)
        setFailed(true)
        setLoading(false)
        Reset()
      })
    }

  const variants ={
    initial:{
      opacity:0,
      transition:{
        duration:2,
      }
    },
    final:{
      opacity:1,
      transition:{
        duration:2,
      }
    }
  }

  return (
    <div className='contaact-screen-container'>
      <div className="container-for-writeup">
        <h1>Want to know more ? , <br/> Let's get in Touch</h1>
        <div className="container-for-details">
          <span>Gmail:</span>
          <p>KristalDev001@gmail.com</p>
          <span>Whatsaap Number:</span>
          <p>08107898980</p>
        </div>
        <div className="container-for-options">
          <h1>OR</h1>
          <p>You could fill out the form next on the right hand side to drop me a message,
          thank you.
          <br/> 
          <br/>
          <span>NOTE: </span>Your Message could be in any language,
          but preffered language is English.
          </p>
        </div>
      </div>

      <div className="form-container">
        <motion.div className="form-container-2"variants={variants} initial='initial' whileInView='final' >
          <form onSubmit={sendEmail}>
            <input 
              type="text" 
              name="user_name" 
              id="" 
              placeholder='Your Name e.g John Doe'
              value={name}
              onChange={(e)=> setName(e.target.value)}
            />
            <input 
              type="email" 
              name="user_email"             
              id="" 
              placeholder='Your email e.g YourName@gmail.com'
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
            <textarea 
              name="message" 
              id="" 
              cols="3" 
              rows="15"
              placeholder='Your Message'
              value={message}
              onChange={(e)=> setMessage(e.target.value)}
            /> 
            <div className="button-container">
              <input type='submit'/>
              <input type='reset' onClick={Reset}/>  
            </div>
          </form>
        </motion.div>
      </div>
      {
          Suceeded && <SuccessModal/>
        }
        {
          loading && <Spinner/>
        }
        {
          failed && 
            <ErrorModal/>
        }
    </div>
  )
}

export default Contaact