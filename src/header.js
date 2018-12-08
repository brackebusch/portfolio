import React from 'react';
import portrait from './images/portrait.jpg';
import Github from './images/github.svg'
import Linkedin from './images/linkedin.svg'

export default function Header(){
  return (
    <header className="dark fill flex-column">
      <div className='parallax'>
        <div id='stars1'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
      </div>
      {/* <h1>Kyle Brackebusch</h1> */}
      {/* <h1 class="link link--surinami name" data-letters-l="Kyle " data-letters-r="Brackebusch">Kyle Brackebusch</h1> */}
      <h1 className="underline">Kyle Brackebusch</h1>
      <img src={portrait} className="picture" alt="self-portrate" />
      <h2 className="overline">Software Engineer</h2>
      <div className='flex-row'>
        <div className="relative">
          <img src ={Linkedin} alt='linkedin' onClick={()=> window.open("https://www.linkedin.com/in/kyle-brackebusch/", "_blank")} className='link-image linkedin'/>
        </div>
        <div className="relative">
          <img src ={Github} alt='github'  onClick={()=> window.open("https://github.com/brackebusch", "_blank")} className='link-image github'/>
        </div>
      </div>
    </header>
  )
}

