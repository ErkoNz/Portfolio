import React from 'react'
// import '../cssFiles/myproject.css'
import '../cssFiles/myprojects.scss'
import movingPicCovid from '../images/movingPicCovid.jpg'
import movingPicEminent from '../images/movingPicEminent.jpg'

function MyProjects() {
    return (
        <div className="myProjects-main">
            <div className="square2"></div>
            <div className="square3"></div>
            <h3 >My projects</h3>

            <section className="projectsSection">


                <div className="covidProject">
                    <div>
                        <a href="https://erkonz.github.io/production4/#/" target="_blank" rel="noopener noreferrer"> <img src={movingPicCovid} alt="covid19" /> </a>
                    </div>
                    <div>Covid - 19 tracker
                        <br /><span className="date">June 2020</span>
                        <br /><span className="textProject">A small & simple Frontend JavaScript app, built with ReactJS, ChartJS, Fetching...</span>

                        <div className="buttonWrapper">
                            <button><a href="https://erkonz.github.io/production4/#/" target="_blank" rel="noopener noreferrer">Preview</a></button>
                            <button><a href="https://github.com/ErkoNz/production4" target="_blank" rel="noopener noreferrer">GitHub</a></button>
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
                </div>

                <div className="hotelProject">
                    <div>Hotel Web
                        <br /><span className="date">March 2019</span>
                        <br /><span className="textProject">
                            Bachelor degree project, hotel website with working reservation system, food ordering system and CMS.
                            </span>

                        <div className="buttonWrapper">
                            <button><a href="http://ishotelbc2.epizy.com/zabransky/uvod.php" target="_blank" rel="noopener noreferrer">Preview</a></button>
                            <button>GitHub</button>
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
                    <div><a href="http://ishotelbc2.epizy.com/zabransky/uvod.php" rel="noopener noreferrer" target="_blank" >
                        <img src={movingPicEminent} alt="hotel Bc" /></a></div>
                </div>


                <div className="more-soon">More coming soon
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                </div>

                {/* <div className="hotelProject">
                    <div>a</div>
                    <div><img src={movingPicEminent} /></div>
                </div>

                <div className="hotelProject">
                    <div>a</div>
                    <div><img src={movingPicEminent} /></div>
                </div>

                <div className="hotelProject">
                    <div>a</div>
                    <div><img src={movingPicEminent} /></div>
                </div> */}

                {/* <div className="projectsWrapper">
                    <div><img src={movingPicCovid} /></div>
                    <div>b</div>
                </div> */}


            </section>



            {/* <div className="content-projects">

                <div className="card">
                    <div className="wrapper_moving_pic">
                        <img src={movingPicCovid} className="classCovid" />
                    </div>
                    <div className="content-cards-text">
                        June, 2020
                    </div>
                    <div className="content-cards-text2">
                        Covid-19 Tracker | 4fun project
                    </div>
                    <div className="content-cards-text3">
                        A small & simple Frontend JavaScript app, built with ReactJS, ChartJS, Fetching...
                    </div>
                </div>

                <div className="card">
                    <div className="wrapper_moving_pic">
                        <img src={movingPicEminent} className="classEminent" />
                    </div>
                    <div className="content-cards-text">
                        March, 2019
                    </div>
                    <div className="content-cards-text2">
                        Hotel Web with Reservations, Food Ordering, CMS...
                    </div>
                    <div className="content-cards-text3">
                        Bachelor degree project, using HTML, CSS, PHP, JS, AJAX, JQUERY and MySQL database.
                    </div>
                </div>

                <div className="card">
                    <div className="content-cards-image">
                    </div>
                    <div className="content-cards-text">
                        June, 2020
                    </div>
                    <div className="content-cards-text2">
                        More coming soon...
                    </div>
                    <div className="content-cards-text3">

                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default MyProjects
