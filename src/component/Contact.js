import React from 'react'
import { useState, useRef } from 'react';

const Contact = ({forwardedRef}) => {
    const emailRef = useRef(null);
    const phoneRef = useRef(null)
    const [emailIsClicked, setEmailIsClicked] = useState(false)
    const [phoneIsClicked, setPhoneIsClicked] = useState(false)
    function copyEmailToClipboard(ref) {
        console.log(ref.current.innerText);
        navigator.clipboard.writeText(ref.current.innerText)
        setEmailIsClicked(true)
        setPhoneIsClicked(false)
  };
  function copyPhoneToClipboard(ref) {
    console.log(ref.current.innerText);
    navigator.clipboard.writeText(ref.current.innerText)
    setEmailIsClicked(false)
    setPhoneIsClicked(true)
};
    return (
        <div ref={forwardedRef} className="contact-container">
            <h1>Contact</h1>
            <p>Email:  
                <span ref={emailRef}><br/>anthonychan1211@gmail.com</span>
                <button className="copy-button" onClick={()=>{copyEmailToClipboard(emailRef)}}>{emailIsClicked? 'Copied' : 'Copy'}</button>
                <br/>
                Facebook: 
                <br/>
                <a href="https://www.facebook.com/anthonychan1211" target="_blank">https://www.facebook.com/anthonychan1211</a>
                <br/>
                Instagram: 
                <br/>
                <a href="https://www.instagram.com/anthonycly/" target="_blank">https://www.instagram.com/anthonycly/</a>
                
                Phone:
                
                    <span ref={phoneRef}> +852 9219 1211</span>
                    <button className="copy-button" onClick={()=>{copyPhoneToClipboard(phoneRef)}}>{phoneIsClicked? 'Copied' : 'Copy'}</button>
            </p>
        </div>
    )
}

export default Contact
