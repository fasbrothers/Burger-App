import React from 'react';
import './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationsItems from '../NavigationItems/NavigationItems'
import DrawToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = (props) => (
    <header className='Toolbar'>
        <DrawToggle clicked={props.drawerToggleClicked} />
        <Logo height='80%' />
        <nav className='DesktopOnly'>
            <NavigationsItems />
        </nav>
    </header>
)

export default toolbar;