import React from 'react'
// import '../cssFiles/mainPage.css'
import '../cssFiles/mainscreen.scss'
import githubIcon from '../images/githubsvg.svg'
import myPic from '../images/myPic.png'
import waves from '../images/waves.svg'

// function MainScreen({ fullpageApi }) {
function MainScreen() {


    function scrollTo(anchor) {
        var elmnt = document.getElementById(anchor);


        const offset = 25;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = elmnt.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
    return (





        <div className="mainPage" id="Home" >
            <div className="waves" ><img src={waves} alt="" /></div>
            <div className="main-content" >
                <div className="my-stuff">
                    <div>Hello, I am Erik</div>
                    <div>Full - Stack Web Develope<span style={{ color: '#229e56' }}>r</span></div>
                    <div>
                        I'm a UI/UX Designer, Web Developer from Slovakia and I am trying to keep up with new & modern web technologies.
                    </div>
                    <div className="button-wrapper">
                        <button onClick={() => scrollTo("MyProjects")} className="my-projects-button">My Projects</button>
                        <button onClick={() => scrollTo("About")} className="about-button">About</button>
                    </div>

                    <div className="line-underButtons"></div>
                    <a href="https://github.com/ErkoNz" rel="noopener noreferrer" target="_blank"> <img src={githubIcon} alt="github" style={{ width: '50px', padding: '10px' }} /></a>
                </div>
                <div className="myImage-main">
                    <img src={myPic} alt="myPic" />
                </div>
            </div>
        </div >





    )
}

export default MainScreen
