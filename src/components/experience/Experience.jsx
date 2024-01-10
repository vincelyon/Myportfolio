import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Exp = () => {
    return(
        <section id='experience'>
            <h5>My Skills</h5>
            <h2>My Experience</h2>

            <div className="container container__experience">
                <div className="experience__frontend">
                    <h3>Fullstack Development</h3>

                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icons' />
                            <div>
                            <h4>HTML</h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icons'/>
                            <div>
                            <h4>CSS</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icons'/>
                            <div>
                            <h4>JavaScript</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icons'/>
                            <div>
                            <h4>Python</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icons'/>
                           <div>
                           <h4>Django</h4>
                            <small className='text-light'>Experienced</small>
                           </div>
                        </article>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icons'/>
                           <div>
                           <h4>React</h4>
                            <small className='text-light'>Intermediate</small>
                           </div>
                        </article>
                    </div>
                </div>
                <div className="experience__others">
                    <h3>Other skills</h3>
                    <div className="experience__content">
                    <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icons'/>
                            <div>
                            <h4>Flutter</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icons'/>
                            <div>
                            <h5>Machine Learning</h5>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Exp