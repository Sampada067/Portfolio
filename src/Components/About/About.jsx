import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mee from '../../assets/mee.jpg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>
            About me
        </h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={mee} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am an experienced developer</p>
                    
                <p>My passion for frontend development is good</p>
                   
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>Next js</p><hr style={{width:"50%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>Years of experience</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>90+</h1>
            <p>Projects completed</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>15+</h1>
            <p>Happy clients</p>
        </div>
      </div>
    </div>
  )
}

export default About
