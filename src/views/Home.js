import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import '../Styles/Home.css'

const Home = () => {
    return (
        <div className="home">
            <div className="about">
                <h2>Hi, My name is Oscar and ...</h2>
                <div className="prompt">
                    <p>Soy una persona la cual cree que en cada experiencia se aprende algo nuevo, tal como tu ahora aprendiste que tengo una pagina web y me gustaría que aprendieras de ella tambien, por lo que puedes darle un vistazo, adelante!</p>
                    <InstagramIcon/>
                    <LinkedInIcon/>
                    <GitHubIcon/>
                    <FacebookIcon/>
                </div>
            </div>
            <div className="skills">
                <h1> Skills </h1>
                <ol className="list">
                    <li>
                        <h1>Front-end</h1>
                        <span>ReactJS - HTML - CSS - React Native - Bootstrap</span>
                    </li>
                    <li>
                        <h1>Back-end</h1>
                        <span>Python - SQL - Oracle</span>
                    </li>
                    <li>
                        <h1>Programming Languages</h1>
                        <span>Javascript - C#</span>
                    </li>
                </ol>
            </div>
        </div>
        )
} 

export default Home