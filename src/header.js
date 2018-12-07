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

{/* <div class="grid__item color-2">
<a class="link link--surinami" href="#"><span data-letters-l="Suri" data-letters-r="nami">Surinami</span></a>
</div> */}

      {/* <a target="_blank" href="https://github.com/brackebusch"><i class="fab fa-github"></i></a>
      <a target="_blank" href="https://www.linkedin.com/in/kyle-brackebusch"><i class="fab fa-linkedin"></i></a> */}
      
      
          {/* <h3 className='upbeat'>Positive Attitude</h3>
          <h3 className='energy'>High Energy</h3>
          <h3 className='starter'>Self-Starter</h3>
        <h2 className='engineer'>Software Engineer</h2> */}

        
            // {/* and raises the bar by consistently pushing out quality code (try saying that 10x fast! =). Programming is more than a job for me, it’s a passion of mine, and I take great pride in my work. I am fullstack through and through. I get excited when tasked with producing high caliber bug free code at quick pace, and take great satisfaction in designing and building out products which provide business value. */}

            // // I bring a diverse background to the table, but I believe the most valuable thing I have to offer to any employer is integrity in my work and a heart fully invested in both my colleagues and my company.


