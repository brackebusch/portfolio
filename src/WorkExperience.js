import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'

export default class WorkExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      league: false,
      academy: false,
      robertHalf: false,
      verizon: false,
      united: false,
      vanguard: false
    };
  }

  render(){
    return (

<div className="medium flex-column">
  <h3 className="title-space">Background</h3>
  <div className="space" />
  <div className='inner flex-column'>
    <div className="experience" onClick={() => this.setState({league: !this.state.league})}>
        <h4>Full Stack Developer</h4>
        <h5>The League</h5>
        <h5>May 18' - September 18' (Contract)</h5>
      <CSSTransition
            in={this.state.league}
            timeout={300}
            classNames='extra'
            mountOnEnter={false}
            unmountOnExit={true}
      >
      <ul>
        <li>
        Built and maintained a CRM used to bridge the gap between customer support and users. Codebase was, React/Redux, Node.js, and PostgreSQL. The database contained over 650 tables and 2.1 billion rows of data.
        </li>
        <li>
        Managed end-to-end data flow, including complex database queries,RESTful APIs services, and building scalable React components with modern CSS styling.
        </li>
        <li>
        Designed and implemented features to provide greater insights into user behavior such as communication habits, generating and displaying experience metrics, and managing profile changes.
        </li>
        <li>
        Analyzed data flow to uncover bottle necks, then proceeded to create fast and lite tools to speed up page load times and process information more efficiently. My direct efforts resulted in dramatic
        performance increase across the entire application, converting some 10 second loads to half a second.
        </li>
        <li>
        Routinely met with stakeholders to discuss pain points in application and spec out feature requests. Followed by creating tickets, mocking up UX/UI design with wireframes and samples, and then turning requests into deliverables to promote rapid iteration adhering to an agile methodology
        </li>
        <li>
        Established standards for coding and design principles, followed by refactoring legacy Node and React code to increase quality, performance, and readability.
        </li>
      </ul>
      </CSSTransition>
    </div>
    <div className="vertical-space"/>
    <div className="experience" onClick={() => this.setState({academy: !this.state.academy})}>
        <h4>Computer Science</h4>
        <h5>App Academy</h5>
        <h5>December 17' - April 17'</h5>
      <CSSTransition
            in={this.state.academy}
            timeout={300}
            classNames='extra'
            mountOnEnter={false}
            unmountOnExit={true}
      >
        <ul>
          <li>
            Software development course with 3% acceptance rate according to rigorous testing and admissions requirements. Over 1,000 hours of intensive study and production, with a focus on full stack web development. Considered nationally to be an elite coding school.
          </li>
          <li>
          Very positive experience. While I had been coding for quite a few years before entering, that was sort of the point with the program. You are only admitted after passing coding challenges (live demo and all). Because of this high bar the acceptance rate is quite low, but the quality of education and caliber of students is excellent. It was a ridiculous amount of work and massive commitment averaging 90 hours a week. However, I came out on the other side a stronger developer and better equipped to tackle real world challenges. 10/10
          </li>
        </ul>
      </CSSTransition>
    </div>
    <div className="vertical-space"/>
    <div className="experience" onClick={() => this.setState({robertHalf: !this.state.robertHalf})}>
        <h4>Technical Recruiter</h4>
        <h5>Robert Half</h5>
        <h5>August 17' - December 17'</h5>
      <CSSTransition
            in={this.state.robertHalf}
            timeout={300}
            classNames='extra'
            mountOnEnter={false}
            unmountOnExit={true}
      >
      <ul>
        <li>
        Full cycle recruiting for all roles in Technology - responsible for sourcing high caliber talent, screening, shortlisting, interviewing and submitting candidates through cold calling, resume mining, internet job boards (Dice, Monster, CareerBuilder etc.), referrals, headhunting, researching and networking
        </li>
        <li>
        Negotiated salaries on behalf of clients and candidates, ranging from frontend developers using Drupal, HTML, and CSS all the way to dedicated backend engineers using Python or Java paired with a relational database
        </li>
        <li>
        Maintained an active Salesforce pipeline funneling in ‘A’ quality candidates and job orders through persistent communication tactics, along with efficient engagement to communication responses
        </li>
        <li>
        Managed reference checks, background checks, and onboarding follow ups for 100’s of candidates to build the value of Robert Half for candidates and clients alike
        </li>
      </ul>
      </CSSTransition>
    </div>
    <div className="vertical-space"/>
    <div className="experience" onClick={() => this.setState({verizon: !this.state.verizon})}>
        <h4>Sales Representative</h4>
        <h5>Verizon Wireless</h5>
        <h5>June 14' - August 17'</h5>
      <CSSTransition
            in={this.state.verizon}
            timeout={300}
            classNames='extra'
            mountOnEnter={false}
            unmountOnExit={true}
      >
      <ul>
        <li>
        Reoccurring leader in upgrades, handling the volume equal to 3 representatives in terms of total contracts and sales generated. Furthermore received awards in district for top renewals at 192% to quota in 2014 and for 2015 averaged 140% to all sales metric objectives
        </li>
        <li>
        Troubleshoot and fix a vast array of technical issues involving phones, services, and software which all while handling guest experience and building company value - turning problems into sales
        </li>
        <li>
        Winners Circle participant, performing in top 10% of Verizon Wireless Retail sales on a national level and recipient of multiple recognitions for outstanding customer satisfaction ratings
        </li>
      </ul>
      </CSSTransition>
    </div>
    <div className="vertical-space"/>
    <div className="experience" onClick={() => this.setState({united: !this.state.united})}>
        <h4>Flight Attendant</h4>
        <h5>United Airlines</h5>
        <h5>June 14' - August 17'</h5>
      <CSSTransition
            in={this.state.united}
            timeout={300}
            classNames='extra'
            mountOnEnter={false}
            unmountOnExit={true}
      >
      <ul>
        <li>
          Most friendly and helpful flight attendant ever to serve your Diet Coke.
        </li>
      </ul>
      </CSSTransition>
    </div>
    <div className="vertical-space"/>
    <div className="experience" onClick={() => this.setState({vanguard: !this.state.vanguard})}>
        <h4>Bachelors: Religion</h4>
        <h5>Vanguard University</h5>
        <h5>Graduated 2012 Cum Laude</h5>
      <CSSTransition
            in={this.state.vanguard}
            timeout={300}
            classNames='extra'
            mountOnEnter={false}
            unmountOnExit={true}
      >
      <ul>
        <li>
          Went to college, got a degree. Following that traveled the world (true story).
        </li>
      </ul>
      </CSSTransition>
    </div>
</div>
</div>
    )
}
}