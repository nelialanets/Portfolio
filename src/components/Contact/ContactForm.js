import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import './contact.scss'
import emailjs from '@emailjs/browser';


export default function ContactForm(){

    const[letterClass, setLetterClass]=useState('text-animate')
    const refForm=useRef()

    const sendEmail=(e)=>{
        e.preventDefault()

        emailjs
        .sendForm(
            'gmail',
            'template_toxouiq',//template id
            refForm.current,
            'service_ks7rxm4'
        )
        .then(()=>{
            alert ('Email was successfully sent')
            window.location.reload(false)
        },
        ()=>{
            alert ('Email was not successfully sent please try again')
        }
        )
    }

    // useEffect(()=>{
    //     return setTimeout(() => {
    //         setLetterClass('text-aimate-hover')
    //     }, 4000)
    // },[])

    return(
        
        <div className="containerContact">
    
        <div className="contact-page">

            <div className="text-zone">
            <h1 className="contact-me-h1">Contact Me </h1>
            <div className="contact-form">
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className="half">
                            <input type="text"
                             name="name"
                              placeholder="Enter your name" 
                              required />
                        </li>
                        <li className="half">
                            <input type="email"
                             name="email" 
                             placeholder="Enter your email " 
                             required />
                        </li>
                        <li >
                           <textarea
                           placeholder="Enter your message"
                           name="message"
                           required
                           />  
                        </li>
                        <li>
                            <input type="submit" className="flat-btn2" value='send' />
                        </li>
                    </ul>
                </form>
               </div>
            </div>
        </div>

        </div>
    )
}