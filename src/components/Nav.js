import React from 'react'
import '../cssFiles/navbar.scss'

function Nav({ fullpageApi }) {
    window.onscroll = function () { scrollFunction() };
    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("navbar").style.height = "5vh";
            document.getElementById("myName").style.fontSize = "12px";
            document.getElementById("navLinks").style.fontSize = "1rem";

        } else {
            document.getElementById("navbar").style.height = "10vh";
            document.getElementById("myName").style.fontSize = "17px";
            document.getElementById("navLinks").style.fontSize = "1.2rem";
        }
    }

    return (
        <>
            <div className="nav-wrapper" id="navbar">
                <nav>
                    <div id="myName" className="myName-as-logo" style={{ fontSize: '17px' }} onClick={() => fullpageApi.moveTo('Home')}>
                        <div></div>
                        <div>
                            ERIK<br />ZÁBRANSKÝ
                    </div>
                    </div>
                    <ul className="nav-links" id="navLinks" style={{ fontSize: "1.2rem" }}>
                        <li onClick={() => fullpageApi.moveTo('Projects')}>My Projects</li>
                        <li onClick={() => fullpageApi.moveTo('About')}>About</li>
                        <li onClick={() => fullpageApi.moveTo('Contact')}>Contact</li>
                        <li onClick={() => fullpageApi.moveTo('Contact')}>Hire me</li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Nav
