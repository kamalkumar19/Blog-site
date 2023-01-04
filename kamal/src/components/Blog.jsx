import React from 'react'
import BlogCards from './BlogCards'
import NewsLetter from './NewsLetter'
import Tags from './Tags'
import Talk from './Talk'
import Topics from './Topics'
import '../styles/Blog.css'
const Blog=()=>{
return(
    <div> 


<div style={{ backgroundColor: '#F7F7F7' ,paddingBottom:"5rem"}} className=''> 
 <div className='container section'>
    <div className='blogs' > 
      <h1  style={{ paddingTop:'3rem',marginBottom:'2rem' }}> Latest Blogs!..</h1>
    <BlogCards heading="Build a Modern Blog with Gatsby and MongoDB" 
    content="The web, like many other industries, works in a very cyclical way. Trends are constantly born and reborn. One of my favorite trends that's making a huge come back is static websites and focus on website performance"
    
    />


    <BlogCards heading="A new version of Oracle Database" 
    content="In his solution keynote, Andy Mendelsohn announced that the next Oracle Database version would be 23c, which is also planned to be the next long-term support (LTS) release. There will be over 300 new features in this new version of the Oracle Database, which will innovate all aspects of modern-day data management." 
   />
    <BlogCards  heading="Ultimate Ways to Secure Your Data From HackingB" 
    content="Cybersecurity means protecting systems, networks, and programs from digital attacks as they usually aim at accessing, changing, or destroying sensitive information; extorting money from users; or interrupting normal business processes" />
    <BlogCards heading="The Web of Things" 
    content="Webofthings.org is a community of developers, researchers, and designers exploring the future of the physical Web. The Web of Things aims to build the Internet of Things in a truly open, flexible, and scalable way, using the Web as its application layer. The site features blog posts, events, learning resources, conference and standard activities." />
    <button className="btn btn-primary" style={{ marginTop:'1rem',marginLeft:'13rem'}}>Load more</button>
    </div> 

    <div className='aside'>
<Topics/>
<Tags/>
<Talk/>
<NewsLetter/>

    </div>
    </div>

    </div>
    </div>
)

} 
export default Blog