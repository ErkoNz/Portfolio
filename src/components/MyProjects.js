import React from 'react'
import '../cssFiles/myprojects.scss'
// import movingPicCovid from '../images/movingPicCovid.jpg'
// import movingPicEminent from '../images/movingPicEminent.jpg'
// import laptopmobile1 from '../images/laptopmobile1.png'
// import laptopHotel from '../images/laptopHotel.png'
import laptopHotel from '../images/laptopHotel.webp'
// import covidlaptop from '../images/covidlaptop.png'
import covidlaptop from '../images/covidlaptop.webp'
// import businesscard from '../images/businesscard.jpg'
import businesscard from '../images/businesscard.webp'
// import posterHotel from '../images/posterHotel.jpg'
import posterHotel from '../images/posterHotel.webp'
import { AiOutlineDoubleRight } from "react-icons/ai";

function MyProjects() {
    return (
        <section className="myProjects-section" id="MyProjects">
            <h3 >My projects</h3>

            <div className="project-wrapper">


                <div className="projects-content">
                    <div className="leftDivText">
                        <h4>Covid - 19 Tracker</h4>
                        <span className="date">June 2020</span>
                        <div className="textProject">
                            {/* A small & simple Frontend JavaScript app, built with ReactJS, ChartJS, Fetching... */}
                            A small & simple Frontend ReactJS app where I used react hooks.
                            I did this project in my free time, while doing exams in university.
                            My goal was to gather fastest and most reliable data source about cases of covid-19 first in Slovakia and later in whole world.
                            I tried to make UI as readable as possible.
                        </div>
                        <div className="builtWith">
                            <span>HTML</span>
                            <span>|</span>
                            <span>CSS</span>
                            <span>|</span>
                            <span>ReactJS</span>
                            <span>|</span>
                            <span>ChartJS</span>
                        </div>
                    </div>
                    <a href="https://erkonz.github.io/production4/#/" target="_blank" rel="noopener noreferrer">
                        <div className="rightDivImg">
                            <img src={covidlaptop} alt="" />

                            <button className="preview_button">Preview 	<div className="icon_prev_button"><AiOutlineDoubleRight /></div> </button>
                        </div>
                    </a>
                </div>




                <div className="projects-content">
                    <div className="leftDivText">
                        <h4>Hotel web</h4>
                        <span className="date">March 2019</span>
                        <div className="textProject">
                            Bachelor degree project at university. Fully functional hotel website with working room reservation system, event reservation system, food ordering system and CMS.
                        </div>
                        <div className="builtWith">
                            <span>HTML</span>
                            <span>|</span>
                            <span>CSS</span>
                            <span>|</span>
                            <span>JS</span>
                            <span>|</span>
                            <span>PHP</span>
                            <span>|</span>
                            <span>MySQL</span>
                        </div>
                    </div>
                    <a href="http://ishotelbc2.epizy.com/zabransky/uvod.php" target="_blank" rel="noopener noreferrer">
                        <div className="rightDivImg">
                            <img src={laptopHotel} alt="" />
                            <button className="preview_button">Preview 	<div className="icon_prev_button"><AiOutlineDoubleRight /></div> </button>
                        </div>
                    </a>
                </div>



                <div className="projects-content">
                    <div className="leftDivText">
                        <h4>Business card</h4>
                        <span className="date">December 2018</span>
                        <div className="textProject">
                            Business card for a local hairdrasser.
                        </div>
                        <div className="builtWith">
                            <span>Photoshop</span>
                            <span>|</span>
                            <span>CorelDraw</span>
                        </div>
                    </div>
                    <div className="instead_of_a" >
                        <div className="rightDivImg dont_blur">
                            <img src={businesscard} alt="" />
                        </div>
                    </div>
                </div>






                <div className="projects-content">
                    <div className="leftDivText">
                        <h4>Grill - Party poster</h4>
                        <span className="date">July 2020</span>
                        <div className="textProject">
                            Graph design for poster. Ordered by local Hotel & Restaurant.
                        </div>
                        <div className="builtWith">
                            <span>Photoshop</span>
                            <span>|</span>
                            <span>CorelDraw</span>
                        </div>
                    </div>
                    <div className="instead_of_a" >
                        <div className="rightDivImg dont_blur">
                            <img src={posterHotel} alt="" style={{ width: '50%' }} />
                        </div>
                    </div>
                </div>



            </div>
        </section>
    )
}

export default MyProjects
