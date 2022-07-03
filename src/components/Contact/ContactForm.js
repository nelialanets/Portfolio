import React, { useRef } from "react";
import './contact.scss'
import emailjs from '@emailjs/browser';

export default function ContactForm(){

    const form=useRef()
    
    const sendEmail=(e)=>{
        e.preventDefault();

        emailjs.sendForm(
            // 'gmail',
            'service_ks7rxm4',
            'template_g3hmq0i',

            form.current,
            '6BsU-Z3YKdfbPQlLK'
        )
        .then(
            (result)=>{
             alert ('Email was successfully sent')
            window.location.reload(false)
            console.log(result.text);
        },
        (error)=>{

            alert ('Email was not successfully sent please try again')
            console.log(error.text)
           
        }
        )
    }


    return(
        
        <div  id ='contact' className="containerContact">
    
        <div className="contact-page">

            <div className="text-contact">
            <h1 className="contact-me-h1">Contact Me </h1>
            
            <div id="first"className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                    <ul>
                        <li className="half">
                            <input type="text"
                             name="user_name"
                             placeholder="Your name"
                             required />
                        </li> 
                         <li className="half">
                            <input type="email"
                             name="user_email" 
                             required
                             placeholder="Your Email:"
                              /> 
                         </li> 
                        <li >
                           <textarea
                           
                           name="message"
                           placeholder="Hey! How are you?"
                           required
                           />  
                         </li> 
                         <li>
                            <input type="submit" className="flat-btn2" value='Send' />
                         </li> 
                     </ul>
                </form>
               <a href='home-page'> <div  class="arrowbtn arrowbtn-up"> </div></a>
           </div>
         </div>
     </div>
     
     </div>
    )
}