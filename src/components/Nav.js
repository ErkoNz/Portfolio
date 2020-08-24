import React, { useState } from 'react'
import '../cssFiles/navbar.scss'
import MyLogo from '../images/MyLogo.svg'
// import MainScreen from './MainScreen';
// import About from './About';
// import MyProjects from './MyProjects';
// import Footer from './Footer';
// function Nav({ fullpageApi }) {
function Nav() {
    const [burgerClick, setBurgerClick] = useState({
        isOpen: false,
        styling: {
            right: "-50%"
        }
    })

    window.onscroll = function () {
        var header = document.querySelector('.nav-wrapper')
        if (header)
            header.classList.toggle('sticky', window.scrollY > 0)
    };

    // window.addEventListener('scroll', function () {
    //     var header = document.querySelector('.nav-wrapper')
    //     console.log("aa")
    //     if (header)
    //         header.classList.toggle('sticky', window.scrollY > 0)
    // })

    // function scrollFunction() {
    //     console.log("a")
    //     if ((document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
    //         // && document.body.clientWidth > 900
    //     ) {
    //         setStyle1({
    //             mainDiv: {
    //                 height: '5vh'
    //             },
    //             nav: {
    //                 transform: 'scale(.8)',
    //                 transition: '.4s',
    //             }
    //         })

    //     }
    //     // else if (document.body.clientWidth < 900) {

    //     //     return
    //     // }
    //     else {
    //         setStyle1({
    //             mainDiv: {
    //                 height: '10vh'
    //             },
    //             nav: {
    //                 transform: 'scale(1)',
    //                 transition: '.4s'
    //             }
    //         })
    //     }
    // }

    function BurgerFunction() {
        if (burgerClick.isOpen) {
            setBurgerClick({
                isOpen: false,
                styling: {
                    right: "-50%"
                }
            })
        }
        else {
            setBurgerClick({
                isOpen: true,
                styling: {
                    right: "0"
                }
            })
        }
        var line1 = document.querySelector('.line1')
        var line2 = document.querySelector('.line2')
        var line3 = document.querySelector('.line3')
        if (line1 && line2 && line3) {
            line1.classList.toggle('toggled1')
            line2.classList.toggle('toggled2')
            line3.classList.toggle('toggled3')
        }
    }

    function closeBurger() {
        if (burgerClick.isOpen) {
            document.removeEventListener("click", closeBurger, false);     // Fails
            var element1 = document.getElementById("IdLine1");
            var element2 = document.getElementById("IdLine2");
            var element3 = document.getElementById("IdLine3");
            element1.classList.remove("toggled1");
            element2.classList.remove("toggled2");
            element3.classList.remove("toggled3");
            setBurgerClick({
                isOpen: false,
                styling: {
                    right: "-50%"
                }
            })
        }
    }
    document.addEventListener('click', closeBurger, false)

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
        <>
            <nav className="nav-wrapper" id="navbar" >
                {/* <nav > */}
                {/* {console.log(window.screen.availHeight)} */}
                {/* {console.log(window.screen.availWidth)} */}
                {/* <div id="myName" className="myName-as-logo" onClick={() => fullpageApi.moveTo('Home')} > */}
                {/* {window.screen.availHeight}
                {"H__W" + window.screen.availWidth} */}
                <div id="myName" className="myName-as-logo" onClick={() => scrollTo("Home")}>
                    <div className="logoImg">
                        <img src={MyLogo} alt="EZ Logo" />
                    </div>
                    <div className="nameText">
                        ERIK<br />ZÁBRANSKÝ
                        </div>
                </div>

                {/* <ul id="menu">
                        <li data-menuanchor="page1"><a href="#page1">Page 1</a></li>
                        <li data-menuanchor="page2"><a href="#page2">Page 2</a></li>
                        <li data-menuanchor="page3"><a href="#page3">Page 3</a></li>
                        <li data-menuanchor="page4"><a href="#page4">Page 4</a></li>
                        <li data-menuanchor="page5"><a href="#page5">Page 5</a></li>
                    </ul> */}
                <ul className="nav-links" id="navLinks" style={burgerClick.styling}>
                    {/* <li data-menuanchor="Home" onClick={() => fullpageApi.moveTo('Home')}>Home</li>
                    <li data-menuanchor="Projects" onClick={() => fullpageApi.moveTo('MyProjects')}>My Projects</li>
                    <li data-menuanchor="About" onClick={() => fullpageApi.moveTo('About')}>About</li>
                    <li data-menuanchor="Contact" onClick={() => fullpageApi.moveTo('Contact')}>Contact</li>
                    <li data-menuanchor="Contact" onClick={() => fullpageApi.moveTo('Contact')}>Hire me</li> */}
                    {/* <li style={style1.nav} >Home</li> */}


                    <li onClick={() => scrollTo("MyProjects")}>My Projects</li>
                    <li onClick={() => scrollTo("About")}>About</li>
                    <li onClick={() => scrollTo("HireMe")}>Hire me  <span className="lomitko">/</span> Contact</li>
                    {/* <li onClick={() => scrollTo("Contact")}>Contact</li> */}
                    {/* <li className="testLink"><a href="#LandingPage">Home</a></li> */}
                    {/* <li className="testLink"><a href="#MyProjects">My Projects</a></li>
                    <li className="testLink"><a href="#About">About</a></li>
                    <li className="testLink"><a href="#Contact">Contact</a></li>
                    <li className="testLink"><a href="#HireMe">HireMe</a></li> */}
                </ul>

                <div className="burgerDiv" onClick={BurgerFunction}>
                    {/* <GiHamburgerMenu className="burger" style={{ color: 'black' }} /> */}

                    <div className="line1" id="IdLine1"></div>
                    <div className="line2" id="IdLine2"></div>
                    <div className="line3" id="IdLine3"></div>
                </div>

                {/* </nav> */}
            </nav>
            {/* <main>
                <section>
                    <MainScreen />
                    <MyProjects />
                    <About />
                    <Footer />
                </section>
            </main> */}
        </>

    )
}

export default Nav
