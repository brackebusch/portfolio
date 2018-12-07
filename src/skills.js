import React from 'react';
import Css from './images/Css.svg'
import Git from './images/Git.svg'
import Heroku from './images/Heroku.svg'
import Html from './images/Html.svg'
import Javascript from './images/Javascript.svg'
import Mongodb from './images/Mongodb.svg'
import NodeLogo from './images/Node.svg'
import Postgres from './images/Postgres.svg'
import Rails from './images/Rails.svg'
import ReactLogo from './images/React.svg'
import Redux from './images/Redux.svg'
import Ruby from './images/Ruby.svg'
import Webpack from './images/Webpack.svg'

export default function Skills() {
  return (
    <div className="light flex-column">
    <h3 className="light-border">Skills</h3>
    <div className="space" />
    <div className='flex-row inner'>
      <img src={ReactLogo} className="logo" alt="React-logo" onClick={()=> window.open("https://reactjs.org/", "_blank")}/>
      <img src={NodeLogo} className="logo" alt="Node-logo" onClick={()=> window.open("https://nodejs.org/en/", "_blank")}/>
      <img src={Ruby} className="logo" alt="Ruby-logo" onClick={()=> window.open("https://www.ruby-lang.org/en/", "_blank")}/>
      <img src={Postgres} className="logo" alt="PostgreSQL-logo" onClick={()=> window.open("https://www.postgresql.org/", "_blank")}/>
      <img src={Javascript} className="logo" alt="JavaScript-logo" onClick={()=> window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources", "_blank")}/>
      <img src={Redux} className="logo" alt="Redux-logo" onClick={()=> window.open("https://redux.js.org/", "_blank")}/>
      <img src={Rails} className="logo" alt="Rails-logo" onClick={()=> window.open("https://rubyonrails.org/", "_blank")}/>
      <img src={Heroku} className="logo" alt="Heroku-logo" onClick={()=> window.open("https://www.heroku.com/", "_blank")}/>
      <img src={Webpack} className="logo" alt="Webpack-logo" onClick={()=> window.open("https://webpack.js.org/", "_blank")}/>
      <img src={Html} className="logo" alt="HTML-logo" onClick={()=> window.open("https://developer.mozilla.org/en-US/docs/Learn/HTML", "_blank")}/>
      <img src={Css} className="logo" alt="CSS-logo" onClick={()=> window.open("https://developer.mozilla.org/en-US/docs/Web/CSS", "_blank")}/>
      <img src={Mongodb} className="logo" alt="MongoDB-logo" onClick={()=> window.open("https://www.mongodb.com/", "_blank")}/>
      <img src={Git} className="logo" alt="git-logo" onClick={()=> window.open("https://git-scm.com/", "_blank")}/>
    </div>
    </div>
  )
}