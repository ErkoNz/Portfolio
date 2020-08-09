import React from 'react'
import '../cssFiles/about.scss'
import myphoto from '../images/about.png'
// import { IoLogoHtml5 } from 'react-icons/Io'
import { FaHtml5 } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { DiPhotoshop } from 'react-icons/di';
import { GrGraphQl } from 'react-icons/gr';
import { GrMysql } from 'react-icons/gr';
import { DiJavascript1 } from 'react-icons/di';
import { AiFillGithub } from 'react-icons/ai';
import { DiMongodb } from 'react-icons/di';
import { FaPhp } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa';
import sqlIcon from '../images/sqlIcon.svg';
import restApi from '../images/restApi.svg';
import corelDraw from '../images/corelDraw.svg';
import sonyVegas from '../images/sonyVegas.svg';
import Csharp from '../images/Csharp.svg';
import Cpp from '../images/cpp.svg';

function About() {
    return (
        <div className="main-about">
            <div className="square4"></div>
            <div className="square5"></div>
            <h3>About</h3><br></br>
            <div className="about-container">
                <div>
                    I'm a 24 years old student, studying applied informatics and finishing my master degree in 2021. I have been learning simple web technologies since 2011 (4 years HTML & CSS in high school).
                    On university, I started using programming languages, such as C, C++, C#, Java & PHP and more. Since Late 2019, I started learning ReactJS (self-taught), now trying to get better at Backend stuff (REST API, GRAPHQL, NodeJS, MongoDB). In near future, I'd like to learn Vue, React-Native / Flutter. I am always focusing on highest performance, simple design and great UX.
                </div>
                <div><img src={myphoto} alt="MyPhoto" /></div>
            </div>
            <div className="languages">
                <span><FaHtml5 size={40} style={{ color: 'grey' }} /> <br />HTML</span>
                <span><IoLogoCss3 size={40} style={{ color: 'grey' }} /> <br />CSS</span>
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
