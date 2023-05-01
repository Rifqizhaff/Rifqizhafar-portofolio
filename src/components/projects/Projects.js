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
                                    <p className='project-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <button type='button' className='btn btn-prj'>test</button>
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
                                    <p className='project-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <button type='button' className='btn btn-prj'>test</button>
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
                                    <p className='project-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <button type='button' className='btn btn-prj'>test</button>
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