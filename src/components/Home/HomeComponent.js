import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import'./index.css'
// import Cube from "../CubeAnimation/Cube";
// import ContactForm from "../ContactForm/ContactForm";

const HomeComponent=()=>{

    const[letterClass, setLetterClass]=useState('text-animate')
    const nameArray =['N','e','l','i','a', '']
    const jobArray=['W','e','b', '', 'd','e','v','e','l','o','p','e','r']

//     // useEffect(()=>{
//     //     return setTimeout(()=>{
//     //         setLetterClass('text-animate')
//     //     },4000)
//     // },[])
//    useEffect(()=>{
//        setLetterClass()
//    })
    return(
        <>
       
        <div className="container home-page">
            
            <div className="text-zone">
                <h1>
                    <span className={letterClass} >H</span>
                    <span className={`${letterClass} _12`}>i,</span>

                      <br /> 
                      <span className={`${letterClass} _13`}>I'</span>
                      <span className={`${letterClass} _14`}>m</span>
                      <AnimatedLetters letterClass={letterClass} 
                    strArray={nameArray}
                    idx={15}
                    />
                    <br /> 
                    <AnimatedLetters letterClass={letterClass} 
                    strArray={jobArray}
                    idx={22} />
                </h1>
                <h2>
                    Fontend Developer/ JS and React Expert
                </h2>
                <Link  to='/contact' className="flat-btn">
                Contact Me
                </Link>
            
            </div>
           
        </div>
        </>
    )
}
export default HomeComponent

