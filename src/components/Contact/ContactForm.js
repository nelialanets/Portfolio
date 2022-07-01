import React, { useRef } from "react";
import { useState , useEffect} from "react";
import './contact.scss'
import emailjs from '@emailjs/browser';
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters"

import { MapContainer, TileLayer, useMap, Popup,Marker } from 'react-leaflet'

export default function ContactForm(){

    // const [letterClass, setLetterClass]=useEffect('text-animate')
    // const contactArr=["C","o", "n", "t", "a", "c", "t", " ", "m", "e"]


    
    const position = [51.505, -0.09]
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
        
        <div className="containerContact">
    
        <div className="contact-page">

            <div className="text-contact">
            <h1 className="contact-me-h1">Contact Me </h1>
            {/* <AnimatedLetters 
            letterClass ={letterClass}
            strArray={[contactArr]}
            idx={15} /> */}
            <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                    <ul>
                        <li className="half">
                            <input type="text"
                             name="user_name"
                             required />
                        </li> 
                         <li className="half">
                            <input type="email"
                             name="user_email" 
                             required
                              />
                         </li> 
                        <li >
                           <textarea
                           
                           name="message"
                           placeholder="Enter your message"
                           required
                           />  
                         </li> 
                         <li>
                            <input type="submit" className="flat-btn2" value='Send' />
                         </li> 
                     </ul>
                </form>
           </div>
         </div>
         {/* <div className="info-map">
            NeliaDev

            <br />
            Palo Alto, CA
            <br />
            <span>nelialanets@gmail.com</span>
         </div>
         <div className="map-wrap">
         <MapContainer center={[44.96366, 19.61045]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
              <Popup>Sloba lives here, come over for a cup of coffee</Popup>
            </Marker>
          </MapContainer> 
         </div>
     </div>
      */}
     </div>
     </div>
    )
}