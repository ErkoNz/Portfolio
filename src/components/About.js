import React, {useState} from 'react'
import '../cssFiles/about.scss'
// import myphoto from '../images/about.png'
import { FaHtml5, FaNodeJs, FaReact, FaPhp, FaJava } from 'react-icons/fa';
import { IoLogoCss3, IoLogoSass, IoMdDownload } from 'react-icons/io';
import { DiPhotoshop, DiJavascript1, DiMongodb } from 'react-icons/di';
import { GrGraphQl, GrMysql } from 'react-icons/gr';
import { AiFillGithub } from 'react-icons/ai';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { BsThreeDotsVertical } from 'react-icons/bs';
// import { MdFormatListBulleted } from 'react-icons/md';
// import { GoListUnordered } from 'react-icons/go';
import { VscListFlat } from 'react-icons/vsc';
import sqlIcon from '../images/sqlIcon.svg';
import restApi from '../images/restApi.svg';
import corelDraw from '../images/corelDraw.svg';
import sonyVegas from '../images/sonyVegas.svg';
import Csharp from '../images/Csharp.svg';
import Cpp from '../images/cpp.svg';
import CV from './Erik_Zabransky_CV.pdf'

function About() {
    const [LessMoreText, setLessMoreText] = useState({
        more: {
            display: 'block',
        },
        less: {
            display: 'none',
        }
    })
    function ShowMore(){
        var element1 = document.getElementById("morebutton");
        var element2 = document.getElementById("lessbutton");
        element1.classList.toggle("activeBtn");
        element2.classList.toggle("activeBtn");
        setLessMoreText({
            more: {
                display: 'block',
            },
            less: {
                display: 'none',
            }
        })
    }
    function ShowLess(){
        var element1 = document.getElementById("morebutton");
        var element2 = document.getElementById("lessbutton");
        element1.classList.toggle("activeBtn");
        element2.classList.toggle("activeBtn");
        setLessMoreText({
            more: {
                display: 'none',
            },
            less: {
                display: 'block',
            }
        })
    }
    return (
        <div className="main-about" id="About">
            <div className="about-background">
                <RiCodeSSlashLine className="dicode" />
            </div>
            <div className="square4"></div>
            <div className="square5"></div>
            <h3>About</h3>
            <div className="about-container" >
                <div className="less_text">
                    <button aria-label="more" id="morebutton" className="activeBtn" onClick={ShowMore}><VscListFlat size={20} /></button>
                    <button aria-label="less" id="lessbutton" onClick={ShowLess}><BsThreeDotsVertical size={20} /></button>
                </div>
                <p style={LessMoreText.more} className="listMore">
                    I am currently student of applied informatics and finishing my master degree in 2021. Computer science have attracted me since childhood. Because of that, I decided to study graphic design in high school, where we mostly did posters, business cards, brouchers, video editing and some web designs with HTML & CSS. 
                    
                    On university, I started using programming languages, such as C, C++, C#, Java, PHP and more.
                    Since Late 2019, I started learning <span>ReactJS</span> (self-taught), now  getting better at Backend (REST API, GRAPHQL, NodeJS, MongoDB), but I still prefer Frontend.

                    After years of studying programming languages, I discovered that my passion is with web technologies (both design and development). I got ton of energy for this kind of a work and looking forward to learn new technologies, as it is a never ending process.
                    In near future, I'd like to learn Vue, React-Native / Flutter and many more. I am always focusing on highest performance, simple design and great UX.
                </p>
                    <ul style={LessMoreText.less} className="listLess">
                        <li>Currently - student of applied informatics, finishing my master degree in 2021</li>
                        <li>Studied graphic design in high school</li>
                        <li>On university, I started using programming languages, such as C, C++, C#, Java, PHP...</li>
                        <li>Late 2019, I started learning <span>ReactJS</span> (self-taught)</li>
                        <li>Now getting better at Backend (REST API, GRAPHQL, NodeJS, MongoDB), but still prefer Frontend</li>
                        <li>My passion is with web technologies (both design and development</li>
                        <li>Looking forward to learn new technologies, as it is never ending process</li>
                        <li>In near future, I'd like to learn Vue, React-Native/Flutter...</li>
                        <li>I'm always focusing on highest performance, simple design and great UX</li>
                    </ul>
                {/* <div><img src={myphoto} loading="lazy" alt="MyPhoto" /></div> */}
            </div>
            <div className="wrapperResume">
                <button onClick={() => window.open(CV)}>
                    <IoMdDownload size={20} style={{ color: 'green', marginRight: '10px' }} />
                    Resume.pdf
                </button>
            </div>
            <div className="languages">
                <span><FaHtml5 size={40} style={{ color: 'grey' }} /> <br />HTML</span>
                <span><IoLogoCss3 size={40} style={{ color: 'grey' }} /> <br />CSS</span>
                <span><IoLogoSass size={40} style={{ color: 'grey' }} /> <br />Sass</span>
                <span><FaReact size={40} style={{ color: 'grey' }} /> <br />ReactJS</span>
                <span><FaNodeJs size={40} style={{ color: 'grey' }} /> <br />NodeJS</span>
                <span><img src={restApi} alt="restApi" style={{ width: '110px', height: '40px' }} /> <br />REST API</span>
                <span><GrGraphQl size={40} style={{ color: 'grey' }} /> <br />GraphQL</span>
                <span><DiMongodb size={40} style={{ color: 'grey' }} /> <br />MongoDB</span>
                <span><AiFillGithub size={40} style={{ color: 'grey' }} /> <br />Git & GitHub</span>
                <span><DiJavascript1 size={40} style={{ color: 'grey' }} /> <br />JavaScript</span>
                <span><FaPhp size={40} style={{ color: 'grey' }} /> <br />PHP</span>
                <span><GrMysql size={40} style={{ color: 'grey' }} /> <br />MySQL</span>
                <span><img src={sqlIcon} alt="SQL" style={{ width: '40px' }} /> <br />SQL</span>
                <span><DiPhotoshop size={40} style={{ color: 'grey' }} /> <br />Photoshop</span>
                <span><img src={corelDraw} alt="corelDrawSQL" style={{ width: '40px' }} /> <br />CorelDraw</span>
                <span><img src={sonyVegas} alt="sonyVegas" style={{ width: '40px' }} /> <br />Sony Vegas</span>
                <span><FaJava size={40} style={{ color: 'grey' }} /> <br />Java</span>
                <span><img src={Csharp} alt="C#" style={{ width: '40px' }} /> <br />C#</span>
                <span><img src={Cpp} alt="C++" style={{ width: '40px' }} /> <br />C++</span>
            </div>
        </div >
    )
}

export default About
