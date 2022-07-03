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
                        <h3> QUALIFICATIONS: </h3>
                          LANGUAGES: JavaScript, Python, HTML5, CSS3
                          FRAMEWORK / LIBRARIES: Express, Django, React, Gatsby, Bootstrap, Materialize
                          DATABASES/BACKENDS: GraphQL, PostgreSQL, MongoDB, Firebase
                          METHODOLOGIES: MVC, RESTful Architecture
                          TOOLS: Git, Visual Studio Code, Postman
                          Let's make something special.

                          <h3>EDUCATION:</h3>

                      <h3>Outside of CODE:</h3> I love to grab my surf board and take a quick surf trip to Hawaii or Costa Rica or other parts of the world. 
                      Go for a free dive or hike some where in the jangle.
                      Next Surf trip: Bali (when? When I save up enough of money saved up for a trip :))
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
