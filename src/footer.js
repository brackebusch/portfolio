import React from 'react';
import Bicycle from './images/bicycle-rider.svg'
import Game from './images/gamepad-console.svg'
import Hiking from './images/hiking-person-silhouette-with-a-stick.svg'
import Icon from './images/icon.svg'
import Coding from './images/programming-code.svg'
import Snowboarding from './images/snowboarding.svg'
import Guitar from './images/spanish-guitar-and-keyboard.svg'
import Dad from './images/standing-person-with-kid-up-in-arms.svg'
import Reading from './images/study.svg'
import Surfing from './images/surfing-a-sea-turtle.svg'
import Cooking from './images/cooking-on-fire.svg'
import Cat from './images/halloween-black-cat.svg'
import Coffee from './images/coffee-cup-of-hot-drink-black-silhouette.svg'

const handleClick = (event) => {
  if(event.target.classList.contains('logo')){
    alert("Gotta use your imagination on these ones.")
  }
}

export default function Footer(){
  return (
    <footer className="dark flex-column">
      <h3 className="medium-border">Free Time Pursuits</h3>
      <div className="space-light" />
      <div className='flex-row inner' onClick={handleClick}>
        <img src={Bicycle} className="logo" alt="bicycle" />
        <img src={Game} className="logo" alt="gaming" />
        <img src={Hiking} className="logo" alt="Hiking" />
        <img src={Icon} className="logo" alt="Icon" />
        <img src={Coding} className="logo" alt="Coding" />
        <img src={Snowboarding} className="logo" alt="Snowboarding" />
        <img src={Guitar} className="logo" alt="Guitar" />
        <img src={Dad} className="logo" alt="Dad" />
        <img src={Reading} className="logo" alt="Reading" />
        <img src={Surfing} className="logo" alt="Surfing" />
        <img src={Cooking} className="logo" alt="Cooking" />
        <img src={Coffee} className="logo" alt="Coffee" />
        <img src={Cat} className="logo" alt="Cat" />     
      </div>
    </footer>
  )
}