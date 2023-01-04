import React from 'react'
import '../styles/Topics.css';
import {CiDatabase} from 'react-icons/ci'
import {IoAccessibilityOutline} from 'react-icons/io5'
import {TfiRocket} from 'react-icons/tfi';
const Topics=()=>{
    return (
        <div> 
            <div > 
            <h1>Topics</h1>
            <div className='topic-card'>
            <div className='topic-icon'> <CiDatabase size={23}/></div>
             <div className='topic-content'>Database</div>
                 </div> 


            <div className='topic-card'>
            <div className='topic-icon'><IoAccessibilityOutline size={23}/> </div>
            <div className='topic-content'>Accessibility</div>
            </div>
             
            <div className='topic-card'>
            <div className='topic-icon'> <TfiRocket size={23}/></div>
            <div className='topic-content'>Web Performance</div>
            </div> 
            </div>
        </div>
    )
} 

export default Topics