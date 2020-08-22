import React from 'react'
import '../cssFiles/hireme.scss'
import { GoMail } from 'react-icons/go'
import { MdCall } from 'react-icons/md'
import { FaReact } from 'react-icons/fa';
import Footer from './Footer';

function HireMe() {
    return (
        <section className="wrapper-hireme" id="HireMe">
            <h3>Hire Me</h3>
            <div className="text-wrapper">
                <div className="text"> I am currently looking for a ReactJS developer job. I prefer Frontend, but I can work as a Full-Stack developer as well.
                I have experiences with MERN stack, but I can adapt very fast.</div>
                <div className="line-contact"></div>
                <span>Feel free to Contact me</span>
                <div className="contact-cards">

                    <div className="card-mail-phone">
                        <a href="mailto:erik.zabransky@gmail.com"><GoMail size={45} className="iconHireMe" /><span>erik.zabransky@gmail.com</span></a>
                    </div>

                    <div className="card-mail-phone">
                        <MdCall size={45} className="iconHireMe" />
                        <span>
                            +421 918 506 305
                        </span>
                    </div>
                </div>
            </div>
            <div className="reactLogoWrapper"><FaReact className="bigReactLogo" />
            </div>


            <Footer />
        </section>
    )
}

export default HireMe
