import React from "react";
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import resumeFile from './Resume.pdf'; // Adjust path if needed



import './styles.scss';

const Home = () => {

    const navigate = useNavigate();

    const handleNavigateToContactMePage = () => {

        navigate('/contact')
    }


    return (
        <section id="home" className="home">
            <div className="home__text-wrapper">
                <h1>
                    Hello, I'm Mohammad Hashim Raza
                    <br />
                    Application Development Manager (Frontend / Backend)
                </h1>                
            </div>
            <br/>
            <div className="home__text-wrapper">
                <h3>
                    17 years of IT industry experience, specializing in Java and Mendix
                    technologies. Proven track record in leading successful software
                    development projects, and managing high-performing teams.
                    Expertise in agile methodologies, delivering solutions that meet business goals, and
                    ensure quality and efficiency. Experienced in on-site client engagements
                    and handling critical project deliveries.
                </h3>
                </div>
            <Animate play duration={1.5} delay={1}
                start={{
                    transform: 'translateY(550px)'
                }}
                end={{
                    transform: 'translateX(0px)'
                }}

            >
                <div className="home__contact-me">
                    <button onClick={handleNavigateToContactMePage}> Hire me</button>
                    <a href={resumeFile}
                     download="Resume.pdf"
                     target="_blank"
                     rel="noopener noreferrer">  
                    <button> Download Resume</button> </a>
                    
                </div>
                <div className="home__social-media">
                    <a href={"https://www.linkedin.com/in/mohammad-hashim-raza-83bb0118/"}
                        className="home__social-media"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaLinkedin size={40} />
                    </a>
                    <a href={"https://www.facebook.com/mohammad.h.raza.3"}
                        className="home__social-media"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaFacebook size={40} />
                    </a>
                    <a href={"https://www.instagram.com/hashim25/"}
                        className="home__social-media"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaInstagram size={40} />
                    </a>
                </div>
            </Animate>

        </section>
    )
}
export default Home;