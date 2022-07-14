import React from 'react'
import './index.scss'

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
                     Nelia is a full-stack developer from Ukraine based in San Francisco, CA.
                       She has a serious passion for front-end development, animations and creating intuitive, dynamic user experiences.<br />
                       <br />
                       Growing up in a small town in Ukraine just outside of Poltava, Nelia enjoyed the long summers working on her family’s farm - but her dreams of a bigger life quickly took hold of her as she left home to study abroad. 
                       <br />
                        She has a passion for learning and self-improvement and currently holds two Master's Degrees in International Economics and Educational Counseling, respectively. 
                        <br />
                        During the pandemic, life was put into perspective and her creative soul yearned to be fulfilled.
                        <br />
                          A close friend introduced her to CSS design, where she was hooked. 
                          <br />
                           She quickly enrolled and completed a boot camp at General Assembly. 
                            Nelia looks to continue her new found passion for design by aiding clients in their creative process for web development.

                        <h3 > QUALIFICATIONS: </h3>
                         <span className= "h3-color"> LANGUAGES:</span> JavaScript, Python, HTML5, CSS3
                           <br />
                           <span className= "h3-color"> FRAMEWORK / LIBRARIES: </span> Express, Django, React, Gatsby,Sass, Materialize
                          <br />
                          <span className= "h3-color"> DATABASES/BACKENDS:</span> PostgreSQL, MongoDB, Firebase
                          <br />
                          <span className= "h3-color">  METHODOLOGIES: </span> MVC, RESTful Architecture
                          <br />
                          <span className= "h3-color"> TOOLS:</span> Git, Visual Studio Code, Postman
                          <br />
                          <br />

                          <h3>Outside of CODE:</h3> She loves to grab her surfboard and catch a wave in Hawaii, Costa Rica, or other tropical parts of the world. 
                           She enjoys free diving in the warm ocean or getting stuck somewhere in the middle of the jungle.

                </p>
                </span>
            <div className="imageAbout">
                <img id="imageAbout" src="./portfolio/nelia.png" alt='profile' />
                 </div>
        </div>
        <section id="about" class="demo">
     <a href="#portfolio"><span></span></a>
    </section>
    </div>
  )
}
