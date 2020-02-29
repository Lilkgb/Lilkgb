import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Parallax, Background } from 'react-parallax';

function Projects(){

    const [view, setView] = useState(null)
    const [projectView, setProjectView] = useState(null)
    
    let aboutMe = ({
        strength: null,
        contentClassName: view,
        image: 'aboutMe',
        width: null
    })
    
    const windowAdjust = () => {
        if(window.innerWidth >= 850 && window.innerWidth <= 1680){
            setView('desktop');
            setProjectView('project prDesktop')
        } else if(window.innerWidth >= 1681){
            setView('bigView')
            setProjectView('project prBig')
        } else{
            setView('mobile')
            setProjectView('project prMobile')
        }
      };

    useEffect(() => {
        window.addEventListener("resize", windowAdjust);
        if(window.innerWidth >= 680 && window.innerWidth <= 1680){
            setView('desktop');
            setProjectView('project prDesktop')
        } else if(window.innerWidth >= 1681){
            setView('bigView')
            setProjectView('project prBig')
        } else{
            setView('mobile')
            setProjectView('project prMobile')
        }
    }, []);

    if(view === 'desktop'){
        aboutMe.strength = 750;
        aboutMe.width = window.innerWidth;
    } else if(view === 'bigView'){
        aboutMe.strength = 1250;
        aboutMe.width = window.innerWidth;
    } else {
        aboutMe.strength = 500;
        aboutMe.width = window.innerWidth;
    }

    const Div = styled.div`
        a{
            color: black;
            font-weight: bold;
            font-size: 25px;
            &:hover{
                color: teal;
            }
        }
        .desktop{
            animation: background 1s linear forwards;
            padding-top: 60px;
            height: 100vh;
        }
        .mobile{
            animation: background 1s linear forwards;
            padding-top: 60px;
        }
        .bigView{
            animation: background 1s linear forwards;
            margin: auto;
            height: 100vh;
            padding-top: 60px;
        }
        .githubLink{
            Color: white;
            font-size: 32px;
            &:hover{
                color: teal;
            }
        }
    `

    return (
        <Div>
            <Parallax blur={0} bgImage={require('../assets/images/aboutMe.JPG')} bgImageStyle={aboutMe.imageSize} bgImageAlt="coding picture" strength={aboutMe.strength} bgClassName={aboutMe.image} contentClassName={aboutMe.contentClassName}>
            <div className='projects'>
                <div className={projectView}>
                    <h3>facebook Clone</h3>
                    <a href="https://theclonedfacebook.firebaseapp.com/" target="_blank"><img src={require('../assets/images/facebook.png')}></img></a>
                    <div className='info'>
                        <p>Come make a facebook account on my facebook. This is a personal project all about cloning facebook and it's functionality in Angular. End target is to function just how facebook does. Users can create an account and go to their profile page and update their profile image and banner image and much more.</p>
                        <a href="https://theclonedfacebook.firebaseapp.com/" target="_blank">View Live Site</a>
                        <br/>
                        <a href="https://github.com/Lilkgb/Facebook-Angular" target="_blank">Github</a>
                    </div>
                </div>
                <div className={projectView}>
                    <h3>XO Cafe</h3>
                    <a href="https://uiwk4.netlify.com/" target="_blank"><img src={require('../assets/images/xocafelogo.png')}></img></a>
                    <div className='info'>
                        <p>This project is all about sass and styling and prototyping. We were given a customers information and the target was to protype a website for the customer and build it using sass and webpack.</p>
                        <a href="https://uiwk4.netlify.com/" target="_blank">View Live Site</a>
                        <br/>
                        <a href="https://github.com/Lilkgb/XO-Cafe" target="_blank">Github</a>
                    </div>
                </div>
                <div className={projectView}>
                    <h3>Icarus-Lives</h3>
                    <a href="https://www.icarus-lives.com/#/" target="_blank"><img src={require('../assets/images/earth.jpg')}></img></a>
                    <div className='info'>
                        <p>Please allow loading time if viewing this project. This is a ThreeJS simulation of the solar system in a React environment, using the ISS API to display the live coordinates of the Space Station. This was a group project I got to be apart of during my time at epicodus.</p>
                        <a href="https://www.icarus-lives.com/#/" target="_blank">View Live Site</a>
                        <br/>
                        <a href="https://github.com/Lilkgb/solar-simulator" target="_blank">Github</a>
                    </div>
                </div>
            </div>
            <h1 style={{color: "white", textAlign: "center"}}>Plus many more on my <a href="https://github.com/Lilkgb" target="_blank" className="githubLink">Github profile</a>.</h1>
            </Parallax>
        </Div>
    )
}

export default Projects;