import React, { useRef } from 'react'
import './index.scss'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const FormRef = useRef()

    const sendEmail = (e)=>{
      e.preventDefault();

      emailjs
      .sendForm('service_xkohrez', 'template_zhk6f5l', FormRef.current,{
        publicKey:'wCkrwm7pqjeX4KQyB',
        // process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      })
      .then(()=>{
        console.log('success')
      })
      .catch((err)=>{
        console.log('failed', err)
      })
  }

    // const ContactUs = () => {
    //     const form = useRef(); 
      
        // const sendEmail = (e) => {
        //   e.preventDefault();
      
        //   emailjs
        //     .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        //       publicKey: 'YOUR_PUBLIC_KEY',
        //     })
        //     .then(
        //       () => {
        //         console.log('SUCCESS!');
        //       },
        //       (error) => {
        //         console.log('FAILED...', error.text);
        //       },
        //     );
        // };
      

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
                />
                <input 
                    name='user_email'
                    type='email' 
                    className='email-field' 
                    placeholder='Your email address.'
                />
                <textarea
                    name='message'
                    rows="15"
                    cols="3"
                />
                <div className="button-container">
                    <input type='submit'/>
                    <input type='reset'/>  
                </div>
              {/* <legend>yor details</legend> */}
            </form>
        </motion.div>
    </div>
  )
}

export default Contact