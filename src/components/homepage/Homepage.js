import logo from '../../logo.svg';
import profile from '../../Group 3.png';
import arrow from '../../assets/Group 7.png';
import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Homepage.scss'
import { InstagramOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons';

const Homepage = () => {

    return (
        <div className='homepage'>
            <div className='container'>
                <div className='body'>
                    <div className='container'>
                        <div className='content'>
                            <div className='image-profile'>
                                <img src={profile} className="prof d-block w-40" alt="..." />
                                <img src={arrow} className="arr d-block" alt="..." />
                            </div>
                            <div className='text-over'>
                                <p className='title text-3xl font-bold underline'>Hello, I'm Rifqi! 👋</p>
                                <p className='desc'>Front-End Website Developer and noodle lovers based in Jakarta, Indonesia!</p>
                                <button type='button' className='btn-cst'>
                                    <a href='/projects'>
                                        See My Project!
                                    </a>
                                </button>
                                <div className='socmed'>
                                    <InstagramOutlined style={{ fontSize:'32px', margin:'0px 8px' }} />
                                    <LinkedinOutlined style={{ fontSize:'32px', margin:'0px 8px' }} />
                                    <GithubOutlined style={{ fontSize:'32px', margin:'0px 8px' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Homepage;