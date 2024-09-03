import React, { useRef, useState } from 'react'
import './index.scss'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser';
import ErrorModal from '../../components/ErrorModal';
import SuccessModal from '../../components/SucessModal';
import Spinner from '../../components/Spinner';
import Empty from '../../components/Empty';

const Contact = () => {

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

  // const displayEmpty=(e)=>{
    
  // }

    const sendEmail = (e)=>{
      // if(!name || !email || !message){
      //   e.preventDefault()
      //   setEmpty(true)
      // }
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
    <div className='contact-screen-container'>
        <div className="write-up-container">
            <h1>Want to know more?,<br/> Let's get in Touch.</h1>

            <div className="details-container">
                <span>Gmail:</span>
                <p>KristalDev001@gmail.com</p>
                <span>Whatsaap Number:</span>
                <p>07039390473</p>
            </div>

            <div className="options-container">
              <h1>OR</h1>
              <p>You could fill out the form next on the right hand side to drop me a message,
                  thank you.
              </p>
            </div>

        </div>
        <motion.div className="form-container" variants={variants} initial='initial' whileInView='final'>
            <form ref={FormRef} onSubmit={sendEmail}>
                <input 
                    name="user_name"
                    type='text' 
                    className='name-field' 
                    placeholder='Your Name. e.g John Doe'
                    value={name}
                    onChange={(e)=>{ setName(e.target.value)}}
                    autoFocus={true}
                />
                <input 
                    name='user_email'
                    type='email' 
                    className='email-field' 
                    placeholder='Your email address.'
                    value={email}
                    onChange={(e)=>{ setEmail(e.target.value)}}
                />
                <textarea
                    name='message'
                    rows="15"
                    cols="3"
                    value={message}
                    onChange={(e)=>{ setMessage(e.target.value)}}
                    placeholder='Your Message'
                />
                <div className="button-container">
                    <input type='submit'/>
                    <input type='reset' onClick={Reset}/>  
                </div>
              {/* <legend>yor details</legend> */}
            </form>
            
        </motion.div>
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
        {/* {
          empty && <Empty/>
        } */}
    </div>
  )
}

export default Contact