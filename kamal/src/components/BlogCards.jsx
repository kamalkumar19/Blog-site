import React from 'react'
import blog from '../image/blog-1.png'
import '../styles/Blogcards.css' 

const BlogCards=(props)=>{  
    return (   
       
            
    <div   >  
       <div>
       
            <div className='cards'>
        <div className='left'> 
         <img src={blog} alt="blog"/>

        </div>  
        <div className='right'> <h1>{props.heading}</h1> 
        <p>{props.content}</p> 
       
        </div> 

        </div> 
        </div> 
        </div>
    )
} 
export default BlogCards