import React from 'react'

const NewsLetter=()=>{
    return (
        <div>
            <h1>News Letter</h1>
            <div className='news-card' style={{background:'white',width:'15rem',height:'15rem',paddingTop:'2rem'}}> 
          <div style={{padding:'1rem'}}> 
            <p> Subscribe to our newsletter to be among first to keep up with the latest news</p>
            <input style={{padding:'8px',backgroundColor:'#e1e7e5',border:'none'}} type="text" placeholder='Email Address'/>
            <button style={{size:'10px',marginTop:'10px',marginLeft:'3.5rem'}} className='btn btn-primary'>Subscribe</button>
          </div>
          
            </div>
        </div>
    )
} 
export default NewsLetter