import React from 'react'
import './index.scss'
import ScrollDown from '../Scroll/ScrollDown'
export default function 
About() {
  return (
    <div>

<div class="sky">
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
</div>
        <h1  id='about' className='about-h1'>About</h1>
        <div className='about-container'>
            <span id='text-bio'>
                <p className="text-bio">
                     I'm a full-stack developer for Ukraine based in San Francisco, CA.
                       I have serious passion for front-end development, animations and creating intuitive, dynamic user experiences.
                        <h3 > QUALIFICATIONS: </h3>
                         <span className= "h3-color"> LANGUAGES:</span> JavaScript, Python, HTML5, CSS3
                           <br />
                           <span className= "h3-color"> FRAMEWORK / LIBRARIES: </span> Express, Django, React, Gatsby, Bootstrap, Materialize
                          <br />
                          <span className= "h3-color"> DATABASES/BACKENDS:</span> PostgreSQL, MongoDB, Firebase
                          <br />
                          <span className= "h3-color">  METHODOLOGIES: </span> MVC, RESTful Architecture
                          <br />
                          <span className= "h3-color"> TOOLS:</span> Git, Visual Studio Code, Postman
                          <br />
                          <br />
                          To see more information on my educational backgroud please see my  <a href='/resume'>resume</a>

                      <h3>Outside of CODE:</h3> I love to grab my surf board and take a quick surf trip to Hawaii or Costa Rica or other parts of the world. 
                      Go for a free dive is the warm ocen or get stuck somewhere in the middle of a jangle.
                      Next surf trip: Bali (When? When I save up enough of money saved up for a trip :))
                </p>
                </span>
            <div className="imageAbout">
                <img id="imageAbout" src="./portfolio/nelia.png" alt='profile' />
                 </div>
        </div>
        <ScrollDown />
    </div>
  )
}
