import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import './index.scss'
function Resume() {
  return (
    <>
    <nav >
    <div className="logo">
     <Link className="link1 "to='/'>NeliaDev</Link>
     </div>
     <div id="resume2" className='container-resume'>  
   <a href =" " ><div class="arrow"> 
  <div class="arrow-top"></div>
  <div class="arrow-bottom"></div>
</div></a>
</div>
     </nav>
    <div id="resume2" className='container-resume'>      
 <body>
  <div className='main-container'>  

  <header className='resume-header'>
        <h1 id='h1tag'>Nelia's Resume</h1>
        <p>Date Updated: 6/1/2021</p>
        <p>Download a pdf copy <a href='https://drive.google.com/drive/folders/1pLAH-8kgqMksJ2N_FSyo5lxmGzO9k8Tb'>here: </a> </p>
        </header>
<hr />
<p>TECHNICAL SKILLS & QUALIFICATIONS</p>
<ul className='resume-ul'>
 <li>Languages: HTML| CSS| JavaScript|  Python  </li>
 <li>Libraries and Frameworks: React.js| Node.js |Express.js| EJS| Axios| Bcrypt| Passport</li>
 <li>Databases: MongoDB, PostgreSQL, Firebase</li>
 <li>Management & Deployment: Git, GitHub, Command Line</li>
 <li>Methodologies: Object-Oriented Programming, User Stories, Wireframes</li>
</ul>

<p>SOFTWARE DEVELOPMENT PROJECT </p>
<p>Crypto-Hasher |Group Project	 
  <br/>Full Stack Developer| GH: nelialanets/crypto-hasher  --5/3/2021</p>
<ul className='resume-ul'>
<li>This full stack application provides current cryptocurrency market data, latest news articles, and features the ability for users to track different cryptocurrencies via a customizable “watchlist”</li>
<li>Created a scalable full-stack application utilizing React.js, Firebase, Material UI, and various packages via NPM to develop and design a dynamic and responsive application</li>
<li>Implemented RESTful API’s using Axios, to render the latest cryptocurrency market and news data via CoinGecko and the Crypto News-API</li>
<li>Deepened understanding of React.js, specifically Contex custom hooks, while learning new back-end and deployment technologies through Firebase by providing a tool for users to learn and track current cryptocurrency trends</li>
</ul>

<p>CARZing |Personal Project	
<br/>
Full Stack Developer| GH: nelialanets/car_app   -- 4/20/2022 </p>
<ul className='resume-ul'>
<li>Full stack simple app designed for people who would like to post their personal vehicles for rent</li>
<li>Developed a fullstack car rental application using Django-Python-PostgreSQL framework to  create, post, update, and remove the users posting</li>
<li>Implemented Django built in Auth feature to create superuser  authentication to ensure that only authorized users can perform CRUD functionality on their posts </li>
<li>Enhanced understanding of Django-Python-PostgreSQL framework by creating a simple app that allows users to post their vehicle for rent and search for it by the post name</li>							       
</ul>

<p>Rendevous | Team Project
  	<br/> 							     	            	         
Full Stack Developer| Github:Full Stack Developer | GH: predatorr10/rendevous -- 3/1/2022 </p>
<ul className='resume-ul'>
<li>Full stack social media application focused on content sharing aimed to cater to software developers as users</li>
<li>Completed backend groundwork in MERN stack that sends/receives data through feeding into renders using React.js</li>
<li>Created a platform holding a unique vision that can be scaled in the future by developers for developers</li>
</ul>


<p> TravelSwap App|Team Project	<br />		         			                   
Full Stack Developer| GitHub:nelialanets/TravelSwap   --   1/22/2022 	</p>	  
<ul className='resume-ul'>						                  
<li>The travel app that allows users to swap places with people around the world via posting	        	  	    </li>
<li>Co-developed the application using application using Node.js, Express, MongoDB (NEM stack), Materialize, and created RESTful API routes to call Node.js, Express, MongoDB to back handling all (CRUD) functionality</li>
<li>Used EJS templating language to render objects from MongoDB into the browser as HTML templates</li>
<li>Provided a simple alternative to the housing rental applications</li>
</ul>

<p>Weather App | Personal Project  November -- 23/2021 <br />
Full Stack Developer| Github: nelialanets/First-app-API  </p>
<ul className='resume-ul'>
<li>Used OpenWeather API to fetch API database to create a simple weather app </li>
<li>Created the front-end of the application using HTML, CSS and vanilla JavaScript methods and functions to handle all data received from API</li>
<li>Strengthened skills in front end web development with DOM, vanilla JavaScript, and establishing API connectivity and calls</li>
</ul>
<p>OTHER PROFESSIONAL EXPERIENCE</p>

<p>Center Manager</p>
<p>Center for Special and Textual Analysis(CESTA),  Stanford University, Stanford, CA 2/14/2022 -Present </p>  
<ul className='resume-ul'>         
<li>Sucessully oversee and coordinate Undergraduate Research Internship Program by managing internship recruitment and application processes, collaborate with a faculty from across the campus on the internship matching process, manage internship funding awards and student hiring process; also
<li>Collaborate with the CESTA’s  and the School of Humanities & Sciences (H&S) web development team on the center’s website transition process to the Drupal 9 framework by attending weekly meetings, planning sprints, updating website content, styling components and page layouts as well as communicate complete tasks  related to the website using Basecamp projects management platform</li>
<li>Assist faculty with website development and enhancement by creating  static pages using HTML, CSS and JavaScript languages</li>
</li>
</ul> 

<p>Student Services Manager  2018-2022 </p> 										       
<h4>Stanford Global Studies, Stanford University, Stanford, CA 	</h4>                        
<h3>Academic Advising/Teaching</h3>
<h3>Course Facilitator</h3>
  <h4>Stanford Design Lab, Stanford University, Stanford, CA Fall 2019-2021	</h4>				             

<h3>Academic Advising </h3>
<h4>Pasadena City College, Pasadena, CA  2/10 2017-12/30 /2018</h4>
 			                                      
<p>EDUCATION:</p>

<h4>Full Stack Software Engineering Immersive (FLEX) 10/26/2021-5/1/2022</h4>
General Assembly
24-week full stack web development immersive program covering modern, in-demand 		    
programming technologies and fundamental Computer Science knowledge

<h4 class='education-degree'>Master of Science in Educational Counseling	 12/15/2017		
University of La Verne, La Verne, CA</h4>
  

<h4 class='education-degree'>Masters of Art in International Economics  --- 06/30/2013</h4>
<h4>Kharkov State University of Food Technology and Trade, Kharkiv, Ukraine </h4>		 	       
</div> 
        </body>
            </div>
            <Footer />
            </>
  )
  
}

export default Resume