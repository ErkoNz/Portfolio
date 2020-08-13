import React from 'react'
// import '../cssFiles/mainPage.css'
import '../cssFiles/mainscreen.scss'
import githubIcon from '../images/githubsvg.svg'
import myPic from '../images/myPic.png'
import waves from '../images/waves.svg'

function MainScreen() {



    return (

        <div className="mainPage">
            {/* <div className="squareMainScreen"></div> */}
            <div className="waves" ><img src={waves} alt="" /></div>

            <div className="main-content">
                <div className="my-stuff">
                    <div>Hello, I am Erik</div>
                    <div>Full - Stack Web Develope<span style={{ color: '#2daa61' }}>r</span></div>
                    <div>
                        I'm a UI/UX Designer, Web Developer from Slovakia and I am trying to keep up with new & modern web technologies.
                    </div>
                    <br></br>
                    <div className="button-wrapper">
                        <button className="my-projects-button">My Projects</button>
                        <button className="about-button">About</button>
                    </div>
                    <div className="line-underButtons"></div>
                    <img src={githubIcon} alt="github" style={{ width: '50px', padding: '10px' }} />
                    {/* <img src={githubIcon} alt="github" style={{ width: '50px', padding: '10px' }} />
                    <img src={githubIcon} alt="github" style={{ width: '50px', padding: '10px' }} />
                    <img src={githubIcon} alt="github" style={{ width: '50px', padding: '10px' }} /> */}

                </div>
                <div className="myImage-main">
                    <img src={myPic} alt="myPic" />
                </div>
            </div>

        </div >
    )
}

export default MainScreen
