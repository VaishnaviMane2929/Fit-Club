import React from 'react'
import '../Join/Join.css'
import emailjs from '..'

const Join = () => {
    const from = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_5t60gkx', 'template_b6p6539', form.current, {
            publicKey: '7SR6WevlOwVr5s5yY',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <div className='Join' id='join-us'>
        <div className='left-j'>
            <hr />
            <div>
            <span className='stroke-text'>READY TO</span>
            <span>LEVAL UP</span>
            </div>
            <div>
            <span>YOUR BODY</span>
            <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className='right-j'>
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='Enter your Email address' />
                <button className='btn btn-j'>JOin Now</button>


            </form>
        </div>

    </div>
  )
}

export default Join