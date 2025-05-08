import {useState} from 'react';
import Nav from './Nav';
import React from 'react';
import { useLocation } from 'react-router-dom';

function Hero(){
  const [name,setName] = useState<string>('Lucas Yepez');
  const [title,setTitle] = useState<string>('FullStack Developer');
  const [intro,setIntro] = useState<string>('Software engineer focused on solving hard problems at the intersection of longevity, neuroscience, and technology.')

  const location = useLocation();  // Get current location

  // Hide the userContainer on any page other than the home page ("/")
  if (location.pathname !== "/") {
    return null;  // Don't render anything if the current route isn't the home page
  }

  return (
    <>
    <div className="userContainer">

      <Nav/>

      <h3 className="nameHeader">Lucas Yepez</h3>

      <p className="intro">Software engineer focused on solving hard problems at the intersection of longevity, neuroscience, and technology.</p>
      <p className="intro">

        Associate of Science in Programming at <span className="underline">Austin Community College</span>. Previously worked with <span className="underline">IBM</span>, <span className="underline">Verizon</span>, <span className = "underline">Aspire Digital</span>, and <span className = "underline">nVent</span>.
      </p>
    </div>

    </>
  )
}
export default Hero;