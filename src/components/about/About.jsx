import React from 'react'
import './about.css'
import Me from '../../assets/c.jpeg'
import {BiTime} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import {AiFillFolderOpen} from 'react-icons/ai'

const About = () => {
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
                        <article className='about__card'>
                            <FiUsers className='about__icon'/>
                            <h5>Projects</h5>
                            <small>
                                <a href="#"target='blank'>Click Me</a>
                            </small>
                        </article>
                    </div>

                    <p>I'm a dedicated software engineer(full stack developer) with expertise in JavaScript, Python, React, and Next.js. I excel in crafting scalable solutions and value clean, quality code. Collaborative environments drive me, enabling me to deliver exceptional results. Beyond work, I engage in tech meetups, contribute to open-source projects, and pursue continuous learning.</p>

                    <a href="#contact" className="btn btn-primary">Contact Me</a>
                </div>
            </div>
        </section>
    )
}

export default About