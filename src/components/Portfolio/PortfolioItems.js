import React from 'react'
import './index.scss'
import Data from "../../components/data/portfolio.json"


export default function PortfolioItems() {

  const renderPortfolio =(portfolio)=>{


    return(
    
      <div  id="portfolio"  className='images-container'> 

      {
        portfolio.map((port,idx)=>{
          return(
            <div className="image-box" key={idx}>
              <img 
              src={port.cover}
              className="portfolio-image"
              alt="image1" />
              <div className='content'>
                <p className="title">{port.title}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn"
                onClick={() =>window.open (port.url)}>View</button>
              </div>
           
            </div>

          )
        })
      }
      </div>
    )
  }
  return (
    <>
    
    <div  id='projects2' className='container portfolio-page'>
      <div className="break-line"></div>
       <h1 className ='' id="title3">Projects </h1> 
      <div> {renderPortfolio(Data.portfolio)} </div>
    </div>
    <section id="projects" class="demo">
    <a href="#contact" > <span></span></a>
    </section>
   </>

  )
}
