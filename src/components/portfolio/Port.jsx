import React from 'react'
import './port.css'
import blac from '../../assets/blac.png'
import Gim from '../../assets/Gimtech.png'
import mokorro from '../../assets/mokorro.png'
import touch from '../../assets/Touchofclass.png'

const Port = () => {
    return(
        <section id='portfolio'>
            <h5>My works</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image" style= {{ backgroundImage: `url(${blac})` }}>
                        <h3>Blac Official</h3>
                    </div>
                    <div className="portfolio__item-details">
                        <p className="portfolio__item-description">A clothing website showcasing the latest fashion trends.</p>
                        <div className="portfolio__item-buttons">
                            <a href="https://github.com/vincelyon/Blac-Website" rel="noreferrer" className='btn' target="_blank">Github</a>
                            <a href="https://blacofficial.com/" rel="noreferrer" className='btn btn-primary' target="_blank">Live Demo</a>
                        </div>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image" style={{ backgroundImage: `url(${Gim})` }}>
                        <h3>GIMTECH ENTERPRISES</h3>
                    </div>
                    <div className="portfolio__item-details">
                        <p className="portfolio__item-description">A comprehensive platform for technology solutions and services.</p>
                        <div className="portfolio__item-buttons">
                            <a href="https://github.com/vincelyon/GIMTECH" rel="noreferrer" className='btn' target="_blank">Github</a>
                            <a href="https://gimtech.vercel.app/" rel="noreferrer" className='btn btn-primary' target="_blank">Live Demo</a>
                        </div>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image" style={{ backgroundImage: `url(${mokorro})` }}>
                        <h3>MOKORRO HOTEL</h3>
                    </div>
                    <div className="portfolio__item-details">
                        <p className="portfolio__item-description">A Hotel website showcasing the hospitality of Mokorro hotel</p>
                        <div className="portfolio__item-buttons">
                            <a href="https://www.mokorrohotel.com/" rel="noreferrer" className='btn btn-primary' target="_blank">Live Demo</a>
                        </div>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image" style={{ backgroundImage: `url(${touch})` }}>
                        <h3>TOUCH OF CLASS</h3>
                    </div>
                    <div className="portfolio__item-details">
                        <p className="portfolio__item-description">A Massage website showcasing its pricing and services.</p>
                        <div className="portfolio__item-buttons">
                            <a href="https://github.com/vincelyon/Touchofclass" rel="noreferrer" className='btn' target="_blank">Github</a>
                            <a href="https://www.touchofclassmasssagecenter.com/" rel="noreferrer" className='btn btn-primary' target="_blank">Live Demo</a>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Port