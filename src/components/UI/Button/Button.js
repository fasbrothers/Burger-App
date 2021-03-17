import React from 'react';
import './Button.css'

const button = (props) => (
    <span className='Button' >
        <button disabled={props.disabled} className={props.className} onClick={props.clicked}>{props.children}</button>
    </span>
)

export default button;