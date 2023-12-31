import React from 'react'
import "./style.css"

import vk from "../../img/icons/vk.svg"
import twitter from "../../img/icons/twitter.svg"
import instagram from "../../img/icons/instagram.svg"
import linkedIn from "../../img/icons/linkedIn.svg"
import gitHub from "../..//img/icons/gitHub.svg"


export default function Footer() {
    return (
        
            <footer className="footer">
                <div className="container">
                    <div className="footer__wrapper">
                        <ul className="social">
                            <li className="social__item"><a href="#!"><img src={vk} alt="Link" /></a></li>
                            <li className="social__item"><a href="https://instagram.com/hht_di?igshid=NGVhN2U2NjQ0Yg=="><img src={instagram} alt="Link" /></a></li>
                            <li className="social__item"><a href="#!"><img src={twitter} alt="Link" /></a></li>
                            <li className="social__item"><a href="#!"><img src={gitHub} alt="Link" /></a></li>
                            <li className="social__item"><a href="#!"><img src={linkedIn} alt="Link" /></a></li>
                        </ul>
                        <div className="copyright">
                            <p>© 2023 Mc2002@mail.com</p>
                        </div>
                    </div>
                </div>
            </footer>
        
    )
}
