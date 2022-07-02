import './index.css'
import { Outlet } from 'react-router-dom'
function Layout (){
    return(
        <>
        <div className='App'>
    
        <div className="page">
            <span className='tags top-tags'> &lt;html&gt;
            <br />
            <span className='bottom-tag-body' > &lt;body&gt;</span>
            </span>
            < Outlet />
         {/* <span className="tags bottom-tags">
    &lt;/body&gt;
    <br />
    <span className='bottom-tag-html'>&lt;/html&gt;</span>
    </span> */}
    
        </div>

        </div>

        </>
        
    )
}

export default  Layout
 