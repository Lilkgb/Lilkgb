import React, {useState, useEffect} from 'react';
import 'aos/dist/aos.css';
import { Parallax, Background } from 'react-parallax';
import styled from 'styled-components';

function Contact(props){
    
    const [view, setView] = useState(null);

    let contact = ({
        strength: null,
        contentClassName: view,
        image: 'contact',
        width: null
    })

    const windowAdjust = () => {
        if(window.innerWidth >= 680 && window.innerWidth <= 1680){
            setView('desktop');
        } else if(window.innerWidth >= 1681){
            setView('bigView')
        } else{
            setView('mobile')
        }
      };

    useEffect(() => {
        window.addEventListener("resize", windowAdjust);
        if(window.innerWidth >= 680 && window.innerWidth <= 1680){
            setView('desktop');
        } else if(window.innerWidth >= 1681){
            setView('bigView')
        } else{
            setView('mobile')
        }
    }, []);

    if(view === 'desktop'){
        contact.strength = 1000;
        contact.width = window.innerWidth;
    } else if(view === 'bigView'){
        contact.strength = 1000;
        contact.width = window.innerWidth;
    } else {
        contact.strength = 200;
        contact.width = window.innerWidth;
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
            height: 100vh;
        }
        .bigView{
            animation: background 1s linear forwards;
            margin: auto;
            height: 100vh;
            padding-top: 60px;
        }
        .history{
            cursor: pointer;
            &:hover{
                color: teal;
                text-decoration: underline;
            }
        }
    `
    
    return(
        <Div>
        <Parallax blur={0} bgImage={require('../assets/images/lk.png')} bgImageStyle={contact.imageSize} bgImageAlt="coding picture" strength={contact.strength} bgClassName={contact.image} contentClassName={contact.contentClassName}>
            <div className="contact" data-aos="fade-down">
                <div className="info">
                    <input placeholder="email" style={{display: "none"}}/>
                    <h3>Email: <a href="mailto:rmcleandev@gmail.com">rmcleandev@gmail.com</a></h3>
                    <h3><a href="https://www.linkedin.com/in/ryan-mclean-developer/" target="_blank"><img src={require('../assets/images/linkedin.png')}/>LinkedIn</a></h3>
                    <h3><a href="https://github.com/RMcLeanDev" target="_blank"><img src={require('../assets/images/github.png')}/>Github</a></h3>
                </div>
            </div>
        </Parallax>
        </Div>
    )
    // <p className="history" onClick={props.setEmployment}>Employment History</p>
}

export default Contact;