import React from 'react'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

const Headersocials = () => {
    return(
        <div className="Header__Socials">
            <a href="https://facebook.com/vincent.lyondo.1" target="_blank" rel="noreferrer"><AiFillFacebook /></a>
            <a href="https://twitter.com/lyonvin?t=zcnCnFo0IqyDmBjICBUC5g&s=09" target="_blank" rel="noreferrer"><AiFillTwitterCircle /></a>
            <a href="https://www.instagram.com/vincelyon12//" target="_blank" rel="noreferrer"><AiFillInstagram /></a>
        </div>
    )
}

export default Headersocials