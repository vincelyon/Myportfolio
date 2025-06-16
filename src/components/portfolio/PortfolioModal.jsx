import React from 'react';
import './port.css';
import blac from '../../assets/blac.png';
import Gim from '../../assets/Gimtech.png';
import mokorro from '../../assets/mokorro.png';
import touch from '../../assets/Touchofclass.png';
import astorix from '../../assets/astrorix.png';
import { IoClose } from 'react-icons/io5';

const data = [
//   {
//     id: 1,
//     image: blac,
//     title: 'Blac Official',
//     description: 'A responsive e-commerce website showcasing the latest fashion trends, built with a clean and modern UI.',
//     github: 'https://github.com/vincelyon/Blac-Website',
//     demo: 'https://blacofficial.com/'
//   },
  {
    id: 2,
    image: Gim,
    title: 'GIMTECH ENTERPRISES',
    description: 'A comprehensive platform for technology solutions and services, designed to be professional and informative.',
    // github: 'https://github.com/vincelyon/GIMTECH',
    demo: 'https://gimtech.vercel.app/'
  },
  {
    id: 3,
    image: mokorro,
    title: 'MOKORRO HOTEL',
    description: 'An elegant hotel website showcasing the hospitality and amenities of Mokorro Hotel, focusing on user experience.',
    github: null,
    demo: 'https://www.mokorrohotel.com/'
  },
  {
    id: 4,
    image: touch,
    title: 'TOUCH OF CLASS',
    description: 'A serene and calming website for a massage center, presenting services, pricing, and booking information clearly.',
    // github: 'https://github.com/vincelyon/Touchofclass',
    demo: 'https://www.touchofclassmassagecenter.com/'
  },
  {
    id: 5,
    image: astorix,
    title: 'ASTRORIX MINERALS',
    description: 'A professional mining company website showcasing mineral resources, operations, and sustainable mining practices.',
    // github: 'https://github.com/vincelyon/astorix-minerals',
    demo: 'https://astrorixgroup.co.zm/'
  }
];

const PortfolioModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="portfolio-modal-overlay" onClick={onClose}>
      <div className="portfolio-modal-content" onClick={e => e.stopPropagation()}>
        <button className="portfolio-modal-close" onClick={onClose}>
          <IoClose />
        </button>
        <h2>My Projects</h2>
        <div className="portfolio-modal-grid">
          {data.map(({ id, image, title, description, github, demo }) => (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={`${title} Project Screenshot`} />
              </div>
              <div className="portfolio__item-content">
                <h3>{title}</h3>
                <p className="portfolio__item-description">{description}</p>
              </div>
              <div className="portfolio__item-cta">
                {github && (
                  <a href={github} className='btn' target="_blank" rel="noreferrer">
                    Github
                  </a>
                )}
                <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal; 