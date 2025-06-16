import React, { useState } from 'react'
import './about.css'
import Me from '../../assets/vinabout.jpg'
import {BiTime} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import {AiFillFolderOpen} from 'react-icons/ai'
import PortfolioModal from '../portfolio/PortfolioModal'

const About = () => {
    const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

    return(
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About Me.</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Me} alt="About-img" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <BiTime className='about__icon'/>
                            <h5>Experience</h5>
                            <small>4+ years</small>
                        </article>
                        <article className='about__card'>
                            <AiFillFolderOpen className='about__icon'/>
                            <h5>Github</h5>
                            <small>
                                <a href="https://github.com/vincelyon" target='blank'>Click Me</a>
                            </small>
                        </article>
                        <article className='about__card' onClick={() => setIsPortfolioOpen(true)}>
                            <FiUsers className='about__icon'/>
                            <h5>Projects</h5>
                            <small>View Projects</small>
                        </article>
                    </div>

                    <p>I'm a Full-Stack Developer driven by a single mission: transforming complex challenges into elegant, user-centric digital experiences. With a robust toolkit featuring Java, JavaScript, Python, React, java and Next.js, I don't just write code—I architect robust and scalable solutions. My philosophy is built on the foundation of clean, maintainable code, because I believe the best products are not only powerful on the outside but beautifully crafted on the inside. I thrive in collaborative settings where collective creativity turns ambitious ideas into reality. My curiosity doesn't stop when the workday ends; I'm constantly exploring new technologies, contributing to open-source, and connecting with the vibrant tech community.</p>

                    <a href="#contact" className="btn btn-primary">Lets Talk</a>
                </div>
            </div>

            <PortfolioModal 
                isOpen={isPortfolioOpen} 
                onClose={() => setIsPortfolioOpen(false)} 
            />
        </section>
    )
}

export default About