import React from 'react';
import burgerLogo from '../../assets/Images/burger-logo.png'
import './Logo.css'

const logo = (props) => (
    <div className='Logo' style={{ height: props.height, margin: props.marginButtom }}>
        <img src={burgerLogo} alt='Logo' />
    </div >
)

export default logo;