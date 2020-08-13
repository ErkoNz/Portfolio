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
        // licenseKey={'YOUR_KEY_HERE'}
        anchors={['Home', 'Projects', 'About', 'Contact']}
        // anchors={['page1', 'page2', 'page3', 'page4', 'page5']}

        lockAnchors={true}
        fitToSection={false}
        menu={"#navbar"}
        // css3={true}
        bigSectionsDestination={'top'}


        render={({ state, fullpageApi }) => {

            return (
                <ReactFullpage.Wrapper>
                    <div className="section "><Nav fullpageApi={fullpageApi} /><MainScreen /></div>
                    <div className="section " ><MyProjects /></div>
                    <div className="section "><About /></div>
                    <div className="section "><Footer /></div>
                </ReactFullpage.Wrapper>
            );
        }}
    />
)

export default FullPageTest
