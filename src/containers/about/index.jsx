import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import './styles.scss';

import { DiApple, DiAndroid } from 'react-icons/di';
import { FaDev, FaDatabase } from 'react-icons/fa';

const personalDetails = [
    {
        label: "Name",
        value: "Mohammad Hashim Raza",
    },
    {
        label: "Address",
        value: "Pune, Maharashtra - 412307",
    },
    {
        label: "Email",
        value: "hashim2512@gmail.com",
    },
    {
        label: "Contact No",
        value: "+91-8588002101",
    },
];

const jobSummary = 'Project Manager frontend and backend';
const jobDetails = 'I intend to establish myself as Software Development Project Manager Expert through along time commitment, contributing to the companys growth and in turn ensuring personal growth within the organization. I believe that my technical, functional and communication skills will enable me in facing the challenging career ahead.';

const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}

            />

            <div className="about__content">

                <div className="about__content__personalWrapper">
                    <Animate play duration={1.5} delay={1}
                        start={{
                            transform: 'translateX(-900px)'
                        }}
                        end={{
                            transform: 'translateX(20px)'
                        }}
                    >
                        <h3>
                            {jobSummary}
                        </h3>
                        <p>
                            
                            
                             {jobDetails}
                        </p>
                    </Animate>
                    <Animate play duration={1.5} delay={1}
                        start={{
                            transform: 'translateX(500px)'
                        }}
                        end={{
                            transform: 'translateX(20px)'
                        }}
                    >
                        <h3 className="personalInformationHeaderText">
                            Personal Information
                        </h3>
                        <ul>
                            {personalDetails.map((item, i) => (
                                <li key={i}>
                                    <span className="title">
                                        {item.label}
                                    </span>
                                    <span className="value">
                                        {item.value}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__servicesWrapper">

                    <Animate play duration={1.5} delay={1}
                        start={{
                            transform: 'translateX(600px)'
                        }}
                        end={{
                            transform: 'translateX(20px)'
                        }}
                    >

                        <div className="about__content__servicesWrapper__innerContent">
                            <div><FaDev size={50} color="var(--yellow-theme-main-color)" /></div>
                            <div><FaDatabase size={50} color="var(--yellow-theme-main-color)" /></div>
                            <div><DiAndroid size={50} color="var(--yellow-theme-main-color)" /></div>
                            <div><DiApple size={50} color="var(--yellow-theme-main-color)" /></div>

                        </div>
                    </Animate>


                </div>

            </div>
        </section>
    )
}
export default About;