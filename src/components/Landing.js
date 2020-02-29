import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Parallax, Background } from 'react-parallax';

function Landing(){

    const [view, setView] = useState(null)
    
    let headshot = ({
        strength: null,
        contentClassName: view,
        image: 'headshot',
        width: null
    })
    
    const windowAdjust = () => {
        if(window.innerWidth >= 680 && window.innerWidth <= 1600){
            setView('desktop');
        } else if(window.innerWidth >= 1601){
            setView('bigView')
        } else{
            setView('mobile')
        }
      };

    useEffect(() => {
        window.addEventListener("resize", windowAdjust);
        if(window.innerWidth >= 680 && window.innerWidth <= 1600){
            setView('desktop');
        } else if(window.innerWidth >= 1601){
            setView('bigView')
        } else{
            setView('mobile')
        }
    }, []);

    if(view === 'desktop'){
        headshot.strength = 1000;
        headshot.width = window.innerWidth;
    } else if(view === 'bigView'){
        headshot.strength = 750;
        headshot.imageSize = {width: '100vw', height: 'auto', padding: `0`};
        headshot.width = window.innerWidth;
    } else {
        headshot.strength = 200;
        headshot.width = window.innerWidth;
    }

    const Div = styled.div`
        @keyframes appear{
            0%{width: 0vw; border-right: 2px solid teal;}
            100%{width: 100vw; border-right: none;}
        }
        @keyframes background{
            0%{background-color: none}
            100%{background-color: rgba(0,0,0,0.6)}
        }
        .headshotInfo{
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            .an1{
                width: 0vw;
                overflow: hidden;
                animation: appear 1s linear forwards .5s;
            }
            .an2{
                width: 0vw;
                overflow: hidden;
                animation: appear 1s linear forwards 1.5s;
            }
            .an3{
                width: 0vw;
                overflow: hidden;
                animation: appear 1s linear forwards 2.5s;
            }
            .an4{
                width: 0vw;
                overflow: hidden;
                animation: appear 1s linear forwards 3.5s;
            }
            h1{
                margin: 0;
                font-size: 8vw;
                color: white;
            }
            .teal{
                color: teal;
            }
            p{
                height: 5vw;
                margin: 0;
                color: white;
                margin-left: 10px;
                font-size: 4vw;
            }
        }
        .headshot{
            opacity: 0.8;
            padding: calc(${headshot.strength}px/2);
        }
        .desktop{
            animation: background 1s linear forwards;
            height: 100vh;
            padding-top: 21px;
            h1{
                font-size: 12vw;
            }
        }
        .mobile{
            animation: background 1s linear forwards;
            height: 100vh;
            padding-top: 21px;
            h1{
                font-size: 15vw;
            }
        }
        .bigView{
            animation: background 1s linear forwards;
            height: 100vh;
            margin: auto;
            padding-top: 21px;
        }
    `
    return(
        <Div>
            <Parallax blur={0} bgImage={require('../assets/images/headshot.jpg')} bgImageStyle={headshot.imageSize} bgImageAlt="headshot" strength={headshot.strength} bgClassName={headshot.image} contentClassName={headshot.contentClassName}>
                <div className="headshotInfo">
                    <h1 className="an1">I<span className="teal">'</span>M </h1> 
                    <h1 className="an2">RYAN</h1>
                    <h1 className="an3">MCLEAN<span className="teal">.</span></h1>
                    <p className='an4'>Front End Web Developer</p>
                </div>
            </Parallax>
        </Div>
    )
}

export default Landing;