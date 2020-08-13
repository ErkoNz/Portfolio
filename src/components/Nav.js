import React, { useState } from 'react'
import '../cssFiles/navbar.scss'
import { GiHamburgerMenu } from 'react-icons/gi';

function Nav({ fullpageApi }) {
    const [burgerClick, setBurgerClick] = useState({
        isOpen: false,
        styling: {
            right: "-50%"
        }
    })
    const [style1, setStyle1] = useState({
        mainDiv: {
            height: '10vh'
        },
        nav: {
            transform: 'scale(1)',
            transition: '.4s'
        }
    })
    window.onscroll = function () { scrollFunction() };
    function scrollFunction() {
        if ((document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) && document.body.clientWidth > 1200) {
            setStyle1({
                mainDiv: {
                    height: '5vh'
                },
                nav: {
                    transform: 'scale(.8)',
                    transition: '.4s',
                }
            })

        } else {
            setStyle1({
                mainDiv: {
                    height: '10vh'
                },
                nav: {
                    transform: 'scale(1)',
                    transition: '.4s'
                }
            })

        }
    }

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
    }

    function closeBurger() {
        if (burgerClick.isOpen) {
            document.removeEventListener("click", closeBurger, false);     // Fails
            setBurgerClick({
                isOpen: false,
                styling: {
                    right: "-50%"
                }
            })
        }
    }
    document.addEventListener('click', closeBurger, false)

    return (
        <>
            <div className="nav-wrapper" id="navbar" style={style1.mainDiv}>
                {/* <nav > */}

                <div id="myName" className="myName-as-logo" onClick={() => fullpageApi.moveTo('Home')} style={style1.nav}>
                    <div></div>
                    <div>
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
                    <li style={style1.nav} data-menuanchor="Home" onClick={() => fullpageApi.moveTo('Home')}>Home</li>
                    <li style={style1.nav} data-menuanchor="Projects" onClick={() => fullpageApi.moveTo('Projects')}>My Projects</li>
                    <li style={style1.nav} data-menuanchor="About" onClick={() => fullpageApi.moveTo('About')}>About</li>
                    <li style={style1.nav} data-menuanchor="Contact" onClick={() => fullpageApi.moveTo('Contact')}>Contact</li>
                    <li style={style1.nav} data-menuanchor="Contact" onClick={() => fullpageApi.moveTo('Contact')}>Hire me</li>
                </ul>

                <GiHamburgerMenu onClick={BurgerFunction} className="burger" size={40} style={{ color: 'black' }} />


                {/* </nav> */}
            </div>
        </>
    )
}

export default Nav
