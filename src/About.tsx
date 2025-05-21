import {useState} from 'react';
import { FaReact,FaNode, FaJava, FaPython, FaDatabase } from "react-icons/fa";
import { DiJavascript1, DiJqueryLogo, DiDjango, DiMysql, DiPostgresql, DiMongodb } from 'react-icons/di';
import { Link } from 'react-router-dom';
import { SiSpringboot, SiOracle } from 'react-icons/si';
import { FaCertificate } from 'react-icons/fa';
function About(){
  type ProjectType = {
    title:string
  }

  const [bio,setBio] = useState<string>("Hi, I'm Lucas Yepez, a passionate Full Stack Developer with a love for creating intuitive and efficient web applications. With a background in both front-end and back-end technologies, I enjoy working on projects that challenge me to solve complex problems and deliver seamless user experiences. I am constantly learning new tools and frameworks to stay at the cutting edge of web development.When I'm not coding, you can find me exploring the latest tech trends, diving into creative side projects, or collaborating with like-minded developers. My goal is to build solutions that make an impact and help people in meaningful ways.Let's connect and create something amazing together!")

  const [certs, setCerts] = useState([
    { title: 'FreeCodeCamp JavaScript Certification' },
    { title: 'The Odin Project Full Stack JavaScript' },
    { title: 'Associate Degree in Programming' },
  ]);

  const [backgrounds, setBackgrounds] = useState<string[]>([
    "Associate's Degree in Programming from Austin Community College",
    "Junior Developer at Aspire Digital Technologies 01/2020 - Present",
    "Proficient in JavaScript, Python, React, and Node.js",
    "Passionate about open-source contributions and community building"
  ]);
  return (
    <>

    <div className="aboutContainer">
    <Link to="/" className="back-home-link">Back to Home</Link>
      <h3 id="aboutHeader">About</h3>

      <p id="bioText">{bio}</p>
      <img id="mainImg" src="/mainPic.jpeg"></img>
      {/* <img id="mainImg" src="src/mainPic.jpeg"></img> */}
      <div id="languages">
        <div id="langHeader">Languages</div>
      <ul id="languagesContainer">
        <li className="icon"><FaReact /> React</li>
        <li className="icon" ><DiJavascript1 /> JavaScript</li>
        <li className="icon"><FaNode /> Node.js</li>
        <li className="icon"><DiJqueryLogo /> jQuery</li>
        <li className="icon"><SiSpringboot /> Spring Boot</li>
        <li className="icon"><DiDjango /> Django</li>
        <li className="icon"><FaJava /> Java</li>
        <li className="icon"><FaPython /> Python</li>
        <li className="icon"><DiMysql /> MySQL</li>
        <li className="icon"><DiPostgresql /> PostgreSQL</li>
        <li className="icon"><SiOracle /> Oracle</li>
        <li className="icon"><DiMongodb /> MongoDB</li>
     </ul>
      </div>

    <div className="certWrapper">
    <ul id="certsContainer">
     <div style={{ fontWeight: 'bold' }}>Certifications</div>
     <div id="certs">
     {
        certs.map(cert => (
          <li key={cert.title} style={{ paddingRight:'20px',borderRight: '2px solid black',marginBottom: '10px' }}>
            {/* <FaCertificate />  */}
            {cert.title}
          </li>
        ))
      }

     </div>


    </ul>

    </div>

      <div id="backgroundContainer">
        <div id="backgroundHeader">Background</div>
        <ul id="background">

          {
            backgrounds.map(background=>
              <li style={{paddingRight:'20px',borderRight: '2px solid black'}}>{background}</li>
              )
          }
        </ul>

      </div>


      </div>

    </>
  )
}
export default About;