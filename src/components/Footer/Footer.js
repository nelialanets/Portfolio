import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './index.css'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='link-container'>
  <ul className='icons'>
    <li>
      <a 
      target='_blank' 
      rel='noreferrer' 
      href='https://www.linkedin.com/in/nelia-lanets-code/'>
    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
    </a>
    </li>
    <li>
    <a target='_blank' 
      rel='noreferrer' 
      href='https://github.com/nelialanets'>
    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
    </a>
    </li>
    <li>
    <a target='_blank' 
      rel='noreferrer' 
      href='nelialanets#3044'>
    <FontAwesomeIcon icon={faDiscord} color='#4d4d4e'/>
     </a>
    </li>
  </ul>
       </div>
    </div>
  )
}

export default Footer;