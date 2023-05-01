import logo from '../../logo.svg';
import profile from '../../Group 3.png';
import arrow from '../../assets/Group 7.png';
import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Contact.scss'
import { InstagramOutlined, LinkedinOutlined, GithubOutlined, CloseOutlined } from '@ant-design/icons';

const Contact = (props) => {
    console.log('ini contact kepanggil 1', props)
    console.log('ini isopen kepanggil 1', props.isOpen)
    console.log('ini contact kepanggil 1', props)
    // const { isOpen, setIsOpen } = this.props
    return (
        <div className='contact'>
            <div className='bg-wrapper'>
                <div className='container-fluid'>
                        <div className='page-title'>
                            <span className='title-1'>
                                Contact
                            </span>
                            <span className='close-tag'>
                                <button onClick={() => {props.setIsOpen(false)}}><CloseOutlined /></button>
                            </span>
                        </div>
                        <div className='row list-project'>
                            <div className='col'>
                                Email
                            </div>
                            <div className='col'>
                                : rifqizhaff@gmail.com
                            </div>
                        </div>
                        <div className='row list-project'>
                            <div className='col'>
                                Nomor HP
                            </div>
                            <div className='col'>
                                : +6281807019650
                            </div>
                        </div>
                        <div className='row list-project'>
                            <div className='col'>
                                Instagram
                            </div>
                            <div className='col'>
                                : rifqizhafar
                            </div>
                        </div>
                        <div className='row list-project'>
                            <div className='col'>
                                Linkedin
                            </div>
                            <div className='col'>
                                : <a href='https://www.linkedin.com/in/rifqizhafar/' target='_blank'>rifqizhafar</a>
                            </div>
                        </div>
                        <div className='row list-project'>
                            <div className='col'>
                                GitHub
                            </div>
                            <div className='col'>
                                : <a href='https://github.com/Rifqizhaff' target='_blank'>Rifqizhaff</a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;