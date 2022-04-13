import React, {useEffect, useState} from 'react'
import './stiky.css'

function Stiky() {
    const nav = document.querySelector('.nav')
    const [down , setDown] = useState(false)
    function logit(){
        if(window.pageYOffset > 100){
            setDown(true)
           
        }
        else{
            setDown(false)
        }
    }
   

    useEffect(()=>{
        function watchScroll(){
            window.addEventListener('scroll', logit)
        }
        watchScroll();

      
    },[]);
 
  return (
    <>
        <nav className={`${down ? "active" : '' } nav `}>
            <div className="container">
                <h1 className="logo">
                    <a href="./Stiky.jsx">My Website</a>
                </h1>
                <ul>
                    <li><a href="#" className='current'>Home</a></li>
                    <li><a href="#"></a>About</li>
                    <li><a href="#"></a>Services</li>
                    <li><a href="#"></a>Contact</li>
                </ul>
            </div>
        </nav>
        <div className="hero">
            <div className="container">
                <h1>Welcome to my Website</h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, eum.</p>

            </div>
        </div>
        <section className="container content">
            <h2>Content one</h2>   
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque doloremque exercitationem debitis ducimus numquam a quod illo repudiandae quidem, nostrum dolore reprehenderit illum nobis maiores, beatae aliquam animi necessitatibus facilis.</p> 
            <h2>content tw0</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem voluptatum molestiae eaque illo aliquam, illum neque dolor, doloremque, voluptate voluptatem recusandae culpa accusamus exercitationem! Nihil quis perferendis officia? Optio, iure.</p>
        </section>
    </>
  )
}

export default Stiky