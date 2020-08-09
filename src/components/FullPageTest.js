import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage';
import Nav from './Nav';
import MainScreen from './MainScreen';
import About from './About';
import MyProjects from './MyProjects';
import Footer from './Footer';


const FullPageTest = () => (
    <ReactFullpage
        scrollingSpeed={600}
        autoScrolling={false}
        // scrollBar={false}
        // navigation={true}
        licenseKey={'YOUR_KEY_HERE'}
        anchors={['Home', 'Projects', 'About', 'Contact']}
        // lockAnchors={false}
        fitToSection={false}

        render={({ state, fullpageApi }) => {
            // console.log("render prop change", state, fullpageApi); 

            return (
                <ReactFullpage.Wrapper>
                    {/* <div className="section">
                        <button onClick={() => fullpageApi.moveTo('navSlide')}>
                            navSlide
                        </button>
                        <button onClick={() => fullpageApi.moveTo('MyProjectsSlide')}>
                            projects
                        </button>
                        <button onClick={() => fullpageApi.moveTo('AboutSlide')}>
                            about</button>
                        <button onClick={() => fullpageApi.moveTo('FooterSlide')}>
                            footer</button>
                    </div> */}
                    <div className="section"><Nav fullpageApi={fullpageApi} /><MainScreen /></div>
                    {/* <div className="section"></div> */}
                    {/* <div className="section" ></div> */}
                    <div className="section" ><MyProjects /></div>
                    <div className="section"><About /></div>
                    <div className="section"><Footer /></div>

                    {/* 
                    	<div class="slide" data-anchor="slide1"> Slide 1 </div>
	<div class="slide" data-anchor="slide2"> Slide 2 </div>
	<div class="slide" data-anchor="slide3"> Slide 3 </div>
	<div class="slide" data-anchor="slide4"> Slide 4 </div> */}
                </ReactFullpage.Wrapper>
            );
        }}
    />
)

export default FullPageTest
