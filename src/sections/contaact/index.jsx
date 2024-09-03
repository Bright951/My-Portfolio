import React from 'react'
import './index.scss'

const Contaact = () => {
  return (
    <div className='contaact-screen-container'>
      <div className="write-up-container">
      
      </div>

      <div className="form-container">
        <div className="form-container-2">
          <form>
            <input 
              type="text" 
              name="" 
              id="" 
              placeholder='Your Name e.g John Doe'
            />
            <input 
              type="email" 
              name="" 
              id="" 
              placeholder='Your email e.g YourName@gmail.com'
            />
            <textarea 
              name="" 
              id="" 
              cols="3" 
              rows="15"
              placeholder='Your Message
              Note: Your Message could be in any language,
              but preffered language is English.
              '
            /> 
            <div className="button-container">
              <input type='submit'/>
              <input type='reset'/>  
            </div>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default Contaact