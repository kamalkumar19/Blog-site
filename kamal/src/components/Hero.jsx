import React from 'react'
import girl from '../image/img.jpg'
import '../styles/Hero.css';
const Hero=()=> {
    return ( 
<div className="container" style={{ paddingBottom:'3rem'}} >
    <div className='row-hero'>
        <div className="col-hero">
            <h1> Kamal Kumar </h1> 
            <h2> Web Developer</h2> 
            <p>I am specialised in Full Stack Developement </p> 
            <div style={{display:'flex'}
        }>

            
           <button className="btn btn-primary" >Contact me</button> 
           <button className="btn btn-secondary" style={{ marginLeft:'1rem'}}>About me</button>
           </div>
             </div>
             
             <div className='col-hero'> 
             <img src={girl} alt="girl" className="img-hero"/>
              </div>
         </div> 

</div>

    )
} 
export default Hero 