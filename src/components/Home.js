import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import Landing from './Landing';
import Projects from './Projects';
import * as Scroll from 'react-scroll';
import Contact from './Contact';
import EmploymentHistory from './EmploymentHistory';

function Home(props){

  const [headerView, setHeaderView] = useState(null);
  const [mobileMenu, setMobileView] = useState(false);
  const [employmentHistory, setEmploymentHistory] = useState(true);

  let emHistory;

  if(employmentHistory){
    emHistory = <EmploymentHistory />
  } else {
      emHistory = null;
  }

  let Link       = Scroll.Link;
  let Element    = Scroll.Element;
  let Events     = Scroll.Events;
  let scroll     = Scroll.animateScroll;
  let scrollSpy  = Scroll.scrollSpy;

  const windowAdjust = () => {
    if(window.innerWidth >= 850 && window.innerWidth <= 1680){
        setHeaderView('hdrDesktop')
    } else if(window.innerWidth >= 1681){
        setHeaderView('hdrBig')
    } else{
        setHeaderView('hdrMobile')
    }
  };

  useEffect(() => {
    window.addEventListener("resize", windowAdjust);
    if(window.innerWidth >= 680 && window.innerWidth <= 1680){
        setHeaderView('hdrDesktop')
    } else if(window.innerWidth >= 1681){
        setHeaderView('hdrBig')
    } else{
        setHeaderView('hdrMobile')
    }
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });
 
    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });
 
    scrollSpy.update();
  })

  function scrollToTop() {
    scroll.scrollToTop();
  }
  function scrollToBottom() {
    scroll.scrollToBottom();
  }
  function handleSetActive(to) {
    
  }

  let header;
  let mbMenu;

  function changeHeaderView(){
    let x = document.getElementsByClassName('bars')[0];
    x.classList.toggle('change')
    let menu = document.getElementsByClassName('hide')[0];
    menu.classList.toggle('show')
  }

  if(headerView === 'hdrDesktop' || headerView === "hdrBig"){
    header = <div className='header'>
      <Link activeClass="active" to="landing" spy={true} smooth={true} duration={100} onSetActive={handleSetActive}>
        <h1>Home</h1>
      </Link>
      <Link activeClass="active" to="projects" spy={true} smooth={true} duration={100}>
        <h1>Projects</h1>
      </Link>
      <Link activeClass="active" to="contact" spy={true} smooth={true} duration={100}>
        <h1>Contact</h1>
      </Link>
    </div>
  } else {
    header = <div className='mobileHdr'>
      <div className='bars' onClick={changeHeaderView}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div className='menu hide'>
        <Link activeClass="active" to="landing" spy={true} smooth={true} duration={250} onSetActive={handleSetActive}>
          <h1>Home</h1>
        </Link>
        <Link activeClass="active" to="projects" spy={true} smooth={true} duration={250}>
          <h1>Projects</h1>
        </Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} duration={100}>
          <h1>Contact</h1>
        </Link>
      </div>
    </div>
  }
  return(
    <div>
      {emHistory}
      <div className={headerView}>
        {header}
      </div>
      <Element name="landing" className="element">
        <Landing/>  
      </Element>
      <Element name="projects" className="element">
        <Projects/>  
      </Element>
      <Element name="contact" className="element">
        <Contact setEmployment={() => setEmploymentHistory(true)}/>  
      </Element>
      <button onClick={scrollToTop} className="backToTop">Back to the top!</button>
    </div>
  )
}

export default connect()(Home)
