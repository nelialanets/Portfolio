import React from 'react'
import './index.scss'
import Data from "../../components/data/portfolio.json"

export default function PortfolioItems() {

  const renderPortfolio =(portfolio)=>{
    return(
      <div className='images-container'> 
      {
        portfolio.map((port,idx)=>{
          return(
            <div className="image-box" key={idx}>
              <img 
              src={port.cover}
              className="portfolio-image" />
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
    <div className='container portfolio-page'>
      
      <h1 className ='page-title'>Projects </h1>

      <div> {renderPortfolio(Data.portfolio)} </div>
    </div>
  )
}
