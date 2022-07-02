import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import'./index.scss'
import ContactForm from "../Contact/ContactForm";
import Cube from "../CubeAnimation/Cube";
import Layout from "../Layout/Layout"
import PortfolioItems from "../../components/Portfolio/PortfolioItems"
import ScrollDown from "../Scroll/ScrollDown"
import Footer from "../Footer/Footer"
const HomeComponent=()=>{

    const[letterClass, setLetterClass]=useState('text-animate')
    const intro =["H", "i"," ", "my", " ", "n","a","m","e", " ", "i","s", " ", 'N','e','l','i','a'," ," ]
    const nameArray =[" ",]
    const jobArray=['w','e','b', '', 'd','e','v','e','l','o','p','e','r']

    useEffect(()=>{
        return ()=> setTimeout(()=>{
            setLetterClass("text-animate-hover")
        },4000)
    }, [])
    return(
        <>
        <Layout />
       <Cube />
        <div className="container home-page">
            
            <div className="text-zone">
                <h1>
                   <AnimatedLetters letterClass={letterClass} 
                   strArray={intro}
                   idx={13}
                   />
                   
                      <AnimatedLetters letterClass={letterClass} 
                    strArray={nameArray}
                    idx={15}
                    />
                    <br /> 
                    <AnimatedLetters letterClass={letterClass} 
                    strArray={jobArray}
                    idx={18} />
                </h1>
                <h2>
                I’m a  full stack software developer with a focuse on fronend  based in Bay Area.
                </h2>
                <a href='#contact' className="flat-btn">
                Contact Me
                </a>
            </div>
            <ScrollDown />
            </div>
  <PortfolioItems />
        <ContactForm />
        <Footer />
        </>
    )
}
export default HomeComponent

