import logo from '../../logo.svg';
import profile from '../../Group 3.png';
import arrow from '../../assets/Group 7.png';
import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Quote.scss'
import { InstagramOutlined, LinkedinOutlined, GithubOutlined, CloseOutlined } from '@ant-design/icons';

const Quote = () => {
    const [quotes, setQuotes] = useState([]);
    const url = "https://api.quotable.io/random"
    
    const getQuote = () => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => setQuotes(data));
    }

    useEffect(() => {
        getQuote();
    }, []);

    const getNewQuote = () => {
        getQuote();
    };

    console.log('quotes', quotes)
    
    return (
        <div className='quote'>
            <div className='container'>
                    <div className='quotes-bar'>
                        <div className='title'>
                            Feeling down? here's some quotes for you!
                        </div>
                        <div className='quotes'>
                            {quotes.content}
                        </div>
                        <div className='quoter'>
                            {quotes.author}
                        </div>
                        <button type='button' className='btn' onClick={() => {getNewQuote()}}>Need Another?</button>
                    </div>
            </div>
        </div>
    )
}
export default Quote;