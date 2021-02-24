import React from 'react';
import './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationsItems from '../NavigationItems/NavigationItems'

const toolbar = (props) => (
    <header className='Toolbar'>
        <div>MENU</div>
        <Logo height='80%' />
        <nav className='DesktopOnly'>
            <NavigationsItems />
        </nav>
    </header>
)

export default toolbar;