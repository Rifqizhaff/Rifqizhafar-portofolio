import logo from '../../logo.svg';
import profile from '../../Group 3.png';
import arrow from '../../assets/Group 7.png';
import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Projects.scss'
import portsmpn from './../../assets/port-smpn61.png'
import portsxc from './../../assets/port-sxc.png'
import portruparupa from './../../assets/port-ruparupa.png'
import { InstagramOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons';

const Projects = () => {

    return (
        <div className='projects'>
            <div className='container'>
                <div className='col'>
                    <div className='row page-title'>
                        My Past Project
                    </div>
                    <div className='row list-project'>
                        <div className='col-4'>
                        <div className='container'>
                                <div className='imej'>
                                    <img src={portsmpn}/>
                                </div>
                                <div className='cont'>
                                    <p className='project-title'>Web SMPN 61 Jakarta</p>
                                    <p className='project-desc'>Hired as a freelance web developer by SMPN 61 Jakarta. Taking the role as a UI Designer and Front-End Web Developer, working as a team to create a fully functioning school website using various programming languange, such as Javascript, Bootstrap, Laravel, etc.</p>
                                    <p className='project-skills'>Skills: Front-End Development · Troubleshooting · HTML · Software Development · MySQL · Laravel · SASS</p>
                                    <button type='button' className='btn btn-prj'><a href='https://smpn61jakarta.sch.id/' target='_blank'>Check</a></button>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='container'>
                                <div className='imej'>
                                    <img src={portsxc}/>
                                </div>
                                <div className='cont'>
                                    <p className='project-title'>StudentxCEOs League</p>
                                    <p className='project-desc'>Responsible for creating and developing the frontend of the StudentsxCEOs League's event website together with our team, using React JS and Tailwind CSS.</p>
                                    <p className='project-skills'>Skills: Front-End Development · Troubleshooting · HTML · Software Development · Cascading Style Sheets (CSS) · React.js · Tailwind CSS · SASS</p>
                                    <button type='button' className='btn btn-prj'><a href='https://sxcleague2022.vercel.app/' target='_blank'>Check</a></button>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='container'>
                                <div className='imej'>
                                    <img src={portruparupa}/>
                                </div>
                                <div className='cont'>
                                    <p className='project-title'>Ruparupa</p>
                                    <p className='project-desc'>Maintain and improve our JavaScript Library, Implementing part/feature of a web application or developing new ones, Implement solutions to complex and flexible business features and Design and implement products and platforms to provide highly efficient user experiences for all functionalities.</p>
                                    <p className='project-skills'>Skills: React.js · Next.js · Express.js · Front-End Development · Troubleshooting · Software Development · Cascading Style Sheets (CSS) · Tailwind CSS · HTML5 · JavaScript · Bootstrap</p>
                                    <button type='button' className='btn btn-prj'><a href='https://www.ruparupa.com/?utm_source=google&utm_medium=cpc&utm_campaign=Gads_RR&gclid=CjwKCAjwxr2iBhBJEiwAdXECw_7P1QrdM8dMEXuzmVhMG44XyZG_Daje0UFbX2cxR2fj3rg3X6W8RhoCZbQQAvD_BwE' target='_blank'>Check</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects;