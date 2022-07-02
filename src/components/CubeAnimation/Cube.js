import './index.scss'
import { faReact, faHtml5, faCss3,  faJsSquare, faNodeJs, faPython } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";
import './index.scss'

const  Cube=()=>{
    return(
           <div className="stage-cube-count">
                    <div className="cubespinner">
                        
                        <div className="face1">
                         <FontAwesomeIcon className="iconsStyle" icon={faPython} color='#F06529'/>
                        </div>
                         <div className="face2">
                            <FontAwesomeIcon className="iconsStyle" icon={faHtml5} color='#28A4D9' />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon  className="iconsStyle" icon={faCss3} color='#DD0031' />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon  className="iconsStyle" icon={faReact} color='#5ED4F4' />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon  className="iconsStyle" icon={faJsSquare} color='#EFD810' />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon  className="iconsStyle" icon={faNodeJs} color='#00FF00' />
                        </div> 
                       
                    </div>
            </div>
    )
}

export default Cube