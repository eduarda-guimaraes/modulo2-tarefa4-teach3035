import React from 'react';
import logo from '../assets/logo.png';
import '../styles/Header.css';

export function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    )
}