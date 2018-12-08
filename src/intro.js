import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
import Bio from './bio'

export default class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {show: false};
  }

  render(){
    return (
      <div>
    <div className="medium flex-column">
    <h3>About Me</h3>
    <div className="space" />
    <div className='inner flex-column'>
        <p>
          Full stack developer here, I enjoy everything from creating performance oriented React components to designing database schemas with PostgreSQL for microservices. I built this website myself, with no external libraries of frameworks (except React), no Wordpress plugin here. I love learning! Challenges that demand serious thinking and invite trying new ideas are a YES in my book. I don’t shy away from big problems, and I do what it takes to get the job done well. I yearn for quality and perfection in my work. I will stay up through the night to do something the right way rather than just "get it done". My driving philosophy when coding is to write for the next developer and continually make business minded decisions.
        </p>
        <button onClick={() => this.setState({show: !this.state.show})}>{this.state.show ? 'Tell Me Less' : 'Tell Me More'}</button>
    </div>
  </div>
    <CSSTransition
      in={this.state.show}
      timeout={300}
      classNames='extra'
      mountOnEnter={false}
      unmountOnExit={true}
    >
      <Bio show={this.state.show} />
    </CSSTransition>
  </div>
  )
  }
}