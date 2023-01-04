import React from 'react'
import '../styles/Talk.css';
import {TbBrandDiscord} from 'react-icons/tb'
import {BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'

const Talk=()=>{
    return (
        <div>
            <h1>Let's Talk</h1>
            <div  style={{ paddingTop:'3rem',paddingLeft:'1rem',backgroundColor:'white',width:'15rem',height:'10rem'}}>
          <p> 
            Do you want to learn about how I can help your company overcome problems? 
            Lets us have a conversation
          </p>
         <div style={{display:'flex',paddingLeft:'1rem' }}>
            <div style={{ padding:'1rem',borderRadius:'100%'}}> <TbBrandDiscord size={23} /></div>
            <div style={{ padding:'1rem',borderRadius:'100%'}}><BsInstagram  size={23} /> </div> 
            <div style={{ padding:'1rem',borderRadius:'100%'}}><FiTwitter  size={23} /></div>
             </div>

            </div>
        </div>
    )
} 

export default Talk