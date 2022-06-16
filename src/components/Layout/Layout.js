import './index.css'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import HomeComponent from '../Home/HomeComponent'
import Cube from '../CubeAnimation/Cube'
import ContactForm from '../Contact/ContactForm'
function Layout (){
    return(
        <>
        <div className='App'>
    
        <div className="page">
          
            <span className='tags top-tags'> &lt;html&gt;
            <br />
            <span > &lt;body&gt;</span>
            </span>
        <HomeComponent />
         <span className="tags bottom-tags">
    &lt;/body&gt;
    <br />
    <span className='bottom-tag-html'>&lt;/html&gt;</span>
    </span>
    < Cube />
        </div>

        </div>

        </>
        
    )
}

export default  Layout
 