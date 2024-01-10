import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'


const Footer = () => {
    return(
        <footer id='footer'>
            <a href="#" className='footer__logo'>Vincent Lyondo</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">My Experience</a></li>
                {/* <li><a href="#services"></a></li> */}
                <li><a href="#contact">Contact</a></li>
            </ul>

           <div className="footer__socials">
            <a href="https://facebook.com/vincent.lyondo.1"><AiFillFacebook/></a>
            <a href="https://twitter.com/lyonvin?t=zcnCnFo0IqyDmBjICBUC5g&s=09"><AiFillTwitterCircle/></a>
            <a href="https://www.instagram.com/vincelyon12/"><AiFillInstagram/></a>
            <a href="https://www.linkedin.com/in/vincent-lyondo"><AiFillLinkedin/></a>
            <a href="https://github.com/vincelyon"><AiFillGithub/></a>
            </div> 

            <div className="footer__copyright">
                <small>&copy; Vincent Lyondo. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer