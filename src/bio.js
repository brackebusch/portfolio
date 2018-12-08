import React from 'react';
import Divider from './divider'

const Bio = () => {
    return (
    <div className="medium flex-column">
      <div className='inner flex-column'>
      <p>
        High energy, self-starter, tenaciously positive + upbeat, and I love coding. "But you didn't study in college!" (this comes up quite often) Partially true. I did study, just didn't major in Computer Science (though I did start a Master's Degree). My education has come through several sources: Harvard and MIT's online Open CourseWare, the nation's highest awarded and most prestigious coding-bootcamp (3% acceptance rate, ranked #1), sifting through online documentation, and my father. Because of him, I have been writing software since I was able to grasp the concepts required. Thankfully it clicked, and I have enjoyed development ever since — be it working professionally or simply pursuing hobby projects. Programming is a passion of mine, and I take great pride in my work. I get excited when tasked with producing high caliber bug free code at a quick pace, and take great satisfaction in designing and building out products which users enjoy and which provide business value.
    </p>
    </div>
    <Divider direction='down' color1='#ecf0f1' color2='white'/>
    </div>
    )
}

export default Bio

